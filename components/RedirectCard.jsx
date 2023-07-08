const RedirectCard = (redirect) => {
    redirect = redirect.redirect

    const getStyles = (statusCode) => {
        switch (statusCode) {
            case 404:
                return 'bg-red-700 text-white '
            case 200:
                return 'bg-green-700 text-white '
            case 500:
                return 'bg-red-700 text-white '
            case 301:
                return 'bg-blue-700 text-white '
            case 400:
                return 'bg-red-700 text-white '
            default:
                return 'bg-blue-700 text-white '
        }
    }

    return (
        <>
            <div className="flex justify-evenly items-center gap-4 flex-col p-1 min-w-[326px] max-w-[326px] rounded-md border-2">
                <h1 className={`text-2xl font-semibold w-full text-center rounded-md ${getStyles(redirect.status)}`}>{redirect.status}</h1>
                <p className="text-sm text-gray-500 p-0 m-0">{redirect.statusText}</p>
                <a target="_blank" rel="noopener norefferer" href={redirect.url} className="text-sm text-blue-500 text-center rounded-md hover:underline decoration-dotted underline-offset-4 w-full overflow-x-scroll">{redirect.url}</a>
            </div>
        </>
    );
}

export default RedirectCard;