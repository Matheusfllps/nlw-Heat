import axios from "axios"
/**
 * REECEBER code(string)
 * RECUPERAR o access_token no github
 * VERIFICAR  se o usuário exite no db
 * ----- SIM = gerar um token
 * ----- NÃO = criar no db, gerar um token
 * RETORNAR o token com as infos do user
 */

class AuthenticateUserService{
    async execute(code: string) {
        const url= "https://github.com/login/oauth/access_token"

        const response = await axios.post(url,null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,

            },
            headers:{
                "Accept": "aplication/json"
            }
        })
        return response.data
    }
}

export {AuthenticateUserService}