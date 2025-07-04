import React from 'react'
import UserData from './data.json'

let GitUsersData = () =>{
    

    return(

        <div className="GitUsersDataContainer">
            {
                UserData.map((users) =>{
                    return(

                        <article className="GitUserContainer">
                            <h3>{users.login}</h3>
                            <img src={users.avatar_url} alt="" />
                            <button>
                                <a href={users.html_url}>View more</a>
                            </button>
                        </article>

                    )
                })
            }

        </div>

    )

}

export default GitUsersData;