import { Icon, IconProps, Path, useColor } from "@artsy/palette-mobile"

// TODO: - Remove these icons when palette-Mobile is stable as they have already been added there in newer unstable versions

export const MoneyCircleIcon = ({ fill, ...restProps }: IconProps) => {
  const color = useColor()
  return (
    <Icon {...restProps} viewBox="0 0 19 19">
      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill={color(fill)}
        fillRule="nonzero"
      />

      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill="white"
        fillRule="nonzero"
        scale={0.935}
        translateX={0.6}
        translateY={0.55}
      />

      <Path
        d="M6.61674 7.94784H5.4045V3.31148H6.07797C6.68471 3.31328 7.2661 3.55809 7.69514 3.99245C8.12417 4.4268 8.36599 5.01539 8.36777 5.62966C8.36777 5.73816 8.41034 5.84221 8.48612 5.91893C8.5619 5.99565 8.66468 6.03875 8.77185 6.03875C8.87902 6.03875 8.9818 5.99565 9.05758 5.91893C9.13336 5.84221 9.17593 5.73816 9.17593 5.62966C9.17593 4.79785 8.84954 4.0001 8.26856 3.41192C7.68758 2.82373 6.8996 2.4933 6.07797 2.4933H5.4045V1.26602C5.4045 1.15753 5.36193 1.05347 5.28615 0.976753C5.21037 0.900034 5.10759 0.856934 5.00042 0.856934C4.89325 0.856934 4.79047 0.900034 4.71469 0.976753C4.63891 1.05347 4.59634 1.15753 4.59634 1.26602V2.4933H3.65348C2.83185 2.4933 2.04387 2.82373 1.46289 3.41192C0.881912 4.0001 0.555521 4.79785 0.555521 5.62966C0.555521 6.46148 0.881912 7.25922 1.46289 7.8474C2.04387 8.43559 2.83185 8.76602 3.65348 8.76602H4.59634V13.4024H3.38409C2.77735 13.4006 2.19596 13.1558 1.76692 12.7214C1.33789 12.2871 1.09607 11.6985 1.0943 11.0842C1.0943 10.9757 1.05172 10.8717 0.975943 10.7949C0.900163 10.7182 0.797384 10.6751 0.690214 10.6751C0.583045 10.6751 0.480266 10.7182 0.404486 10.7949C0.328706 10.8717 0.286133 10.9757 0.286133 11.0842C0.286133 11.4961 0.366264 11.9039 0.521951 12.2844C0.677638 12.665 0.905832 13.0107 1.1935 13.302C1.77448 13.8901 2.56246 14.2206 3.38409 14.2206H4.59634V15.4478C4.59634 15.5563 4.63891 15.6604 4.71469 15.7371C4.79047 15.8138 4.89325 15.8569 5.00042 15.8569C5.10759 15.8569 5.21037 15.8138 5.28615 15.7371C5.36193 15.6604 5.4045 15.5563 5.4045 15.4478V14.2206H6.61674C7.43837 14.2206 8.22635 13.8901 8.80733 13.302C9.38831 12.7138 9.7147 11.916 9.7147 11.0842C9.7147 10.2524 9.38831 9.45464 8.80733 8.86646C8.22635 8.27828 7.43837 7.94784 6.61674 7.94784ZM3.65348 7.94784C3.04619 7.94784 2.46377 7.70361 2.03435 7.26886C1.60493 6.83412 1.36368 6.24448 1.36368 5.62966C1.36368 5.01484 1.60493 4.4252 2.03435 3.99046C2.46377 3.55572 3.04619 3.31148 3.65348 3.31148H4.59634V7.94784H3.65348ZM6.61674 13.4024H5.4045V8.76602H6.61674C7.22404 8.76602 7.80645 9.01026 8.23587 9.445C8.66529 9.87975 8.90654 10.4694 8.90654 11.0842C8.90654 11.699 8.66529 12.2887 8.23587 12.7234C7.80645 13.1582 7.22404 13.4024 6.61674 13.4024Z"
        fill={color(fill)}
        fillRule="nonzero"
        scale={0.55}
        translateX={5.5}
        translateY={3.5}
      />
    </Icon>
  )
}

