import React from 'react';
import { Country } from '../../../../typedef';
import { useDispatch } from 'react-redux';
import { setSelectedCountry } from '../../services/actions';

type Props = {
	countries: Country[];
};

export const CountriesSelector = ({ countries }: Props) => {
	const dispatch = useDispatch();

	const onSelectCountry = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const country = event.target.value;
		localStorage.country = country;
		dispatch(setSelectedCountry({ selectedCountry: country }));
	};

	return (
		<>
			<select onChange={onSelectCountry} className='mb-3 d-block m-auto p-2'>
				{countries.map((country) => (
					<option
						key={country.name}
						selected={localStorage.country === country.name}
						value={country.name}
					>
						{country.name}
					</option>
				))}
			</select>
		</>
	);
};
