const Participants = ({ users }) => {
  return (
    <>
      <div className="table-wrapper">
        <div className="heading">Participants List page</div>

        <div className="table-row-headings">
          <div className="rank">Rank</div>
          <div className="contestant">Contestant</div>
          <div className="country">Country</div>
          <div className="p1">P1</div>
          <div className="p2">P2</div>
          <div className="p3">P3</div>
          <div className="p4">P4</div>
          <div className="total">Total</div>
          <div className="award">Award</div>

        </div>
        {users.map(element => {
          return (
            <div className="table-row" key={element.nickname}>
              <div className="rank">{element.rank}</div>
              <div className="contestant">{element.contestants}</div>
              <div className="country">{element.country}</div>
              <div className="p1">{element.p1}</div>
              <div className="p2">{element.p2}</div>
              <div className="p3">{element.p3}</div>
              <div className="p4">{element.p4}</div>
              <div className="total">{element.total}</div>
              <div className="award">{element.award}</div>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default Participants
