import { QueryResult, QueryData, QueryError } from '@supabase/supabase-js'
import supabase from '../supabase';

const countriesWithCitiesQuery = supabase
  .from("countries")
  .select(`
    id,
    name,
    cities (
      id,
      name
    )
  `);
type CountriesWithCities = QueryData<typeof countriesWithCitiesQuery>;

const { data, error } = await countriesWithCitiesQuery;
if (error) throw error;
const countriesWithCities: CountriesWithCities = data;

export default countriesWithCities;