//import {defineConfig} from 'sanity'
import { deskTool } from 'sanity/desk'
import { defineConfig } from "@sanity-typed/types";
//import { visionTool } from '@sanity/vision'
import type { InferSchemaValues } from "@sanity-typed/types";
import { picture } from './schemas/picture';
import { picture_section } from './schemas/picture_section';
import { preview } from './schemas/preview';
import { project } from './schemas/project';
import { quote } from './schemas/quote';
import { section } from './schemas/section';
import { three_cols } from './schemas/three_cols';
import { website } from './schemas/website';

export const config = defineConfig({
  name: 'default',
  title: 'Amy Jackson Portfolio',

  projectId: 'qyyz7qna',
  dataset: 'production',

  plugins: [
		deskTool(), 
		//visionTool()
	],

  schema: {
    types: [
			picture,
			picture_section,
			preview,
			project,
			quote,
			section,
			three_cols,
			website
		],
  },
})

export type SanityValues = InferSchemaValues<typeof config>;










//import {defineConfig} from 'sanity'
//import {deskTool} from 'sanity/desk'
//import {visionTool} from '@sanity/vision'
//import {schemaTypes} from './schemas'
//
//export default defineConfig({
//  name: 'default',
//  title: 'Amy Jackson Portfolio',
//
//  projectId: 'qyyz7qna',
//  dataset: 'production',
//
//  plugins: [deskTool(), visionTool()],
//
//  schema: {
//    types: schemaTypes,
//  },
//})
//
//export function Hello() {
//	console.log("Hello World!")
//}
