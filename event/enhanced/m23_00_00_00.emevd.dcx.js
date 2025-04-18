// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_血に渇いた獣\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_嵐の獣（骨）\u0000PC情報_廃墟到達時\u0000廃墟_スナイパー領域侵入\u0000廃墟_ご神体破壊\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [220]
// @version    3.4.2
// ==/EMEVD==

const area_id = 23;
const block_id = 0;

const old_yharnam_lamp_offset = 5;
const old_yharnam_lamp_id = 2301950;
const old_yharnam_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const bsb_offset = 3;
const bsb_lamp_offset = 6;
const bsb_defeat = 12301800;
const bsb_return = 2301899;
const bsb_lamp_id = 2301951;
const bsb_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;
const bsb_region = 2302802;
const bsb_id = 2300800;

const paarl_offset = 7;
const paarl_lamp_offset = 7;
const paarl_defeat = 12301700;
const paarl_return = 2301799;
const paarl_lamp_id = 2301952;
const paarl_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const paarl_region = 2302812;
const paarl_id = 2300810;

// front ladder gate 2301700
// gun ladder gate 2301701
    
// constructor
$Event(0, Default, function() {
    InitializeEvent(0, 12302300, 0);
    SetEventFlag(8900+bsb_offset, OFF);
    SetEventFlag(8900+paarl_offset, OFF);
    
    InitializeEvent(1, 7900, 10000000+bsb_return, bsb_return, area_id, block_id, 8500+old_yharnam_lamp_offset);
    InitializeEvent(2, 7900, 10000000+bsb_return-2, bsb_return, area_id, block_id, 8500+paarl_lamp_offset);
    
    InitializeEvent(old_yharnam_lamp_offset, 8500, 8500+old_yharnam_lamp_offset, old_yharnam_lamp_id, 72110909);
    InitializeEvent(bsb_lamp_offset, 8500, 8500+bsb_lamp_offset, bsb_lamp_id, 72111010);
    InitializeEvent(paarl_lamp_offset, 8500, 8500+paarl_lamp_offset, paarl_lamp_id, 72111111);
    
    InitializeEvent(old_yharnam_lamp_offset, 8100, 8100+old_yharnam_lamp_offset, old_yharnam_lamp_kindle);
    InitializeEvent(bsb_lamp_offset, 8100, 8100+bsb_lamp_offset, bsb_lamp_kindle);
    InitializeEvent(paarl_lamp_offset, 8100, 8100+paarl_lamp_offset, paarl_lamp_kindle);
    
    InitializeEvent(old_yharnam_lamp_offset, 8300, old_yharnam_lamp_id+2000, -1, old_yharnam_lamp_kindle, old_yharnam_lamp_id+6000, old_yharnam_lamp_id+3000)
    
    if(EventFlag(bsb_defeat+13) && !EventFlag(bsb_defeat-1)) {
        if (EventFlag(bsb_defeat-2)) {
            SetEventFlag(bsb_defeat-2, OFF);
            InitializeEvent(bsb_offset, 7500, bsb_region, bsb_lamp_id+4000);
        }
        SetEventFlag(bsb_defeat+13, OFF);
        SetEventFlag(bsb_defeat, ON);
        InitializeEvent(bsb_lamp_offset, 8300, bsb_lamp_id+2000, 999, bsb_lamp_kindle, bsb_lamp_id+6000, bsb_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(bsb_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(bsb_defeat+12) || EventFlag(bsb_defeat-1)) {
        if (EventFlag(bsb_defeat-2)) {
            SetEventFlag(bsb_defeat-2, OFF);
            InitializeEvent(bsb_offset, 7500, bsb_region, bsb_lamp_id+5000);
        }
        SetEventFlag(bsb_defeat, OFF);
        SetEventFlag(bsb_defeat+2, OFF);
        SetEventFlag(bsb_defeat+12, OFF);
        SetEventFlag(bsb_defeat+13, ON);
        SetEventFlag(bsb_defeat-1, OFF);
        SetEventFlag(8900+bsb_offset, ON);
        InitializeEvent(bsb_lamp_offset, 8300, bsb_lamp_id+2000, -1, bsb_lamp_kindle, bsb_lamp_id+6000, bsb_lamp_id+3000);
    }
    else {
        InitializeEvent(bsb_lamp_offset, 8300, bsb_lamp_id+2000, -1, bsb_lamp_kindle, bsb_lamp_id+6000, bsb_lamp_id+3000);
    }
    
    if(EventFlag(paarl_defeat+13) && !EventFlag(paarl_defeat-1)) {
        if (EventFlag(paarl_defeat-2)) {
            SetEventFlag(paarl_defeat-2, OFF);
            InitializeEvent(paarl_offset, 7500, paarl_region, paarl_lamp_id+4000);
        }
        SetEventFlag(paarl_defeat+13, OFF);
        SetEventFlag(paarl_defeat, ON);
        InitializeEvent(paarl_lamp_offset, 8300, paarl_lamp_id+2000, 999, paarl_lamp_kindle, paarl_lamp_id+6000, paarl_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(paarl_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(paarl_defeat+12) || EventFlag(paarl_defeat-1)) {
        if (EventFlag(paarl_defeat-2)) {
            SetEventFlag(paarl_defeat-2, OFF);
            InitializeEvent(paarl_offset, 7500, paarl_region, paarl_lamp_id+5000);
        }
        SetEventFlag(paarl_defeat, OFF);
        SetEventFlag(paarl_defeat+2, OFF);
        SetEventFlag(paarl_defeat+12, OFF);
        SetEventFlag(paarl_defeat+13, ON);
        SetEventFlag(paarl_defeat-1, OFF);
        SetEventFlag(8900+paarl_offset, ON);
        InitializeEvent(paarl_lamp_offset, 8300, paarl_lamp_id+2000, -1, paarl_lamp_kindle, paarl_lamp_id+6000, paarl_lamp_id+3000);
    }
    else {
        InitializeEvent(paarl_lamp_offset, 8300, paarl_lamp_id+2000, -1, paarl_lamp_kindle, paarl_lamp_id+6000, paarl_lamp_id+3000);
    }
    
    InitializeEvent(bsb_offset, 12102070, bsb_defeat+13, 0, 7416, bsb_id);
    InitializeEvent(paarl_offset, 12102070, paarl_defeat+13, 0, 7449, paarl_id);
    
    InitializeEvent(bsb_offset, 8900, bsb_defeat-1, bsb_lamp_id+1000, bsb_defeat-2, 0, 0, bsb_lamp_id+5000, area_id, block_id);
    InitializeEvent(paarl_offset, 8900, paarl_defeat-1, paarl_lamp_id+1000, paarl_defeat-2, 0, 0, paarl_lamp_id+5000, area_id, block_id);
    
    InitializeEvent(bsb_offset, 7700, bsb_defeat+11, bsb_defeat+12, bsb_lamp_id+1000, 823000);
    InitializeEvent(paarl_offset, 7700, paarl_defeat+11, paarl_defeat+12, paarl_lamp_id+1000, 823001);
    
    InitializeEvent(900, 12107000, 72110900, 2301950, 2412950);
    InitializeEvent(901, 12107000, 72110901, 2301950, 2412951);
    InitializeEvent(902, 12107000, 72110902, 2301950, 2412952);
    InitializeEvent(903, 12107000, 72110903, 2301950, 2412953);
    InitializeEvent(904, 12107000, 72110904, 2301950, 2402950);
    InitializeEvent(905, 12107000, 72110905, 2301950, 2402951);
    InitializeEvent(906, 12107000, 72110906, 2301950, 2422950);
    InitializeEvent(907, 12107000, 72110907, 2301950, 2422952);
    InitializeEvent(908, 12107000, 72110908, 2301950, 2422951);
    InitializeEvent(909, 12107000, 72110909, 2301950, 2302950);
    InitializeEvent(910, 12107000, 72110910, 2301950, 2302951);
    InitializeEvent(911, 12107000, 72110911, 2301950, 2302952);
    InitializeEvent(912, 12107000, 72110912, 2301950, 2202950);
    InitializeEvent(913, 12107000, 72110913, 2301950, 2202951);
    InitializeEvent(914, 12107000, 72110914, 2301950, 2702950);
    InitializeEvent(915, 12107000, 72110915, 2301950, 2702951);
    InitializeEvent(916, 12107000, 72110916, 2301950, 3202950);
    InitializeEvent(917, 12107000, 72110917, 2301950, 3202952);
    InitializeEvent(918, 12107000, 72110918, 2301950, 2802950);
    InitializeEvent(919, 12107000, 72110919, 2301950, 2802953);
    InitializeEvent(920, 12107000, 72110920, 2301950, 2802951);
    InitializeEvent(921, 12107000, 72110921, 2301950, 2802952);
    InitializeEvent(922, 12107000, 72110922, 2301950, 2502950);
    InitializeEvent(923, 12107000, 72110923, 2301950, 2502952);
    InitializeEvent(924, 12107000, 72110924, 2301950, 2502951);
    InitializeEvent(925, 12107000, 72110925, 2301950, 2112950);
    InitializeEvent(926, 12107000, 72110926, 2301950, 3202951);
    InitializeEvent(927, 12107000, 72110927, 2301950, 3202953);
    InitializeEvent(928, 12107000, 72110928, 2301950, 3302950);
    InitializeEvent(929, 12107000, 72110929, 2301950, 3302951);
    InitializeEvent(930, 12107000, 72110930, 2301950, 2602950);
    InitializeEvent(931, 12107000, 72110931, 2301950, 2602953);
    InitializeEvent(932, 12107000, 72110932, 2301950, 2602952);
    InitializeEvent(933, 12107000, 72110933, 2301950, 2602951);
    InitializeEvent(934, 12107000, 72110934, 2301950, 3402950);
    InitializeEvent(935, 12107000, 72110935, 2301950, 3402951);
    InitializeEvent(936, 12107000, 72110936, 2301950, 3402953);
    InitializeEvent(937, 12107000, 72110937, 2301950, 3402952);
    InitializeEvent(938, 12107000, 72110938, 2301950, 3502950);
    InitializeEvent(939, 12107000, 72110939, 2301950, 3502951);
    InitializeEvent(940, 12107000, 72110940, 2301950, 3502952);
    InitializeEvent(941, 12107000, 72110941, 2301950, 3602950);
    InitializeEvent(942, 12107000, 72110942, 2301950, 3602951);
    InitializeEvent(943, 12107000, 72110943, 2301950, 3602952);
    InitializeEvent(944, 12107000, 72110944, 2301950, 2902950);
    InitializeEvent(945, 12107000, 72110945, 2301950, 2902951);
    InitializeEvent(946, 12107000, 72110946, 2301950, 2902952);
    InitializeEvent(947, 12107000, 72110947, 2301950, 2902953);
    InitializeEvent(948, 12107000, 72110948, 2301950, 2902954);
    InitializeEvent(949, 12107000, 72110949, 2301950, 2902955);
    InitializeEvent(950, 12107000, 72110950, 2301950, 2902956);
    InitializeEvent(951, 12107000, 72110951, 2301950, 2902957);
    InitializeEvent(952, 12107000, 72110952, 2301950, 2902958);
    InitializeEvent(953, 12107000, 72110953, 2301950, 2902959);

    InitializeEvent(1000, 12107000, 72111000, 2301951, 2412950);
    InitializeEvent(1001, 12107000, 72111001, 2301951, 2412951);
    InitializeEvent(1002, 12107000, 72111002, 2301951, 2412952);
    InitializeEvent(1003, 12107000, 72111003, 2301951, 2412953);
    InitializeEvent(1004, 12107000, 72111004, 2301951, 2402950);
    InitializeEvent(1005, 12107000, 72111005, 2301951, 2402951);
    InitializeEvent(1006, 12107000, 72111006, 2301951, 2422950);
    InitializeEvent(1007, 12107000, 72111007, 2301951, 2422952);
    InitializeEvent(1008, 12107000, 72111008, 2301951, 2422951);
    InitializeEvent(1009, 12107000, 72111009, 2301951, 2302950);
    InitializeEvent(1010, 12107000, 72111010, 2301951, 2302951);
    InitializeEvent(1011, 12107000, 72111011, 2301951, 2302952);
    InitializeEvent(1012, 12107000, 72111012, 2301951, 2202950);
    InitializeEvent(1013, 12107000, 72111013, 2301951, 2202951);
    InitializeEvent(1014, 12107000, 72111014, 2301951, 2702950);
    InitializeEvent(1015, 12107000, 72111015, 2301951, 2702951);
    InitializeEvent(1016, 12107000, 72111016, 2301951, 3202950);
    InitializeEvent(1017, 12107000, 72111017, 2301951, 3202952);
    InitializeEvent(1018, 12107000, 72111018, 2301951, 2802950);
    InitializeEvent(1019, 12107000, 72111019, 2301951, 2802953);
    InitializeEvent(1020, 12107000, 72111020, 2301951, 2802951);
    InitializeEvent(1021, 12107000, 72111021, 2301951, 2802952);
    InitializeEvent(1022, 12107000, 72111022, 2301951, 2502950);
    InitializeEvent(1023, 12107000, 72111023, 2301951, 2502952);
    InitializeEvent(1024, 12107000, 72111024, 2301951, 2502951);
    InitializeEvent(1025, 12107000, 72111025, 2301951, 2112950);
    InitializeEvent(1026, 12107000, 72111026, 2301951, 3202951);
    InitializeEvent(1027, 12107000, 72111027, 2301951, 3202953);
    InitializeEvent(1028, 12107000, 72111028, 2301951, 3302950);
    InitializeEvent(1029, 12107000, 72111029, 2301951, 3302951);
    InitializeEvent(1030, 12107000, 72111030, 2301951, 2602950);
    InitializeEvent(1031, 12107000, 72111031, 2301951, 2602953);
    InitializeEvent(1032, 12107000, 72111032, 2301951, 2602952);
    InitializeEvent(1033, 12107000, 72111033, 2301951, 2602951);
    InitializeEvent(1034, 12107000, 72111034, 2301951, 3402950);
    InitializeEvent(1035, 12107000, 72111035, 2301951, 3402951);
    InitializeEvent(1036, 12107000, 72111036, 2301951, 3402953);
    InitializeEvent(1037, 12107000, 72111037, 2301951, 3402952);
    InitializeEvent(1038, 12107000, 72111038, 2301951, 3502950);
    InitializeEvent(1039, 12107000, 72111039, 2301951, 3502951);
    InitializeEvent(1040, 12107000, 72111040, 2301951, 3502952);
    InitializeEvent(1041, 12107000, 72111041, 2301951, 3602950);
    InitializeEvent(1042, 12107000, 72111042, 2301951, 3602951);
    InitializeEvent(1043, 12107000, 72111043, 2301951, 3602952);
    InitializeEvent(1044, 12107000, 72111044, 2301951, 2902950);
    InitializeEvent(1045, 12107000, 72111045, 2301951, 2902951);
    InitializeEvent(1046, 12107000, 72111046, 2301951, 2902952);
    InitializeEvent(1047, 12107000, 72111047, 2301951, 2902953);
    InitializeEvent(1048, 12107000, 72111048, 2301951, 2902954);
    InitializeEvent(1049, 12107000, 72111049, 2301951, 2902955);
    InitializeEvent(1050, 12107000, 72111050, 2301951, 2902956);
    InitializeEvent(1051, 12107000, 72111051, 2301951, 2902957);
    InitializeEvent(1052, 12107000, 72111052, 2301951, 2902958);
    InitializeEvent(1053, 12107000, 72111053, 2301951, 2902959);

    InitializeEvent(1100, 12107000, 72111100, 2301952, 2412950);
    InitializeEvent(1101, 12107000, 72111101, 2301952, 2412951);
    InitializeEvent(1102, 12107000, 72111102, 2301952, 2412952);
    InitializeEvent(1103, 12107000, 72111103, 2301952, 2412953);
    InitializeEvent(1104, 12107000, 72111104, 2301952, 2402950);
    InitializeEvent(1105, 12107000, 72111105, 2301952, 2402951);
    InitializeEvent(1106, 12107000, 72111106, 2301952, 2422950);
    InitializeEvent(1107, 12107000, 72111107, 2301952, 2422952);
    InitializeEvent(1108, 12107000, 72111108, 2301952, 2422951);
    InitializeEvent(1109, 12107000, 72111109, 2301952, 2302950);
    InitializeEvent(1110, 12107000, 72111110, 2301952, 2302951);
    InitializeEvent(1111, 12107000, 72111111, 2301952, 2302952);
    InitializeEvent(1112, 12107000, 72111112, 2301952, 2202950);
    InitializeEvent(1113, 12107000, 72111113, 2301952, 2202951);
    InitializeEvent(1114, 12107000, 72111114, 2301952, 2702950);
    InitializeEvent(1115, 12107000, 72111115, 2301952, 2702951);
    InitializeEvent(1116, 12107000, 72111116, 2301952, 3202950);
    InitializeEvent(1117, 12107000, 72111117, 2301952, 3202952);
    InitializeEvent(1118, 12107000, 72111118, 2301952, 2802950);
    InitializeEvent(1119, 12107000, 72111119, 2301952, 2802953);
    InitializeEvent(1120, 12107000, 72111120, 2301952, 2802951);
    InitializeEvent(1121, 12107000, 72111121, 2301952, 2802952);
    InitializeEvent(1122, 12107000, 72111122, 2301952, 2502950);
    InitializeEvent(1123, 12107000, 72111123, 2301952, 2502952);
    InitializeEvent(1124, 12107000, 72111124, 2301952, 2502951);
    InitializeEvent(1125, 12107000, 72111125, 2301952, 2112950);
    InitializeEvent(1126, 12107000, 72111126, 2301952, 3202951);
    InitializeEvent(1127, 12107000, 72111127, 2301952, 3202953);
    InitializeEvent(1128, 12107000, 72111128, 2301952, 3302950);
    InitializeEvent(1129, 12107000, 72111129, 2301952, 3302951);
    InitializeEvent(1130, 12107000, 72111130, 2301952, 2602950);
    InitializeEvent(1131, 12107000, 72111131, 2301952, 2602953);
    InitializeEvent(1132, 12107000, 72111132, 2301952, 2602952);
    InitializeEvent(1133, 12107000, 72111133, 2301952, 2602951);
    InitializeEvent(1134, 12107000, 72111134, 2301952, 3402950);
    InitializeEvent(1135, 12107000, 72111135, 2301952, 3402951);
    InitializeEvent(1136, 12107000, 72111136, 2301952, 3402953);
    InitializeEvent(1137, 12107000, 72111137, 2301952, 3402952);
    InitializeEvent(1138, 12107000, 72111138, 2301952, 3502950);
    InitializeEvent(1139, 12107000, 72111139, 2301952, 3502951);
    InitializeEvent(1140, 12107000, 72111140, 2301952, 3502952);
    InitializeEvent(1141, 12107000, 72111141, 2301952, 3602950);
    InitializeEvent(1142, 12107000, 72111142, 2301952, 3602951);
    InitializeEvent(1143, 12107000, 72111143, 2301952, 3602952);
    InitializeEvent(1144, 12107000, 72111144, 2301952, 2902950);
    InitializeEvent(1145, 12107000, 72111145, 2301952, 2902951);
    InitializeEvent(1146, 12107000, 72111146, 2301952, 2902952);
    InitializeEvent(1147, 12107000, 72111147, 2301952, 2902953);
    InitializeEvent(1148, 12107000, 72111148, 2301952, 2902954);
    InitializeEvent(1149, 12107000, 72111149, 2301952, 2902955);
    InitializeEvent(1150, 12107000, 72111150, 2301952, 2902956);
    InitializeEvent(1151, 12107000, 72111151, 2301952, 2902957);
    InitializeEvent(1152, 12107000, 72111152, 2301952, 2902958);
    InitializeEvent(1153, 12107000, 72111153, 2301952, 2902959);

    SetEventFlag(72110009, OFF);
    SetEventFlag(72110109, OFF);
    SetEventFlag(72110209, OFF);
    SetEventFlag(72110309, OFF);
    SetEventFlag(72110409, OFF);
    SetEventFlag(72110509, OFF);
    SetEventFlag(72110609, OFF);
    SetEventFlag(72110709, OFF);
    SetEventFlag(72110809, OFF);
    SetEventFlag(72110909, OFF);
    SetEventFlag(72111009, OFF);
    SetEventFlag(72111109, OFF);
    SetEventFlag(72111209, OFF);
    SetEventFlag(72111309, OFF);
    SetEventFlag(72111409, OFF);
    SetEventFlag(72111509, OFF);
    SetEventFlag(72111609, OFF);
    SetEventFlag(72111709, OFF);
    SetEventFlag(72111809, OFF);
    SetEventFlag(72111909, OFF);
    SetEventFlag(72112009, OFF);
    SetEventFlag(72112109, OFF);
    SetEventFlag(72112209, OFF);
    SetEventFlag(72112309, OFF);
    SetEventFlag(72112409, OFF);
    SetEventFlag(72112509, OFF);
    SetEventFlag(72112609, OFF);
    SetEventFlag(72112709, OFF);
    SetEventFlag(72112809, OFF);
    SetEventFlag(72112909, OFF);
    SetEventFlag(72113009, OFF);
    SetEventFlag(72113109, OFF);
    SetEventFlag(72113209, OFF);
    SetEventFlag(72113309, OFF);
    SetEventFlag(72113409, OFF);
    SetEventFlag(72113509, OFF);
    SetEventFlag(72113609, OFF);
    SetEventFlag(72113709, OFF);
    SetEventFlag(72113809, OFF);
    SetEventFlag(72113909, OFF);
    SetEventFlag(72114009, OFF);
    SetEventFlag(72114109, OFF);
    SetEventFlag(72114209, OFF);
    SetEventFlag(72114309, OFF);
    SetEventFlag(72114409, OFF);
    SetEventFlag(72114509, OFF);
    SetEventFlag(72114609, OFF);
    SetEventFlag(72114709, OFF);
    SetEventFlag(72114809, OFF);
    SetEventFlag(72114909, OFF);
    SetEventFlag(72115009, OFF);
    SetEventFlag(72115109, OFF);
    SetEventFlag(72115209, OFF);
    SetEventFlag(72115309, OFF);

    SetEventFlag(72110010, OFF);
    SetEventFlag(72110110, OFF);
    SetEventFlag(72110210, OFF);
    SetEventFlag(72110310, OFF);
    SetEventFlag(72110410, OFF);
    SetEventFlag(72110510, OFF);
    SetEventFlag(72110610, OFF);
    SetEventFlag(72110710, OFF);
    SetEventFlag(72110810, OFF);
    SetEventFlag(72110910, OFF);
    SetEventFlag(72111010, OFF);
    SetEventFlag(72111110, OFF);
    SetEventFlag(72111210, OFF);
    SetEventFlag(72111310, OFF);
    SetEventFlag(72111410, OFF);
    SetEventFlag(72111510, OFF);
    SetEventFlag(72111610, OFF);
    SetEventFlag(72111710, OFF);
    SetEventFlag(72111810, OFF);
    SetEventFlag(72111910, OFF);
    SetEventFlag(72112010, OFF);
    SetEventFlag(72112110, OFF);
    SetEventFlag(72112210, OFF);
    SetEventFlag(72112310, OFF);
    SetEventFlag(72112410, OFF);
    SetEventFlag(72112510, OFF);
    SetEventFlag(72112610, OFF);
    SetEventFlag(72112710, OFF);
    SetEventFlag(72112810, OFF);
    SetEventFlag(72112910, OFF);
    SetEventFlag(72113010, OFF);
    SetEventFlag(72113110, OFF);
    SetEventFlag(72113210, OFF);
    SetEventFlag(72113310, OFF);
    SetEventFlag(72113410, OFF);
    SetEventFlag(72113510, OFF);
    SetEventFlag(72113610, OFF);
    SetEventFlag(72113710, OFF);
    SetEventFlag(72113810, OFF);
    SetEventFlag(72113910, OFF);
    SetEventFlag(72114010, OFF);
    SetEventFlag(72114110, OFF);
    SetEventFlag(72114210, OFF);
    SetEventFlag(72114310, OFF);
    SetEventFlag(72114410, OFF);
    SetEventFlag(72114510, OFF);
    SetEventFlag(72114610, OFF);
    SetEventFlag(72114710, OFF);
    SetEventFlag(72114810, OFF);
    SetEventFlag(72114910, OFF);
    SetEventFlag(72115010, OFF);
    SetEventFlag(72115110, OFF);
    SetEventFlag(72115210, OFF);
    SetEventFlag(72115310, OFF);

    SetEventFlag(72110011, OFF);
    SetEventFlag(72110111, OFF);
    SetEventFlag(72110211, OFF);
    SetEventFlag(72110311, OFF);
    SetEventFlag(72110411, OFF);
    SetEventFlag(72110511, OFF);
    SetEventFlag(72110611, OFF);
    SetEventFlag(72110711, OFF);
    SetEventFlag(72110811, OFF);
    SetEventFlag(72110911, OFF);
    SetEventFlag(72111011, OFF);
    SetEventFlag(72111111, OFF);
    SetEventFlag(72111211, OFF);
    SetEventFlag(72111311, OFF);
    SetEventFlag(72111411, OFF);
    SetEventFlag(72111511, OFF);
    SetEventFlag(72111611, OFF);
    SetEventFlag(72111711, OFF);
    SetEventFlag(72111811, OFF);
    SetEventFlag(72111911, OFF);
    SetEventFlag(72112011, OFF);
    SetEventFlag(72112111, OFF);
    SetEventFlag(72112211, OFF);
    SetEventFlag(72112311, OFF);
    SetEventFlag(72112411, OFF);
    SetEventFlag(72112511, OFF);
    SetEventFlag(72112611, OFF);
    SetEventFlag(72112711, OFF);
    SetEventFlag(72112811, OFF);
    SetEventFlag(72112911, OFF);
    SetEventFlag(72113011, OFF);
    SetEventFlag(72113111, OFF);
    SetEventFlag(72113211, OFF);
    SetEventFlag(72113311, OFF);
    SetEventFlag(72113411, OFF);
    SetEventFlag(72113511, OFF);
    SetEventFlag(72113611, OFF);
    SetEventFlag(72113711, OFF);
    SetEventFlag(72113811, OFF);
    SetEventFlag(72113911, OFF);
    SetEventFlag(72114011, OFF);
    SetEventFlag(72114111, OFF);
    SetEventFlag(72114211, OFF);
    SetEventFlag(72114311, OFF);
    SetEventFlag(72114411, OFF);
    SetEventFlag(72114511, OFF);
    SetEventFlag(72114611, OFF);
    SetEventFlag(72114711, OFF);
    SetEventFlag(72114811, OFF);
    SetEventFlag(72114911, OFF);
    SetEventFlag(72115011, OFF);
    SetEventFlag(72115111, OFF);
    SetEventFlag(72115211, OFF);
    SetEventFlag(72115311, OFF);

    InitializeEvent(0, 12107100, 72100421, 2301950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2301950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2301950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2301950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2301950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2301950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2301951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2301951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2301951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2301951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2301951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2301951, 9026);

    InitializeEvent(12, 12107100, 72100433, 2301952, 9021);
    InitializeEvent(13, 12107100, 72100434, 2301952, 9022);
    InitializeEvent(14, 12107100, 72100435, 2301952, 9023);
    InitializeEvent(15, 12107100, 72100436, 2301952, 9024);
    InitializeEvent(16, 12107100, 72100437, 2301952, 9025);
    InitializeEvent(17, 12107100, 72100438, 2301952, 9026);

    InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);

    InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);

    InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);
    
    InitializeEvent(5, 7000, 2300950, 2301950, 999, 12307800, -1);
    
    InitializeEvent(6, 7000, 2300951, 2301951, 12301800, 12307820, bsb_defeat+13);
    InitializeEvent(bsb_offset, 8800, bsb_defeat+13, bsb_lamp_id-1000, bsb_lamp_id, bsb_lamp_id+3000);
    
    InitializeEvent(7, 7000, 2300952, 2301952, 12301700, 12307840, paarl_defeat+13);
    InitializeEvent(paarl_offset, 8800, paarl_defeat+13, paarl_lamp_id-1000, paarl_lamp_id, paarl_lamp_id+3000);
    
    InitializeEvent(5, 7100, 72300200, 2301950);
    InitializeEvent(6, 7100, 72300201, 2301951);
    InitializeEvent(7, 7100, 72300202, 2301952);
    InitializeEvent(5, 7200, 72300100, 2301950, 2102950);
    InitializeEvent(6, 7200, 72300101, 2301951, 2102950);
    InitializeEvent(7, 7200, 72300102, 2301952, 2102950);
    InitializeEvent(5, 7300, 72102300, 2301950);
    InitializeEvent(6, 7300, 72102301, 2301951);
    InitializeEvent(7, 7300, 72102302, 2301952);
    InitializeEvent(5, 12102220, 2301950, 2300950);
    InitializeEvent(6, 12102220, 2301951, 2300951);
    InitializeEvent(7, 12102220, 2301952, 2300952);
    InitializeEvent(10, 7600, 2301999, 2303999);
    InitializeEvent(1, 9200, 2303900);
    InitializeEvent(1, 9220, 2300750, 12304220, 12304221, 2300, 23);
    InitializeEvent(1, 9240, 2300750, 12304220, 12304221, 12304222, 23);
    InitializeEvent(1, 9260, 2300750, 12304220, 12304221, 12304222, 23);
    InitializeEvent(1, 9280, 2300750, 12304220, 12304221, 2300, 12304800, 23);
    DeleteMapSFX(2303400, false);
    DeleteMapSFX(2303910, false);
    DeleteMapSFX(2303911, false);
    InitializeEvent(0, 12304400, 12304440, 2303400, 12304420, 12304430, 12301800, 6001);
    InitializeEvent(0, 12304401, 12304441, 2303910, 12304421, 12304431, 12301700, 12304422);
    InitializeEvent(0, 12304402, 12304442, 2303911, 12304422, 12304432, 12301700, 12304421);
    InitializeEvent(0, 12304410, 0, 2300740, 2302720, 12304420, 12304430, 12304440, 12301800, 10576);
    InitializeEvent(1, 12304410, 0, 2300930, 2302910, 12304421, 12304431, 12304441, 12301700, 10568);
    InitializeEvent(2, 12304410, 5, 2300931, 2302913, 12304422, 12304432, 12304442, 12301700, 10564);
    InitializeEvent(0, 12304450, 2300740, 2302722, 12304420, 12304430, 12304800);
    InitializeEvent(1, 12304450, 2300930, 2302911, 12304421, 12304431, 12304700);
    InitializeEvent(2, 12304450, 2300931, 2302914, 12304422, 12304432, 12304700);
    InitializeEvent(0, 12304460, 2300740, 2302722, 2302800, 2302801, 101130, 12304450, 2302801);
    InitializeEvent(1, 12304460, 2300930, 2302911, 2302810, 2302811, 101130, 12304451, 2302811);
    InitializeEvent(2, 12304460, 2300931, 2302914, 2302810, 2302811, 101130, 12304452, 2302811);
    StartTimeMeasurement(2300000, 0, Disabled);
    StartTimeMeasurement(2300001, 18, Enabled);
    RegisterLadder(12301000, 12301001, 2301100);
    RegisterLadder(12301002, 12301003, 2301101);
    RegisterLadder(12301004, 12301005, 2301102);
    RegisterLadder(12301006, 12301007, 2301103);
    RegisterLadder(12301008, 12301009, 2301104);
    RegisterLadder(12301010, 12301011, 2301105);
    CreateObjectfollowingSFX(2301200, 1, 923230);
    CreateObjectfollowingSFX(2301201, 1, 923230);
    CreateObjectfollowingSFX(2301202, 1, 923230);
    CreateObjectfollowingSFX(2301203, 1, 923230);
    CreateObjectfollowingSFX(2301204, 1, 923230);
    CreateObjectfollowingSFX(2301205, 1, 923230);
    CreateObjectfollowingSFX(2301206, 1, 923230);
    CreateObjectfollowingSFX(2301207, 1, 923230);
    CreateObjectfollowingSFX(2301208, 1, 923230);
    CreateObjectfollowingSFX(2301209, 1, 923230);
    CreateObjectfollowingSFX(2301210, 1, 923230);
    CreateObjectfollowingSFX(2301211, 1, 923230);
    CreateObjectfollowingSFX(2301212, 1, 923230);
    CreateObjectfollowingSFX(2301213, 1, 923230);
    CreateObjectfollowingSFX(2301214, 1, 923230);
    CreateObjectfollowingSFX(2301215, 1, 923230);
    CreateObjectfollowingSFX(2301216, 1, 923230);
    CreateObjectfollowingSFX(2301217, 1, 923230);
    CreateObjectfollowingSFX(2301218, 1, 923230);
    CreateObjectfollowingSFX(2301219, 1, 923230);
    CreateObjectfollowingSFX(2301230, 1, 923230);
    CreateObjectfollowingSFX(2301221, 1, 923230);
    CreateObjectfollowingSFX(2301222, 1, 923230);
    CreateObjectfollowingSFX(2301223, 1, 923230);
    CreateBulletOwner(2300270);
    CreateBulletOwner(2300271);
    CreateBulletOwner(2300272);
    CreateDamagingObject(12300300, 2301400, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300301, 2301401, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300302, 2301402, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300303, 2301403, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300304, 2301404, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300305, 2301405, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300306, 2301406, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300307, 2301407, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300308, 2301408, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300309, 2301409, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300310, 2301410, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300311, 2301411, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300312, 2301412, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300313, 2301413, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300314, 2301414, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300315, 2301415, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300316, 2301416, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300317, 2301417, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300318, 2301418, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300319, 2301419, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300320, 2301420, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300321, 2301421, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300322, 2301422, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    InitializeEvent(0, 12304812, 0);
    InitializeEvent(0, 12304813, 0);
    InitializeEvent(0, 12301800, 0);
    InitializeEvent(0, 12301801, 0);
    InitializeEvent(0, 12301802, 0);
    // InitializeEvent(0, 12301810, 0); // rematch bsb
    InitializeEvent(0, 12304810, 0);
    InitializeEvent(0, 12304811, 0);
    InitializeEvent(0, 12304802, 0);
    InitializeEvent(0, 12304803, 0);
    InitializeEvent(0, 12304804, 0);
    InitializeEvent(0, 12304805, 0);
    InitializeEvent(0, 12304807, 0);
    InitializeEvent(0, 12304808, 0);
    InitializeEvent(0, 12301803, 0);
    InitializeEvent(0, 12304732, 0);
    InitializeEvent(0, 12304733, 0);
    InitializeEvent(0, 12301700, 0);
    InitializeEvent(0, 12301701, 0);
    InitializeEvent(0, 12301702, 0);
    // InitializeEvent(0, 12301710, 0); // rematch paarl
    InitializeEvent(0, 12304730, 0);
    InitializeEvent(0, 12304731, 0);
    InitializeEvent(0, 12304702, 0);
    InitializeEvent(0, 12304703, 0);
    InitializeEvent(0, 12304704, 0);
    InitializeEvent(0, 12304705, 0);
    InitializeEvent(0, 12304707, 0);
    InitializeEvent(0, 12301703, 0);
    InitializeEvent(0, 12304715, 2300, 2300, 1, 480, 490, 8000, 130);
    InitializeEvent(1, 12304715, 2301, 2301, 2, 481, 491, 8010, 150);
    InitializeEvent(2, 12304715, 2302, 2302, 3, 482, 492, 8030, 150);
    InitializeEvent(3, 12304715, 2303, 2303, 4, 483, 493, 8020, 200);
    InitializeEvent(4, 12304715, 2304, 2304, 5, 484, 494, 8040, 200);
    InitializeEvent(0, 12300100, 0);
    InitializeEvent(0, 12300110, 7031, 2301701, 12300120);
    InitializeEvent(1, 12300110, 7000, 2301700, 12300121);
    InitializeEvent(2, 12300110, 2300031, 2301010, 12300122);
    InitializeEvent(3, 12300110, 2300030, 2301020, 12300180);
    InitializeEvent(0, 12300120, 2301701, 12300212, 1, 2300000);
    InitializeEvent(1, 12300120, 2301700, 12300211, 1, 2300001);
    InitializeEvent(2, 12300120, 2301010, 12300213, 1, 2300010);
    InitializeEvent(0, 12300130, 0);
    InitializeEvent(0, 12300140, 0);
    InitializeEvent(0, 12300160, 0);
    InitializeEvent(0, 12300180, 0);
    InitializeEvent(0, 12300190, 0);
    InitializeEvent(0, 12300201, 0);
    InitializeEvent(0, 12300210, 0);
    InitializeEvent(0, 12300220, 2300250, 52300990);
    InitializeEvent(1, 12300220, 2300251, 52300980);
    InitializeEvent(2, 12300220, 2300252, 52300970);
    InitializeEvent(0, 12300230, 0);
    InitializeEvent(0, 12300235, 0);
    InitializeEvent(0, 12300240, 0);
    InitializeEvent(0, 12300250, 0);
    InitializeEvent(0, 12300300, 0);
    InitializeEvent(0, 12300310, 2301050, 12300900, 9942);
    InitializeEvent(0, 12305000, 0);
    InitializeEvent(0, 12305001, 0);
    InitializeEvent(0, 12305010, 2300304, 7008, 1, 109000);
    InitializeEvent(1, 12305010, 2300402, 7002, 2, 109010);
    InitializeEvent(0, 12305020, 0);
    InitializeEvent(0, 12305021, 0);
    InitializeEvent(0, 12305022, 0);
    InitializeEvent(0, 12305023, 0);
    InitializeEvent(0, 12305030, 2302032, 2301269, 2300910);
    InitializeEvent(1, 12305030, 2302033, 2301266, 2300911);
    InitializeEvent(2, 12305030, 2302034, 2301265, 2300913);
    InitializeEvent(3, 12305030, 2302035, 2301261, 2300913);
    InitializeEvent(0, 12305040, 2301256, 2300900);
    InitializeEvent(1, 12305040, 2301257, 2300900);
    InitializeEvent(2, 12305040, 2301258, 2300900);
    InitializeEvent(3, 12305040, 2301259, 2300900);
    InitializeEvent(4, 12305040, 2301260, 2300900);
    InitializeEvent(5, 12305040, 2301261, 2300900);
    InitializeEvent(6, 12305040, 2301262, 2300900);
    InitializeEvent(7, 12305040, 2301263, 2300900);
    InitializeEvent(8, 12305040, 2301264, 2300900);
    InitializeEvent(9, 12305040, 2301265, 2300900);
    InitializeEvent(10, 12305040, 2301266, 2300900);
    InitializeEvent(11, 12305040, 2301267, 2300900);
    InitializeEvent(12, 12305040, 2301268, 2300900);
    InitializeEvent(13, 12305040, 2301269, 2300900);
    InitializeEvent(0, 12305070, 0);
    InitializeEvent(0, 12305075, 2300309, 7008, 3, 109000);
    InitializeEvent(1, 12305075, 2300310, 7002, 4, 109000);
    InitializeEvent(0, 12305080, 0);
    InitializeEvent(0, 12305081, 0);
    InitializeEvent(0, 12305082, 0);
    InitializeEvent(0, 12305090, 0, 2300920);
    InitializeEvent(1, 12305090, 20, 2300921);
    InitializeEvent(0, 12305100, 2300408, 2302211, 30);
    InitializeEvent(1, 12305100, 2300409, 2302213, 40);
    InitializeEvent(2, 12305100, 2300410, 2302215, 60);
    InitializeEvent(0, 12305110, 2300320, 0);
    InitializeEvent(1, 12305110, 2300321, 15);
    InitializeEvent(2, 12305110, 2300322, 35);
    InitializeEvent(3, 12305110, 2300323, 5);
    InitializeEvent(4, 12305110, 2300324, 55);
    InitializeEvent(0, 12305120, 0);
    InitializeEvent(0, 12305121, 2300325, 7005, 12, 109000);
    InitializeEvent(1, 12305121, 2300326, 7005, 13, 109000);
    InitializeEvent(2, 12305121, 2300327, 7002, 14, 109000);
    InitializeEvent(0, 12305125, 0);
    InitializeEvent(0, 12305130, 0);
    InitializeEvent(0, 12305135, 2300413, 7002, 15, 109010);
    InitializeEvent(1, 12305135, 2300414, 7008, 16, 109010);
    InitializeEvent(0, 12305140, 2300303, 7000, 7001, 109900, 109912);
    InitializeEvent(1, 12305140, 2300304, 7000, 7001, 109900, 109913);
    InitializeEvent(2, 12305140, 2300402, 7000, 7001, 109900, 109913);
    InitializeEvent(3, 12305140, 2300309, 7006, 7007, 109900, 109912);
    InitializeEvent(4, 12305140, 2300310, 7000, 7001, 109900, 109912);
    InitializeEvent(5, 12305140, 2300312, 7000, 7001, 109900, 109912);
    InitializeEvent(6, 12305140, 2300315, 7003, 7004, 109900, 109912);
    InitializeEvent(7, 12305140, 2300316, 7006, 7007, 109900, 109912);
    InitializeEvent(8, 12305140, 2300317, 7000, 7001, 109900, 109912);
    InitializeEvent(9, 12305140, 2300403, 7006, 7007, 109900, 109912);
    InitializeEvent(10, 12305140, 2300404, 7003, 7004, 109900, 109912);
    InitializeEvent(11, 12305140, 2300405, 7006, 7007, 109900, 109912);
    InitializeEvent(12, 12305140, 2300325, 7003, 7004, 109900, 109912);
    InitializeEvent(13, 12305140, 2300326, 7003, 7004, 109900, 109912);
    InitializeEvent(14, 12305140, 2300327, 7000, 7001, 109900, 109912);
    InitializeEvent(15, 12305140, 2300413, 7000, 7001, 109900, 109912);
    InitializeEvent(16, 12305140, 2300414, 7006, 7007, 109900, 109912);
    InitializeEvent(17, 12305140, 2300500, 7000, 7001, 109015, 109015);
    InitializeEvent(18, 12305140, 2300501, 7000, 7001, 109015, 109015);
    InitializeEvent(19, 12305140, 2300502, 7000, 7001, 109015, 109015);
    InitializeEvent(0, 12305160, 2300303, 7002, 0, 109000);
    InitializeEvent(1, 12305160, 2300304, 7002, 1, 109000);
    InitializeEvent(2, 12305160, 2300402, 7002, 2, 109010);
    InitializeEvent(3, 12305160, 2300309, 7008, 3, 109000);
    InitializeEvent(4, 12305160, 2300310, 7002, 4, 109000);
    InitializeEvent(5, 12305160, 2300312, 7002, 5, 109000);
    InitializeEvent(6, 12305160, 2300315, 7005, 6, 109000);
    InitializeEvent(7, 12305160, 2300316, 7008, 7, 109000);
    InitializeEvent(8, 12305160, 2300317, 7002, 8, 109000);
    InitializeEvent(9, 12305160, 2300403, 7008, 9, 109010);
    InitializeEvent(10, 12305160, 2300404, 7005, 10, 109010);
    InitializeEvent(11, 12305160, 2300405, 7008, 11, 109010);
    InitializeEvent(12, 12305160, 2300325, 7005, 12, 109000);
    InitializeEvent(13, 12305160, 2300326, 7005, 13, 109000);
    InitializeEvent(14, 12305160, 2300327, 7002, 14, 109000);
    InitializeEvent(15, 12305160, 2300413, 7002, 15, 109010);
    InitializeEvent(16, 12305160, 2300414, 7008, 16, 109010);
    InitializeEvent(17, 12305160, 2300500, 7002, 17, 109010);
    InitializeEvent(18, 12305160, 2300501, 7002, 18, 109010);
    InitializeEvent(19, 12305160, 2300502, 7002, 19, 109010);
    InitializeEvent(0, 12305180, 2300300, 2302140, 1097859072, 0);
    InitializeEvent(1, 12305180, 2300301, 2302141, 1084227584, 0);
    InitializeEvent(2, 12305180, 2300302, 2302141, 1084227584, 1075838976);
    InitializeEvent(3, 12305180, 2300401, 2302147, 1084227584, 0);
    InitializeEvent(4, 12305180, 2300201, 2302146, 1092616192, 0);
    InitializeEvent(5, 12305180, 2300202, 2302146, 1092616192, 0);
    InitializeEvent(6, 12305180, 2300205, 2302130, 1092616192, 0);
    InitializeEvent(7, 12305180, 2300330, 2302148, 1092616192, 0);
    InitializeEvent(8, 12305180, 2300331, 2302148, 1092616192, 0);
    InitializeEvent(9, 12305180, 2300332, 2302148, 1092616192, 0);
    InitializeEvent(10, 12305180, 2300333, 2302148, 1092616192, 0);
    InitializeEvent(11, 12305180, 2300334, 2302148, 1092616192, 0);
    InitializeEvent(13, 12305180, 2300607, 2302148, 1092616192, 0);
    InitializeEvent(14, 12305180, 2300608, 2302148, 1092616192, 0);
    InitializeEvent(15, 12305180, 2300600, 2302149, 1077936128, 0);
    InitializeEvent(0, 12305190, 2300200);
    InitializeEvent(1, 12305190, 2300201);
    InitializeEvent(2, 12305190, 2300202);
    InitializeEvent(3, 12305190, 2300203);
    InitializeEvent(4, 12305190, 2300204);
    InitializeEvent(5, 12305190, 2300205);
    InitializeEvent(6, 12305190, 2300206);
    InitializeEvent(7, 12305190, 2300207);
    InitializeEvent(8, 12305190, 2300208);
    InitializeEvent(9, 12305190, 2300209);
    InitializeEvent(10, 12305190, 2300210);
    InitializeEvent(11, 12305190, 2300211);
    InitializeEvent(12, 12305190, 2300212);
    InitializeEvent(13, 12305190, 2300213);
    InitializeEvent(14, 12305190, 2300214);
    InitializeEvent(15, 12305190, 2300215);
    InitializeEvent(16, 12305190, 2300216);
    InitializeEvent(17, 12305190, 2300217);
    InitializeEvent(18, 12305190, 2300218);
    InitializeEvent(19, 12305190, 2300219);
    InitializeEvent(20, 12305190, 2300220);
    InitializeEvent(21, 12305190, 2300221);
    InitializeEvent(22, 12305190, 2300222);
    InitializeEvent(23, 12305190, 2300223);
    InitializeEvent(24, 12305190, 2300224);
    InitializeEvent(25, 12305190, 2300225);
    InitializeEvent(26, 12305190, 2300226);
    InitializeEvent(27, 12305190, 2300227);
    InitializeEvent(28, 12305190, 2300228);
    InitializeEvent(29, 12305190, 2300229);
    InitializeEvent(30, 12305190, 2300230);
    InitializeEvent(31, 12305190, 2300231);
    InitializeEvent(32, 12305190, 2300232);
    InitializeEvent(33, 12305190, 2300233);
    InitializeEvent(34, 12305190, 2300234);
    InitializeEvent(0, 12305250, 0);
    InitializeEvent(0, 12305300, 2300602, 2300309, 1101004800);
    InitializeEvent(1, 12305300, 2300602, 2300310, 1101004800);
    InitializeEvent(2, 12305300, 2300602, 2300311, 1101004800);
    InitializeEvent(3, 12305300, 2300602, 2300312, 1101004800);
    InitializeEvent(4, 12305300, 2300602, 2300313, 1101004800);
    InitializeEvent(5, 12305300, 2300602, 2300314, 1101004800);
    InitializeEvent(6, 12305300, 2300602, 2300315, 1101004800);
    InitializeEvent(7, 12305300, 2300602, 2300316, 1101004800);
    InitializeEvent(8, 12305300, 2300602, 2300317, 1101004800);
    InitializeEvent(9, 12305300, 2300602, 2300318, 1101004800);
    InitializeEvent(10, 12305300, 2300602, 2300319, 1101004800);
    InitializeEvent(11, 12305300, 2300602, 2300320, 1101004800);
    InitializeEvent(12, 12305300, 2300602, 2300321, 1101004800);
    InitializeEvent(13, 12305300, 2300602, 2300322, 1101004800);
    InitializeEvent(14, 12305300, 2300602, 2300323, 1101004800);
    InitializeEvent(15, 12305300, 2300602, 2300324, 1101004800);
    InitializeEvent(16, 12305300, 2300602, 2300403, 1101004800);
    InitializeEvent(17, 12305300, 2300602, 2300404, 1101004800);
    InitializeEvent(18, 12305300, 2300602, 2300405, 1101004800);
    InitializeEvent(19, 12305300, 2300602, 2300406, 1101004800);
    InitializeEvent(20, 12305300, 2300602, 2300407, 1101004800);
    InitializeEvent(21, 12305300, 2300602, 2300408, 1101004800);
    InitializeEvent(22, 12305300, 2300602, 2300409, 1101004800);
    InitializeEvent(23, 12305300, 2300602, 2300410, 1101004800);
    InitializeEvent(24, 12305300, 2300603, 2300309, 1108082688);
    InitializeEvent(25, 12305300, 2300603, 2300310, 1108082688);
    InitializeEvent(26, 12305300, 2300603, 2300311, 1108082688);
    InitializeEvent(27, 12305300, 2300603, 2300312, 1108082688);
    InitializeEvent(28, 12305300, 2300603, 2300313, 1108082688);
    InitializeEvent(29, 12305300, 2300603, 2300314, 1108082688);
    InitializeEvent(30, 12305300, 2300603, 2300315, 1108082688);
    InitializeEvent(31, 12305300, 2300603, 2300316, 1108082688);
    InitializeEvent(32, 12305300, 2300603, 2300317, 1108082688);
    InitializeEvent(33, 12305300, 2300603, 2300318, 1108082688);
    InitializeEvent(34, 12305300, 2300603, 2300319, 1108082688);
    InitializeEvent(35, 12305300, 2300603, 2300320, 1108082688);
    InitializeEvent(36, 12305300, 2300603, 2300321, 1108082688);
    InitializeEvent(37, 12305300, 2300603, 2300322, 1108082688);
    InitializeEvent(38, 12305300, 2300603, 2300323, 1108082688);
    InitializeEvent(39, 12305300, 2300603, 2300324, 1108082688);
    InitializeEvent(40, 12305300, 2300603, 2300403, 1108082688);
    InitializeEvent(41, 12305300, 2300603, 2300404, 1108082688);
    InitializeEvent(42, 12305300, 2300603, 2300405, 1108082688);
    InitializeEvent(43, 12305300, 2300603, 2300406, 1108082688);
    InitializeEvent(44, 12305300, 2300603, 2300407, 1108082688);
    InitializeEvent(45, 12305300, 2300603, 2300408, 1108082688);
    InitializeEvent(46, 12305300, 2300603, 2300409, 1108082688);
    InitializeEvent(47, 12305300, 2300603, 2300410, 1108082688);
    InitializeEvent(48, 12305300, 2300604, 2300318, 1108082688);
    InitializeEvent(49, 12305300, 2300604, 2300319, 1108082688);
    InitializeEvent(50, 12305300, 2300604, 2300320, 1108082688);
    InitializeEvent(51, 12305300, 2300604, 2300321, 1108082688);
    InitializeEvent(52, 12305300, 2300604, 2300322, 1108082688);
    InitializeEvent(53, 12305300, 2300604, 2300323, 1108082688);
    InitializeEvent(54, 12305300, 2300604, 2300324, 1108082688);
    InitializeEvent(55, 12305300, 2300604, 2300406, 1108082688);
    InitializeEvent(56, 12305300, 2300604, 2300407, 1108082688);
    InitializeEvent(57, 12305300, 2300604, 2300408, 1108082688);
    InitializeEvent(58, 12305300, 2300604, 2300409, 1108082688);
    InitializeEvent(59, 12305300, 2300604, 2300410, 1108082688);
    InitializeEvent(60, 12305300, 2300605, 2300318, 1108082688);
    InitializeEvent(61, 12305300, 2300605, 2300319, 1108082688);
    InitializeEvent(62, 12305300, 2300605, 2300320, 1108082688);
    InitializeEvent(63, 12305300, 2300605, 2300321, 1108082688);
    InitializeEvent(64, 12305300, 2300605, 2300322, 1108082688);
    InitializeEvent(65, 12305300, 2300605, 2300323, 1108082688);
    InitializeEvent(66, 12305300, 2300605, 2300324, 1108082688);
    InitializeEvent(67, 12305300, 2300605, 2300406, 1108082688);
    InitializeEvent(68, 12305300, 2300605, 2300407, 1108082688);
    InitializeEvent(69, 12305300, 2300605, 2300408, 1108082688);
    InitializeEvent(70, 12305300, 2300605, 2300409, 1108082688);
    InitializeEvent(71, 12305300, 2300605, 2300410, 1108082688);
    InitializeEvent(72, 12305300, 2300606, 2300325, 1103626240);
    InitializeEvent(73, 12305300, 2300606, 2300326, 1103626240);
    InitializeEvent(74, 12305300, 2300606, 2300327, 1103626240);
    InitializeEvent(75, 12305300, 2300606, 2300201, 1103626240);
    InitializeEvent(76, 12305300, 2300606, 2300202, 1103626240);
    InitializeEvent(77, 12305300, 2300606, 2300203, 1103626240);
    InitializeEvent(78, 12305300, 2300606, 2300204, 1103626240);
    InitializeEvent(79, 12305300, 2300606, 2300205, 1103626240);
    InitializeEvent(0, 12305440, 2300309, 5522);
    InitializeEvent(1, 12305440, 2300310, 5522);
    InitializeEvent(2, 12305440, 2300311, 5522);
    InitializeEvent(3, 12305440, 2300312, 5522);
    InitializeEvent(4, 12305440, 2300313, 5522);
    InitializeEvent(5, 12305440, 2300314, 5522);
    InitializeEvent(6, 12305440, 2300315, 5522);
    InitializeEvent(7, 12305440, 2300316, 5522);
    InitializeEvent(8, 12305440, 2300317, 5522);
    InitializeEvent(9, 12305440, 2300318, 5522);
    InitializeEvent(10, 12305440, 2300319, 5522);
    InitializeEvent(11, 12305440, 2300320, 5522);
    InitializeEvent(12, 12305440, 2300321, 5522);
    InitializeEvent(13, 12305440, 2300322, 5522);
    InitializeEvent(14, 12305440, 2300323, 5522);
    InitializeEvent(15, 12305440, 2300324, 5522);
    InitializeEvent(16, 12305440, 2300325, 5522);
    InitializeEvent(17, 12305440, 2300326, 5522);
    InitializeEvent(18, 12305440, 2300327, 5522);
    InitializeEvent(19, 12305440, 2300403, 5524);
    InitializeEvent(20, 12305440, 2300404, 5524);
    InitializeEvent(21, 12305440, 2300405, 5524);
    InitializeEvent(22, 12305440, 2300406, 5524);
    InitializeEvent(23, 12305440, 2300407, 5524);
    InitializeEvent(24, 12305440, 2300408, 5524);
    InitializeEvent(25, 12305440, 2300409, 5524);
    InitializeEvent(26, 12305440, 2300410, 5524);
    InitializeEvent(27, 12305440, 2300201, 5523);
    InitializeEvent(28, 12305440, 2300202, 5523);
    InitializeEvent(29, 12305440, 2300203, 5523);
    InitializeEvent(30, 12305440, 2300204, 5523);
    InitializeEvent(31, 12305440, 2300205, 5523);
    InitializeEvent(0, 12305480, 0);
    InitializeEvent(0, 12305481, 0);
    InitializeEvent(0, 12305482, 0);
    InitializeEvent(0, 12305490, 2300320, 7010);
    InitializeEvent(1, 12305490, 2300321, 7010);
    InitializeEvent(2, 12305490, 2300322, 7010);
    InitializeEvent(3, 12305490, 2300323, 7010);
    InitializeEvent(4, 12305490, 2300324, 7010);
    InitializeEvent(5, 12305490, 2300408, 7010);
    InitializeEvent(6, 12305490, 2300409, 7010);
    InitializeEvent(7, 12305490, 2300410, 7010);
    InitializeEvent(0, 12305501, 0);
    InitializeEvent(0, 12305502, 2302200, 1);
    InitializeEvent(1, 12305502, 2302060, 0);
    InitializeEvent(0, 12305510, 2300320, 2302220, 2302210, 109008, 109006);
    InitializeEvent(1, 12305510, 2300321, 2302222, 2302212, 109008, 109006);
    InitializeEvent(2, 12305510, 2300322, 2302224, 2302214, 109008, 109006);
    InitializeEvent(3, 12305510, 2300323, 2302227, 2302217, 109008, 109006);
    InitializeEvent(4, 12305510, 2300324, 2302226, 2302216, 109008, 109006);
    InitializeEvent(5, 12305510, 2300408, 2302223, 2302213, 109014, 109011);
    InitializeEvent(6, 12305510, 2300409, 2302221, 2302211, 109014, 109011);
    InitializeEvent(7, 12305510, 2300410, 2302225, 2302215, 109014, 109011);
    InitializeEvent(0, 12304020, 0);
    InitializeEvent(0, 12304021, 0);
    InitializeEvent(0, 12304022, 0);
    InitializeEvent(0, 12300700, 0);
    InitializeEvent(0, 12300701, 0);
    InitializeEvent(0, 12300702, 0);
    InitializeEvent(0, 12300703, 0);
    InitializeEvent(0, 12300704, 0);
    InitializeEvent(0, 12300705, 0);
    InitializeEvent(0, 12305701, 0);
    InitializeEvent(0, 12300707, 0);
    InitializeEvent(0, 12300708, 0);
    InitializeEvent(0, 12300710, 2300300);
    InitializeEvent(1, 12300710, 2300301);
    InitializeEvent(2, 12300710, 2300302);
    InitializeEvent(3, 12300710, 2300303);
    InitializeEvent(4, 12300710, 2300304);
    InitializeEvent(5, 12300710, 2300305);
    InitializeEvent(6, 12300710, 2300306);
    InitializeEvent(7, 12300710, 2300307);
    InitializeEvent(8, 12300710, 2300308);
    InitializeEvent(9, 12300710, 2300309);
    InitializeEvent(10, 12300710, 2300310);
    InitializeEvent(11, 12300710, 2300311);
    InitializeEvent(12, 12300710, 2300312);
    InitializeEvent(13, 12300710, 2300313);
    InitializeEvent(14, 12300710, 2300314);
    InitializeEvent(15, 12300710, 2300315);
    InitializeEvent(16, 12300710, 2300316);
    InitializeEvent(17, 12300710, 2300317);
    InitializeEvent(18, 12300710, 2300318);
    InitializeEvent(19, 12300710, 2300319);
    InitializeEvent(20, 12300710, 2300320);
    InitializeEvent(21, 12300710, 2300321);
    InitializeEvent(22, 12300710, 2300322);
    InitializeEvent(23, 12300710, 2300323);
    InitializeEvent(24, 12300710, 2300324);
    InitializeEvent(25, 12300710, 2300400);
    InitializeEvent(26, 12300710, 2300401);
    InitializeEvent(27, 12300710, 2300402);
    InitializeEvent(28, 12300710, 2300403);
    InitializeEvent(29, 12300710, 2300404);
    InitializeEvent(30, 12300710, 2300405);
    InitializeEvent(31, 12300710, 2300600);
    InitializeEvent(32, 12300710, 2300601);
    InitializeEvent(33, 12300710, 2300720);
    InitializeEvent(0, 12300750, 0);
    InitializeEvent(0, 12300752, 0);
    InitializeEvent(0, 12300753, 0);
    InitializeEvent(0, 12300990, 0);
});

// preconstructor
$Event(50, Default, function() {
    SetCharacterAnimationState(2303950, Disabled);
    SetCharacterGravity(2303950, Disabled);
    SetCharacterMaphits(2303950, true);
    SetCharacterAnimationState(2303951, Disabled);
    SetCharacterGravity(2303951, Disabled);
    SetCharacterMaphits(2303951, true);
});

$Event(12302300, Default, function() {
    WaitFixedTimeSeconds(0.5);
    ActivateMapPart(2304000, Disabled);
});

// Boss Defeat_Bloodthirsty Beast
$Event(12301800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2303802, Disabled);
        SetMapSoundState(2303803, Disabled);
        ChangeCharacterEnableState(2300800, Disabled);
        ForceCharacterDeath(2300800, false);
        DeactivateObject(2301800, Disabled);
        DeleteMapSFX(2303800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2301800, Disabled);
    DeleteMapSFX(2303800, true);
    SetLockcamSlotNumber(23, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2300800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        SetEventFlag(72400512, ON);
        AwardAchievement(22);
        if (!EventFlag(bsb_defeat+13)) {
            AwardItemLot(80000000);
        }
        SetEventFlag(2300, ON);
        SetEventFlag(9453, ON);
        EndTimeMeasurement(2300000);
        EndTimeMeasurement(2300001);
        EndTimeMeasurement(2300010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(bsb_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(bsb_offset, 7800, bsb_lamp_id+1000, 823000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss attack SE play_Bloodthirsty beast
$Event(12301801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    flag = EventFlag(12301800);
    WaitFor(flag || (!CharacterBackreadStatus(2300800) && HPRatio(2300800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2302800, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_first_bloodthirsty beast
$Event(12301802, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12301800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2302805)
            && HasMultiplayerState(MultiplayerState.Host));
    ForceAnimationPlayback(2300800, 7001, false, false, false);
    SetEventFlag(12304800, ON);
    EndIf(EventFlag(9339));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9339, ON);
});

// Bloodthirsty Beast_Measures for guests entering at different times
$Event(12301803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12304800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(12304800, ON);
    SetEventFlag(12301802, ON);
});

// Host enters boss room_Rematch_Bloodthirsty beast
$Event(12304810, Default, function() {
    EndIf(EventFlag(12301800));
    if (!EventFlag(12301802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2301800, Disabled);
            DeleteMapSFX(2303800, false);
        }
        WaitFor(!EventFlag(12301800) && EventFlag(12301802));
        DeactivateObject(2301800, Enabled);
        SpawnMapSFX(2303800);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2300800, 2301800)
        && !EventFlag(12301800);
    flag = EventFlag(12301800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2302801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Bloodthirsty beast
$Event(12304811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    WaitFor(
        !EventFlag(12301800)
            && EventFlag(12301802)
            && EventFlag(12304800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2300800, 2301800));
    RotateCharacter(10000, 2302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2302801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304801, ON);
    }
    RestartEvent();
});

// Invalid for fog walls in other people's world_Bloodthirsty beast
$Event(12304812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_Bloodthirsty beast
$Event(12304813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2301800, 4)
            && EntityInRadiusOfEntity(10000, 2301800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss moves_Bloodthirsty beast
$Event(12304802, Default, function() {
    EndIf(EventFlag(12301800));
    SetCharacterAIState(2300800, Disabled);
    SetCharacterHPBarDisplay(2300800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12304800) || EventFlag(bsb_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2300800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12304800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2300800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300800);
    Goto(L4);
L3:
    SetSpEffect(2300800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300800);
    Goto(L4);
L4:
    if (EventFlag(bsb_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2300800, Enabled);
    DisplayBossHealthBar(Enabled, 2300800, 0, 209000);
    CreatePlaylog(86);
    StartTimeMeasurement(2300010, 102, Enabled);
});

// Boss BGM ON_Bloodthirsty beast
$Event(12304803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    if (!ThisEvent()) {
        SetMapSoundState(2303802, Disabled);
        SetMapSoundState(2303803, Disabled);
        flagArea &= !EventFlag(12301800) && EventFlag(12304802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12304801);
        }
        flagArea &= InArea(10000, 2302801);
        WaitFor(flagArea);
        EnableBossMapSound(2303802, Enabled);
        flagArea2 &= EventFlag(12304808);
    }
L0:
    flagArea2 &= !EventFlag(12301800) && EventFlag(12304802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12304801);
    }
    flagArea2 &= InArea(10000, 2302801);
    WaitFor(flagArea2);
    EnableBossMapSound(2303802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2303803, Enabled);
});

// Boss Camera_Bloodthirsty Beast
$Event(12304804, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && EventFlag(12304800))
            || (CharacterType(10000, TargetType.WhitePhantom) && EventFlag(12304801)));
    SetLockcamSlotNumber(23, 0, 1);
});

// Boss BGM OFF_Bloodthirsty beast
$Event(12304805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301800));
    WaitFor(EventFlag(12301800));
    EnableBossMapSound(2303802, Disabled);
    EnableBossMapSound(2303803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss heat up_1st_Bloodthirsty beast
$Event(12304807, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(2300800) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(2300800, Interpolation.Uninterpolated);
    ForceAnimationPlayback(2300800, 7010, false, false, false);
    RequestCharacterAICommand(2300800, 100, 0);
    RequestCharacterAIReplan(2300800);
    WaitFor(CharacterHasEventMessage(2300800, 10));
    RequestCharacterAICommand(2300800, -1, 0);
    RequestCharacterAIReplan(2300800);
});

// Boss heat up_2nd_Bloodthirsty beast
$Event(12304808, Default, function() {
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(2300800) < 0.33 && EventFlag(12304807));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(2300800, Interpolation.Uninterpolated);
    ForceAnimationPlayback(2300800, 7011, false, false, false);
    RequestCharacterAICommand(2300800, 101, 0);
    RequestCharacterAIReplan(2300800);
    WaitFor(CharacterHasEventMessage(2300800, 20));
    RequestCharacterAICommand(2300800, -1, 0);
    RequestCharacterAIReplan(2300800);
});

