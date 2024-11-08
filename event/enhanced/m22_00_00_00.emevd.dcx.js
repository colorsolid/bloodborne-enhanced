// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_アイコレクター\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000ギミック_m22_最初の門を開けた\u0000ギミック_m22_SC開通\u0000ギミック_エレベーター起動\u0000PC情報_墓地街到達\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [236]
// @version    3.4.2
// ==/EMEVD==

const area_id = 22;
const block_id = 0;

const hemwick_lamp_offset = 0;
const hemwick_lamp_id = 2201950;
const hemwick_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10);

const witches_offset = 4;
const witches_lamp_offset = 1;
const witches_defeat = 12201800;
const witches_met = 12201802;
const witches_return = 2201899;
const witches_lamp_id = 2201951;
const witches_lamp_kindle = 12100000 + (area_id * 100) + (block_id * 10) + 2;
const witches_region = 2202802;
const witches_id = 2200800;
const witches_id2 = 2200801;

// gate 2201002
// elevator 2201210

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+witches_offset, OFF);
    
    InitializeEvent(0, 7900, 10000000+witches_return, witches_return, area_id, block_id, 8500+hemwick_lamp_offset);
    
    InitializeEvent(hemwick_lamp_offset, 8500, 8500+hemwick_lamp_offset, hemwick_lamp_id, 72111212);
    InitializeEvent(witches_lamp_offset, 8500, 8500+witches_lamp_offset, witches_lamp_id, 72111313);
    
    InitializeEvent(hemwick_lamp_offset, 8100, 8100+hemwick_lamp_offset, hemwick_lamp_kindle);
    InitializeEvent(witches_lamp_offset, 8100, 8100+witches_lamp_offset, witches_lamp_kindle);
    
    InitializeEvent(hemwick_lamp_offset, 8300, hemwick_lamp_id+2000, hemwick_lamp_id+3000, hemwick_lamp_id+4000, area_id, block_id, -1, hemwick_lamp_id+6000, hemwick_lamp_kindle);
    
    if(EventFlag(witches_defeat+13) && !EventFlag(witches_defeat-1)) {
        if (EventFlag(witches_defeat-2)) {
            SetEventFlag(witches_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(witches_region, witches_lamp_id+4000);
        }
        SetEventFlag(witches_defeat+13, OFF);
        SetEventFlag(witches_defeat, ON);
        InitializeEvent(witches_lamp_offset, 8300, witches_lamp_id+2000, witches_lamp_id+3000, witches_lamp_id+4000, area_id, block_id, 999, witches_lamp_id+6000, 12102202, witches_lamp_kindle);
    }
    else if (EventFlag(witches_defeat+12) || EventFlag(witches_defeat-1)) {
        if (EventFlag(witches_defeat-2)) {
            SetEventFlag(witches_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(witches_region, witches_lamp_id+5000);
        }
        SetEventFlag(witches_defeat, OFF);
        SetEventFlag(witches_defeat+2, OFF);
        SetEventFlag(witches_defeat+3, OFF);
        SetEventFlag(witches_defeat+12, OFF);
        SetEventFlag(witches_defeat+13, ON);
        SetEventFlag(witches_defeat-1, OFF);
        SetEventFlag(8900+witches_offset, ON);
        InitializeEvent(witches_lamp_offset, 8300, witches_lamp_id+2000, witches_lamp_id+3000, witches_lamp_id+5000, area_id, block_id, -1, witches_lamp_id+6000, 12102202, witches_lamp_kindle);
    }
    else {
        InitializeEvent(witches_lamp_offset, 8300, witches_lamp_id+2000, witches_lamp_id+3000, witches_lamp_id+4000, area_id, block_id, -1, witches_lamp_id+6000, 12102202, witches_lamp_kindle);
    }
    
    InitializeEvent(witches_offset, 12102070, witches_defeat+13, 0, 7418, witches_id, witches_id2);
    
    InitializeEvent(witches_offset, 8900, witches_defeat-1, witches_lamp_id+1000, witches_defeat-2);
    InitializeEvent(witches_offset, 7700, witches_defeat+11, witches_defeat+12, witches_lamp_id+1000, 822000);
    
    InitializeEvent(1200, 12107000, 72111200, 2201950, 2412950);
    InitializeEvent(1201, 12107000, 72111201, 2201950, 2412951);
    InitializeEvent(1202, 12107000, 72111202, 2201950, 2412952);
    InitializeEvent(1203, 12107000, 72111203, 2201950, 2412953);
    InitializeEvent(1204, 12107000, 72111204, 2201950, 2402950);
    InitializeEvent(1205, 12107000, 72111205, 2201950, 2402951);
    InitializeEvent(1206, 12107000, 72111206, 2201950, 2422950);
    InitializeEvent(1207, 12107000, 72111207, 2201950, 2422952);
    InitializeEvent(1208, 12107000, 72111208, 2201950, 2422951);
    InitializeEvent(1209, 12107000, 72111209, 2201950, 2302950);
    InitializeEvent(1210, 12107000, 72111210, 2201950, 2302951);
    InitializeEvent(1211, 12107000, 72111211, 2201950, 2302952);
    InitializeEvent(1212, 12107000, 72111212, 2201950, 2202950);
    InitializeEvent(1213, 12107000, 72111213, 2201950, 2202951);
    InitializeEvent(1214, 12107000, 72111214, 2201950, 2702950);
    InitializeEvent(1215, 12107000, 72111215, 2201950, 2702951);
    InitializeEvent(1216, 12107000, 72111216, 2201950, 3202950);
    InitializeEvent(1217, 12107000, 72111217, 2201950, 3202952);
    InitializeEvent(1218, 12107000, 72111218, 2201950, 2802950);
    InitializeEvent(1219, 12107000, 72111219, 2201950, 2802953);
    InitializeEvent(1220, 12107000, 72111220, 2201950, 2802951);
    InitializeEvent(1221, 12107000, 72111221, 2201950, 2802952);
    InitializeEvent(1222, 12107000, 72111222, 2201950, 2502950);
    InitializeEvent(1223, 12107000, 72111223, 2201950, 2502952);
    InitializeEvent(1224, 12107000, 72111224, 2201950, 2502951);
    InitializeEvent(1225, 12107000, 72111225, 2201950, 2112950);
    InitializeEvent(1226, 12107000, 72111226, 2201950, 3202951);
    InitializeEvent(1227, 12107000, 72111227, 2201950, 3202953);
    InitializeEvent(1228, 12107000, 72111228, 2201950, 3302950);
    InitializeEvent(1229, 12107000, 72111229, 2201950, 3302951);
    InitializeEvent(1230, 12107000, 72111230, 2201950, 2602950);
    InitializeEvent(1231, 12107000, 72111231, 2201950, 2602953);
    InitializeEvent(1232, 12107000, 72111232, 2201950, 2602952);
    InitializeEvent(1233, 12107000, 72111233, 2201950, 2602951);
    InitializeEvent(1234, 12107000, 72111234, 2201950, 3402950);
    InitializeEvent(1235, 12107000, 72111235, 2201950, 3402951);
    InitializeEvent(1236, 12107000, 72111236, 2201950, 3402953);
    InitializeEvent(1237, 12107000, 72111237, 2201950, 3402952);
    InitializeEvent(1238, 12107000, 72111238, 2201950, 3502950);
    InitializeEvent(1239, 12107000, 72111239, 2201950, 3502951);
    InitializeEvent(1240, 12107000, 72111240, 2201950, 3502952);
    InitializeEvent(1241, 12107000, 72111241, 2201950, 3602950);
    InitializeEvent(1242, 12107000, 72111242, 2201950, 3602951);
    InitializeEvent(1243, 12107000, 72111243, 2201950, 3602952);
    InitializeEvent(1244, 12107000, 72111244, 2201950, 2902950);
    InitializeEvent(1245, 12107000, 72111245, 2201950, 2902951);
    InitializeEvent(1246, 12107000, 72111246, 2201950, 2902952);
    InitializeEvent(1247, 12107000, 72111247, 2201950, 2902953);
    InitializeEvent(1248, 12107000, 72111248, 2201950, 2902954);
    InitializeEvent(1249, 12107000, 72111249, 2201950, 2902955);
    InitializeEvent(1250, 12107000, 72111250, 2201950, 2902956);
    InitializeEvent(1251, 12107000, 72111251, 2201950, 2902957);
    InitializeEvent(1252, 12107000, 72111252, 2201950, 2902958);
    InitializeEvent(1253, 12107000, 72111253, 2201950, 2902959);

    InitializeEvent(1300, 12107000, 72111300, 2201951, 2412950);
    InitializeEvent(1301, 12107000, 72111301, 2201951, 2412951);
    InitializeEvent(1302, 12107000, 72111302, 2201951, 2412952);
    InitializeEvent(1303, 12107000, 72111303, 2201951, 2412953);
    InitializeEvent(1304, 12107000, 72111304, 2201951, 2402950);
    InitializeEvent(1305, 12107000, 72111305, 2201951, 2402951);
    InitializeEvent(1306, 12107000, 72111306, 2201951, 2422950);
    InitializeEvent(1307, 12107000, 72111307, 2201951, 2422952);
    InitializeEvent(1308, 12107000, 72111308, 2201951, 2422951);
    InitializeEvent(1309, 12107000, 72111309, 2201951, 2302950);
    InitializeEvent(1310, 12107000, 72111310, 2201951, 2302951);
    InitializeEvent(1311, 12107000, 72111311, 2201951, 2302952);
    InitializeEvent(1312, 12107000, 72111312, 2201951, 2202950);
    InitializeEvent(1313, 12107000, 72111313, 2201951, 2202951);
    InitializeEvent(1314, 12107000, 72111314, 2201951, 2702950);
    InitializeEvent(1315, 12107000, 72111315, 2201951, 2702951);
    InitializeEvent(1316, 12107000, 72111316, 2201951, 3202950);
    InitializeEvent(1317, 12107000, 72111317, 2201951, 3202952);
    InitializeEvent(1318, 12107000, 72111318, 2201951, 2802950);
    InitializeEvent(1319, 12107000, 72111319, 2201951, 2802953);
    InitializeEvent(1320, 12107000, 72111320, 2201951, 2802951);
    InitializeEvent(1321, 12107000, 72111321, 2201951, 2802952);
    InitializeEvent(1322, 12107000, 72111322, 2201951, 2502950);
    InitializeEvent(1323, 12107000, 72111323, 2201951, 2502952);
    InitializeEvent(1324, 12107000, 72111324, 2201951, 2502951);
    InitializeEvent(1325, 12107000, 72111325, 2201951, 2112950);
    InitializeEvent(1326, 12107000, 72111326, 2201951, 3202951);
    InitializeEvent(1327, 12107000, 72111327, 2201951, 3202953);
    InitializeEvent(1328, 12107000, 72111328, 2201951, 3302950);
    InitializeEvent(1329, 12107000, 72111329, 2201951, 3302951);
    InitializeEvent(1330, 12107000, 72111330, 2201951, 2602950);
    InitializeEvent(1331, 12107000, 72111331, 2201951, 2602953);
    InitializeEvent(1332, 12107000, 72111332, 2201951, 2602952);
    InitializeEvent(1333, 12107000, 72111333, 2201951, 2602951);
    InitializeEvent(1334, 12107000, 72111334, 2201951, 3402950);
    InitializeEvent(1335, 12107000, 72111335, 2201951, 3402951);
    InitializeEvent(1336, 12107000, 72111336, 2201951, 3402953);
    InitializeEvent(1337, 12107000, 72111337, 2201951, 3402952);
    InitializeEvent(1338, 12107000, 72111338, 2201951, 3502950);
    InitializeEvent(1339, 12107000, 72111339, 2201951, 3502951);
    InitializeEvent(1340, 12107000, 72111340, 2201951, 3502952);
    InitializeEvent(1341, 12107000, 72111341, 2201951, 3602950);
    InitializeEvent(1342, 12107000, 72111342, 2201951, 3602951);
    InitializeEvent(1343, 12107000, 72111343, 2201951, 3602952);
    InitializeEvent(1344, 12107000, 72111344, 2201951, 2902950);
    InitializeEvent(1345, 12107000, 72111345, 2201951, 2902951);
    InitializeEvent(1346, 12107000, 72111346, 2201951, 2902952);
    InitializeEvent(1347, 12107000, 72111347, 2201951, 2902953);
    InitializeEvent(1348, 12107000, 72111348, 2201951, 2902954);
    InitializeEvent(1349, 12107000, 72111349, 2201951, 2902955);
    InitializeEvent(1350, 12107000, 72111350, 2201951, 2902956);
    InitializeEvent(1351, 12107000, 72111351, 2201951, 2902957);
    InitializeEvent(1352, 12107000, 72111352, 2201951, 2902958);
    InitializeEvent(1353, 12107000, 72111353, 2201951, 2902959);

    SetEventFlag(72110012, OFF);
    SetEventFlag(72110112, OFF);
    SetEventFlag(72110212, OFF);
    SetEventFlag(72110312, OFF);
    SetEventFlag(72110412, OFF);
    SetEventFlag(72110512, OFF);
    SetEventFlag(72110612, OFF);
    SetEventFlag(72110712, OFF);
    SetEventFlag(72110812, OFF);
    SetEventFlag(72110912, OFF);
    SetEventFlag(72111012, OFF);
    SetEventFlag(72111112, OFF);
    SetEventFlag(72111212, OFF);
    SetEventFlag(72111312, OFF);
    SetEventFlag(72111412, OFF);
    SetEventFlag(72111512, OFF);
    SetEventFlag(72111612, OFF);
    SetEventFlag(72111712, OFF);
    SetEventFlag(72111812, OFF);
    SetEventFlag(72111912, OFF);
    SetEventFlag(72112012, OFF);
    SetEventFlag(72112112, OFF);
    SetEventFlag(72112212, OFF);
    SetEventFlag(72112312, OFF);
    SetEventFlag(72112412, OFF);
    SetEventFlag(72112512, OFF);
    SetEventFlag(72112612, OFF);
    SetEventFlag(72112712, OFF);
    SetEventFlag(72112812, OFF);
    SetEventFlag(72112912, OFF);
    SetEventFlag(72113012, OFF);
    SetEventFlag(72113112, OFF);
    SetEventFlag(72113212, OFF);
    SetEventFlag(72113312, OFF);
    SetEventFlag(72113412, OFF);
    SetEventFlag(72113512, OFF);
    SetEventFlag(72113612, OFF);
    SetEventFlag(72113712, OFF);
    SetEventFlag(72113812, OFF);
    SetEventFlag(72113912, OFF);
    SetEventFlag(72114012, OFF);
    SetEventFlag(72114112, OFF);
    SetEventFlag(72114212, OFF);
    SetEventFlag(72114312, OFF);
    SetEventFlag(72114412, OFF);
    SetEventFlag(72114512, OFF);
    SetEventFlag(72114612, OFF);
    SetEventFlag(72114712, OFF);
    SetEventFlag(72114812, OFF);
    SetEventFlag(72114912, OFF);
    SetEventFlag(72115012, OFF);
    SetEventFlag(72115112, OFF);
    SetEventFlag(72115212, OFF);
    SetEventFlag(72115312, OFF);

    SetEventFlag(72110013, OFF);
    SetEventFlag(72110113, OFF);
    SetEventFlag(72110213, OFF);
    SetEventFlag(72110313, OFF);
    SetEventFlag(72110413, OFF);
    SetEventFlag(72110513, OFF);
    SetEventFlag(72110613, OFF);
    SetEventFlag(72110713, OFF);
    SetEventFlag(72110813, OFF);
    SetEventFlag(72110913, OFF);
    SetEventFlag(72111013, OFF);
    SetEventFlag(72111113, OFF);
    SetEventFlag(72111213, OFF);
    SetEventFlag(72111313, OFF);
    SetEventFlag(72111413, OFF);
    SetEventFlag(72111513, OFF);
    SetEventFlag(72111613, OFF);
    SetEventFlag(72111713, OFF);
    SetEventFlag(72111813, OFF);
    SetEventFlag(72111913, OFF);
    SetEventFlag(72112013, OFF);
    SetEventFlag(72112113, OFF);
    SetEventFlag(72112213, OFF);
    SetEventFlag(72112313, OFF);
    SetEventFlag(72112413, OFF);
    SetEventFlag(72112513, OFF);
    SetEventFlag(72112613, OFF);
    SetEventFlag(72112713, OFF);
    SetEventFlag(72112813, OFF);
    SetEventFlag(72112913, OFF);
    SetEventFlag(72113013, OFF);
    SetEventFlag(72113113, OFF);
    SetEventFlag(72113213, OFF);
    SetEventFlag(72113313, OFF);
    SetEventFlag(72113413, OFF);
    SetEventFlag(72113513, OFF);
    SetEventFlag(72113613, OFF);
    SetEventFlag(72113713, OFF);
    SetEventFlag(72113813, OFF);
    SetEventFlag(72113913, OFF);
    SetEventFlag(72114013, OFF);
    SetEventFlag(72114113, OFF);
    SetEventFlag(72114213, OFF);
    SetEventFlag(72114313, OFF);
    SetEventFlag(72114413, OFF);
    SetEventFlag(72114513, OFF);
    SetEventFlag(72114613, OFF);
    SetEventFlag(72114713, OFF);
    SetEventFlag(72114813, OFF);
    SetEventFlag(72114913, OFF);
    SetEventFlag(72115013, OFF);
    SetEventFlag(72115113, OFF);
    SetEventFlag(72115213, OFF);
    SetEventFlag(72115313, OFF);

    InitializeEvent(0, 12107100, 72100421, 2201950, 9021);
    InitializeEvent(1, 12107100, 72100422, 2201950, 9022);
    InitializeEvent(2, 12107100, 72100423, 2201950, 9023);
    InitializeEvent(3, 12107100, 72100424, 2201950, 9024);
    InitializeEvent(4, 12107100, 72100425, 2201950, 9025);
    InitializeEvent(5, 12107100, 72100426, 2201950, 9026);

    InitializeEvent(6, 12107100, 72100427, 2201951, 9021);
    InitializeEvent(7, 12107100, 72100428, 2201951, 9022);
    InitializeEvent(8, 12107100, 72100429, 2201951, 9023);
    InitializeEvent(9, 12107100, 72100430, 2201951, 9024);
    InitializeEvent(10, 12107100, 72100431, 2201951, 9025);
    InitializeEvent(11, 12107100, 72100432, 2201951, 9026);

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
    
    InitializeEvent(0, 7000, 2200950, 2201950, 999, 12207800, -1);
    
    InitializeEvent(1, 7000, 2200951, 2201951, 12201800, 12207820, witches_defeat+13);
    InitializeEvent(witches_offset, 8800, witches_defeat+13, witches_lamp_id-1000, witches_lamp_id, witches_lamp_id+3000);
    
    InitializeEvent(0, 7100, 72200200, 2201950);
    InitializeEvent(1, 7100, 72200201, 2201951);
    InitializeEvent(0, 7200, 72200100, 2201950, 2102951);
    InitializeEvent(1, 7200, 72200101, 2201951, 2102951);
    InitializeEvent(0, 7300, 72102200, 2201950);
    InitializeEvent(1, 7300, 72102201, 2201951);
    InitializeEvent(0, 12102220, 2201950, 2200950);
    InitializeEvent(1, 12102220, 2201951, 2200951);
    InitializeEvent(0, 7600, 2201999, 2203999);
    InitializeEvent(0, 9200, 2203900);
    InitializeEvent(0, 9220, 2200710, 12204220, 12204221, 2200, 22);
    InitializeEvent(0, 9240, 2200710, 12204220, 12204221, 12204222, 22);
    InitializeEvent(0, 9260, 2200710, 12204220, 12204221, 12204222, 22);
    InitializeEvent(0, 9280, 2200710, 12204220, 12204221, 2200, 12204800, 22);
    CreateObjectfollowingSFX(2201000, 750, 900110);
    CreateObjectfollowingSFX(2201003, 750, 900110);
    CreateObjectfollowingSFX(2201004, 750, 900110);
    CreateDamagingObject(12200050, 2201000, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12200051, 2201003, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    CreateDamagingObject(12200052, 2201004, 100, 6010, DamageTargetType.Character, 0.5, 0, 1);
    RegisterLadder(12200000, 12200001, 2201100);
    StartTimeMeasurement(2200000, 0, Disabled);
    StartTimeMeasurement(2200001, 18, Enabled);
    CreateBulletOwner(2200420);
    CreateBulletOwner(2200421);
    CreateBulletOwner(2200422);
    RequestCharacterAICommand(2200310, 200, 0);
    RequestCharacterAICommand(2200311, 200, 0);
    InitializeEvent(0, 12204892, 0);
    InitializeEvent(0, 12204893, 0);
    InitializeEvent(0, 12201800, 0);
    InitializeEvent(0, 12201801, 0);
    InitializeEvent(0, 12201802, 0);
    InitializeEvent(0, 12201803, 0);
    InitializeEvent(0, 12204890, 0);
    InitializeEvent(0, 12204891, 0);
    InitializeEvent(0, 12204802, 0);
    InitializeEvent(0, 12204803, 0);
    InitializeEvent(0, 12204804, 0);
    InitializeEvent(0, 12204805, 0);
    InitializeEvent(0, 12204807, 0);
    InitializeEvent(0, 12201804, 0);
    InitializeEvent(0, 12204808, 2200800, 12204848);
    InitializeEvent(1, 12204808, 2200801, 12204849);
    InitializeEvent(0, 12204810, 0);
    InitializeEvent(0, 12204811, 0);
    InitializeEvent(0, 12204812, 2200800, 2200801, 2202810, 12204848);
    InitializeEvent(1, 12204812, 2200801, 2200800, 2202815, 12204849);
    InitializeEvent(0, 12204814, 2200800, 12204850, 12204853, 12204850, 12204851, 12204852, 12204853, 12204848);
    InitializeEvent(1, 12204814, 2200801, 12204855, 12204858, 12204855, 12204856, 12204857, 12204858, 12204849);
    InitializeEvent(0, 12204820, 2200800, 12204850, 2202810, 2202812, 12204854);
    InitializeEvent(1, 12204820, 2200800, 12204851, 2202811, 2202810, 12204854);
    InitializeEvent(2, 12204820, 2200800, 12204852, 2202812, 2202817, 12204854);
    InitializeEvent(3, 12204820, 2200800, 12204853, 2202817, 2202811, 12204854);
    InitializeEvent(4, 12204820, 2200801, 12204855, 2202813, 2202814, 12204859);
    InitializeEvent(5, 12204820, 2200801, 12204856, 2202814, 2202815, 12204859);
    InitializeEvent(6, 12204820, 2200801, 12204857, 2202815, 2202816, 12204859);
    InitializeEvent(7, 12204820, 2200801, 12204858, 2202816, 2202813, 12204859);
    InitializeEvent(0, 12204830, 2200800, 12204854, 12204848);
    InitializeEvent(1, 12204830, 2200801, 12204859, 12204849);
    InitializeEvent(0, 12204832, 2200810);
    InitializeEvent(1, 12204832, 2200811);
    InitializeEvent(2, 12204832, 2200812);
    InitializeEvent(0, 12204835, 2200810, 12204870);
    InitializeEvent(1, 12204835, 2200811, 12204871);
    InitializeEvent(2, 12204835, 2200812, 12204872);
    InitializeEvent(0, 12204838, 0);
    InitializeEvent(0, 12204839, 0);
    InitializeEvent(0, 12204840, 0);
    InitializeEvent(0, 12204841, 0);
    InitializeEvent(0, 12204842, 0);
    InitializeEvent(0, 12204843, 0);
    InitializeEvent(0, 12204844, 0);
    InitializeEvent(0, 12200100, 0);
    InitializeEvent(0, 12200101, 0);
    InitializeEvent(0, 12200110, 0);
    InitializeEvent(0, 12200111, 0);
    InitializeEvent(0, 12200112, 0);
    InitializeEvent(0, 12200120, 0);
    InitializeEvent(0, 12200122, 0);
    InitializeEvent(0, 12200123, 0);
    InitializeEvent(0, 12200121, 0);
    InitializeEvent(0, 12200124, 0);
    InitializeEvent(0, 12200130, 0);
    InitializeEvent(0, 12200131, 0);
    InitializeEvent(0, 12200132, 0);
    InitializeEvent(0, 12200150, 2200261, 2202660);
    InitializeEvent(1, 12200150, 2200250, 2202661);
    InitializeEvent(2, 12200150, 2200251, 2202662);
    InitializeEvent(3, 12200150, 2200260, 2202663);
    InitializeEvent(4, 12200150, 2200201, 2202664);
    InitializeEvent(5, 12200150, 2200205, 2202665);
    InitializeEvent(6, 12200150, 2200204, 2202666);
    InitializeEvent(7, 12200150, 2200252, 2202667);
    InitializeEvent(8, 12200150, 2200335, 2202668);
    InitializeEvent(9, 12200150, 2200330, 2202669);
    InitializeEvent(10, 12200150, 2200331, 2202670);
    InitializeEvent(11, 12200150, 2200332, 2202671);
    InitializeEvent(12, 12200150, 2200333, 2202672);
    InitializeEvent(13, 12200150, 2200334, 2202673);
    InitializeEvent(14, 12200150, 2200280, 2202674);
    InitializeEvent(15, 12200150, 2200340, 2202675);
    InitializeEvent(16, 12200150, 2200341, 2202676);
    InitializeEvent(17, 12200150, 2200273, 2202677);
    InitializeEvent(18, 12200150, 2200270, 2202678);
    InitializeEvent(19, 12200150, 2200271, 2202679);
    InitializeEvent(20, 12200150, 2200272, 2202680);
    InitializeEvent(21, 12200150, 2200202, 2202681);
    InitializeEvent(22, 12200150, 2200311, 2202682);
    InitializeEvent(23, 12200150, 2200120, 2202683);
    InitializeEvent(0, 12200300, 0);
    InitializeEvent(0, 12200310, 2201050, 12200900, 9942);
    InitializeEvent(0, 12200210, 2201010, 1088421888, 0, 2202020, 10);
    InitializeEvent(1, 12200210, 2201011, 1088421888, 30, 2202020, 10);
    InitializeEvent(2, 12200210, 2201016, 1088421888, 15, 2202020, 10);
    InitializeEvent(3, 12200210, 2201017, 1088421888, 0, 2202020, 10);
    InitializeEvent(4, 12200210, 2201018, 1088421888, 5, 2202020, 10);
    InitializeEvent(5, 12200210, 2201012, 1092616192, 10, 2202021, 11);
    InitializeEvent(6, 12200210, 2201013, 1092616192, 0, 2202021, 11);
    InitializeEvent(7, 12200210, 2201014, 1092616192, 30, 2202021, 11);
    InitializeEvent(8, 12200210, 2201015, 1092616192, 0, 2202021, 11);
    InitializeEvent(0, 12200220, 2200111, 52200990);
    InitializeEvent(1, 12200220, 2200170, 52200980);
    InitializeEvent(2, 12200220, 2200110, 52200970);
    
    GotoIf(S0, !CharacterType(10000, TargetType.Alive));
    GotoIf(S0, !EventFlag(6631));
    SetEventFlag(12201999, ON);
S0:
    if (!EventFlag(12201999)) {
        DeactivateObject(2201150, Enabled);
        DeactivateObject(2201151, Disabled);
        SetObjectTreasureState(2201150, Enabled);
        SetObjectTreasureState(2201151, Disabled);
    } else {
        DeactivateObject(2201150, Disabled);
        DeactivateObject(2201151, Enabled);
        SetObjectTreasureState(2201150, Disabled);
        SetObjectTreasureState(2201151, Enabled);
    }
    GotoIf(S1, !CharacterType(10000, TargetType.Alive));
    GotoIf(S1, !EventFlag(6309));
    SetEventFlag(12201998, ON);
S1:
    if (!EventFlag(12201998)) {
        DeactivateObject(2201500, Enabled);
        DeactivateObject(2201501, Disabled);
        SetObjectTreasureState(2201500, Enabled);
        SetObjectTreasureState(2201501, Disabled);
    } else {
        DeactivateObject(2201500, Disabled);
        DeactivateObject(2201501, Enabled);
        SetObjectTreasureState(2201500, Disabled);
        SetObjectTreasureState(2201501, Enabled);
    }
    InitializeEvent(0, 12200990, 0);
    InitializeEvent(0, 12204000, 2200500, 1101004800);
    InitializeEvent(1, 12204000, 2200501, 1101004800);
    InitializeEvent(2, 12204000, 2200502, 1101004800);
    InitializeEvent(3, 12204000, 2200503, 1101004800);
    InitializeEvent(4, 12204000, 2200504, 1101004800);
    InitializeEvent(5, 12204000, 2200505, 1101004800);
    InitializeEvent(6, 12204000, 2200506, 1101004800);
    InitializeEvent(7, 12204000, 2200507, 1101004800);
    InitializeEvent(8, 12204000, 2200508, 1101004800);
    InitializeEvent(0, 12205000, 0);
    InitializeEvent(0, 12205001, 0);
    InitializeEvent(0, 12205002, 0);
    InitializeEvent(0, 12205003, 0);
    InitializeEvent(0, 12205040, 0);
    InitializeEvent(0, 12205041, 0);
    InitializeEvent(0, 12205020, 0);
    InitializeEvent(0, 12205030, 0);
    InitializeEvent(0, 12205031, 0);
    InitializeEvent(0, 12205060, 0);
    InitializeEvent(0, 12205050, 0);
    InitializeEvent(0, 12205051, 0);
    InitializeEvent(0, 12205070, 0);
    InitializeEvent(0, 12205080, 0);
    InitializeEvent(0, 12205010, 2200240, 2200130, 2202070, 2202370, 2202080, 12205015);
    InitializeEvent(1, 12205010, 2200223, 2200310, 2202071, 2202371, 2202171, 12205016);
    InitializeEvent(0, 12205015, 2200130, 2202370, -1, 12205010);
    InitializeEvent(1, 12205015, 2200310, 2202371, 200, 12205011);
    InitializeEvent(0, 12205100, 2200202, 2202130, 1077936128, 12205105, 50);
    InitializeEvent(1, 12205100, 2200200, 2202150, 1077936128, 12205106, 50);
    InitializeEvent(2, 12205100, 2200201, 2202151, 1077936128, 12205107, 60);
    InitializeEvent(3, 12205100, 2200204, 2202152, 1084227584, 12205108, 50);
    InitializeEvent(0, 12205105, 2200202, 2202130, 3007, 1077936128);
    InitializeEvent(1, 12205105, 2200200, 2202150, 3009, 1075838976);
    InitializeEvent(2, 12205105, 2200201, 2202154, 3022, 1073741824);
    InitializeEvent(3, 12205105, 2200204, 2202153, 3011, 1076677837);
    InitializeEvent(0, 12205110, 2200203, 2202140, 1077936128, 3006);
    InitializeEvent(0, 12205120, 2200211, 2202160, 1084227584, 2202161);
    InitializeEvent(1, 12205120, 2200212, 2202160, 1084227584, 2202161);
    InitializeEvent(2, 12205120, 2200213, 2202160, 1084227584, 2202161);
    InitializeEvent(3, 12205120, 2200223, 2202170, 1097859072, 2202171);
    InitializeEvent(4, 12205120, 2200224, 2202170, 1097859072, 2202171);
    InitializeEvent(5, 12205120, 2200230, 2202180, 1086324736, 2202180);
    InitializeEvent(6, 12205120, 2200231, 2202180, 1086324736, 2202180);
    InitializeEvent(7, 12205120, 2200232, 2202180, 1086324736, 2202180);
    InitializeEvent(8, 12205120, 2200240, 2202190, 1097859072, 2202191);
    InitializeEvent(9, 12205120, 2200250, 2202200, 1092616192, 2202201);
    InitializeEvent(10, 12205120, 2200251, 2202200, 1092616192, 2202201);
    InitializeEvent(11, 12205120, 2200252, 2202200, 1092616192, 2202201);
    InitializeEvent(12, 12205120, 2200260, 2202200, 1092616192, 2202201);
    InitializeEvent(13, 12205120, 2200261, 2202200, 1092616192, 2202201);
    InitializeEvent(14, 12205120, 2200270, 2202220, 1092616192, 2202221);
    InitializeEvent(15, 12205120, 2200271, 2202220, 1092616192, 2202221);
    InitializeEvent(16, 12205120, 2200272, 2202220, 1092616192, 2202221);
    InitializeEvent(17, 12205120, 2200290, 2202230, 1090519040, 2202231);
    InitializeEvent(18, 12205120, 2200291, 2202230, 1090519040, 2202231);
    InitializeEvent(19, 12205120, 2200292, 2202230, 1090519040, 2202231);
    InitializeEvent(20, 12205120, 2200280, 2202240, 1084227584, 2202240);
    InitializeEvent(21, 12205120, 2200412, 2202260, 1084227584, 2202260);
    InitializeEvent(22, 12205120, 2200310, 2202170, 1097859072, 2202171);
    InitializeEvent(23, 12205120, 2200450, 2202270, 1097859072, 2202271);
    InitializeEvent(24, 12205120, 2200460, 2202310, 1097859072, 2202310);
    InitializeEvent(25, 12205120, 2200470, 2202430, 1077936128, 2202431);
    InitializeEvent(26, 12205120, 2200430, 2202170, 1088421888, 2202171);
    InitializeEvent(0, 12205150, 2200100, 7014, 0, 0);
    InitializeEvent(1, 12205150, 2200301, 7010, 7011, 1088421888);
    InitializeEvent(2, 12205150, 2200303, 7012, 7013, 0);
    InitializeEvent(3, 12205150, 2200300, 7014, 0, 0);
    InitializeEvent(4, 12205150, 2200212, 7014, 0, 0);
    InitializeEvent(0, 12205160, 2202040, 2201401, 2200410, 2200400);
    InitializeEvent(1, 12205160, 2202041, 2201406, 2200411, 2200401);
    InitializeEvent(0, 12205170, 2201400, 2200420);
    InitializeEvent(1, 12205170, 2201401, 2200420);
    InitializeEvent(2, 12205170, 2201402, 2200420);
    InitializeEvent(3, 12205170, 2201403, 2200420);
    InitializeEvent(4, 12205170, 2201404, 2200420);
    InitializeEvent(5, 12205170, 2201405, 2200420);
    InitializeEvent(6, 12205170, 2201406, 2200420);
    InitializeEvent(7, 12205170, 2201407, 2200422);
    InitializeEvent(8, 12205170, 2201408, 2200422);
    InitializeEvent(9, 12205170, 2201409, 2200422);
    InitializeEvent(10, 12205170, 2201410, 2200421);
    InitializeEvent(11, 12205170, 2201411, 2200421);
    InitializeEvent(12, 12205170, 2201412, 2200421);
    InitializeEvent(13, 12205170, 2201413, 2200421);
    InitializeEvent(14, 12205170, 2201414, 2200421);
    InitializeEvent(15, 12205170, 2201415, 2200421);
    InitializeEvent(16, 12205170, 2201416, 2200421);
    InitializeEvent(17, 12205170, 2201417, 2200421);
    InitializeEvent(18, 12205170, 2201418, 2200421);
    InitializeEvent(19, 12205170, 2201419, 2200421);
    InitializeEvent(20, 12205170, 2201420, 2200420);
    InitializeEvent(21, 12205170, 2201421, 2200420);
    InitializeEvent(22, 12205170, 2201422, 2200421);
    InitializeEvent(23, 12205170, 2201423, 2200421);
    InitializeEvent(24, 12205170, 2201424, 2200421);
    InitializeEvent(25, 12205170, 2201425, 2200421);
    InitializeEvent(26, 12205170, 2201426, 2200421);
    InitializeEvent(27, 12205170, 2201427, 2200421);
    InitializeEvent(0, 12205200, 2200200);
    InitializeEvent(1, 12205200, 2200201);
    InitializeEvent(2, 12205200, 2200202);
    InitializeEvent(3, 12205200, 2200204);
    InitializeEvent(4, 12205200, 2200205);
    InitializeEvent(5, 12205200, 2200251);
    InitializeEvent(6, 12205200, 2200270);
    InitializeEvent(7, 12205200, 2200271);
    InitializeEvent(0, 12205210, 2200320);
    InitializeEvent(1, 12205210, 2200321);
    InitializeEvent(0, 12205220, 2200240, 2202282, 3006, 2202302);
    InitializeEvent(1, 12205220, 2200250, 2202280, 7001, 2202300);
    InitializeEvent(2, 12205220, 2200250, 2202281, 7001, 2202301);
    InitializeEvent(3, 12205220, 2200252, 2202279, 3006, 2202299);
    InitializeEvent(4, 12205220, 2200251, 2202278, 7001, 2202298);
    InitializeEvent(5, 12205220, 2200450, 2202283, 7014, 2202283);
    InitializeEvent(0, 12205230, 2200330, 114093);
    InitializeEvent(1, 12205230, 2200331, 114094);
    InitializeEvent(2, 12205230, 2200332, 114094);
    InitializeEvent(3, 12205230, 2200333, 114093);
    InitializeEvent(4, 12205230, 2200334, 114094);
    InitializeEvent(0, 12205240, 2200340);
    InitializeEvent(1, 12205240, 2200341);
    InitializeEvent(0, 12205260, 2200110, 2202630, 12205265, 12205270);
    InitializeEvent(1, 12205260, 2200111, 2202632, 12205266, 12205271);
    InitializeEvent(0, 12205265, 2200110, 2202631, 2202380, 12205260, 12205270);
    InitializeEvent(1, 12205265, 2200111, 2202633, 2202381, 12205261, 12205271);
    InitializeEvent(0, 12205270, 2200110, 2202380, 12205265, 2202630, 2202381, 12205260);
    InitializeEvent(1, 12205270, 2200111, 2202381, 12205266, 2202633, 2202382, 12205261);
    InitializeEvent(0, 12205300, 2203300, 1439, 6001, 9802);
});

// pre-constructor
$Event(50, Default, function() {
    SetCharacterAnimationState(2203950, Disabled);
    SetCharacterGravity(2203950, Disabled);
    SetCharacterMaphits(2203950, true);
    SetCharacterAnimationState(2203951, Disabled);
    SetCharacterGravity(2203951, Disabled);
    SetCharacterMaphits(2203951, true);
    InitializeEvent(0, 12204010, 0);
});

// Boss defeated_eye collector
$Event(12201800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2203802, Disabled);
        SetMapSoundState(2203803, Disabled);
        ChangeCharacterEnableState(2200800, Disabled);
        ForceCharacterDeath(2200800, false);
        ChangeCharacterEnableState(2200801, Disabled);
        ForceCharacterDeath(2200801, false);
        DeactivateObject(2201800, Disabled);
        DeactivateObject(2201801, Disabled);
        DeleteMapSFX(2203800, true);
        DeleteMapSFX(2203801, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2200800) && CharacterDead(2200801));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2201800, Disabled);
    DeactivateObject(2201801, Disabled);
    DeleteMapSFX(2203800, true);
    DeleteMapSFX(2203801, true);
    SetLockcamSlotNumber(22, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2200800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardAchievement(23);
        AwardItemLot(21002950);
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        SetEventFlag(72400512, ON);
        SetEventFlag(2200, ON);
        SetEventFlag(9452, ON);
        SetEventFlag(5911, ON);
        EndTimeMeasurement(2200000);
        EndTimeMeasurement(2200001);
        EndTimeMeasurement(2200010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(witches_defeat+13)) {
            InitializeEvent(witches_offset, 7800, witches_lamp_id+1000, 822000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Boss defeat SE playback_eye collector
$Event(12201801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    flag = EventFlag(12201800);
    WaitFor(flag || (!CharacterBackreadStatus(2200800) && HPRatio(2200800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2202800, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_first battle_eye collector
$Event(12201802, Default, function() {
    EndIf(EventFlag(12201800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2200800, Disabled);
    WaitFor(!EventFlag(12201800) && !ThisEvent() && CharacterType(10000, TargetType.Alive) && InArea(10000, 2202805));
    ChangeCharacterEnableState(2200800, Enabled);
    WaitFixedTimeSeconds(0.1);
    if (!(PlayerInsightAmount() == 0 && CharacterType(10000, TargetType.Alive))) {
        ForceAnimationPlayback(2200800, 3011, false, false, false);
    }
    SetEventFlag(12204800, ON);
    EndIf(EventFlag(9338));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9338, ON);
});

// Companion follows and dies_eye collector
$Event(12201803, Default, function() {
    if (ThisEvent()) {
        DeactivateGenerator(2205000, Disabled);
        DeactivateGenerator(2205001, Disabled);
        DeactivateGenerator(2205002, Disabled);
        SetCharacterBackreadState(2200810, true);
        SetCharacterBackreadState(2200811, true);
        SetCharacterBackreadState(2200812, true);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(12201800));
    DeactivateGenerator(2205000, Disabled);
    DeactivateGenerator(2205001, Disabled);
    DeactivateGenerator(2205002, Disabled);
    ForceCharacterDeath(2200810, false);
    ForceCharacterDeath(2200811, false);
    ForceCharacterDeath(2200812, false);
});

// Eye collector __Staggered entry guest processing
$Event(12201804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12204800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2200800, Enabled);
    SetEventFlag(12204800, ON);
    SetEventFlag(12201802, ON);
});

// Host enters boss room_rematch_eye collector
$Event(12204890, Default, function() {
    EndIf(EventFlag(12201800));
    if (!EventFlag(12201802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2201800, Disabled);
            DeleteMapSFX(2203800, false);
        }
        DeactivateObject(2201801, Disabled);
        DeleteMapSFX(2203801, false);
        WaitFor(!EventFlag(12201800) && EventFlag(12201802));
        DeactivateObject(2201800, Enabled);
        DeactivateObject(2201801, Enabled);
        SpawnMapSFX(2203800);
        SpawnMapSFX(2203801);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2200800, 2201800) && !EventFlag(12201800);
    flag = EventFlag(12201800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2202800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2202801);
    chr = ElapsedSeconds(2) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12204800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_eye collector
$Event(12204891, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    WaitFor(
        !EventFlag(12201800)
            && EventFlag(12201802)
            && EventFlag(12204800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2200800, 2201800));
    RotateCharacter(10000, 2202800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2202801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(12204801, ON);
    }
    RestartEvent();
});

// Disabled per fog wall in the world of others_eye collector
$Event(12204892, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2201800, 2));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Disable 2_eye collector per fog wall in the world of others
$Event(12204893, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2201800, 2)
            && EntityInRadiusOfEntity(10000, 2201800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Boss starts to move_eye collector
$Event(12204802, Default, function() {
    EndIf(EventFlag(12201800));
    SetCharacterAIState(2200800, Disabled);
    SetCharacterHPBarDisplay(2200800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12204800) || EventFlag(witches_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2200800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12204800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2200800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200800);
    Goto(L4);
L3:
    SetSpEffect(2200800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200800);
    Goto(L4);
L4:
    SetCharacterAIState(2200800, Enabled);
    DisplayBossHealthBar(Enabled, 2200800, 0, 210000);
    CreatePlaylog(88);
    StartTimeMeasurement(2200010, 104, Enabled);
});

// Boss BGM ON_Eye Collector
$Event(12204803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetMapSoundState(2203802, Disabled);
        SetMapSoundState(2203803, Disabled);
        flagArea &= !EventFlag(12201800) && EventFlag(12204802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12204801);
        }
        flagArea &= InArea(10000, 2202801);
        WaitFor(flagArea);
        EnableBossMapSound(2203802, Enabled);
        hpFlagArea &= CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1;
    }
L0:
    hpFlagArea &= !EventFlag(12201800) && EventFlag(12204802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        hpFlagArea &= EventFlag(12204801);
    }
    hpFlagArea &= InArea(10000, 2202801);
    WaitFor(hpFlagArea);
    EnableBossMapSound(2203802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2203803, Enabled);
});

// Boss Camera_Eye Corrector
$Event(12204804, Default, function() {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) && EventFlag(12204800))
            || (CharacterType(10000, TargetType.WhitePhantom) && EventFlag(12204801)));
    SetLockcamSlotNumber(22, 0, 1);
});

