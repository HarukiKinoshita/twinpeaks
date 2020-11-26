import { partners2020 } from '~/contents/partners2020.json'

export const state = () => ({
  partnerList: partners2020
})

export const getters = {
  findPartnersByCategory: state => (category) => {
    return Object.values(state.partnerList).filter(a => a.category === category)
  },
  showAllPartners: state => (category) => {
    return Object.values(state.partnerList)
  }
}
