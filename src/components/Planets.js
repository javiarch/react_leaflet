import React from "react";
import { useQuery, gql } from "@apollo/client";
import { List, ListItem } from "./shared/List";
import { Badge } from "./shared/Badge";


const PLANETS = gql`
  {
    landmark {
        id
        name
	type
	location
    }
  }
`;

const Planets = ({ newPlanets }) => {
  	const { loading, error, data } = useQuery(PLANETS);

	const renderPlanets = (landmark) => {
		return landmark.map(({ id, name, type }) => (
      		<ListItem key={id}>
        		{name} <Badge>{type}</Badge>
      		</ListItem>
    		));
	}

  	if (loading) return <p>Loading ...</p>;
  	if (error) return <p>Error :(</p>;
  
  /*return(
	<List>
		{data.landmark.map(({id, name, type, location}) => (	
  		<ListItem key={id}>
      		
      			{id} | {name} <Badge>{type}</Badge> {location.type}
      		
    		</ListItem>
  		))
		}
	</List>
	)*/
    	return <List>{renderPlanets(newPlanets || data.landmark)}</List>;
};

export default Planets;
