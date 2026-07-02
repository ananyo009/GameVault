import React from 'react'
import Button from '../components/Button.jsx'
import Card from '../components/Card.jsx'
import { useLoaderData, useSearchParams } from 'react-router'

const Home = () => {
  const games = useLoaderData();
  const { data } = games;
  const results = data?.results || [];

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;

    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('page', newPage.toString());
    setSearchParams(nextParams);
  };
    
    
    // console.log(results)

    return (
      <div>
        <div className="p-5">
          <h1 className="text-5xl mb-5">Explore the MetaVerse</h1>
          <p className="text-lg w-[50%] ">
            Discover your next obsession from our meticulously curated database
            of the world's most legendary title{" "}
          </p>
        </div>
        <div>
          <Button />
        </div>
        <div className="p-5 flex flex-wrap gap-10 justify-evenly">
          {results.map((item) => {
            return <Card key={item.id} data={item} />;
          })}
        </div>
        <div className="flex justify-center gap-5 mb-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 active:scale-95 cursor-pointer"
          >
            Prev
          </button>
          <p className="bg-gray-200 text-gray-800 px-4 py-2 rounded">{currentPage}</p>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-blue-500 text-white px-4 py-2 rounded active:scale-95 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    );
}

export default Home