// Boss Defeat_Storm Beast Bone
$Event(12301700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2303812, Disabled);
        SetMapSoundState(2303813, Disabled);
        ChangeCharacterEnableState(2300810, Disabled);
        ForceCharacterDeath(2300810, false);
        DeactivateObject(2301810, Disabled);
        DeactivateObject(2301811, Disabled);
        DeleteMapSFX(2303810, false);
        DeleteMapSFX(2303811, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300810));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2301810, Disabled);
    DeactivateObject(2301811, Disabled);
    DeleteMapSFX(2303810, true);
    DeleteMapSFX(2303811, true);
    SetLockcamSlotNumber(23, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2300810);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(24);
        if (!EventFlag(paarl_defeat+13)) {
            if (!EventFlag(6644)) {
                AwardItemLot(50800000);
            } else {
                AwardItemLot(50800005);
            }
        }
        SetEventFlag(2301, ON);
        SetEventFlag(9454, ON);
        EndTimeMeasurement(2300000);
        EndTimeMeasurement(2300001);
        EndTimeMeasurement(2300010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 120, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 120, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(paarl_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(paarl_offset, 7800, paarl_lamp_id+1000, 823001);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE play_Storm Beast Bone
$Event(12301701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    flag = EventFlag(12301700);
    WaitFor(flag || (!CharacterBackreadStatus(2300810) && HPRatio(2300810) <= 0));
    EndIf(flag.Passed);
    PlaySE(2302810, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_First battle_Storm Beast Bone
$Event(12301702, Default, function() {
    EndIf(ThisEvent());
    EndIf(ThisEvent());
    SetCharacterInvincibility(2300810, Enabled);
    ForceAnimationPlayback(2300810, 7000, true, false, false);
    WaitFor(
        !EventFlag(12301700)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(2300810, 10000, 16));
    ForceAnimationPlayback(2300810, 7001, false, false, false);
    WaitFixedTimeFrames(70);
    SetCharacterInvincibility(2300810, Disabled);
    SetEventFlag(12304700, ON);
    EndIf(EventFlag(9340));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9340, ON);
});

// Beast bones of the storm_Measures for guests entering at different times
$Event(12301703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12304700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetCharacterInvincibility(2300810, Disabled);
    SetEventFlag(12304700, ON);
    SetEventFlag(12301702, ON);
});

// Host enters boss room_Rematch_Storm Beast Bone
$Event(12304730, Default, function() {
    EndIf(EventFlag(12301700));
    if (!EventFlag(12301702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2301810, Disabled);
            DeleteMapSFX(2303810, false);
        }
        DeactivateObject(2301811, Disabled);
        DeleteMapSFX(2303811, false);
        WaitFor(!EventFlag(12301700) && EventFlag(12301702));
        DeactivateObject(2301810, Enabled);
        DeactivateObject(2301811, Enabled);
        SpawnMapSFX(2303810);
        SpawnMapSFX(2303811);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2300800, 2301810)
        && !EventFlag(12301700);
    flag = EventFlag(12301700);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2302810, 101130, true);
    if (!ThisEvent()) {
        RotateCharacter(2300810, 10000, 3008, false);
    }
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2302811);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304700, ON);
    }
    RestartEvent();
});

