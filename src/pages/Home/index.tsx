import Menu from "components/Menu";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";

const Home = () => {
	return (
		<S.Home>
			<Menu />
			<S.HomeContent>
				<header>
					<S.HomeHeaderDetails>
						<div>
							<S.HomeHeaderDetailsLogo>Perfumaria Padron</S.HomeHeaderDetailsLogo>
							<S.HomeHeaderDetailsDate>
								Aqui ficará a data
							</S.HomeHeaderDetailsDate>
						</div>
						<S.HomeHeaderDetailsSearch>
							<Search />
							<input type="text" placeholder="Procurar perfume" />
						</S.HomeHeaderDetailsSearch>
					</S.HomeHeaderDetails>
				</header>
				<div>
					<S.HomeProductTitle>
						<b>Perfume</b>
					</S.HomeProductTitle>
					<S.HomeProductList>
						<p>Lista de produtos aqui</p>
					</S.HomeProductList>
				</div>
			</S.HomeContent>
			<aside>
				<p>Detalhes dos pedidos aqui</p>
			</aside>
		</S.Home>
	);
};

export default Home;