// Boss BGM OFF_Eye Collector
$Event(12204805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12201800));
    WaitFor(EventFlag(12201800));
    EnableBossMapSound(2203802, Disabled);
    EnableBossMapSound(2203803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss Heat Up_Eye Collector
$Event(12204807, Default, function() {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1);
    RequestCharacterAICommand(2200800, 100, 0);
    RequestCharacterAICommand(2200801, 100, 0);
    WaitFixedTimeSeconds(10);
    EndIf(CharacterDead(2200800) && CharacterDead(2200801));
    DisplayBossHealthBar(Enabled, 2200801, 1, 210000);
});

// Boss Invisibility_Eye Corrector_XX
$Event(12204808, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(!EntityInRadiusOfEntity(10000, X0_4, 12) || CharacterHasEventMessage(X0_4, 10));
    SetSpEffectAndUnknown200455(X0_4, 5686, false);
L0:
    WaitFor(EntityInRadiusOfEntity(10000, X0_4, 6) && !EventFlag(X4_4));
    SetSpEffectAndUnknown200455(X0_4, 5688, false);
    RestartEvent();
});

// Boss starts moving_2nd body_eye collector
$Event(12204810, Default, function() {
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetCharacterAIState(2200801, Disabled);
        SetCharacterHPBarDisplay(2200801, Disabled);
        ChangeCharacterEnableState(2200801, Disabled);
        WaitFor(HPRatio(2200800) <= 0.5);
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2200801, AuthorityLevel.Forced);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2200801, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200801);
    Goto(L4);
