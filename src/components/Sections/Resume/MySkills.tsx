import { technologys } from '../../../data/skilles';
export default function MySkills() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto">
                    <div className="">
                        {technologys.map((item, index) => (
                            <div className="p-2 w-full">
                                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                                    <item.icon className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"  />

                                    {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                                    <div className="flex-grow">
                                        <h2 className="text-gray-900 title-font font-medium">{item.title}</h2>
                                        <p className="text-gray-500">{item.description}</p>
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
