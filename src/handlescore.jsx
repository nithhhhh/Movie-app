const handleAddScore = () => {
  const newTime = parseTime(newEntry.time);
  const newLeaderboard = [...leaderboardData, { ...newEntry, position: leaderboardData.length + 1, time}]
}
