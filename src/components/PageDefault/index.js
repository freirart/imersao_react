import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
    background: #ededed;
    color: var(--black);
    flex: 1;
    padding-top: 50px;
    padding-left: 10%;
    padding-right: 10%;
`;

function PageDefault({children}){
	return(
		<>
			<Menu />
				<Main>
					{children}
				</Main>
			<Footer />
		</>
	);
}

export default PageDefault;