L3:
    SetSpEffect(2200801, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2200801);
    Goto(L4);
L4:
    ChangeCharacterEnableState(2200801, Enabled);
    SetCharacterAIState(2200801, Enabled);
});

// 1st one is patrol_eye collector
$Event(12204811, Default, function() {
    EndIf(EventFlag(12201800));
    if (!ThisEvent()) {
        SetCharacterAIId(2200800, 210021);
        WaitFor(CharacterDead(2200810) || HasDamageType(2200800, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIId(2200800, 210020);
});

// Boss Suspended Death_Eye Collector_XX
$Event(12204812, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(12201800));
    SetCharacterImmortality(X0_4, Enabled);
    hp = CharacterHPValue(X0_4) == 1 && CharacterHPValue(X4_4) < 1;
    hp2 = CharacterHPValue(X0_4) == 1 && CharacterHPValue(X4_4) == 1;
    WaitFor(hp || hp2);
    if (!hp2.Passed) {
        WaitFixedTimeSeconds(0);
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(X0_4, 7000, false, false, false);
        WaitFixedTimeFrames(75);
        ForceAnimationPlayback(X0_4, 7001, true, false, false);
        cond = ElapsedSeconds(45);
        hp3 = CharacterHPValue(X4_4) == 1;
        WaitFor(cond || hp3);
        if (!hp3.Passed) {
            SetSpEffect(X0_4, 5686, false);
            WaitFixedTimeSeconds(3);
            ChangeCharacterEnableState(X0_4, Disabled);
            ForceAnimationPlayback(X0_4, 0, false, false, false);
            IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
            SetSpEffect(X0_4, 5698, false);
            WaitFixedTimeSeconds(3);
            ChangeCharacterEnableState(X0_4, Enabled);
            RequestCharacterAIReplan(X0_4);
            SetEventFlag(X12_4, OFF);
            RestartEvent();
        }
    }
L0:
    ForceCharacterDeath(X0_4, false);
    ForceCharacterDeath(X4_4, false);
});

// Select Warp Destination_Eye Corrector_XX
$Event(12204814, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterHasEventMessage(X0_4, 30));
    SetSpEffect(X0_4, 5686, false);
    WaitFor(CharacterHasEventMessage(X0_4, 10) && CharacterHPValue(X0_4) != 1);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        RandomlySetEventFlagInRange(X4_4, X8_4, ON);
        if (EventFlag(X12_4)) {
            BatchSetEventFlags(X12_4, X24_4, OFF);
            SetEventFlag(X12_4, ON);
        } else {
L1:
            if (EventFlag(X16_4)) {
                BatchSetEventFlags(X12_4, X24_4, OFF);
                SetEventFlag(X16_4, ON);
            } else {
L2:
                if (EventFlag(X20_4)) {
                    BatchSetEventFlags(X12_4, X24_4, OFF);
                    SetEventFlag(X20_4, ON);
                } else {
L3:
                    if (EventFlag(X24_4)) {
                        BatchSetEventFlags(X12_4, X24_4, OFF);
                        SetEventFlag(X24_4, ON);
                    }
                }
            }
        }
    }
