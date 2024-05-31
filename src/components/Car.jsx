import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

 function Model(props) {
  const { nodes, materials } = useGLTF('/models/McLaren.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.001, 0, 0.511]} rotation={[-Math.PI, 0, -Math.PI]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id31.geometry}
          material={materials['73']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id33.geometry}
          material={materials['75']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id35.geometry}
          material={materials['77']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id37.geometry}
          material={materials['79']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id39.geometry}
          material={materials['81']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id41.geometry}
          material={materials['83']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id43.geometry}
          material={materials['85']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_id45.geometry}
          material={materials['87']}
          position={[92.294, -66.154, 164.25]}
          rotation={[-Math.PI / 2, 0, -2.359]}
          scale={1.253}
        />
      </group>
    </group>
  )
}

export default Model;

useGLTF.preload('/models/McLaren.glb')