import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import type { PropsWithChildren } from 'react'

type IconProps = PropsWithChildren<{
    name: string
}>

const Icons = ({name} : IconProps) => {
  switch(name) {
    case "circle":
        return <AntDesign name='check' size={32} color='blue' />
        break
    case 'wrong':
        return <AntDesign name='close' size={32} color='red' />
        break
    default:
        return <Entypo name="dot-single" size={32} color="black" />

  }
}

export default Icons

const styles = StyleSheet.create({})