// Guest enters boss room_Storm Beast Bone
$Event(12304731, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(
        !EventFlag(12301700)
            && EventFlag(12301702)
            && EventFlag(12304700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2300800, 2301810));
    RotateCharacter(10000, 2302810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2302811);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12304701, ON);
    }
    RestartEvent();
});

// Ineffective against fog walls in other people's worlds_Storm Beast Bone
$Event(12304732, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2301810, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_Storm Beast Bone
$Event(12304733, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2301810, 4)
            && EntityInRadiusOfEntity(10000, 2301810, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// The boss begins to move_Storm Beast Bone
$Event(12304702, Default, function() {
    EndIf(EventFlag(12301700));
    SetCharacterAIState(2300810, Disabled);
    SetCharacterHPBarDisplay(2300810, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12304700) || EventFlag(paarl_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2300810, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12304700, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2300810, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300810);
    Goto(L4);
L3:
    SetSpEffect(2300810, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2300810);
    Goto(L4);
L4:
    if (EventFlag(paarl_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(2300810, Enabled);
    DisplayBossHealthBar(Enabled, 2300810, 0, 508000);
    CreatePlaylog(86);
    StartTimeMeasurement(2300010, 102, Enabled);
});

// Boss BGM ON_Storm Beast Bone
$Event(12304703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    if (!ThisEvent()) {
        SetMapSoundState(2303812, Disabled);
        SetMapSoundState(2303813, Disabled);
        flagArea &= !EventFlag(12301700) && EventFlag(12304702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12304701);
        }
        flagArea &= InArea(10000, 2302812);
        WaitFor(flagArea);
        EnableBossMapSound(2303812, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2300810, 20);
    }
L0:
    chrFlagArea &= !EventFlag(12301700) && EventFlag(12304702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12304701);
    }
    chrFlagArea &= InArea(10000, 2302812);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2303812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2303813, Enabled);
});