export const LightStarIcon = ({ fill, ...restProps }: IconProps) => {
  const color = useColor()
  return (
    <Icon {...restProps} viewBox="0 0 19 19">
      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill={color(fill)}
        fillRule="nonzero"
      />

      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill="white"
        fillRule="nonzero"
        scale={0.935}
        translateX={0.6}
        translateY={0.55}
      />

      <Path
        d="M18.8963 22.0474C18.7045 22.0451 18.5168 21.991 18.3528 21.8906L14.7955 19.6105C14.7706 19.593 14.7411 19.5836 14.7108 19.5836C14.6805 19.5836 14.651 19.593 14.6261 19.6105L11.3158 21.7267C11.1275 21.8509 10.9058 21.9134 10.681 21.9057C10.4561 21.8981 10.2391 21.8206 10.0595 21.684C9.87009 21.5469 9.72669 21.3548 9.64848 21.1332C9.57027 20.9116 9.56099 20.6712 9.62187 20.4442L10.5747 16.6606C10.5835 16.6246 10.5822 16.587 10.571 16.5517C10.5598 16.5165 10.5391 16.4851 10.5112 16.4611L7.32091 13.7748C7.16036 13.6407 7.04352 13.4609 6.98561 13.2588C6.9277 13.0568 6.9314 12.8418 6.99623 12.6418C7.05916 12.4456 7.17884 12.2729 7.33985 12.1459C7.50086 12.0189 7.69584 11.9435 7.89968 11.9293L12.071 11.6585C12.1028 11.6549 12.133 11.6423 12.158 11.6221C12.1829 11.602 12.2017 11.5751 12.2122 11.5445L13.765 7.59707C13.8397 7.40532 13.9699 7.24074 14.1386 7.12474C14.3073 7.00874 14.5067 6.9467 14.7108 6.9467C14.9149 6.9467 15.1143 7.00874 15.283 7.12474C15.4517 7.24074 15.5819 7.40532 15.6566 7.59707L17.2094 11.5445C17.2198 11.5751 17.2387 11.602 17.2636 11.6221C17.2886 11.6423 17.3188 11.6549 17.3505 11.6585L21.5219 11.9293C21.7258 11.9435 21.9207 12.0189 22.0817 12.1459C22.2428 12.2729 22.3624 12.4456 22.4254 12.6418C22.4902 12.8418 22.4939 13.0568 22.436 13.2588C22.3781 13.4609 22.2612 13.6407 22.1007 13.7748L18.9104 16.4611C18.8825 16.4851 18.8618 16.5165 18.8506 16.5517C18.8394 16.587 18.8381 16.6246 18.8469 16.6606L19.8774 20.7434C19.9299 20.9473 19.9202 21.1625 19.8497 21.3608C19.7792 21.5591 19.6511 21.7313 19.4821 21.855C19.3117 21.9796 19.1067 22.0469 18.8963 22.0474ZM14.7108 18.7341C14.901 18.7319 15.0876 18.7864 15.2472 18.8908L18.8116 21.1638C18.8379 21.1819 18.8692 21.191 18.901 21.1897C18.9327 21.1884 18.9633 21.1768 18.988 21.1567C19.0192 21.1336 19.0426 21.1014 19.0552 21.0645C19.0678 21.0276 19.069 20.9877 19.0586 20.9501L18.0281 16.8672C17.9798 16.676 17.986 16.4749 18.0459 16.2871C18.1058 16.0992 18.2171 15.9323 18.3669 15.8055L21.5572 13.1192C21.5876 13.0957 21.6095 13.0627 21.6197 13.0255C21.6299 12.9882 21.6277 12.9486 21.6137 12.9126C21.6061 12.8779 21.5875 12.8466 21.5608 12.8235C21.5341 12.8003 21.5006 12.7866 21.4654 12.7844L17.3011 12.5136C17.1092 12.4981 16.9252 12.4294 16.7695 12.3149C16.6138 12.2005 16.4924 12.0449 16.4189 11.8652L14.8661 7.91058C14.8559 7.87699 14.8354 7.84758 14.8074 7.82668C14.7794 7.80578 14.7456 7.7945 14.7108 7.7945C14.676 7.7945 14.6421 7.80578 14.6142 7.82668C14.5862 7.84758 14.5657 7.87699 14.5555 7.91058L13.0027 11.8652C12.9292 12.0449 12.8078 12.2005 12.6521 12.3149C12.4964 12.4294 12.3124 12.4981 12.1205 12.5136L7.95614 12.7844C7.921 12.7866 7.88754 12.8003 7.8608 12.8235C7.83406 12.8466 7.8155 12.8779 7.80792 12.9126C7.79384 12.9486 7.79173 12.9882 7.80192 13.0255C7.81211 13.0627 7.83403 13.0957 7.86439 13.1192L11.0547 15.8055C11.2045 15.9323 11.3158 16.0992 11.3757 16.2871C11.4356 16.4749 11.4418 16.676 11.3935 16.8672L10.4406 20.6579C10.4239 20.7187 10.4257 20.7832 10.4458 20.843C10.466 20.9027 10.5035 20.955 10.5535 20.9928C10.5979 21.0265 10.6512 21.0459 10.7066 21.0484C10.7621 21.051 10.8169 21.0366 10.8641 21.0071L14.1744 18.8908C14.334 18.7864 14.5206 18.7319 14.7108 18.7341Z"
        fill={color(fill)}
        scale={0.55}
        translateX={0.3}
        translateY={0.3}
      />
    </Icon>
  )
}

