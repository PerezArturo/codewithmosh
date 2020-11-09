import React, { useState, useEffect } from "react";
import axios from "axios";
import TeamCard from "./common/teamCard";

const LeagueDetails = ({ match }) => {
  const {
    params: { id },
  } = match;
  const [league, setLeague] = useState(null);
  const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${id}`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      console.log(result.data);
      setLeague(result.data);
    };
    fetchData();
  }, [id]);
  const { teams } = league;
  return (
    <>
      <h1>League {id}</h1>
      {teams && teams.map((team) => <TeamCard team={team} key={team.idTeam} />)}
    </>
  );
};

export default LeagueDetails;