L0:
    WaitFor(EventFlag(X12_4) || EventFlag(X16_4) || EventFlag(X20_4) || EventFlag(X24_4));
    SetEventFlag(X28_4, ON);
    RestartEvent();
});

// Warp_Eye Corrector_XX
$Event(12204820, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(12201800));
    WaitFor(EventFlag(X4_4));
    SetEventFlag(X4_4, OFF);
    if (!InArea(X0_4, X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    } else {
L0:
        ChangeCharacterEnableState(X0_4, Disabled);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    }
L1:
    SetEventFlag(X16_4, ON);
    RestartEvent();
});

// Post-Warp Action_Eye Corrector_XX
$Event(12204830, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(12201800));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Companion Defeat Count_Eye Collector_XX
$Event(12204832, Default, function(X0_4) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterDead(X0_4));
    IncrementEventValue(12204860, 10, 10);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RestartEvent();
});

// Companion Death Watch_Eye Collector_XX
$Event(12204835, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(12201800));
    WaitFor(CharacterDead(X0_4));
    SetEventFlag(X4_4, ON);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Summon companion_eye collector
$Event(12204838, Default, function() {
    EndIf(EventFlag(12201800));
    WaitFor(!EventFlag(12204845));
    chrFlag = (CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20)) && EventFlag(12204870);
    chrFlag2 = (CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20)) && EventFlag(12204871);
    WaitFor(
        chrFlag
            || chrFlag2
            || ((CharacterHasEventMessage(2200800, 20) || CharacterHasEventMessage(2200801, 20)) && EventFlag(12204872)));
    if (chrFlag.Passed) {
        DeactivateGenerator(2205000, Enabled);
        WaitFor(CharacterHasEventMessage(2200810, 10));
        DeactivateGenerator(2205000, Disabled);
        RestartEvent();
    }
