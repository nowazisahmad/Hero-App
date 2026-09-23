export type TApp = {
  image: string
  title: string
  companyName: string
  id: number
  description: string
  size: number
  reviews: string
  ratingAvg: number
  downloads: string
  ratings: TRating[]
}

export type TRating = {
  name: string
  count: number
}