export const WorldGlobeCircleIcon = ({ fill, ...restProps }: IconProps) => {
  const color = useColor()
  return (
    <Icon {...restProps} viewBox="0 0 19 19">
      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill={color(fill)}
        fillRule="nonzero"
      />

      <Path
        d="M16.1114 8.19C16.1114 12.4371 12.6684 15.88 8.4214 15.88C4.17436 15.88 0.731445 12.4371 0.731445 8.19C0.731445 3.94293 4.17436 0.5 8.4214 0.5C12.6684 0.5 16.1114 3.94293 16.1114 8.19Z"
        fill="white"
        fillRule="nonzero"
        scale={0.935}
        translateX={0.6}
        translateY={0.55}
      />

      <Path
        d="M8.79765 1.0158H8.79759C7.25864 1.0158 5.75416 1.4632 4.47441 2.30154C3.19464 3.13989 2.19701 4.33157 1.60786 5.72604C1.01869 7.12051 0.864524 8.65501 1.16489 10.1354C1.46526 11.6159 2.20663 12.9756 3.29508 14.0427C4.38352 15.1098 5.77014 15.8364 7.27954 16.1307C8.78894 16.4251 10.3535 16.274 11.7754 15.6966C13.1973 15.1192 14.4128 14.1413 15.268 12.8864C16.1233 11.6315 16.5799 10.156 16.5799 8.64656V8.64649C16.5776 6.62304 15.7567 4.68331 14.2976 3.25285C12.8386 1.82242 10.8606 1.01802 8.79765 1.0158ZM8.62309 15.4857L8.6227 15.4852C7.07543 13.8518 6.16142 11.5065 6.07715 9.00459H11.5181C11.4376 11.5064 10.5198 13.8517 8.97247 15.4852L8.97209 15.4857C8.95008 15.5094 8.92321 15.5284 8.89314 15.5414C8.86308 15.5545 8.83052 15.5612 8.79757 15.5612C8.76463 15.5612 8.73209 15.5545 8.70203 15.5414C8.67197 15.5284 8.64509 15.5094 8.62309 15.4857ZM8.97248 1.80787C10.5198 3.44137 11.4376 5.78666 11.5181 8.28853H6.07706C6.15761 5.78666 7.07538 3.44137 8.6227 1.80787L8.62307 1.80747C8.64508 1.78378 8.67196 1.76478 8.70202 1.75175C8.73209 1.73873 8.76464 1.73199 8.79759 1.73199C8.83053 1.73199 8.86308 1.73873 8.89315 1.75175C8.92322 1.76478 8.9501 1.78378 8.97211 1.80748L8.97248 1.80787ZM12.2441 8.28853C12.1705 5.85519 11.349 3.55074 9.94567 1.82424C11.5167 2.08055 12.9549 2.84999 14.0252 4.00947C15.1145 5.18954 15.7556 6.70073 15.8419 8.28853H12.2441ZM5.34868 8.28853H1.75096C1.83725 6.70073 2.47832 5.18954 3.56765 4.00947C4.638 2.84996 6.07619 2.08051 7.64731 1.82422C6.2438 3.55269 5.41935 5.85504 5.34868 8.28853ZM5.35106 9.00459C5.42465 11.4379 6.24614 13.7424 7.6495 15.4689C6.07843 15.2126 4.64029 14.4431 3.56997 13.2836C2.48064 12.1036 1.83957 10.5924 1.75328 9.00459H5.35106ZM12.2465 9.00459H15.8442C15.7579 10.5924 15.1169 12.1036 14.0275 13.2836C12.9572 14.4432 11.519 15.2126 9.94787 15.4689C11.3514 13.7404 12.1758 11.4381 12.2465 9.00459Z"
        fill={color(fill)}
        scale={0.6}
        translateX={3}
        translateY={3}
      />
    </Icon>
  )
}