L0:
    if (chrFlag2.Passed) {
        DeactivateGenerator(2205001, Enabled);
        WaitFor(CharacterHasEventMessage(2200811, 10));
        DeactivateGenerator(2205001, Disabled);
        RestartEvent();
    }
L1:
    DeactivateGenerator(2205002, Enabled);
    WaitFor(CharacterHasEventMessage(2200812, 10));
    DeactivateGenerator(2205002, Disabled);
    RestartEvent();
});

// Generator Management_Eye Corrector
$Event(12204839, Restart, function() {
    EndIf(EventFlag(12201800));
    WaitFor(!EventFlag(12204845));
    hpFlag = (CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1) || EventFlag(12204812);
    flag = EventFlag(12201802) && !ThisEvent() && !EventFlag(12201810);
    flagHp = (EventValue(12204860, 10) == 3 && !EventFlag(12204875))
        || (HPRatio(2200800) <= 0.3 && EventValue(12204860, 10) <= 2 && !EventFlag(12204875))
        || (HPRatio(2200801) <= 0.5 && EventValue(12204860, 10) <= 2 && !EventFlag(12204875));
    flagHp2 = EventValue(12204860, 10) >= 5
        || ((CharacterHPValue(2200800) == 1 || CharacterHPValue(2200801) == 1)
            && EventValue(12204860, 10) <= 4
            && EventValue(12204860, 10) >= 3);
    WaitFor(hpFlag || flag || flagHp || flagHp2);
L1:
    hp = CharacterHPValue(2200800) == 1;
    hp2 = hp || CharacterHPValue(2200800) != 1;
    if (!hp) {
        RequestCharacterAnimationReset(2200800, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(2200800, 3011, false, false, false);
    } else {
L2:
        RequestCharacterAnimationReset(2200801, Interpolation.Interpolated);
        WaitFixedTimeSeconds(0.1);
        ForceAnimationPlayback(2200801, 3011, false, false, false);
    }
L3:
    GotoIf(L4, flag.Passed);
    GotoIf(L5, flagHp.Passed);
    GotoIf(L6, flagHp2.Passed);
    WaitFixedTimeFrames(65);
    ForceAnimationPlayback(2200811, 6200, false, false, false);
    ChangeCharacterEnableState(2200811, Enabled);
    SetCharacterAnimationState(2200811, Enabled);
    DeactivateGenerator(2205001, Disabled);
    WaitFixedTimeFrames(35);
    ForceAnimationPlayback(2200812, 6200, false, false, false);
    ChangeCharacterEnableState(2200812, Enabled);
    SetCharacterAnimationState(2200812, Enabled);
    DeactivateGenerator(2205002, Disabled);
    EndEvent();
L4:
    ForceAnimationPlayback(2200810, 6200, false, false, false);
    ChangeCharacterEnableState(2200810, Enabled);
    SetCharacterAnimationState(2200810, Enabled);
    DeactivateGenerator(2205000, Disabled);
    SetEventFlag(12204876, ON);
    SetEventFlag(12201810, ON);
    RestartEvent();
L5:
    ForceAnimationPlayback(2200811, 6200, false, false, false);
    ChangeCharacterEnableState(2200811, Enabled);
    SetCharacterAnimationState(2200811, Enabled);
    DeactivateGenerator(2205001, Disabled);
    SetEventFlag(12204875, ON);
    RestartEvent();
L6:
    ForceAnimationPlayback(2200812, 6200, false, false, false);
    ChangeCharacterEnableState(2200812, Enabled);
    SetCharacterAnimationState(2200812, Enabled);
    DeactivateGenerator(2205002, Disabled);
    EndEvent();
});

// 1st stage of summoning permission_eye collector
$Event(12204840, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(12204845));
    flag = EventValue(12204860, 10) >= 3;
    flag2 = EventFlag(12204870) && EventValue(12204860, 10) <= 2;
    WaitFor(flag || flag2 || (CharacterHPValue(2200800) == 1 && CharacterHPValue(2200801) == 1));
    if (flag2.Passed) {
        hp = CharacterHPValue(2200800) == 1;
        WaitFor(hp || CharacterHPValue(2200800) != 1);
        if (hp.Passed) {
            WaitRandomTimeSeconds(5, 15);
            RequestCharacterAICommand(2200801, 10, 2);
            RequestCharacterAIReplan(2200801);
        } else {
L1:
            WaitRandomTimeSeconds(5, 15);
            RequestCharacterAICommand(2200800, 10, 2);
            RequestCharacterAIReplan(2200800);
        }
L2:
        WaitFor(!EventFlag(12204870));
        RequestCharacterAICommand(2200800, -1, 2);
        RequestCharacterAIReplan(2200800);
        RestartEvent();
    }
L0:
    SetEventFlag(12204880, ON);
});

