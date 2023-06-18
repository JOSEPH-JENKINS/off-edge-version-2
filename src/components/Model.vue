<script>
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  Box3,
  Vector3,
  Vector2,
  AmbientLight,
  DirectionalLight,
  Object3D
} from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default {
  name: 'Model',
  data() {
    return {
      color: 0x0000ff
    }
  },
  methods: {
    updateRenderer(renderer, scene, camera) {
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.render(scene, camera)
    },
    onResizeListener(renderer, scene, camera, model) {
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()

        if (window.innerWidth < 700) {
          model.scale.set(0.5, 0.5, 1)
        } else {
          model.scale.set(0.75, 0.75, 1)
        }

        this.updateRenderer(renderer, scene, camera)
      })
    },
    setInitialSize(model) {
      if (window.innerWidth < 700) {
        model.scale.set(0.5, 0.5, 1)
      } else {
        model.scale.set(0.75, 0.75, 1)
      }
    }
  },
  mounted() {
    const scene = new Scene()
    const renderer = new WebGLRenderer({ alpha: true })

    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

    // Set the camera position
    camera.position.z = 5
    scene.add(camera)

    const canvas___container = document.querySelector('.model___div')

    this.updateRenderer(renderer, scene, camera)

    renderer.setClearColor(0x000000, 0)

    canvas___container.appendChild(renderer.domElement)

    const ambient___light = new AmbientLight(0xffffff, 0.5)
    scene.add(ambient___light)

    const directional___light = new DirectionalLight(0xffffff, 1)
    directional___light.position.set(1.25, 1.36, 3)
    scene.add(directional___light)

    const loader = new GLTFLoader()
    loader.load(
      '/model.gltf',
      (gltf) => {
        const model = gltf.scene

        const bounding___box = new Box3().setFromObject(model)
        const center = bounding___box.getCenter(new Vector3())

        const parent = new Object3D()
        scene.add(parent)

        this.onResizeListener(renderer, scene, camera, parent)
        model.position.set(-center.x, -center.y, -center.z)
        // parent.position.set(-center.x, -center.y, center.z)
        this.setInitialSize(parent)
        parent.add(model)

        model.traverse((child) => {
          if (child.isMesh) {
            child.material.color.set(this.color)
          }
        })

        // scene.add(model)
        camera.position.z = 5

        const animate = () => {
          requestAnimationFrame(animate)

          parent.rotation.y += 0.025

          renderer.render(scene, camera)
        }

        animate()
      },
      undefined,
      (error) => {
        console.error('error')
      }
    )
  }
}
</script>

<template>
  <div class="model___div"></div>
</template>
