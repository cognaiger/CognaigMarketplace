import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'm0zymznv',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'sk4RZWhjZ9KGsLAsOIbg3mh6B1uF1m7TzGBkLYxW4lRpWN6w4B2mVJT5FhOy0paSXq51diw21Xc6nmKwCPjALFg59ZHjuSoalvSKe7WiHWPelgBXMeOwvtgrWoUeILd2mfdsS8b2jMLyRqe2VKdLCDQMZSZAdpLB0fWaj9A4JR4XYfPjXM1B',
  useCdn: false,
})