// Boss Camera_Storm Beast Bone
$Event(12304704, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(HPRatio(2300810) > 0 && EntityInRadiusOfEntity(10000, 2300810, 10));
    SetLockcamSlotNumber(23, 0, 1);
    WaitFor(HPRatio(2300810) > 0 && !EntityInRadiusOfEntity(10000, 2300810, 12));
    SetLockcamSlotNumber(23, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_Storm Beast Bone
$Event(12304705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12301700));
    WaitFor(EventFlag(12301700));
    EnableBossMapSound(2303812, Disabled);
    EnableBossMapSound(2303813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss Heat Up_Storm Beast Bone
$Event(12304707, Restart, function() {
    EndIf(EventFlag(12301700));
    RequestCharacterAICommand(2300810, 2, 1);
    WaitFor(HPRatio(2300810) < 0.67 && CharacterHasSpEffect(2300810, 5402));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(2300810, 100, 2);
    RequestCharacterAIReplan(2300810);
    WaitFor(CharacterHasEventMessage(2300810, 20));
    RequestCharacterAICommand(2300810, -1, 2);
    RequestCharacterAIReplan(2300810);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(2300810, 3, 1);
});

// Boss_Part damage_Storm beast bone_XX
$Event(12304715, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(12301700));
    CreateNPCPart(2300810, X0_2, X8_2, X24_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(2300810, X4_4, 77, 77);
    hp = NPCPartHP(2300810, X4_4) <= 0;
    hp2 = HPRatio(2300810) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(2300810, 10, 2);
    CreateNPCPart(2300810, X0_2, X8_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2300810, X4_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(2300810, Interpolation.Interpolated);
    ForceAnimationPlayback(2300810, X20_4, false, false, false);
    SetSpEffect(2300810, X12_4, true);
    ClearSpEffect(2300810, X16_4);
    RequestCharacterAIReplan(2300810);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(2300810, 110, 0);
    RequestCharacterAIReplan(2300810);
    WaitFor(CharacterHasEventMessage(2300810, 300));
    SetNPCPartHP(2300810, X4_4, -1, true);
    SetSpEffect(2300810, X16_4, true);
    ClearSpEffect(2300810, X12_4);
    RequestCharacterAICommand(2300810, -1, 0);
    RequestCharacterAIReplan(2300810);
    ChangeCharactersCloth(2300810, 10, 1);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ★Ruins_New NPC summon_Aim for the boss room_XX
$Event(12304450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★Ruins_New NPC summoning_Summonability determination_Alfreto
$Event(12304400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★Ruins_New NPC summons_Summonability determination_Yahaguru equipment
$Event(12304401, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★Ruins_New NPC summoning_Summonability determination_Federation: Yamamura
$Event(12304402, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★Ruins_New NPC Summon_Participation_XX
$Event(12304410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
    }
    GotoIf(S0, EventFlag(X16_4));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(X12_4));
S0:
    ChangeCharacterEnableState(X4_4, Disabled);
S1:
    EndIf(EventFlag(X24_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X4_4, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(X12_4)
            && !EventFlag(X16_4)
            && EventFlag(X20_4)
            && !EventFlag(X24_4)
            && ActionButtonInArea(X28_4, X4_4));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(X0_4, X4_4, X8_4, X12_4, X16_4);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★Ruins_New NPC summon_Enter boss room_XX
$Event(12304460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X20_4) && InArea(X0_4, X4_4));
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RotateCharacter(X0_4, X8_4, X16_4, true);
    RestartIf(!InArea(X0_4, X12_4));
    SetEventPoint(X0_4, X8_4, 1);
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(InArea(X0_4, X24_4));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Bogus NPC summon_cooperation_participation
$Event(12304500, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2300740, Enabled);
        SetSpEffect(2300740, 9006, false);
        ChangeCharacterEnableState(2300740, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2300740, Disabled);
    SetCharacterAIState(2300740, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2300740, AuthorityLevel.Forced);
    }
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12304508)
            && InArea(10000, 2302721)
            && !EventFlag(12301800)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    WaitFixedTimeSeconds(5);
    SetEventFlag(12304509, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2300740, Enabled);
    SetSpEffect(2300740, 9006, false);
    ChangeCharacterEnableState(2300740, Enabled);
    ForceAnimationPlayback(2300740, 101201, false, true, false);
    SetCharacterAIState(2300740, Enabled);
});

// Bogus NPC summon_cooperation_return
$Event(12304501, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304502));
L0:
    ChangeCharacterEnableState(2300740, Disabled);
    SetCharacterDefaultBackreadState(2300740, Disabled);
});

