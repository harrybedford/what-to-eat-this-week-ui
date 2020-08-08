const foodSorter = (data) => {
  const rearrangedArray = []
  data.inSeason.map((food) => {
    const foodAdapted = `${food.charAt(0).toUpperCase()}${food.slice(1)}`
    if (data.newInSeason.indexOf(food) >= 0) return rearrangedArray.push(`${foodAdapted} - new in season`)
    if (data.lastChanceFor.indexOf(food) >= 0) return rearrangedArray.push(`${foodAdapted} - last chance`)
    if (data.makeTheMostOf.indexOf(food) >= 0) return rearrangedArray.push(`${foodAdapted} - make the most of`)
    return rearrangedArray.push(`${foodAdapted}`)
  })
  return rearrangedArray
}

export default foodSorter