// Second stage of summoning permission_eye collector
$Event(12204841, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12204880));
    flag = EventValue(12204860, 10) >= 5;
    flag2 = EventValue(12204860, 10) <= 4 && EventFlag(12204870);
    flag3 = EventValue(12204860, 10) <= 4 && EventFlag(12204871);
    hp = CharacterHPValue(2200800) == 1 && CharacterHPValue(2200801) == 1;
    WaitFor(flag || flag2 || flag3 || hp);
    GotoIf(L0, flag.Passed);
    GotoIf(L0, hp.Passed);
    cond &= CharacterHPValue(2200800) == 1;
    WaitFor(cond || CharacterHPValue(2200800) != 1);
    if (cond.Passed) {
        WaitRandomTimeSeconds(10, 20);
        RequestCharacterAICommand(2200801, 10, 2);
        RequestCharacterAIReplan(2200801);
    } else {
L1:
        WaitRandomTimeSeconds(10, 20);
        RequestCharacterAICommand(2200800, 10, 2);
        RequestCharacterAIReplan(2200800);
    }
L2:
    cond &= !EventFlag(12204870) && !EventFlag(12204871);
    WaitFor(cond);
    RequestCharacterAICommand(2200800, -1, 2);
    RequestCharacterAIReplan(2200800);
    RestartEvent();
L0:
    SetEventFlag(12204881, ON);
});

// Summoning permission 3rd stage_eye collector
$Event(12204842, Restart, function() {
    EndIf(EventFlag(12201800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12204881));
    WaitFor(EventFlag(12204870) || EventFlag(12204871) || EventFlag(12204872));
    WaitRandomTimeSeconds(15, 25);
    RequestCharacterAICommand(2200800, 10, 2);
    RequestCharacterAICommand(2200801, 10, 2);
    RequestCharacterAIReplan(2200800);
    RequestCharacterAIReplan(2200801);
    WaitFor(!EventFlag(12204870) && !EventFlag(12204871) && !EventFlag(12204872));
    RequestCharacterAICommand(2200800, -1, 2);
    RequestCharacterAICommand(2200801, -1, 2);
    RequestCharacterAIReplan(2200800);
    RequestCharacterAIReplan(2200801);
    RestartEvent();
});

// Companion Invalidation_Eye Corrector
$Event(12204843, Restart, function() {
    WaitFixedTimeSeconds(1);
    ChangeCharacterEnableState(2200810, Disabled);
    ChangeCharacterEnableState(2200811, Disabled);
    ChangeCharacterEnableState(2200812, Disabled);
    SetCharacterAnimationState(2200810, Disabled);
    SetCharacterAnimationState(2200811, Disabled);
    SetCharacterAnimationState(2200812, Disabled);
    EndIf(!EventFlag(12201810));
    if (!ThisEvent()) {
        WaitFor(!EventFlag(12204845));
    }
L0:
    ForceAnimationPlayback(2200800, 3011, false, false, false);
    ForceAnimationPlayback(2200810, 6200, false, false, false);
    ChangeCharacterEnableState(2200810, Enabled);
    SetCharacterAnimationState(2200810, Enabled);
    DeactivateGenerator(2205000, Disabled);
});

// Host SAN value judgment_eye collector
$Event(12204844, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerInsightAmount() <= 0);
    SetEventFlag(12204845, ON);
    WaitFor(PlayerInsightAmount() >= 1);
    SetEventFlag(12204845, OFF);
    RestartEvent();
});

// Open entrance door
$Event(12200100, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2201001, 1);
        SetObjactState(2201001, 2200010, Disabled);
        NotifySoundDampeningOfDoorEvent(2201001, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200101));
    CreatePlaylog(122);
    WaitFixedTimeSeconds(0);
});

// Open the door after the boss room
$Event(12200101, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(2201060, 0);
        SetObjactState(2201060, 2200030, Disabled);
        NotifySoundDampeningOfDoorEvent(2201060, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200500));
    WaitFixedTimeSeconds(0);
});

// Castle gate SC release
$Event(12200110, Default, function() {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(2201002, 1);
        SetObjactState(2201220, 100, Disabled);
        NotifySoundDampeningOfDoorEvent(2201002, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(12200112));
    CreatePlaylog(158);
    SetObjactState(2201220, 100, Disabled);
    ForceAnimationPlayback(2201002, 1, false, false, false);
    WaitFixedTimeSeconds(0);
});

// Castle gate SC locked Msg display
$Event(12200111, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12200110));
    act = ActionButtonInArea(2200000, 2201002);
    act2 = ActionButtonInArea(2200001, 2201002);
    flag = EventFlag(12200110);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, 2201002, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Castle Gate SC_ Lever after opening the lever door
$Event(12200112, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12200110) && ActionButtonInArea(7100, 2201220));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, 2201220, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// SC elevator initialization
$Event(12200120, Default, function() {
    flag = EventFlag(12200125);
    WaitFor(flag || !EventFlag(12200125));
    if (!flag.Passed) {
        ReproduceObjectAnimation(2201210, 0);
        SetObjactState(2201200, 100, Disabled);
        SetObjactState(2201201, 100, Enabled);
    } else {
L0:
        ReproduceObjectAnimation(2201210, 4);
        SetObjactState(2201200, 100, Enabled);
        SetObjactState(2201201, 100, Disabled);
    }
L1:
    if (!EventFlag(12200121)) {
        SetObjactState(2201200, 100, Disabled);
        SetObjactState(2201201, 100, Disabled);
    }
L2:
    NoOp();
});

// SC elevator first start
$Event(12200121, Default, function() {
    EndIf(ThisEventSlot());
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Disabled);
    WaitFor(InArea(10000, 2202010));
    CreatePlaylog(186);
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Enabled);
});

// SC elevator descends
$Event(12200122, Default, function() {
    if (!(!EventFlag(12200125) && EventFlag(12200126))) {
        WaitFor(
            (!EventFlag(12200125) && !EventFlag(12200126) && InArea(10000, 2202000))
                || (!EventFlag(12200125) && !EventFlag(12200126) && ObjActEventFlag(12200128)));
    }
L0:
    SetEventFlag(12200126, ON);
    ForceAnimationPlayback(2201210, 1, false, false, false);
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2201210, 2, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(2202001));
    ForceAnimationPlayback(2201210, 3, false, false, false);
    WaitFixedTimeFrames(30);
    SetEventFlag(12200125, ON);
    SetEventFlag(12200126, OFF);
    SetObjactState(2201200, 100, Enabled);
    SetObjactState(2201201, 100, Disabled);
    RestartEvent();
});

