import Chart from '../../components/chart';
import { DashboardWrapper, ChartsArea } from './styled';
import movieData from '../../movie-data.json';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [balances, setBalances] = useState<number[]>([]);
  const [movies, setMovies] = useState<string[]>([]);

  const [balancesDates, setBalancesDates] = useState<
    {
      name: string;
      data: [number, number][];
    }[]
  >([]);

  useEffect(() => {
    const balanceList: number[] = [];
    const moviesList: string[] = [];
    const balanceListDates: {
      name: string;
      data: [number, number][];
    }[] = [];

    movieData.movies.forEach((movie) => {
      let total = 0;
      const data: [number, number][] = [];
      movie.balances.forEach((balance) => {
        total += balance.balance;
        data.push([new Date(balance.date).getTime(), balance.balance]);
      });

      balanceListDates.push({
        name: movie.name,
        data,
      });

      balanceList.push(Number(total.toFixed(2)));
      moviesList.push(movie.name);
    });

    setBalances(balanceList);
    setMovies(moviesList);
    setBalancesDates(balanceListDates);
  }, []);

  return (
    <DashboardWrapper>
      <header>
        <h1>Dashboard</h1>
        <h2>Desafio Técnico Frontend</h2>
      </header>

      <ChartsArea>
        <Chart
          title="Bilheteria Arrecadada (em US$ milhões)"
          data={balances}
          categories={movies}
          chartType="bar"
          dataName="Quantidade"
        />
        <Chart
          title="Bilheteria (Levantamento periódico)"
          dataScatter={balancesDates}
          chartType="scatter"
          dataName="Quantidade"
        />
        <div></div>
      </ChartsArea>
    </DashboardWrapper>
  );
}

export default Dashboard;
