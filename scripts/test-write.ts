import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as dotenv from 'dotenv'

const envVars = dotenv.parse(fs.readFileSync('.env.local'))
for (const [k, v] of Object.entries(envVars)) process.env[k] = v

const token = process.env.SANITY_WRITE_TOKEN
if (!token) { console.error('SANITY_WRITE_TOKEN is not set'); process.exit(1) }
console.log('1. SANITY_WRITE_TOKEN: present (' + token.length + ' chars)')

const client = createClient({
  projectId: 'kk1qghkq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

async function main() {
  const identity = await client.fetch('identity()')
  console.log('2. identity():', JSON.stringify(identity))

  const result = await client.createOrReplace({
    _id: 'seedTest',
    _type: 'siteSettings',
    heroHeadline: 'Seed test',
  })
  console.log('3. createOrReplace result:', JSON.stringify(result))
  console.log('Sanity write access is working.')
}

main().catch((err) => {
  console.error('statusCode:', err.statusCode)
  console.error('message:', err.message)
  console.error('responseBody:', err.responseBody)
  process.exit(1)
})