// SC elevator up
$Event(12200123, Default, function() {
    if (!(EventFlag(12200125) && EventFlag(12200126))) {
        WaitFor(
            (EventFlag(12200125) && !EventFlag(12200126) && InArea(10000, 2202001))
                || (EventFlag(12200125) && !EventFlag(12200126) && ObjActEventFlag(12200127)));
    }
L0:
    SetEventFlag(12200126, ON);
    ForceAnimationPlayback(2201210, 5, false, false, false);
    WaitFixedTimeFrames(15);
    ForceAnimationPlayback(2201210, 6, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(2202000));
    ForceAnimationPlayback(2201210, 7, false, false, false);
    WaitFixedTimeFrames(30);
    SetEventFlag(12200125, OFF);
    SetEventFlag(12200126, OFF);
    SetObjactState(2201200, 100, Disabled);
    SetObjactState(2201201, 100, Enabled);
    RestartEvent();
});

// SC Elevator_call lever inoperable
$Event(12200124, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(12200121) && ActionButtonInArea(7100, 2201200))
            || (!EventFlag(12200121) && ActionButtonInArea(7100, 2201201))
            || (!EventFlag(12200126) && !EventFlag(12200125) && ActionButtonInArea(7100, 2201200))
            || (!EventFlag(12200126) && EventFlag(12200125) && ActionButtonInArea(7100, 2201201))
            || (EventFlag(12200126) && ActionButtonInArea(7100, 2201200))
            || (EventFlag(12200126) && ActionButtonInArea(7100, 2201201)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Wagon appears
$Event(12200130, Restart, function() {
    ChangeCharacterEnableState(2201310, Disabled);
    DeactivateObject(2201300, Disabled);
    SetCharacterHPBarDisplay(2201310, Disabled);
    EndIf(EventFlag(12507810));
    if (!ThisEvent()) {
        WaitFor(PlayerHasItem(ItemType.Goods, 4003) && EventFlag(12201800) && InArea(10000, 2202410));
        SetEventFlag(9180, ON);
        WaitFixedTimeFrames(1);
        PlayCutsceneToPlayer(22000030, CutscenePlayMode.Skippable, 10000);
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SetEventFlag(12204020, ON);
    }
L0:
    ChangeCharacterEnableState(2201310, Enabled);
    DeactivateObject(2201300, Enabled);
    SetCharacterHPBarDisplay(2201310, Disabled);
});

// Carriage Warp
$Event(12200131, Restart, function() {
    EndIf(EventFlag(12507810));
    WaitFor(EventFlag(12200130) && !CharacterDead(2201310) && ActionButtonInArea(2200010, 2201300));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    PlayCutsceneToPlayer(22000040, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    WarpPlayerToRespawnPoint(2502959);
});

// Kill the workhorse
$Event(12200132, Restart, function() {
    EndIf(EventFlag(12507810));
    WaitFor(HPRatio(2201310) <= 0);
    SetEventState(12200131, 0, EventEndType.End);
});

// Enemy warp_XX when the carriage appears
$Event(12200150, Restart, function(X0_4, X4_4) {
    EndIf(EventFlag(12200130));
    WaitFor(EventFlag(12204020));
    EndIf(!InArea(X0_4, 2202640));
    WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X4_4, -1, 0);
});

// Crow takes flight_XX
$Event(12200210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X16_4);
        DeactivateObject(X0_4, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, X12_4) || EntityInRadiusOfEntity(X0_4, 10000, X4_4));
    WaitFixedTimeFrames(X8_4);
    ForceAnimationPlayback(X0_4, X16_4, false, true, false);
    DeactivateObject(X0_4, Disabled);
});

// Wandering Madness_XX
$Event(12200220, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
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

// Time zone change_Graveyard
$Event(12200300, Default, function() {
    if (EventFlag(12100856)) {
        BatchSetEventFlags(12205000, 12205001, OFF);
        RandomlySetEventFlagInRange(12205000, 12205001, ON);
        WaitFixedTimeFrames(1);
        GotoIf(L0, EventFlag(12205000));
        GotoIf(L1, EventFlag(12205001));
    }
    if (!EventFlag(9802)) {
        GotoIf(L1, EventFlag(9801));
        if (!EventFlag(9800)) {
        }
L0:
        ActivateMapPart(2206000, Enabled);
        ActivateMapPart(2206001, Disabled);
        Goto(L3);
L1:
        ActivateMapPart(2206000, Disabled);
        ActivateMapPart(2206001, Enabled);
    } else {
L2:
        ActivateMapPart(2206000, Disabled);
        ActivateMapPart(2206001, Enabled);
    }
L3:
    if (EventFlag(12102036) && EventFlag(12100856)) {
        Goto(L4);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
L4:
    WaitFor(EventFlag(12102065));
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// Treasure Chest_XX
$Event(12200310, Default, function(X0_4, X4_4, X8_4) {
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

// Appearance of crazy evil spirit with SAN value_Graveyard_XX
$Event(12204000, Restart, function(X0_4, X4_4) {
    if (!EventFlag(12204011)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(
        ((EventFlag(9801) || EventFlag(9802))
            && EntityInRadiusOfEntity(10000, X0_4, X4_4)
            && CharacterType(10000, TargetType.Alive))
            || ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, false, false);
});

// SAN value judgment
$Event(12204010, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(PlayerInsightAmount() < 15);
    SetEventFlag(12204011, ON);
});

// Crowd B runs up
$Event(12205000, Restart, function() {
    EndIf(EventFlag(12205001));
    if (!ThisEvent()) {
        SetCharacterAIState(2200120, Disabled);
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2202061));
    }
L0:
    SetEventState(12205001, 0, EventEndType.End);
    SetCharacterAIState(2200120, Enabled);
    SetCharacterHome(2200120, 2202360);
    RequestCharacterAICommand(2200120, 10, 0);
    RequestCharacterAIReplan(2200120);
});

// Crowd B runs up_Logic ON only
$Event(12205001, Restart, function() {
    EndIf(EventFlag(12205000));
    if (!ThisEvent()) {
        SetCharacterAIState(2200120, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, 2202062) || InArea(10000, 2202060)))
                || EntityInRadiusOfEntity(10000, 2200120, 10)
                || CharacterDamagedBy(2200120, 10000));
    }
L0:
    SetEventState(12205000, 0, EventEndType.End);
    SetCharacterAIState(2200120, Enabled);
});

// Crowd B rushes_Movement complete
$Event(12205002, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(InArea(2200120, 2202360) && CharacterAIState(2200120, AIStateType.Normal));
        ForceAnimationPlayback(2200120, 3006, false, false, false);
    }
L0:
    RequestCharacterAICommand(2200120, -1, 0);
    RequestCharacterAIReplan(2200120);
});

// Crowd B rushes_interruption of movement
$Event(12205003, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, 2200120, 4))
            || HasDamageType(2200120, -1, DamageType.Unspecified)
            || CharacterAIState(2200120, AIStateType.Combat)
            || EventFlag(12205002));
    RequestCharacterAICommand(2200120, -1, 0);
    RequestCharacterAIReplan(2200120);
});

// crowd women join
$Event(12205010, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X20_4));
    if (!ThisEventSlot()) {
        SetCharacterAIState(X4_4, Disabled);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            (chr && InArea(10000, X8_4) && CharacterAIState(X0_4, AIStateType.Combat))
                || EntityInRadiusOfEntity(X4_4, 10000, 7)
                || (chr && InArea(10000, X16_4))
                || HasDamageType(X0_4, -1, DamageType.Unspecified));
    }
L0:
    SetCharacterAIState(X4_4, Enabled);
    SetCharacterHome(X4_4, X12_4);
    RequestCharacterAICommand(X4_4, 20, 0);
    RequestCharacterAIReplan(X4_4);
});

// Crowd woman joins_Movement complete
$Event(12205015, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X12_4));
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 7))
            || InArea(X0_4, X4_4)
            || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(X0_4, X8_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// Crowd woman joins_running
$Event(12205040, Restart, function() {
    EndIf(EventFlag(12205041));
    if (!ThisEvent()) {
        WaitFor(
            ((CharacterAIState(2200212, AIStateType.Combat) && !CharacterDead(2200212))
                || (CharacterAIState(2200303, AIStateType.Combat) && !CharacterDead(2200303))
                || (CharacterAIState(2200300, AIStateType.Combat) && !CharacterDead(2200300))
                || (CharacterAIState(2200100, AIStateType.Combat) && !CharacterDead(2200100))
                || (CharacterAIState(2200213, AIStateType.Combat) && !CharacterDead(2200213)))
                && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 2202320));
    }
L0:
    SetSpEffect(2200211, 5000, false);
    ChangeCharacterPatrolBehavior(2200211, 2203030);
    RequestCharacterAIReplan(2200211);
});

// Crowd woman joins back to normal
$Event(12205041, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterAIState(2200211, AIStateType.Combat) || InArea(2200211, 2202320));
    WaitFor(CharacterAIState(2200211, AIStateType.Normal));
    ClearSpEffect(2200211, 5000);
    ChangeCharacterPatrolBehavior(2200211, 2203031);
    RequestCharacterAIReplan(2200211);
});

// Crowd woman strikes back
$Event(12205020, Restart, function() {
    if (!ThisEvent()) {
        ForceAnimationPlayback(2200140, 7004, true, false, false);
        SetCharacterAIId(2200140, 261091);
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        areaChr = (!areaChr && InArea(10000, 2202080))
            || (CharacterAIState(2200140, AIStateType.Alert) && EntityInRadiusOfEntity(2200140, 10000, 5));
        WaitFor(areaChr);
    }
L0:
    SetCharacterAIId(2200140, 261003);
    ForceAnimationPlayback(2200140, 7005, false, false, false);
});

// Cultist Beast Pounce_Move
$Event(12205030, Restart, function() {
    if (!ThisEvent()) {
        area = InArea(10000, 2202090);
        area2 = EntityInRadiusOfEntity(10000, 2200150, 10);
        WaitFor(area || area2);
        EndIf(area2.Passed);
    }
L0:
    SetCharacterHome(2200150, 2202390);
    RequestCharacterAICommand(2200150, 10, 0);
    RequestCharacterAIReplan(2200150);
});

// Cultist Beast Pounce_Attack
$Event(12205031, Restart, function() {
    EndIf(ThisEvent());
    area = InArea(2200150, 2202390);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && EntityInRadiusOfEntity(10000, 2200150, 3.5);
    WaitFor(area || chrArea);
    if (!chrArea.Passed) {
        RequestCharacterAnimationReset(2200150, Interpolation.Interpolated);
        RotateCharacter(2200150, 10000, 3001, false);
    }
L0:
    RequestCharacterAICommand(2200150, -1, 0);
    RequestCharacterAIReplan(2200150);
});

