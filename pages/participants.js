import Participants from '../views/Participants'

export default Participants

export const getServerSideProps = async () => {
  const response = await fetch(
    'https://bmo-2021-default-rtdb.europe-west1.firebasedatabase.app/users.json'
  ).then(response => response.json())

  const totalArray = []

  for (let key in response) {
    totalArray.push({
      p1: response[key].userData.p1,
      p2: response[key].userData.p2,
      p3: response[key].userData.p3,
      p4: response[key].userData.p4,
    })
  }



  const usersArray = []
  function totalSum(p1,p2,p3,p4){
        return p1+p2+p3+p4;
      }
  for (let key in response) {
      let p1 = response[key].userData.p1,
          p2 = response[key].userData.p2,
          p3 = response[key].userData.p3,
          p4 = response[key].userData.p4;
      let total = totalSum(Number(p1),Number(p2),Number(p3),Number(p4));

      if (total <=40 && total >=31) {

      }
        else if(total <=30 && total >= 27){

        }
        else{

      }

    usersArray.push({
      rank: response[key].userData.contestants,
      nickname: response[key].userData.nickname,
      contestants: response[key].userData.contestants,
      country: response[key].userData.country,
      p1: response[key].userData.p1,
      p2: response[key].userData.p2 ,
      p3: response[key].userData.p3,
      p4: response[key].userData.p4,
      total : total,
      award : total,


    })
  }

  return {
    props: {
      users: usersArray
    }
  }
}
