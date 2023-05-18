export default function healthCount(data) {
  if (data.health > 50) {
    return 'healthy';
  }
  if (data.health < 15) {
    return 'critical';
  }
  return 'wounded';
}
