import { technologys } from '../../../data/skilles';
export default function MySkills() {
    return (
        <>
            <section className="text-gray-600 body-font col-span-1">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        {technologys.map((item, index) => (
                            <div className="p-2 w-full col-span-1" key={index}>
                                <div className="h-full flex items-center p-4 rounded-md bg-white shadow-sm hover:shadow transition-all duration-75 ease-in-out button group">
                                    <item.icon className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4 group-hover:text-white transition-all duration-75 ease-in-out" />

                                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 group-hover:text-white transition-all duration-75 ease-in-out title-font font-medium">{item.title}</h2>
                                        <p className="text-gray-500 group-hover:text-white transition-all duration-75 ease-in-out">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
};
