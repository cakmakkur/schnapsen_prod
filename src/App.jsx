import { useRef, useState } from "react";
import ConfigsContainer from "./1-Containers/ConfigsContainer";
import MainPlayContainer from "./1-Containers/MainPlayContainer";
import SettingsContainer from "./1-Containers/SettingsContainer";
import Panel from "./1-Containers/Panel";
import ScoreboardContainer from "./1-Containers/ScoreboardContainer";
import Tutorial from "./1-Containers/Tutorial";

import { PointsContextProvider } from "./GlobalVariables/PointsContext";
import { CardsContextProvider } from "./GlobalVariables/CardsContext";

export default function App() {
  const mainPlayContainerRef = useRef();
  const [showSettings, setShowSettings] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);

  return (
    <CardsContextProvider>
      <PointsContextProvider>
        <div className="mainDiv">
          <MainPlayContainer ref={mainPlayContainerRef} />
          <Panel>
            {showSettings ? (
              <SettingsContainer setShowSettings={setShowSettings} />
            ) : (
              <>
                <ScoreboardContainer />
                <ConfigsContainer
                  setShowSettings={setShowSettings}
                  mainPlayContainerRef={mainPlayContainerRef}
                  setShowTutorial={setShowTutorial}
                />
              </>
            )}
          </Panel>
          {showTutorial && <Tutorial setShowTutorial={setShowTutorial} />}
        </div>
      </PointsContextProvider>
    </CardsContextProvider>
  );
}
