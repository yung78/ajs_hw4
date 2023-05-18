export default function sortHero(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