// Executioners join
$Event(12205050, Restart, function() {
    EndIf(EventFlag(12205051));
    if (!ThisEvent()) {
        SetCharacterAIState(2200280, Disabled);
        chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(2200280, 10000, 3);
        dmg = HasDamageType(2200280, -1, DamageType.Unspecified);
        chr = CharacterAIState(2200270, AIStateType.Combat);
        WaitFor(chrArea || dmg || chr);
    }
L0:
    SetCharacterAIState(2200280, Enabled);
    EndIf(!chr.Passed);
    WaitFixedTimeSeconds(5);
    SetCharacterHome(2200280, 2209005);
    RequestCharacterAICommand(2200280, 10, 0);
    RequestCharacterAIReplan(2200280);
});

// Executioner joins_Move complete
$Event(12205051, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2200280, 10000, 5))
                || InArea(2200280, 2209005)
                || HasDamageType(2200280, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(2200280, -1, 0);
    RequestCharacterAIReplan(2200280);
});

// wandering madness fall
$Event(12205060, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200170, Disabled);
        SetCharacterGravity(2200170, Disabled);
        SetCharacterInvincibility(2200170, Enabled);
        WaitFor(ObjectDestroyed(2201030) || ObjectDestroyed(2201031) || ObjectDestroyed(2201032));
    }
L0:
    SetCharacterInvincibility(2200170, Disabled);
    SetCharacterGravity(2200170, Enabled);
    SetCharacterAIState(2200170, Enabled);
    RequestCharacterAIReplan(2200170);
});

// Crowd A gun to sniping point
$Event(12205070, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200411, Disabled);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2200411, 100000, 10))
                || CharacterAIState(2200160, AIStateType.Combat)
                || CharacterAIState(2200161, AIStateType.Combat));
    }
L0:
    SetCharacterAIState(2200411, Enabled);
    RequestCharacterAIReplan(2200411);
});

// Crowd woman back throw
$Event(12205080, Restart, function() {
    if (!ThisEvent()) {
        SetCharacterAIState(2200205, Disabled);
        area = InArea(10000, 2202155);
        WaitFor(area || InArea(10000, 2202156) || CharacterDamagedBy(2200205, 10000));
        if (area.Passed) {
            RotateCharacter(2200205, 10000, 3012, false);
        }
    }
L0:
    WaitFixedTimeFrames(35);
    SetCharacterAIState(2200205, Enabled);
});

// Crowd woman blind attack_move_XX
$Event(12205100, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    if (!ThisEventSlot()) {
        chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            HasDamageType(X0_4, -1, DamageType.Unspecified)
                || (chr && InArea(10000, X4_4))
                || (chr && EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    }
L0:
    SetCharacterEventTarget(X0_4, 10000);
    RequestCharacterAICommand(X0_4, X16_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// Crowd woman blind attack_attack_XX
$Event(12205105, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chrArea = chr && EntityInRadiusOfEntity(10000, X0_4, X12_4) && InArea(X0_4, X4_4);
    chrArea2 = chr && EntityInRadiusOfEntity(10000, X0_4, X12_4) && !InArea(X0_4, X4_4);
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RotateCharacter(X0_4, 10000, X8_4, false);
    }
L1:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Start animation playback_XX
$Event(12205110, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    chr2 = chr && areaDmgChr;
    areaDmgChr = InArea(10000, X4_4)
        || EntityInRadiusOfEntity(10000, X0_4, X8_4)
        || HasDamageType(X0_4, -1, DamageType.Unspecified)
        || chr2;
    WaitFor(areaDmgChr);
    GotoIf(L0, !chr2.Passed);
    RotateCharacter(X0_4, 10000, X12_4, false);
    SetCharacterAIState(X0_4, Enabled);
    EndEvent();
    SetCharacterAIState(X0_4, Enabled);
});

// enemy logic ON_XX
$Event(12205120, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)))
            || CharacterDamagedBy(X0_4, 10000));
    SetCharacterAIState(X0_4, Enabled);
});

// special wait_XX
$Event(12205150, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, X12_4))
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

// Bomb attack_XX
$Event(12205160, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4)
            && !ObjectDestroyed(X4_4));
    SetCharacterEventTarget(X8_4, X12_4);
    RequestCharacterAICommand(X8_4, 100, 0);
    RequestCharacterAIReplan(X8_4);
    WaitFor(CharacterHasEventMessage(X8_4, 100));
    RequestCharacterAICommand(X8_4, -1, 0);
    RequestCharacterAIReplan(X8_4);
    RestartEvent();
});

// Explosive Jar_XX
$Event(12205170, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(X0_4, 1);
        EndEvent();
    }
L1:
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

// Extrude Recommended_XX
$Event(12205200, Restart, function(X0_4) {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2202100)
                || InArea(10000, 2202101)
                || InArea(10000, 2202102)
                || InArea(10000, 2202103)
                || InArea(10000, 2202104)
                || InArea(10000, 2202105)
                || InArea(10000, 2202106)
                || InArea(10000, 2202107)
                || InArea(10000, 2202108)
                || InArea(10000, 2202109)));
    RequestCharacterAICommand(X0_4, 100, 0);
    WaitFor(
        !AllPlayersInArea(2202100)
            && !AllPlayersInArea(2202101)
            && !AllPlayersInArea(2202102)
            && !AllPlayersInArea(2202103)
            && !AllPlayersInArea(2202104)
            && !AllPlayersInArea(2202105)
            && !AllPlayersInArea(2202106)
            && !AllPlayersInArea(2202107)
            && !AllPlayersInArea(2202108)
            && !AllPlayersInArea(2202109));
    RequestCharacterAICommand(X0_4, -1, 0);
    RestartEvent();
});

// Carrion bird pretends to be dead_XX
$Event(12205210, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, 9003, true, false, false);
    SetCharacterAIId(X0_4, 117007);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Alert) && EntityInRadiusOfEntity(X0_4, 10000, 5) && chr)
            || (chr && CharacterDamagedBy(X0_4, 10000))
            || (chr
                && EntityInRadiusOfEntity(X0_4, 10000, 3)
                && ((CharacterDead(2200230) && CharacterDead(2200231) && CharacterDead(2200203))
                    || (CharacterDead(2200230) && CharacterDead(2200231) && CharacterDead(2200232))
                    || (CharacterDead(2200230) && CharacterDead(2200203) && CharacterDead(2200232))
                    || (CharacterDead(2200231) && CharacterDead(2200203) && CharacterDead(2200232)))));
    SetCharacterAIId(X0_4, 117000);
    ForceAnimationPlayback(X0_4, 9060, false, false, false);
});

// patrol animation_fixed_XX
$Event(12205220, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    chrArea = CharacterBackreadStatus(X0_4) && CharacterAIState(X0_4, AIStateType.Normal) && InArea(X0_4, X4_4);
    hp = HPRatio(X0_4) <= 0;
    WaitFor(hp || chrArea);
    EndIf(hp.Passed);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    chr = CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Combat);
    area = !InArea(X0_4, X12_4);
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(chr || area || hp2);
    EndIf(hp2.Passed);
    RestartIf(area.Passed);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    RestartEvent();
});

// Beast Territory_XX
$Event(12205230, Restart, function(X0_4, X4_4) {
    SetCharacterAIId(X0_4, 114097);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, 2202620) || EntityInRadiusOfEntity(10000, X0_4, 10)))
            || CharacterDamagedBy(X0_4, 10000));
    SetCharacterAIId(X0_4, X4_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!AllPlayersInArea(2202620) && CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Start executioner patrol_XX
$Event(12205240, Restart, function(X0_4) {
    if (!ThisEventSlot()) {
        SetCharacterAIState(X0_4, Disabled);
        if (EventFlag(12200110)) {
            chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
            WaitFor(
                (chr
                    && (InArea(10000, 2202250)
                        || InArea(10000, 2202251)
                        || InArea(10000, 2202252)
                        || InArea(10000, 2202253)))
                    || EntityInRadiusOfEntity(10000, X0_4, 5)
                    || CharacterDamagedBy(X0_4, 10000));
        } else {
L0:
            chr2 = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
            area = InArea(10000, 2202250) || InArea(10000, 2202251) || InArea(10000, 2202253);
            chrAreaDmg = (chr && area) || EntityInRadiusOfEntity(10000, X0_4, 5) || CharacterDamagedBy(X0_4, 10000);
            WaitFor(area);
        }
    }
L1:
    SetCharacterAIState(X0_4, Enabled);
});

// Waiting for executioner_XX
$Event(12205250, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(!CharacterDead(X8_4) && InArea(X0_4, X4_4) && CharacterAIState(X0_4, AIStateType.Normal));
    RequestCharacterAICommand(X0_4, 30, 0);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(X0_4, 10000, 10))
            || InArea(X8_4, X12_4)
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    RequestCharacterAICommand(X0_4, -1, 0);
    WaitFor(!InArea(X0_4, X4_4));
    RestartEvent();
});

// wandering madness escapes_XX
$Event(12205260, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X12_4));
    if (!ThisEventSlot()) {
        SetCharacterAIState(X0_4, Disabled);
        SetSpEffect(X0_4, 5000, false);
        WaitFor(
            HasDamageType(X0_4, -1, DamageType.Unspecified)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, X4_4) || EntityInRadiusOfEntity(X0_4, 10000, 3))));
    }
L0:
    SetCharacterAIState(X0_4, Enabled);
});

// wandering madness escape_disappear_XX
$Event(12205265, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(X0_4, X8_4)
            || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4)));
    SetEventState(X12_4, 0, EventEndType.End);
    SetEventState(X16_4, 0, EventEndType.End);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 3000, false, false, false);
});

// Wandering Madness Escape_Escape to Nest_XX
$Event(12205270, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4));
    GotoIf(L0, ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X12_4))
            || InArea(X0_4, X16_4)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetEventState(X20_4, 0, EventEndType.End);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
});

// Generic Resident_SE Playback
$Event(12205300, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetMapSoundState(X0_4, Disabled);
    DeleteMapSFX(2203040, false);
    EndIf(EventFlag(X12_4));
    SpawnMapSFX(2203040);
    WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
    SetMapSoundState(X0_4, Enabled);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetMapSoundState(X0_4, Disabled);
    RestartEvent();
});

// Map first entry_play log
$Event(12200990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2203500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 214, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 214, PlayLogMultiplayerType.HostOnly);
});
