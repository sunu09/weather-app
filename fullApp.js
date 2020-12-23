import React, {useState} from 'react';
const ap1 = {
    key: "",
    base: ""
}

function App() {

        const [query, setQuery] = useState("");
        const [weather, setWeather] = useState({}); Body

        const search = evt => {
            if (evt.key ==="Enter") {
                fetch(`${api.base}w (method) Body.json(): Promise<any> = ${api.key}`)
                .then(res => res.json())
                .then(result => {
                 setWeather(result);
                 setQuery('');
                 console.log(result);
                });
            }
        }

    const dateBuilder = (d)=> {
        let months = ["January", "February", "March", "April", "May", "June", "July", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
    }

    return(
        <div className="app">
            <main>
              <div className="search-box">
                <input
                type="text"
                className="search-bar"
                placeholder="Search..." 
                
                 onChange={e => setQuerry(e.target.value)} 
                value={querry}
                onKeyPress={search}          
                />
              </div>
                {(typeof weather.main !="undefined")? (
                <div>
                    <div className="location-box">
                    <div className="location">{weather.name}, {weather.sys.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                </div>
                <div className="weather-box">  
                 <div className="temp">
                 {Math.round(weather.main.temp)} degree c
                </div>
                <div className="weather">{weather.weather[0].main}</div>
                </div>
                </div>
                ) : ('')}
             </main>
        </div>
    );
}

export default App;