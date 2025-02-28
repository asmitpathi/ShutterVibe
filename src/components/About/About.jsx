import React from 'react'

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/images/5.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Photography: A Passion Beyond Just Pictures
                        </h2>
                        <p className="mt-6 text-gray-600">
                        Photography is more than just capturing images—it is a way of seeing the world, telling stories, and preserving memories. It is an art form that allows individuals to express emotions, creativity, and perspectives in a unique and powerful way.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Through the lens, photography transforms fleeting moments into timeless narratives, bridging the gap between reality and imagination with every click.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About