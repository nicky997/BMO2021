import Participants from '../views/Participants'

const gold_medal = 'GOLD MEDAL'
const silver_medal = 'SILVER MEDAL'
const bronze_medal = 'BRONZE MEDAL'

const getAward = points => {
  if (points > 30 && points <= 40) {
    return gold_medal
  } else if (points > 26 && points < 30) {
    return silver_medal
  } else {
    return bronze_medal
  }
}

export default Participants

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://bmo-2021-default-rtdb.europe-west1.firebasedatabase.app/users.json'
  ).then(response => response.json())

  const usersArray = []

  for (let key in response) {
    const { p1, p2, p3, p4 } = response[key].userData

    const total = +p1 + +p2 + +p3 + +p4

    usersArray.push({
      nickname: response[key].userData.nickname,
      contestant: response[key].userData.contestant,
      country: response[key].userData.country,
      p1,
      p2,
      p3,
      p4,
      total,
      award: getAward(total)
    })
  }

  const sortedUsersArray = usersArray.sort((a, b) => a.total - b.total)

  return {
    props: {
      users: sortedUsersArray
    }
  }
}
