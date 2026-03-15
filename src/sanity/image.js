import { createImageUrlBuilder } from '@sanity/image-url'

import { client } from './client' // see example client config

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}