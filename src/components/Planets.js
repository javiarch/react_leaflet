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
	const alertName = () => {
    		alert(' John Doe ');
  	};

	//const [shoot] = () => { window.console.log('ejecutando select') }
	//const onItemClick = ({landmark, e}) => { console.log(landmark)};
		

	const renderPlanets = (landmark) => {
		//let boundItemClick = this.onItemClick.bind(this, landmark);		
		

		return landmark.map(({ id, name, type }) => (
      		<ListItem key={id} onClick={alertName}>
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

//con class components no me funciono
/*class Planets extends React.Component {
	constructor(props) {
    	super(props)
	this.state = {
		newPlanets: "Arno"
	}
  	}

	render(){
		window.console.log('this.state ->', this.state);
		
		return (
			<List>
				<renderPlanets />
			</List>			
		);
	}	
}

//COMO RECIBO landmark ACÁ???? como prop??
class renderPlanets extends React.Component {
  constructor(props) {
    	super(props)	
  }
  
  render() {
    	return (
		<p>'renderPlanets'</p>
	);    
  }
}*/

export default Planets;
