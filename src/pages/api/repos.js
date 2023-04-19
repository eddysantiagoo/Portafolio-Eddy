import eddyConfig from "../../../eddy.config";

export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/' + eddyConfig.githubName + '/repos', {
        headers: {
            Authorization: 'token '+ eddyConfig.githubKey
        }
    })).json();

    try {
        res.send({
            success: true,
            data: [..._]
        })
    } catch {
        res.status(500).send({
            success: false,
            data: []
        });
    }
}