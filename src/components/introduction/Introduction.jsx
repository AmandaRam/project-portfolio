const Introducton = () => {
    return (
        <div className="container mx-auto py-40 px-5">
            <img
                className="block w-40 rounded-full mx-auto mb-8 md:hidden"
                src="https://picsum.photos/400"
                alt="Picture of me"
            />
            <h2 className="text-lg font-semibold">Hi, I'm Amanda Rambert Hammarström</h2>
            <h1 className="text-blue-700 font-bold text-4xl mb-6">Frontend Developer</h1>
            <div className="flex items-center gap-4">
                <img
                    className="hidden w-40 rounded-full md:block"
                    src="https://picsum.photos/400"
                    alt="Picture of me"
                />
                <p>After completing my studies in international purchasing and gaining experience as a product developer in the fashion industry, I decided to change my career and joined the Web Developer Bootcamp at Technigo.</p>
            </div>
        </div>
    )
}

export default Introducton;