// Bogus NPC summon_cooperation_return_success
$Event(12304502, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304500) && !EventFlag(12304501) && EventFlag(12301800));
L0:
    RequestCharacterAICommand(2300740, 991, 0);
    RequestCharacterAIReplan(2300740);
    WaitFixedTimeSeconds(1);
    SetSpEffect(2300740, 5560, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2300740, 236, 121);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2300740, Disabled);
});

// Bogus NPC Summon_Cooperation_Aim for the boss room
$Event(12304504, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(EventFlag(12304505));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12301800)
            && EventFlag(12304500)
            && !EventFlag(12304501)
            && EventFlag(12301802)
            && EventFlag(12304800)
            && !InArea(2300740, 2302801));
L0:
    SetEventPoint(2300740, 2302722, 1);
    RequestCharacterAICommand(2300740, 990, 0);
    RequestCharacterAIReplan(2300740);
});

// Bogus NPC summon_cooperation_enter the boss room
$Event(12304505, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12301800));
    EndIf(EventFlag(12304501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12304504) && InArea(2300740, 2302722));
    RequestCharacterAnimationReset(2300740, Interpolation.Interpolated);
    RotateCharacter(2300740, 2302800, 101130, true);
    RequestCharacterAICommand(2300740, -1, 0);
    RequestCharacterAIReplan(2300740);
});

