

class MarvelService {

    _apiBase = "https://gateway.marvel.com:443/v1/public/"
    _apiKey = "apikey=a160ed6090e1e29a8ce15ef5eaa7141c"

    getResource = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json()
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}/characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._transformCharacter)
    }

    getCharacterByID = async (id) => {
        const res = await this.getResource(`${this._apiBase}/characters/${id}?${this._apiKey}`)
        return this._transformCharacter(res.data.results[0])
    }

    _transformCharacter = (char) => {

        function checkDescription() {
            if (char.description === '') {
                return 'No description'
            } else if (char.description.length >= 220) {
                return char.description.slice(0, 220) + '...'
            }
            else {
                return char.description
            }
        }

        return {
            id: char.id,
            name: char.name,
            description: checkDescription(),
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }
}


export default MarvelService;