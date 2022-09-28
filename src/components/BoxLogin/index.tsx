import logo from "assets/images/logoperfumaria.png";
import * as S from "./style";

const BoxLogin = () => {
	return (
		<S.BoxLogin>
			<S.BoxLoginLogo>
				<S.BoxLoginLogoImage src={logo} alt="Logo" />
			</S.BoxLoginLogo>
			<S.BoxLoginForm>
				<input type="text" placeholder="E-mail" />
				<input type="password" placeholder="Senha" />
			</S.BoxLoginForm>
		</S.BoxLogin>
	);
};

export default BoxLogin;