// Cooperative Bloodline Hunt_Messenger
$Event(12304506, Restart, function() {
    SetVisibilityOfMessage(2303300, Disabled);
    DeleteMapSFX(2303400, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12301800)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    SetVisibilityOfMessage(2303300, Enabled);
    SpawnMapSFX(2303400);
    WaitFor(EventFlag(12304509) || EventFlag(12301800));
    SetVisibilityOfMessage(2303300, Disabled);
    DeleteMapSFX(2303400, true);
});

// Bogus NPC Summon_Judgment at the moment of ringing the bell_Ruins
$Event(12304507, Restart, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
    SetEventFlag(12304508, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12304508, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// The hound jumps out
$Event(12300100, Restart, function() {
    if (ThisEventSlot()) {
        WarpCharacterAndSetFloor(2300204, TargetEntityType.Area, 2302300, -1, 2306000);
        ReproduceObjectDestruction(2301000, 1);
        EndEvent();
    }
L0:
    SetCharacterGravity(2300204, Disabled);
    SetCharacterAIState(2300204, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302000) || EntityInRadiusOfEntity(10000, 2300204, 7)))
            || HasDamageType(2300204, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300204, 7015, false, false, false);
    SetCharacterGravity(2300204, Enabled);
    SetCharacterAIState(2300204, Enabled);
    SetCharacterHome(2300204, 2302300);
    RequestCharacterAIReplan(2300204);
});

// Msg_XX when examining one-way door
$Event(12300110, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    act = ActionButtonInArea(X0_4, X4_4);
    flag = EventFlag(X8_4);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
        WaitFixedTimeSeconds(0);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(0);
    RestartEvent();
});

// Door opening process_XX
$Event(12300120, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X8_4);
        SetObjactState(X0_4, X12_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeSeconds(0);
});

// Examine the altar
$Event(12300130, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    CreateObjectfollowingSFX(2301500, 200, 900201);
    WaitFor(ActionButtonInArea(2300000, 2301500));
    AwardItemLot(2300170);
    DeleteObjectfollowingSFX(2301500, true);
});

// Performance style playback
$Event(12300140, Restart, function() {
    DeleteMapSFX(2303002, true);
    EndIf(ThisEventSlot());
    WaitFor(InArea(10000, 2303000));
    DeleteMapSFX(2303010, true);
    SpawnMapSFX(2303002);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(2303010);
});

