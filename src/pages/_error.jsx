import clquConfig from "../../eddy.config";

export default function Error({ statusCode }) {
    return <div className="flex flex-col items-center justify-center py-10">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">{statusCode}</h1>
        <p className="text-2xl text-gray-500 dark:text-gray-500">{clquConfig.errors?.[statusCode] || "Algo esta mal..."}</p>
    </div>;
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}