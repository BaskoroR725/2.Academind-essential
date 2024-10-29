import CoreConcept from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
    return(
        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItems) =>( 
              <CoreConcept key={conceptItems.title} {...conceptItems} />))}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description= {CORE_CONCEPTS[0].description}
              image = {CORE_CONCEPTS[0].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[1].title}
              description= {CORE_CONCEPTS[1].description}
              image = {CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
          </ul>
        </section>
    )
}