// Disable ritual sound
$Event(12300160, Restart, function() {
    if (!EventFlag(12300240)) {
        WaitFor(
            CharacterAIState(2300605, AIStateType.Combat)
                || EventFlag(12300240)
                || EventFlag(12305392)
                || EventFlag(12305393));
    }
L0:
    SetMapSoundState(2304020, Disabled);
});

// Warning door_opening process
$Event(12300180, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2301020, 1);
        SetObjactState(2301020, 2300011, Disabled);
        NotifySoundDampeningOfDoorEvent(2301020, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    SetObjactState(2301020, 2300011, Disabled);
    WaitFor(EventFlag(12300190));
    SetObjactState(2301020, 2300011, Enabled);
    WaitFor(ObjActEventFlag(12300214));
    WaitFixedTimeSeconds(0);
});

// Msg when examining the warning door
$Event(12300190, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2300020, 2301020));
    EndIf(!CharacterType(10000, TargetType.Alive));
    DisplayGenericDialog(10010165, PromptType.OKCANCEL, NumberofOptions.OneButton, 2301020, 3);
});

// Reach the bottom layer
$Event(12300201, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12301800));
    SetEventFlag(12300200, ON);
});

// NPC death
$Event(12300210, Restart, function() {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(2300720);
        SetCharacterBackreadState(2300720, true);
        ChangeCharacterEnableState(2300720, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300720));
    SetCharacterBackreadState(2300720, true);
});

// Wandering Madness_XX
$Event(12300220, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(X4_4);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// Ruins Hunter Smoke Utilization Attack
$Event(12300230, Restart, function() {
    WaitFor(InArea(2300720, 2302180) || InArea(2300720, 2302181) || InArea(2300720, 2302182));
    RequestCharacterAICommand(2300720, 100, 0);
    WaitFor(!InArea(2300720, 2302180) && !InArea(2300720, 2302181) && !InArea(2300720, 2302182));
    RequestCharacterAICommand(2300720, -1, 0);
    RestartEvent();
});

// Return to Ruins Hunter Defense Area
$Event(12300235, Restart, function() {
    WaitFor(!InArea(2300720, 2302190));
    RequestCharacterAICommand(2300720, 110, 0);
    WaitFor(InArea(2300720, 2302190));
    RequestCharacterAICommand(2300720, -1, 0);
    RestartEvent();
});

// Divine body on fire
$Event(12300240, Restart, function() {
    if (ThisEvent()) {
        ModifyNavimeshConnectionBitflag(2303070, NavimeshType.Solid, BitopType.Add);
        ReproduceObjectAnimation(2301322, 1);
        CreateObjectfollowingSFX(2301323, 750, 923240);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(2301320));
    ModifyNavimeshConnectionBitflag(2303070, NavimeshType.Solid, BitopType.Add);
    ForceAnimationPlayback(2301322, 1, false, true, false);
    DeactivateObject(2301322, Disabled);
    CreateObjectfollowingSFX(2301323, 750, 923240);
});

// Damage judgment to the divine flame
$Event(12300250, Restart, function() {
    WaitFor(EventFlag(12300240));
    CreateDamagingObject(12300251, 2301450, 200, 6110, DamageTargetType.Character, 4.5, 0, 1);
    CreateDamagingObject(12300252, 2301451, 200, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12300253, 2301452, 200, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12300254, 2301453, 200, 6110, DamageTargetType.Character, 0.7, 0, 1);
    CreateDamagingObject(12300255, 2301454, 200, 6110, DamageTargetType.Character, 1.2, 0, 1);
    CreateDamagingObject(12300256, 2301455, 200, 6110, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12300257, 2301456, 200, 6110, DamageTargetType.Character, 0.8, 0, 1);
    CreateDamagingObject(12300258, 2301457, 200, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12300259, 2301458, 200, 6110, DamageTargetType.Character, 1, 0, 1);
});

// Time zone change_Ruins
$Event(12300300, Default, function() {
    if (!EventFlag(9802) || EventFlag(12100856)) {
        if (EventFlag(12100956)) {
            GotoIf(L0, EventFlag(9801));
        }
        else {
            BatchSetEventFlags(12305000, 12305001, OFF);
            RandomlySetEventFlagInRange(12305000, 12305001, ON);
            WaitFixedTimeFrames(1);
            GotoIf(L0, EventFlag(12305000));
        }
        ActivateMapPart(2306010, Enabled);
        ActivateMapPart(2306011, Disabled);
        ActivateMapPart(2304000, Disabled);
    } else {
L0:
        ActivateMapPart(2306010, Disabled);
        ActivateMapPart(2306011, Enabled);
        ActivateMapPart(2304000, Enabled);
        DeleteMapSFX(2303600, false);
        DeleteMapSFX(2303601, false);
        DeleteMapSFX(2303602, false);
        DeleteMapSFX(2303603, false);
        DeleteMapSFX(2303604, false);
        DeleteMapSFX(2303605, false);
        DeleteMapSFX(2303606, false);
        DeleteMapSFX(2303607, false);
        DeleteMapSFX(2303608, false);
        DeleteMapSFX(2303609, false);
        DeleteMapSFX(2303610, false);
        DeleteMapSFX(2303611, false);
        DeleteMapSFX(2303612, false);
        DeleteMapSFX(2303613, false);
        DeleteMapSFX(2303614, false);
        Goto(L1);
    }
L1:
    if (EventFlag(12102036) && EventFlag(12100856)) {
        Goto(L2);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
L2:
    WaitFor(EventFlag(12102065));
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// Treasure Chest_XX
$Event(12300310, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// Wandering madness guides
$Event(12305000, Restart, function() {
    EndIf(EventFlag(12305001));
    if (!ThisEvent()) {
        SetCharacterAIState(2300250, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2300250, 10000, 10))
                || HasDamageType(2300250, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIState(2300250, Enabled);
    WaitFixedTimeFrames(1);
    SetCharacterHome(2300250, 2302310);
    RequestCharacterAICommand(2300250, 10, 0);
    RequestCharacterAIReplan(2300250);
});

// Wandering madness leads_disappears
$Event(12305001, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(InArea(2300250, 2302310));
    ForceAnimationPlayback(2300250, 3000, false, false, false);
    RequestCharacterAICommand(2300250, -1, 0);
    RequestCharacterAIReplan(2300250);
});

// A sleeping guy is attacked_XX
$Event(12305010, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        SetEventState(12305140, X8_4, EventEndType.End);
        SetEventState(12305160, X8_4, EventEndType.End);
        EndEvent();
    }
L0:
    chr = (CharacterAIState(2300305, AIStateType.Combat) && !CharacterDead(2300305))
        || (CharacterAIState(2300305, AIStateType.Combat) && !CharacterDead(2300305))
        || (CharacterAIState(2300401, AIStateType.Combat) && !CharacterDead(2300401));
    chr2 = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr2 && InArea(10000, 2302147) && chr)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterHasSpEffect(X0_4, 4670));
    WaitFixedTimeSeconds(3);
    SetCharacterAIId(X0_4, X12_4);
    ShootBullet(2300900, X0_4, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12305140, X8_4, EventEndType.End);
    SetEventState(12305160, X8_4, EventEndType.End);
});

// Gatling turns on logic
$Event(12305020, Restart, function() {
    SetCharacterAIState(2300730, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302020) || InArea(10000, 2302021))
            && !EventFlag(1325)
            && !CharacterDead(2300710));
    SetCharacterAIState(2300730, Enabled);
});

// Gatling complete stop
$Event(12305021, Restart, function() {
    if (!EventFlag(1324)) {
        WaitFor(CharacterDead(2300710) || EventFlag(1324));
    }
L0:
    ForceAnimationPlayback(2300730, 7000, true, false, false);
});

// Gatling alignment
$Event(12305022, Restart, function() {
    SetCharacterGravity(2300730, Disabled);
    SetCharacterMaphits(2300730, true);
});

// Gatling pause
$Event(12305023, Restart, function() {
    chr = CharacterAIState(2300710, AIStateType.Combat);
    chr2 = CharacterDead(2300710);
    WaitFor(chr || chr2);
    EndIf(chr2.Passed);
    ForceAnimationPlayback(2300730, 7000, true, false, false);
    chr3 = CharacterAIState(2300710, AIStateType.Normal);
    chr4 = CharacterDead(2300710);
    WaitFor(chr3 || chr4);
    EndIf(chr4.Passed);
    ForceAnimationPlayback(2300730, 7001, false, true, false);
    RestartEvent();
});

// Sniper aims to detonate
$Event(12305030, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4)
            && !ObjectDestroyed(X4_4));
    SetCharacterEventTarget(2300730, X8_4);
    RequestCharacterAICommand(2300730, 100, 0);
    RequestCharacterAIReplan(2300730);
    WaitFor(CharacterHasEventMessage(2300730, 100));
    RequestCharacterAICommand(2300730, -1, 0);
    RequestCharacterAIReplan(2300730);
    RestartEvent();
});

// Explosive jar_XX
$Event(12305040, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    dmg = HasDamageType(X0_4, -1, DamageType.Fire) || HasDamageType(X0_4, -1, DamageType.None);
    WaitFor(
        dmg
            || ((HasDamageType(X0_4, -1, DamageType.Magic)
                || HasDamageType(X0_4, -1, DamageType.Lightning)
                || HasDamageType(X0_4, -1, DamageType.Blunt)
                || HasDamageType(X0_4, -1, DamageType.Slash)
                || HasDamageType(X0_4, -1, DamageType.Thrust))
                && ObjectHP(X0_4) <= 999));
    if (!dmg.Passed) {
        ShootBullet(X4_4, X0_4, -1, 6051, 270, 0, 0);
        RequestObjectDestruction(X0_4, 1);
        PlaySE(X0_4, SoundType.oObject, 299961000);
        EndEvent();
    }
L0:
    ShootBullet(X4_4, X0_4, -1, 6055, 270, 0, 0);
    ShootBullet(X4_4, X0_4, -1, 6071, 0, 90, 0);
    RequestObjectDestruction(X0_4, 1);
    PlaySE(X0_4, SoundType.oObject, 299961000);
});

// A monster the size of a strange beast pops out.
$Event(12305070, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectDestruction(2301310, 1);
        EndEvent();
    }
L0:
    SetCharacterAIState(2300601, Disabled);
    SetCharacterGravity(2300601, Disabled);
    SetCharacterMaphits(2300601, true);
    SetCharacterAnimationState(2300601, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302040) || EntityInRadiusOfEntity(10000, 2300601, 3)))
            || HasDamageType(2300520, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300601, 7014, false, false, false);
    SetCharacterAIState(2300601, Enabled);
    SetCharacterAnimationState(2300601, Enabled);
    WaitFixedTimeFrames(30);
    SetCharacterGravity(2300601, Enabled);
    SetCharacterMaphits(2300601, false);
});

// Sleeping strange beast attacks II_XX
$Event(12305075, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        SetEventState(12305140, X8_4, EventEndType.End);
        SetEventState(12305160, X8_4, EventEndType.End);
        EndEvent();
    }
L0:
    WaitFor(
        EventFlag(12305070)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterHasSpEffect(X0_4, 4670));
    SetCharacterAIId(X0_4, X12_4);
    ShootBullet(2300900, X0_4, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12305140, X8_4, EventEndType.End);
    SetEventState(12305160, X8_4, EventEndType.End);
});

// hide in the smoke
$Event(12305080, Restart, function() {
    EndIf(AnyBatchEventFlags(12305081, 12305082));
    if (!ThisEvent()) {
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302010) || EntityInRadiusOfEntity(10000, 2300314, 10));
        flag = AnyBatchEventFlags(12305081, 12305082);
        WaitFor(chrArea || flag || HasDamageType(2300314, -1, DamageType.Unspecified));
        EndIf(flag.Passed);
    }
L0:
    SetCharacterHome(2300314, 2302350);
    RequestCharacterAICommand(2300314, 10, 0);
    RequestCharacterAIReplan(2300314);
});

// Waiting in the smoke
$Event(12305081, Restart, function() {
    EndIf(EventFlag(12305082));
    if (!ThisEvent()) {
        WaitFor(InArea(2300314, 2302050));
    }
L0:
    RequestCharacterAICommand(2300314, 30, 0);
    RequestCharacterAIReplan(2300314);
});

// Cancel wait
$Event(12305082, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302011) || EntityInRadiusOfEntity(10000, 2300314, 3)));
    RequestCharacterAICommand(2300314, -1, 0);
    RequestCharacterAIReplan(2300314);
});

// Big explosion_XX
$Event(12305090, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(12300240));
    WaitFor(EventFlag(12300240));
    WaitFixedTimeFrames(X0_4);
    ShootBullet(2300900, X4_4, 101, 6070, 0, 0, 0);
});

// Frightened strange beast_XX
$Event(12305100, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(12300240)) {
        WaitFor(
            EventFlag(12300240) && InArea(X0_4, X4_4) && CharacterAIState(X0_4, AIStateType.Normal));
        WaitFixedTimeFrames(X8_4);
    }
L0:
    ForceAnimationPlayback(X0_4, 7012, true, false, false);
});

