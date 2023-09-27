export function totalBirdCount(birdsPerDay) 
{
  return birdsPerDay.reduce((total, count) => total + count, 0);
    throw new Error('Please implement the totalBirdCount function');
}

export function birdsInWeek(birdsPerDay, week) 
{
  return totalBirdCount(birdsPerDay.slice((week - 1) * 7, (week * 7)));
    throw new Error('Please implement the birdsInWeek function');
}

export function fixBirdCountLog(birdsPerDay) 
{
  for (let i = 0; i < birdsPerDay.length; i+= 2){birdsPerDay[i]++};
  return birdsPerDay;
    throw new Error('Please implement the fixBirdCountLog function');
 }