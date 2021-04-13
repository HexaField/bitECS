import { $componentMap, $deferredComponentRemovals } from './Component.js'
import { $queryMap, $queries } from './Query.js'
import { $entityEnabled, $entityMasks, $removedEntities, $deferredEntityRemovals } from './Entity.js'

export const $size = Symbol('size')
export const $bitflag = Symbol('bitflag')

export const createWorld = (size = 100000) => {
  const world = {}
  
  world[$size] = size

  world[$entityEnabled] = new Uint8Array(world[$size])
  world[$entityMasks] = [new Uint32Array(size)]
  world[$removedEntities] = []

  world[$bitflag] = 1

  world[$componentMap] = new Map()

  world[$queryMap] = new Map()
  world[$queries] = new Set()

  world[$deferredComponentRemovals] = []
  world[$deferredEntityRemovals] = []

  return world
}