// Strange Beast Death_XX
$Event(12305110, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(12300240));
    WaitFor(EventFlag(12300240) && CharacterAIState(X0_4, AIStateType.Normal));
    WaitFixedTimeFrames(X4_4);
    ForceCharacterDeath(X0_4, true);
});

// Disturbing strange beast
$Event(12305120, Restart, function() {
    WaitFor(EventFlag(12300240) && CharacterAIState(2300605, AIStateType.Normal));
    SetCharacterEventTarget(2300605, 2300921);
    RequestCharacterAICommand(2300605, 60, 0);
    WaitFor(CharacterAIState(2300605, AIStateType.Combat));
    RequestCharacterAICommand(2300605, -1, 0);
    RestartEvent();
});

// Sleeping strange beast attacks III_XX
$Event(12305121, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        SetEventState(12305140, X8_4, EventEndType.End);
        SetEventState(12305160, X8_4, EventEndType.End);
        EndEvent();
    }
L0:
    cond = cond2;
    WaitFor(
        CharacterAIState(2300201, AIStateType.Combat)
            || CharacterAIState(2300202, AIStateType.Combat)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterHasSpEffect(X0_4, 4670));
    SetCharacterAIId(X0_4, X12_4);
    ShootBullet(2300900, X0_4, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12305140, X8_4, EventEndType.End);
    SetEventState(12305160, X8_4, EventEndType.End);
});

// Hound's first roar
$Event(12305125, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterAIState(2300201, AIStateType.Combat));
    RotateCharacter(2300201, 10000, 3008, false);
});

// Sticking Hound
$Event(12305130, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterGravity(2300203, Disabled);
    SetCharacterMaphits(2300203, true);
    SetCharacterAIState(2300203, Disabled);
    ForceAnimationPlayback(2300203, 7016, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2302090) || EntityInRadiusOfEntity(10000, 2300203, 5)))
            || HasDamageType(2300203, -1, DamageType.Unspecified));
    ForceAnimationPlayback(2300203, 7017, false, false, false);
    SetCharacterGravity(2300203, Enabled);
    SetCharacterMaphits(2300203, false);
    SetCharacterAIState(2300203, Enabled);
    RequestCharacterAIReplan(2300203);
});

// Sleeping strange beast attacks IV_XX
$Event(12305135, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        SetEventState(12305140, X8_4, EventEndType.End);
        SetEventState(12305160, X8_4, EventEndType.End);
        EndEvent();
    }
L0:
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2302148))
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterHasSpEffect(X0_4, 4670));
    SetCharacterAIId(X0_4, X12_4);
    ShootBullet(2300900, X0_4, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    SetEventState(12305140, X8_4, EventEndType.End);
    SetEventState(12305160, X8_4, EventEndType.End);
});

// The sleeping person is about to wake up.
$Event(12305140, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    SetCharacterAIId(X0_4, X12_4);
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 2) || CharacterAIState(X0_4, AIStateType.Alert));
    SetCharacterAIId(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Those who are about to wake up will wake up.
$Event(12305160, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterHasSpEffect(X0_4, 4670));
    SetEventState(12305140, X8_4, EventEndType.End);
    WaitFixedTimeFrames(1);
    SetCharacterAIId(X0_4, X12_4);
    ShootBullet(2300900, X0_4, 90, 6031, 0, 0, 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// Enemy logic ON_XX
$Event(12305180, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)))
            || CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeSeconds(X12_4);
    SetCharacterAIState(X0_4, Enabled);
});

// A strange beast is afraid of torches_XX
$Event(12305190, Restart, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, X0_4, 4));
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 404));
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// The hounds return to their nests
$Event(12305250, Restart, function() {
    WaitFor(InArea(10000, 2302070));
    RequestCharacterAICommand(2300200, 100, 1);
    WaitFor(!InArea(10000, 2302070));
    RequestCharacterAICommand(2300200, -1, 1);
    RestartEvent();
});

// Surrounding reinforcement_XX
$Event(12305300, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        CharacterHasEventMessage(X0_4, 10)
            && EntityInRadiusOfEntity(X0_4, X4_4, X8_4)
            && !CharacterDead(X4_4)
            && CharacterBackreadStatus(X4_4));
    RequestCharacterAICommand(X4_4, 200, 1);
    WaitFor(CharacterHasEventMessage(X4_4, 20));
    SetSpEffect(X4_4, 5645, false);
    RequestCharacterAICommand(X4_4, -1, 1);
    RestartEvent();
});

// Surrounding reinforcement_Hound poisoning_XX
$Event(12305440, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5645));
    SetSpEffect(X0_4, X4_4, false);
    WaitFor(!CharacterHasSpEffect(X0_4, 5645));
    ClearSpEffect(X0_4, X4_4);
    RestartEvent();
});

// Surrounding reinforcement_Jumping fbsb the passageway
$Event(12305480, Restart, function() {
    EndIf(EventFlag(12305481));
    if (!ThisEventSlot()) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        chrArea = chr && InArea(10000, 2302101);
        chrArea2 = chr && EntityInRadiusOfEntity(2300406, 10000, 3);
        WaitFor(chrArea || chrArea2 || HasDamageType(2300406, -1, DamageType.Unspecified));
        EndIf(chrArea2.Passed);
    }
L0:
    SetCharacterHome(2300406, 2302410);
    RequestCharacterAICommand(2300406, 10, 0);
    RequestCharacterAIReplan(2300406);
});

// Surrounding reinforcement_Complete jumping fbsb the passageway
$Event(12305481, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2300406, 10000, 3))
                || InArea(2300406, 2302410)
                || HasDamageType(2300406, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(2300406, -1, 0);
    RequestCharacterAIReplan(2300406);
});

// Surrounding reinforcement_Visibility operation
$Event(12305482, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIId(2300407, 109013);
        WaitFor(EventFlag(12305480) || CharacterHasEventMessage(2300407, 20));
    }
L0:
    SetCharacterAIId(2300407, 109010);
    RequestCharacterAIReplan(2300407);
});

// Surrounding reinforcement_Special standby_XX
$Event(12305490, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(X0_4, 10000, 7))
                || (CharacterHasEventMessage(2300603, 10)
                    || CharacterHasEventMessage(2300604, 10)
                    || CharacterHasEventMessage(2300605, 10))
                || HasDamageType(X0_4, -1, DamageType.Unspecified));
    }
L0:
    ForceAnimationPlayback(X0_4, 0, false, false, false);
});

// Surrounding reinforcement_forced roar
$Event(12305501, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2302130));
        RequestCharacterAICommand(2300606, 40, 0);
        RequestCharacterAIReplan(2300606);
        WaitFor(CharacterAIState(2300606, AIStateType.Combat));
    }
L0:
    RequestCharacterAICommand(2300606, -1, 0);
});

// Surrounding reinforcement_forced roar 2
$Event(12305502, Restart, function(X0_4, X4_4) {
    EndIf(ThisEvent());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4));
    RequestCharacterAICommand(2300605, 40, 0);
    RequestCharacterAIReplan(2300605);
    WaitFor(CharacterHasEventMessage(2300605, 10));
    RequestCharacterAICommand(2300605, -1, 0);
    SetEventState(12305502, X4_4, EventEndType.End);
});

// Surrounding reinforcement_turning_XX
$Event(12305510, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2302060)
                && CharacterHasEventMessage(2300605, 10));
        SetCharacterHome(X0_4, X4_4);
        SetCharacterAIId(X0_4, X12_4);
        WaitFixedTimeSeconds(20);
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    SetCharacterAIId(X0_4, X16_4);
});

// Beast Guardian_Normal
$Event(12300700, Restart, function() {
    if (!EventFlag(1320)) {
        WaitFor(
            !EventFlag(1323)
                && !EventFlag(1324)
                && !EventFlag(1325)
                && CharacterType(10000, TargetType.Alive)
                && InArea(10000, 2302711));
    }
L0:
    SetCharacterTeamType(2300710, TeamType.FriendlyNPC);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1320, ON);
});

// Beast Guardian_Warning
$Event(12300701, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1323));
    EndIf(EventFlag(1324));
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2302710)
            && EventFlag(1320));
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1321, ON);
});

// Beast Guardian_Intimidation
$Event(12300702, Restart, function() {
    if (EventFlag(1322)) {
        SetCharacterTeamType(2300710, TeamType.Enemy1);
    }
L0:
    WaitFor(
        (InArea(10000, 2302020) || InArea(10000, 2302021) || InArea(10000, 2302714))
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(1323)
            && !EventFlag(1325)
            && !CharacterDead(2300710));
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1322, ON);
});

// Beast Guardian_Enemy
$Event(12300703, Restart, function() {
    if (!EventFlag(1323)) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (chr && EventFlag(1320) && HasDamageType(2300710, 10000, DamageType.Unspecified))
                || (chr && EventFlag(1325) && HasDamageType(2300710, 10000, DamageType.Unspecified))
                || (EventFlag(1325) && AnyBatchEventFlags(12300710, 12300739))
                || EventFlag(72300307));
    }
L0:
    SetCharacterTeamType(2300710, TeamType.Enemy1);
    RequestCharacterAIReplan(2300710);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1323, ON);
    SaveRequest(0);
});

// Beast Guardian_Death
$Event(12300704, Restart, function() {
    if (EventFlag(1324)) {
        ChangeCharacterEnableState(2300710, Disabled);
        ForceCharacterTreasure(2300710);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2300710));
L1:
    WaitFixedTimeFrames(1);
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1324, ON);
    SetEventFlag(5914, ON);
    SaveRequest(0);
});

// Beast Guardian_Friendship
$Event(12300705, Restart, function() {
    if (EventFlag(1325)) {
        SetCharacterTeamType(2300710, TeamType.FriendlyNPC);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1320) && EventFlag(72300305));
    BatchSetEventFlags(1320, 1325, OFF);
    SetEventFlag(1325, ON);
});

// Guardian of the Beast_Looking back
$Event(12305701, Restart, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1324));
    ForceAnimationPlayback(2300710, 103041, true, false, false);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr && InArea(10000, 2302700) && (EventFlag(1321) || EventFlag(1322) || EventFlag(1323)))
            || (chr && InArea(10000, 2302701) && (EventFlag(1320) || EventFlag(1325))));
    RotateCharacter(2300710, 10000, 103040, false);
    ChangeCharacterPatrolBehavior(2300710, 2303060);
});

// Beast Guardian_Forced Return to the Nest
$Event(12300707, Restart, function() {
    cond = EventFlag(1321) || EventFlag(1322) || EventFlag(1323);
    WaitFor(!AllPlayersInArea(2302500) && cond);
    SetCharacterHome(2300710, 2302320);
    RequestCharacterAICommand(2300710, 20, 0);
    RequestCharacterAIReplan(2300710);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(cond && InArea(10000, 2302500));
    RequestCharacterAICommand(2300710, -1, 0);
    RequestCharacterAIReplan(2300710);
    RestartEvent();
});

// Beast Guardian_Danger Area Detection
$Event(12300708, Restart, function() {
    WaitFor(InArea(2300710, 2302502));
    RequestCharacterAICommand(2300710, 100, 1);
    WaitFor(!InArea(2300710, 2302502));
    RequestCharacterAICommand(2300710, -1, 1);
    RestartEvent();
});

// Betray the Beast Guardian
$Event(12300710, Restart, function(X0_4) {
    if (!AnyBatchEventFlags(12300710, 12300739)) {
        WaitFor(EventFlag(1325) && HasDamageType(X0_4, 10000, DamageType.Unspecified));
    }
L0:
    SetEventFlag(12300709, ON);
});

// Beast Guardian_Conversation Suppression
$Event(12300750, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12300751, OFF);
    WaitFor(
        !InArea(10000, 2302160) && !InArea(10000, 2302161) && CharacterType(10000, TargetType.Alive));
    SetEventFlag(12300751, ON);
    WaitFor(
        (InArea(10000, 2302160) || InArea(10000, 2302161)) && CharacterType(10000, TargetType.Alive));
    RestartEvent();
});

// Beast Guardian_AI update authority fixed
$Event(12300752, Restart, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2300710, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(2300730, AuthorityLevel.Forced);
    }
L0:
    SetNetworkUpdateRate(2300730, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(2300710, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// Beast Guardian_Conversation limit distance control
$Event(12300753, Restart, function() {
    WaitFor(PlayerInMap(23, 0));
    SetDistanceLimitForConversationStateProcessing(2300710, 130);
    WaitFor(!PlayerInMap(23, 0));
    SetDistanceLimitForConversationStateProcessing(2300710, 17);
    RestartEvent();
});

// Map first entry_play log
$Event(12300990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2303500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 154, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 154, PlayLogMultiplayerType.HostOnly);
});

// Sniper reached
$Event(12304020, Default, function() {
    WaitFor(InArea(10000, 2302900));
    CreatePlaylog(176);
});

// Arrived at the place where the sacred object was destroyed
$Event(12304021, Default, function() {
    WaitFor(InArea(10000, 2302901));
    CreatePlaylog(202);
});

// Boss battle poison effect activated
$Event(12304022, Default, function() {
    WaitFor(EventFlag(12304830) && CharacterHasSpEffect(10000, 5660));
    EndTimeMeasurement(2301000);
});
