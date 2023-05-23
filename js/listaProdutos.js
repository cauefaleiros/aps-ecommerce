const listaProdutos = [
    {
        id: 1,
        nome: "Console Xbox Series X - Microsoft",
        preco: 3999.99,
        thumbnail: "../assets/images/produtos/thumbnail/xbox-series-x.webp",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/series_x_img1.webp",
            "../assets/images/produtos/paginaDoProduto/series_x_img2.webp",
            "../assets/images/produtos/paginaDoProduto/series_x_img3.webp"
        ],
        descricao: "Espaço de 1Tb e roda a resolução 4k a 120fps <br>Apresentamos o Xbox Series X, nosso console mais rápido e poderoso de todos os tempos. Jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no Xbox Series X. No coração do Series X está a Xbox Velocity Architecture, que combina um SSD personalizado e software integrado para diminuir significativamente os tempos de carregamento dentro e fora do jogo. Troque simultaneamente entre vários jogos em um instante com o Quick Resume. Explore novos mundos e desfrute da ação como nunca antes com 12 teraflops incomparáveis de poder de processamento gráfico. Desfrute de jogos 4K a até 120 quadros por segundo, som 3D avançado especial e muito mais. Comece com uma biblioteca instantânea de mais de 100 jogos de alta qualidade, incluindo todos os novos títulos do Xbox Game Studios no mesmo dia do seu lançamento como o Halo Infinite, com o Xbox Game Pass Ultimate (assinatura vendida separadamente) *",
        tags: [
            "xbox",
            "console"
        ]
    }, // <-- virgula. Sempre que for adicionar um produto, verifique se tem uma virgula no final do penúltimo item para não dar erro no código
    {
        id: 2,
        nome: "Console Xbox Series S - Microsoft",
        preco: 2199.99,
        thumbnail: "../assets/images/produtos/thumbnail/xbox-series-s.webp",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/series_s_img1.jpg",
            "https://m.media-amazon.com/images/I/61XZh+AsS6L._AC_SX679_.jpg",
            "../assets/images/produtos/paginaDoProduto/series_s_img3.jpg"
        ],
        descricao: "Xbox Series s, nosso Xbox menor e mais elegante de todos os tempos. Com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o Xbox Series S oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital. Experimente uma velocidade e um desempenho de próxima geração com a arquitetura Xbox Velocity alimentada por um ssd personalizado e um software integrado. Imagens meramente ilustrativas. Todas as informações divulgadas são de responsabilidade do Fabricante/Fornecedor.",
        tags: [
            "xbox",
            "console"
        ]
    },
    {
        id: 3,
        nome: "Console Playstation 5 Digital 825GB + Jogo God Of War: Ragnarok - SONY",
        preco: 4299.99,
        thumbnail: "../assets/images/produtos/thumbnail/ps5-ragnarok.webp",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/ps5_gow_img1.jpg",
            "../assets/images/produtos/paginaDoProduto/ps5_gow_img2.jpg",
            "../assets/images/produtos/paginaDoProduto/ps5_gow_img3.jpg"
        ],
        descricao: " RECURSOS DO JOGO NO PLAYSTATION®5: - Sinta sua jornada pelos reinos nórdicos, possibilitada pela resposta tátil imersiva e pela funcionalidade dos gatilhos adaptáveis. - Aproveite o áudio 3D multidirecional; ouça inimigos se aproximando de qualquer direção.¹ - Aproveite os belos mundos pelos quais você viaja, trazidos à vida por uma direção de arte precisa e atenção aos detalhes. - Alterne entre a resolução total 4K em até 30 quadros por segundo ou a resolução dinâmica aumentada para 4K em até 60 quadros por segundo.² ¹Áudio 3D com fones de ouvido estéreo (analógico ou USB) ²O jogo em resolução 4K requer uma TV ou monitor compatível com 4k.",
        tags: [
            "playstation",
            "console"
        ]
    },
    {
        id: 4,
        nome: "Console Nintendo Switch Oled - Edição Especial The Legend Of Zelda: Tears Of The Kingdom",
        preco: 2899.99,
        thumbnail: "../assets/images/produtos/thumbnail/switch-zelda-edition.avif",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/switch_zelda_img1.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_zelda_img2.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_zelda_img3.jpg"
        ],
        descricao: "Conheça o novo membro vibrante da família Nintendo Switch Jogue em casa na TV ou em qualquer lugar com uma tela OLED vibrante de 7 polegadas com o console Nintendo Switch – Modelo OLED. Além de uma nova tela com cores vivas e contraste nítido, o Nintendo Switch – Modelo OLED inclui um amplo acessório de suporte ajustável que permite ângulos de visualização mais confortáveis, uma base com porta para cabo LAN para o modo TV (cabo LAN vendido separadamente), 64 GB de armazenamento interno* e áudio aprimorado nos modos portátil e semiportátil usando os alto-falantes do console.",
        tags: [
            "nintendo",
            "console"
        ]
    },
    {
        id: 5,
        nome: "Console Nintendo Switch Vermelho e Azul 32GB",
        preco: 2199.9,
        thumbnail: "../assets/images/produtos/thumbnail/switch-vermelho-azul.jpg",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/switch_va_img1.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_va_img2.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_va_img3.jpg"
        ],
        descricao: "A Nintendo anunciou um modelo atualizado do console que difere do modelo original na longevidade da bateria. Enquanto o modelo original da Nintendo Switch tem uma bateria que dura entre 2.5 a 6.5 horas, o modelo atualizado tem uma bateria que dura entre 4.5 a 9 horas. É uma diferença considerável. No caso específico de The Legend of Zelda: Breath of the Wild, a bateria da Switch original permite jogar durante 3 horas. A bateria do novo modelo permite jogar durante 5.5 horas. Itens Inclusos: 01 - Console Nintendo Switch 01 - Nintendo Switch dock 01 - Joy-Con Azul Neon (Esquerdo) e Joy-Con Vermelho Neon (Direito) 01 - Dois acessórios de pulso Joy-Con 01 - Grip Joy-Con 01 - Cabo HDMI 01 - Adaptador de Força Nintendo Switch.",
        tags: [
            "nintendo",
            "console"
        ]
    },
    {
        id: 6,
        nome: "Console Nintendo Cinza 32GB",
        preco: 2199.9,
        thumbnail: "../assets/images/produtos/thumbnail/switch-cinza.jpg",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/switch_g_img1.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_g_img2.jpg",
            "../assets/images/produtos/paginaDoProduto/switch_g_img3.jpg"
        ],
        descricao: "A Nintendo anunciou um modelo atualizado do console que difere do modelo original na longevidade da bateria. Enquanto o modelo original da Nintendo Switch tem uma bateria que dura entre 2.5 a 6.5 horas, o modelo atualizado tem uma bateria que dura entre 4.5 a 9 horas. É uma diferença considerável. No caso específico de The Legend of Zelda: Breath of the Wild, a bateria da Switch original permite jogar durante 3 horas. A bateria do novo modelo permite jogar durante 5.5 horas. Itens Inclusos: 01 - Console Nintendo Switch 01 - Nintendo Switch dock 01 - Joy-Con Azul Neon (Esquerdo) e Joy-Con Vermelho Neon (Direito) 01 - Dois acessórios de pulso Joy-Con 01 - Grip Joy-Con 01 - Cabo HDMI 01 - Adaptador de Força Nintendo Switch.",
        tags: [
            "nintendo",
            "console"
        ]
    },
    {
        id: 7,
        nome: "Console Playstation 5 Digital 825GB",
        preco: 3799.99,
        thumbnail: "../assets/images/produtos/thumbnail/ps5-digital.webp",
        imgs: [
            "../assets/images/produtos/paginaDoProduto/ps5_digital_img1.jpg",
            "../assets/images/produtos/paginaDoProduto/ps5_digital_img2.jpg",
            "../assets/images/produtos/paginaDoProduto/ps5_digital_img3.jpg"
        ],
        descricao: "Desfrute do carregamento extremamente rápido com o SSD de altíssima velocidade, uma imersão mais profunda com suporte a feedback tátil, gatilhos adaptáveis. e áudio 3D, além de uma geração inédita de jogos incríveis para PlayStation. Domine o poder de uma CPU e GPU personalizadas e o SSD com E/S integradas que redefinem as regras do que o console PlayStation pode fazer.Conecte seu PlayStation VR ao console PS5 para curtir jogos compatíveis com o PS VR. Para configurar seu PS VR com o console PS5, você precisará da PlayStation Camera para PS4 e do adaptador para PlayStation Camera.",
        tags: [
            "playstation",
            "console"
        ]
    },
    {
        id: 8,
        nome: "Console PlayStation 4 Pro 1TB - Sony",
        preco: 2499.9,
        thumbnail: "https://cdn.awsli.com.br/2500x2500/138/138431/produto/98106694/caf521a401.jpg",
        imgs: [
            "https://cdn.awsli.com.br/2500x2500/138/138431/produto/98106694/93b5fcef01-sduwsv.jpg",
            "https://cdn.awsli.com.br/2500x2500/138/138431/produto/98106694/9cd73863a8.jpg",
            "https://cdn.awsli.com.br/2500x2500/138/138431/produto/98106694/dbc28b3ca1-1-nitfvd.jpg"
        ],
        descricao: "O PlayStation 4 Pro conta com um poderoso processamento gráfico, sendo o primeiro video game da empresa Sony capaz de rodar jogos na resolução 4K. O console possui a GPU (4.20 TFLOPS, AMD Radeon™) superior a todas as outras lançadas anteriormente, deixando a taxa de frames muito mais estável. O design do PS4 Pro é muito mais robusto e maior que os outros modelos, sendo mais parecido com a versão slim do que com a Fat.",
        tags: [
            "playstation",
            "console"
        ]
    },
    {
        id: 9,
        nome: "PlayStation®4 + God of War Ragnarök",
        preco: 2749,
        thumbnail: "https://m.media-amazon.com/images/I/61uxHT2J1sL._AC_SX679_.jpg",
        imgs: [
            "https://m.media-amazon.com/images/I/61Jd6PKi6SL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/819bwWHNMJL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61nannVFryL._AC_SX679_.jpg"
        ],
        descricao: "PlayStation®4 - Jogos incríveis e entretenimiento sem fim. - Os jogos mais incríveis estão no PS4, com 1TB de armazenamento. - O console PS4 oferece excelente poder de jogabilidade, entretenimento incrível tecnologia HDR vibrante. Inclui: - Inclui: Console PlayStation®4 Controle sem fio DualShock®4 Disco Blu-ray de God Of War Ragnarok PS4 Headset mono Cabo HDMI Cabo de alimentaçao CA Cabo USB Materiais impressosControle sem fio DualShock®4 Disco Blu-ray de God Of War Ragnarok PS4 Headset mono Cabo HDMI Cabo de alimentaçao CA Cabo USB Materiais impressos",
        tags: [
            "playstation",
            "console"
        ]
    },
    {
        id: 10,
        nome: "Controle DualSense - Branco",
        preco: 448,
        thumbnail: "https://m.media-amazon.com/images/I/41dxVVHRNWL._AC_SX425_.jpg",
        imgs: [
            "https://m.media-amazon.com/images/I/51mft2+JpsL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/618ClXd-btL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71pP5V5e-1L._AC_SX679_.jpg"
        ],
        descricao: "O controle sem fio DualSense oferece resposta tátil, efeitos de gatilho adaptáveis e um microfone embutido, tudo em um design icônico e confortável. Para problemas defeituosos envie um e-mail para \"faleconosco@solutions2gobr.com\" com as seguintes informações: modelo do controlador e número da NF. A central também pode ser contatada em https://suporte.playstation.com/LiveChatRequest?lang=pt_BR das 12h às 22h. Neste caso você deve informar o PSN ID e o e-mail utilizado em sua conta PSN. Números de telefone: 11 3351 7090: Cidade de São Paulo 0800 724 8310: outras cidades (das 10h00 às 20h00)",
        tags: [
            "playstation",
            "controle",
            "acessorio"
        ]
    },
    {
        id: 11,
        nome: "Controle sem Fio Xbox - Carbon Black",
        preco: 389,
        thumbnail: "https://m.media-amazon.com/images/I/61h4J5s0pBL.__AC_SY300_SX300_QL70_ML2_.jpg",
        imgs: [
            "https://m.media-amazon.com/images/I/71YhIeycQLL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/61dPtkQMJtL._AC_SX425_.jpg",
            "https://m.media-amazon.com/images/I/71WHp+b6flL._AC_SX425_.jpg"
        ],
        descricao: "controle para Xbox Series X Xbox Series S - Xbox One X sem Fio Carbon Black Preto Experimente o design modernizado do Controle Sem Fio para Xbx Series X/S Carbon Black na cor preta, com superfícies esculpidas e geometria refinada para maior conforto durante o jogo. Fique no alvo com o grip texturizado e um direcional híbrido. Capture e compartilhe conteúdo perfeitamente com um botão Compartilhar dedicado. Conecte-se, jogue e alterne rapidamente entre dispositivos, incluindo Xbox Series X, Xbox Series S, Xbox One, PC com Windows 10, telefones e tablets compatíveis. (Compatível com dispositivos selecionados e versões de sistema operacional. Algumas funcionalidades não são suportadas no Android via Bluetooth. Mapeamento de botões disponível por meio do aplicativo Acessórios do Xbox para Xbox Series X, Xbox Series S, Xbox One e Windows 10).",
        tags: [
            "xbox",
            "controle",
            "acessorio"
        ]
    },
    {
        id: 12,
        nome: "Controle Nintendo Switch, Joy-Con",
        preco: 349,
        thumbnail: "https://m.media-amazon.com/images/I/61GpzSF3glL._AC_SX679_.jpg",
        imgs: [
            "https://m.media-amazon.com/images/I/71Eeyub6v6L._AC_SX679_.jpg",
            "https://s.zst.com.br/cms-assets/2021/07/joy-con-separado.jpg",
            "https://images.tcdn.com.br/img/img_prod/1042771/controle_nintendo_switch_joy_con_l_r_neon_red_neon_blue_vermelho_azul_switch_1679_1_553f4631420f33c03eb0d972029f8840.jpg"
        ],
        descricao: "Apresentamos o controle Joy-Con. Esses controles são usados com o console Nintendo Switch e possibilitam maneiras criativas de jogar. O versátil Joy-Con oferece várias formas surpreendentes de diversão aos jogadores. Dois Joy-Con podem ser usados independentemente, um em cada mão, ou juntos, encaixados em um suporte para Joy-Con, funcionando como um só controle. Também é possível encaixá-los no console para jogar no modo portátil, ou compartilhá-los com amigos e desfrutar de uma ação para dois jogadores em jogos compatíveis. Cada Joy-Con conta com todos os botões de ação e pode servir como um controle individual. Cada um deles inclui um acelerômetro e giroscópio, possibilitando controle de movimento na direita e na esquerda.",
        tags: [
            "nintendo",
            "controle",
            "acessorio"
        ]
    },
    {
        id: 13,
        nome: "PlayStation VR2 + Horizon Call of the Mountain",
        preco: 4399.99,
        thumbnail: "../assets/images/produtos/thumbnail/playstation-vr2-horizon.jpg",
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_898299-MLB54319006069_032023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_709963-MLB54318937027_032023-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_651616-MLB69257450350_052023-O.webp"
        ],
        descricao: "Com o Firewall Zero Hour Bundle do Controlador PlayStation VR da Sony , você experimentará um jogo de tiro baseado em esquadrões estratégicos imersivos em realidade virtual. O Sony PlayStation VR Aim Controller oferece rastreamento de movimento preciso, design ergonômico e controles intuitivos para fotografia rápida, fácil e precisa. Além disso, está equipado com feedback de vibração, para que você possa sentir a ação. Por favor, note que o headset PlayStation VR e a PlayStation Camera são necessários.",
        tags: [
            "playstation",
            "acessorio"
        ]
    },
    {
        id: 14,
        nome: "Nintendo Switch Pro Controller - HD Rumble",
        preco: 399.99,
        thumbnail: "../assets/images/produtos/thumbnail/nintendo-pro-controller.jpg",
        imgs: [
            "https://m.media-amazon.com/images/I/7166--AaJIL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/81GutZPdWiL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71CbYcn-kZL._AC_SX679_.jpg"
        ],
        descricao: "A Nova Forma: Completamente Wireless Controller Joga Qualquer Jogo No Wii U !. A Aderência Estilo Ergonómico Permite O Conforto Jogador Durante Fps Jogos E Corridas De Saltos Complexos. Linha Adicional De Botões De Ombro Expande Sobre Opções De Controle No Jogo. Leve Suas Sessões De Jogos Até Um Entalhe Com O Nintendo Switch Pro Controller. Inclui Controles De Movimento, Hd Rumble, Built-In Funcionalidade Amiibo, E Muito Mais.",
        tags: [
            "nintendo",
            "controle",
            "acessorio"
        ]
    },
    {
        id: 15,
        nome: "Controle Nintendo Switch Joy-Con - Splatoon",
        preco: 349.99,
        thumbnail: "../assets/images/produtos/thumbnail/joy-con.webp",
        imgs: [
            "https://m.media-amazon.com/images/I/61nJt1+yhVL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/61Eq8qjyyJL._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/717S4EEjD9L._AC_SX679_.jpg"
        ],
        descricao: "Apresentamos o controle Joy-Con. Esses controles são usados com o console Nintendo Switch e possibilitam maneiras criativas de jogar. O versátil Joy-Con oferece várias formas surpreendentes de diversão aos jogadores. Dois Joy-Con podem ser usados independentemente, um em cada mão, ou juntos, encaixados em um suporte para Joy-Con, funcionando como um só controle. Também é possível encaixá-los no console para jogar no modo portátil, ou compartilhá-los com amigos e desfrutar de uma ação para dois jogadores em jogos compatíveis. Cada Joy-Con conta com todos os botões de ação e pode servir como um controle individual. Cada um deles inclui um acelerômetro e giroscópio, possibilitando controle de movimento na direita e na esquerda.",
        tags: [
            "nintendo",
            "controle",
            "acessorio"
        ]
    },
    {
        id: 16,
        nome: "Microsoft Xbox One X 1TB Standard cor preto",
        preco: 2399.99,
        thumbnail: "https://cdn.awsli.com.br/2500x2500/1571/1571091/produto/58745670/9b942e7b3b.jpg",
        imgs: [
            "https://http2.mlstatic.com/D_NQ_NP_634774-MLA32732578360_112019-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_602241-MLA32731813556_112019-O.webp",
            "https://http2.mlstatic.com/D_NQ_NP_914615-MLA54983373337_052023-O.webp"
        ],
        descricao: "Apresentamos o xbox series x, nosso console mais rápido e poderoso de todos os tempos; jogue milhares de títulos de quatro gerações de consoles- todos os jogos têm melhor aparência e são melhor executados no xbox series x; no coração do series x está a xbox velocity architecture, que combina um ssd personalizado e software integrado para diminuir significativamente os tempos de carregamento dentro e fora do jogo; troque simultaneamente entre vários jogos em um instante com o quick resume; explore novos mundos e desfrute da ação como nunca antes com 12 teraflops incomparáveis de poder de processamento gráfico; desfrute de jogos 4k a até 120 quadros por segundo, som 3d avançado especial e muito mais; comece com uma biblioteca instantânea de mais de 100 jogos de alta qualidade, incluindo todos os novos títulos do xbox game studios no mesmo dia do seu lançamento como o halo infinite, com o xbox game pass ultimate (assinatura vendida separadamente) ***informações importantes:4k a 120 fps: requer conteúdo e exibição compatíveis; use-o no xbox series x conforme o conteúdo for disponibilizado.xbox game pass: o catálogo de jogos varia ao longo do tempo .halo infinite: lançamento em 2021.smart delivery: apenas jogos compatíveis.",
        tags: [
            "xbox",
            "console"
        ]
    },
    {
        id: 17,
        nome: "Microsoft Xbox One S 1TB Standard cor preto",
        preco:  1399.99,
        thumbnail: "../assets/images/produtos/thumbnail/xbox-one-s-ms.jpg",
        imgs: [
            "https://images.tcdn.com.br/img/img_prod/1087887/microsoft_xbox_one_s_1tb_standard_branco_usado_253_variacao_31_2_74f641dc5610d02f43ab12244ee832cb.jpg",
            "https://down-br.img.susercontent.com/file/br-11134207-7qukw-lff1n1z5ylkr9f",
            "https://m.media-amazon.com/images/I/81Z1xBs6GoL._AC_SX679_.jpg"
        ],
        descricao: "Xbox series s, nosso xbox menor e mais elegante de todos os tempos; com taxas de quadros mais altas, tempos de carregamento mais rápidos e mundos mais ricos e dinâmicos, o xbox series s oferece desempenho e velocidade de última geração em um formato compacto e totalmente digital.",
        tags: [
            "xbox",
            "console"
        ]
    }

    // template para adicionar um produto
    // {
    //     id: ,
    //     nome: "",
    //     preco: ,
    //     thumbnail: "",
    //     imgs: [],
    //     descricao: "",
    //     tags: []
    // }
]