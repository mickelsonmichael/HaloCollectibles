import React from "react"
import achievements from "./achievements.json"
import AchievementCount from "../../common/AchievementCount"
import Achievements from "../../common/Achievements"
export default class ODST extends React.Component {
    render(){
        return <div>
                    <h2>
                        Halo 3: ODST
                        <AchievementCount categories={
                            achievements
                        }
                        className="float-right"
                        />
                    </h2>
                    <Achievements categories={achievements}
                    
                    />

            </div>
    }
}