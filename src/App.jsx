import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import { EXAMPLES } from './data';
import TabButton from './TabButton';

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
}

  return (
    <>
      <Header />
      <main>
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
        
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
            onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please Select a Topic</p>}
          {selectedTopic && <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre> 
            </div>
          }
        </section>
      </main>
    </>
  );
}

export default App;