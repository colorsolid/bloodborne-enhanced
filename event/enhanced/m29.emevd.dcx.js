// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ダンジョン_トラップ発動_錆びた宝箱\u0000ダンジョン_ギミック起動_魔法壁消失\u0000ダンジョン_トラップ発動_錆びた扉\u0000ダンジョン_トラップ発動_テレポーター\u0000ダンジョン_トラップ発動_落とし穴\u0000ダンジョン_トラップ発動_火矢作動\u0000ダンジョン_ギミック起動_跳ね橋降下\u0000ボス_撃破\u0000PC情報_ボス撃破_上層\u0000PC情報_ボス撃破_中層\u0000PC情報_ボス撃破_下層\u0000PC情報_ボス撃破_最下層\u0000クリア時間_通し\u0000PC情報_ダンジョン到達時\u0000ダンジョン_上層_クリア時間_通し\u0000ダンジョン_上層_クリア時間_1プレイ\u0000ダンジョン_中層_クリア時間_通し\u0000ダンジョン_中層_クリア時間_1プレイ\u0000ダンジョン_下層_クリア時間_通し\u0000ダンジョン_下層_クリア時間_1プレイ\u0000ダンジョン_最下層_クリア時間_通し\u0000ダンジョン_最下層_クリア時間_1プレイ\u0000ダンジョン_トラップ発動_落下敵\u0000ダンジョン_ギミック起動_血舐め発生\u0000ダンジョン_トラップ発動_悪霊女出現\u0000ダンジョン_トラップ発動_ギロチン\u0000ダンジョン_トラップ発動_クモ天井待機\u0000ダンジョン_トラップ発動_クモ天井待機_領域使用\u0000ダンジョン_トラップ発動_飛び出す敵\u0000ダンジョン_トラップ発動_領域で飛び出す敵\u0000ダンジョン_トラップ発動_モンスタールーム\u0000ダンジョン_ギミック起動_強化憑依\u0000ダンジョン_トラップ発動_鐘を鳴らす\u0000ダンジョン_トラップ発動_モンスタールーム_巣に帰る\u0000ダンジョン_トラップ発動_伏兵落下\u0000ボス_戦闘開始\u0000ダンジョン_ボスラッシュ前座_撃破時間\u0000ダンジョン_上層_ボス戦_撃破時間\u0000ダンジョン_中層_ボス戦_撃破時間\u0000ダンジョン_下層_ボス戦_撃破時間\u0000ダンジョン_最下層_ボス戦_撃破時間\u0000ダンジョン_トラップ発動_火薬タル爆発\u0000\u0000"
// @linked    []
// @version    3.6.3
// ==/EMEVD==

const area_id = 29;
const block_id = 0;

const lamp_1_offset = 70;
const lamp_1_id = 2901950;
const lamp_1_kindle = 12900000 + (area_id * 100) + (block_id * 10);

const lamp_2_offset = 71;
const lamp_2_id = 2901951;
const lamp_2_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 2;

const boss_1_lamp_offset = 72;
const boss_1_offset = 42;
const boss_1_lamp_id = 2901952;
const boss_1_lamp_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 4;
const boss_1_return = 2902820;
const boss_1_defeat = 12901800;

const lamp_4_offset = 73;
const lamp_4_id = 2901953;
const lamp_4_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 6;

const boss_2_lamp_offset = 74;
const boss_2_offset = 44;
const boss_2_lamp_id = 2901954;
const boss_2_lamp_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 8;
const boss_2_return = 2902840;
const boss_2_defeat = 12901801;

const lamp_6_offset = 75;
const lamp_6_id = 2901955;
const lamp_6_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 10;

const boss_3_lamp_offset = 76;
const boss_3_offset = 46;
const boss_3_lamp_id = 2901956;
const boss_3_lamp_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 12;
const boss_3_return = 2902860;
const boss_3_defeat = 12901802;

const lamp_8_offset = 77;
const lamp_8_id = 2901957;
const lamp_8_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 14;

const boss_4_lamp_offset = 78;
const boss_4_offset = 48;
const boss_4_lamp_id = 2901958;
const boss_4_lamp_kindle = 12900000 + (area_id * 100) + (block_id * 10) + 16;
const boss_4_return = 2902880;
const boss_4_defeat = 12901803;

// constructor
$Event(0, Default, function() {
    
    $InitializeEvent(0, 10001511);
    
    SetEventFlag(10001509, OFF);
    SetEventFlag(10001510, OFF);
    SetEventFlag(12100761, OFF); // re-enable rest in the menu
    
    SetEventFlag(10008900+boss_1_offset, OFF);
    SetEventFlag(10008900+boss_2_offset, OFF);
    SetEventFlag(10008900+boss_3_offset, OFF);
    SetEventFlag(10008900+boss_4_offset, OFF);
    
    $InitializeEvent(38, 10007900, 10000000+boss_1_return, boss_1_return, area_id, block_id);
    $InitializeEvent(39, 10007900, 10000000+boss_1_return-1, boss_1_return, area_id, block_id);
    
    $InitializeEvent(40, 10007900, 10000000+boss_2_return, boss_2_return, area_id, block_id);
    $InitializeEvent(41, 10007900, 10000000+boss_2_return-1, boss_2_return, area_id, block_id);
    $InitializeEvent(42, 10007900, 10000000+boss_2_return-2, boss_2_return, area_id, block_id);
    $InitializeEvent(43, 10007900, 10000000+boss_2_return-3, boss_2_return, area_id, block_id);
    
    $InitializeEvent(44, 10007900, 10000000+boss_3_return, boss_3_return, area_id, block_id);
    $InitializeEvent(45, 10007900, 10000000+boss_3_return-1, boss_3_return, area_id, block_id);
    $InitializeEvent(46, 10007900, 10000000+boss_3_return-2, boss_3_return, area_id, block_id);
    $InitializeEvent(47, 10007900, 10000000+boss_3_return-3, boss_3_return, area_id, block_id);
    $InitializeEvent(48, 10007900, 10000000+boss_3_return-4, boss_3_return, area_id, block_id);
    $InitializeEvent(49, 10007900, 10000000+boss_3_return-5, boss_3_return, area_id, block_id);
    
    $InitializeEvent(50, 10007900, 10000000+boss_4_return, boss_4_return, area_id, block_id);
    $InitializeEvent(51, 10007900, 10000000+boss_4_return-1, boss_4_return, area_id, block_id);
    $InitializeEvent(52, 10007900, 10000000+boss_4_return-2, boss_4_return, area_id, block_id);
    $InitializeEvent(53, 10007900, 10000000+boss_4_return-3, boss_4_return, area_id, block_id);
    $InitializeEvent(54, 10007900, 10000000+boss_4_return-4, boss_4_return, area_id, block_id);
    $InitializeEvent(55, 10007900, 10000000+boss_4_return-5, boss_4_return, area_id, block_id);
    $InitializeEvent(56, 10007900, 10000000+boss_4_return-6, boss_4_return, area_id, block_id);
    $InitializeEvent(57, 10007900, 10000000+boss_4_return-7, boss_4_return, area_id, block_id);
    
    if (EventFlag(10008950)) {
        SetEventFlag(10008950, OFF);
        SetSpEffect(10000, 4682, false);
    }
    
    $InitializeEvent(boss_1_offset, 10007700, boss_1_defeat+2011, boss_1_defeat+2012, boss_1_lamp_id+1000);
    $InitializeEvent(boss_2_offset, 10007700, boss_2_defeat+2021, boss_2_defeat+2022, boss_2_lamp_id+1000);
    $InitializeEvent(boss_3_offset, 10007700, boss_3_defeat+2031, boss_3_defeat+2032, boss_3_lamp_id+1000);
    $InitializeEvent(boss_4_offset, 10007700, boss_4_defeat+2041, boss_4_defeat+2042, boss_4_lamp_id+1000);
    
    $InitializeEvent(lamp_1_offset, 10008100, 10008100+lamp_1_offset, lamp_1_kindle);
    $InitializeEvent(lamp_2_offset, 10008100, 10008100+lamp_2_offset, lamp_2_kindle);
    $InitializeEvent(boss_1_lamp_offset, 10008100, 10008100+boss_1_lamp_offset, boss_1_lamp_kindle);
    $InitializeEvent(lamp_4_offset, 10008100, 10008100+lamp_4_offset, lamp_4_kindle);
    $InitializeEvent(boss_2_lamp_offset, 10008100, 10008100+boss_2_lamp_offset, boss_2_lamp_kindle);
    $InitializeEvent(lamp_6_offset, 10008100, 10008100+boss_3_lamp_offset, lamp_6_kindle);
    $InitializeEvent(boss_3_lamp_offset, 10008100, 10008100+boss_3_lamp_offset, boss_3_lamp_kindle);
    $InitializeEvent(lamp_8_offset, 10008100, 10008100+lamp_8_offset, lamp_8_kindle);
    $InitializeEvent(boss_4_lamp_offset, 10008100, 10008100+boss_4_lamp_offset, boss_4_lamp_kindle);
    
    $InitializeEvent(lamp_1_offset, 10008300, lamp_1_id+2000, -1, lamp_1_kindle, lamp_1_id+6000, lamp_1_id+3000);
    $InitializeEvent(lamp_2_offset, 10008300, lamp_2_id+2000, -1, lamp_2_kindle, lamp_2_id+6000, lamp_2_id+3000);
    $InitializeEvent(lamp_4_offset, 10008300, lamp_4_id+2000, -1, lamp_4_kindle, lamp_4_id+6000, lamp_4_id+3000);
    $InitializeEvent(lamp_6_offset, 10008300, lamp_6_id+2000, -1, lamp_6_kindle, lamp_6_id+6000, lamp_6_id+3000);
    $InitializeEvent(lamp_8_offset, 10008300, lamp_8_id+2000, -1, lamp_8_kindle, lamp_8_id+6000, lamp_8_id+3000);
    
    if (EventFlag(boss_1_defeat+1013) && !EventFlag(boss_1_defeat+1099)) {
        SetEventFlag(boss_1_defeat+1013, OFF);
        SetEventFlag(boss_1_defeat, ON);
        $InitializeEvent(boss_1_lamp_offset, 10008300, boss_1_lamp_id+2000, 10000999, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_1_lamp_id+4000, area_id, block_id);
    } else if (EventFlag(boss_1_defeat+2012) || EventFlag(boss_1_defeat+1099)) {
        SetSpEffect(10000, 1990, false);
        SetEventFlag(boss_1_defeat, OFF);
        SetEventFlag(boss_1_defeat+2012, OFF);
        SetEventFlag(boss_1_defeat+1013, ON);
        SetEventFlag(boss_1_defeat+1099, OFF);
        SetEventFlag(10008900+boss_1_offset, ON);
        $InitializeEvent(boss_1_lamp_offset, 10008300, boss_1_lamp_id+2000, -1, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
    } else {
        $InitializeEvent(boss_1_lamp_offset, 10008300, boss_1_lamp_id+2000, -1, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
    }
    
    if (EventFlag(boss_2_defeat+1023) && !EventFlag(boss_2_defeat+1089)) {
        SetEventFlag(boss_2_defeat+1023, OFF);
        SetEventFlag(boss_2_defeat, ON);
        $InitializeEvent(boss_2_lamp_offset, 10008300, boss_2_lamp_id+2000, 10000999, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_2_lamp_id+4000, area_id, block_id);
    } else if (EventFlag(boss_2_defeat+2022) || EventFlag(boss_2_defeat+1089)) {
        SetSpEffect(10000, 1990, false);
        SetEventFlag(boss_2_defeat, OFF);
        SetEventFlag(boss_2_defeat+2022, OFF);
        SetEventFlag(boss_2_defeat+1023, ON);
        SetEventFlag(boss_2_defeat+1089, OFF);
        SetEventFlag(10008900+boss_2_offset, ON);
        $InitializeEvent(boss_2_lamp_offset, 10008300, boss_2_lamp_id+2000, -1, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
    } else {
        $InitializeEvent(boss_2_lamp_offset, 10008300, boss_2_lamp_id+2000, -1, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
    }
    
    if (EventFlag(boss_3_defeat+1033) && !EventFlag(boss_3_defeat+1079)) {
        SetEventFlag(boss_3_defeat+1033, OFF);
        SetEventFlag(boss_3_defeat, ON);
        $InitializeEvent(boss_3_lamp_offset, 10008300, boss_3_lamp_id+2000, 10000999, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_3_lamp_id+4000, area_id, block_id);
    } else if (EventFlag(boss_3_defeat+2032) || EventFlag(boss_3_defeat+1079)) {
        SetSpEffect(10000, 1990, false);
        SetEventFlag(boss_3_defeat, OFF);
        SetEventFlag(boss_3_defeat+2032, OFF);
        SetEventFlag(boss_3_defeat+1033, ON);
        SetEventFlag(boss_3_defeat+1079, OFF);
        SetEventFlag(10008900+boss_3_offset, ON);
        $InitializeEvent(boss_3_lamp_offset, 10008300, boss_3_lamp_id+2000, -1, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
    } else {
        $InitializeEvent(boss_3_lamp_offset, 10008300, boss_3_lamp_id+2000, -1, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
    }
    
    if (EventFlag(boss_4_defeat+1043) && !EventFlag(boss_4_defeat+1069)) {
        SetEventFlag(boss_4_defeat+1043, OFF);
        SetEventFlag(boss_4_defeat, ON);
        $InitializeEvent(boss_4_lamp_offset, 10008300, boss_4_lamp_id+2000, 10000999, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_4_lamp_id+4000, area_id, block_id);
    } else if (EventFlag(boss_4_defeat+2042) || EventFlag(boss_4_defeat+1069)) {
        SetSpEffect(10000, 1990, false);
        SetEventFlag(boss_4_defeat, OFF);
        SetEventFlag(boss_4_defeat+2042, OFF);
        SetEventFlag(boss_4_defeat+1043, ON);
        SetEventFlag(boss_4_defeat+1069, OFF);
        SetEventFlag(10008900+boss_4_offset, ON);
        $InitializeEvent(boss_4_lamp_offset, 10008300, boss_4_lamp_id+2000, -1, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
    } else {
        $InitializeEvent(boss_4_lamp_offset, 10008300, boss_4_lamp_id+2000, -1, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
    }
    
    $InitializeEvent(lamp_1_offset, 10008500, lamp_1_id, 72114444);
    $InitializeEvent(lamp_2_offset, 10008500, lamp_2_id, 72114545);
    $InitializeEvent(boss_1_lamp_offset, 10008500, boss_1_lamp_id, 72114646);
    $InitializeEvent(lamp_4_offset, 10008500, lamp_4_id, 72114747);
    $InitializeEvent(boss_2_lamp_offset, 10008500, boss_2_lamp_id, 72114848);
    $InitializeEvent(lamp_6_offset, 10008500, lamp_6_id, 72114949);
    $InitializeEvent(boss_3_lamp_offset, 10008500, boss_3_lamp_id, 72115050);
    $InitializeEvent(lamp_8_offset, 10008500, lamp_8_id, 72115151);
    $InitializeEvent(boss_4_lamp_offset, 10008500, boss_4_lamp_id, 72115252);
    
    $InitializeEvent(0, 10008601); // disable item refill after time limit
    
    $InitializeEvent(boss_1_offset, 10008900, boss_1_defeat+1099, boss_1_lamp_id+1000, boss_1_lamp_id+5000);
    $InitializeEvent(boss_2_offset, 10008900, boss_2_defeat+1089, boss_2_lamp_id+1000, boss_2_lamp_id+5000);
    $InitializeEvent(boss_3_offset, 10008900, boss_3_defeat+1079, boss_3_lamp_id+1000, boss_3_lamp_id+5000);
    $InitializeEvent(boss_4_offset, 10008900, boss_4_defeat+1069, boss_4_lamp_id+1000, boss_4_lamp_id+5000);
    
    $InitializeEvent(0, 12101000, 4110, 2100211, 1, 10);
    $InitializeEvent(1, 12101000, 4111, 2100211, 2, 13);
    $InitializeEvent(2, 12101000, 4112, 2100211, 3, 15);
    $InitializeEvent(3, 12101000, 4113, 2100212, 0, 15);
    $InitializeEvent(4, 12101000, 4114, 2100212, 1, 12);
    $InitializeEvent(5, 12101000, 4115, 2100212, 2, 11);
    $InitializeEvent(6, 12101000, 4116, 2100212, 3, 15);
    $InitializeEvent(7, 12101000, 4117, 2100213, 0, 15);
    $InitializeEvent(8, 12101000, 4118, 2100213, 1, 15);
    $InitializeEvent(9, 12101000, 4119, 2100213, 2, 15);
    
    $InitializeEvent(0, 12101010);
    InitializeEvent(0, 12100005, 0);
    
    // specialty items
    $InitializeEvent(0, 12101300);
    $InitializeEvent(0, 12101301);
    $InitializeEvent(0, 12101302);
    $InitializeEvent(0, 12101303);
    $InitializeEvent(0, 12101310);
    $InitializeEvent(0, 12101320);
    $InitializeEvent(0, 12101330);
    $InitializeEvent(0, 12101331);
    $InitializeEvent(0, 12101332);
    $InitializeEvent(0, 12101333);
    $InitializeEvent(0, 12101334);
    $InitializeEvent(0, 12101340);
    $InitializeEvent(0, 12101360);
    $InitializeEvent(0, 12101361);
    
    $InitializeEvent(0, 12105062);
    
    $InitializeEvent(0, 12105020);
    $InitializeEvent(0, 12105021);
    $InitializeEvent(0, 12105022);
    $InitializeEvent(0, 12105023);
    $InitializeEvent(0, 12105024);
    
    SetEventFlag(72100420, OFF);
    SetEventFlag(72100421, OFF);
    SetEventFlag(72100422, OFF);
    SetEventFlag(72100423, OFF);
    SetEventFlag(72100424, OFF);
    SetEventFlag(72100425, OFF);
    SetEventFlag(72100426, OFF);
    
    $InitializeEvent(4400, 12107000, 72114400, 2901950, 2412950);
    $InitializeEvent(4401, 12107000, 72114401, 2901950, 2412951);
    $InitializeEvent(4402, 12107000, 72114402, 2901950, 2412952);
    $InitializeEvent(4403, 12107000, 72114403, 2901950, 2412953);
    $InitializeEvent(4404, 12107000, 72114404, 2901950, 2402950);
    $InitializeEvent(4405, 12107000, 72114405, 2901950, 2402951);
    $InitializeEvent(4406, 12107000, 72114406, 2901950, 2422950);
    $InitializeEvent(4407, 12107000, 72114407, 2901950, 2422952);
    $InitializeEvent(4408, 12107000, 72114408, 2901950, 2422951);
    $InitializeEvent(4409, 12107000, 72114409, 2901950, 2302950);
    $InitializeEvent(4410, 12107000, 72114410, 2901950, 2302951);
    $InitializeEvent(4411, 12107000, 72114411, 2901950, 2302952);
    $InitializeEvent(4412, 12107000, 72114412, 2901950, 2202950);
    $InitializeEvent(4413, 12107000, 72114413, 2901950, 2202951);
    $InitializeEvent(4414, 12107000, 72114414, 2901950, 2702950);
    $InitializeEvent(4415, 12107000, 72114415, 2901950, 2702951);
    $InitializeEvent(4416, 12107000, 72114416, 2901950, 3202950);
    $InitializeEvent(4417, 12107000, 72114417, 2901950, 3202952);
    $InitializeEvent(4418, 12107000, 72114418, 2901950, 2802950);
    $InitializeEvent(4419, 12107000, 72114419, 2901950, 2802953);
    $InitializeEvent(4420, 12107000, 72114420, 2901950, 2802951);
    $InitializeEvent(4421, 12107000, 72114421, 2901950, 2802952);
    $InitializeEvent(4422, 12107000, 72114422, 2901950, 2502950);
    $InitializeEvent(4423, 12107000, 72114423, 2901950, 2502952);
    $InitializeEvent(4424, 12107000, 72114424, 2901950, 2502951);
    $InitializeEvent(4425, 12107000, 72114425, 2901950, 2112950);
    $InitializeEvent(4426, 12107000, 72114426, 2901950, 3202951);
    $InitializeEvent(4427, 12107000, 72114427, 2901950, 3202953);
    $InitializeEvent(4428, 12107000, 72114428, 2901950, 3302950);
    $InitializeEvent(4429, 12107000, 72114429, 2901950, 3302951);
    $InitializeEvent(4430, 12107000, 72114430, 2901950, 2602950);
    $InitializeEvent(4431, 12107000, 72114431, 2901950, 2602953);
    $InitializeEvent(4432, 12107000, 72114432, 2901950, 2602952);
    $InitializeEvent(4433, 12107000, 72114433, 2901950, 2602951);
    $InitializeEvent(4434, 12107000, 72114434, 2901950, 3402950);
    $InitializeEvent(4435, 12107000, 72114435, 2901950, 3402951);
    $InitializeEvent(4436, 12107000, 72114436, 2901950, 3402953);
    $InitializeEvent(4437, 12107000, 72114437, 2901950, 3402952);
    $InitializeEvent(4438, 12107000, 72114438, 2901950, 3502950);
    $InitializeEvent(4439, 12107000, 72114439, 2901950, 3502951);
    $InitializeEvent(4440, 12107000, 72114440, 2901950, 3502952);
    $InitializeEvent(4441, 12107000, 72114441, 2901950, 3602950);
    $InitializeEvent(4442, 12107000, 72114442, 2901950, 3602951);
    $InitializeEvent(4443, 12107000, 72114443, 2901950, 3602952);
    $InitializeEvent(4444, 12107000, 72114444, 2901950, 2902950);
    $InitializeEvent(4445, 12107000, 72114445, 2901950, 2902951);
    $InitializeEvent(4446, 12107000, 72114446, 2901950, 2902952);
    $InitializeEvent(4447, 12107000, 72114447, 2901950, 2902953);
    $InitializeEvent(4448, 12107000, 72114448, 2901950, 2902954);
    $InitializeEvent(4449, 12107000, 72114449, 2901950, 2902955);
    $InitializeEvent(4450, 12107000, 72114450, 2901950, 2902956);
    $InitializeEvent(4451, 12107000, 72114451, 2901950, 2902957);
    $InitializeEvent(4452, 12107000, 72114452, 2901950, 2902958);
    $InitializeEvent(4453, 12107000, 72114453, 2901950, 2902959);
    
    $InitializeEvent(4500, 12107000, 72114500, 2901951, 2412950);
    $InitializeEvent(4501, 12107000, 72114501, 2901951, 2412951);
    $InitializeEvent(4502, 12107000, 72114502, 2901951, 2412952);
    $InitializeEvent(4503, 12107000, 72114503, 2901951, 2412953);
    $InitializeEvent(4504, 12107000, 72114504, 2901951, 2402950);
    $InitializeEvent(4505, 12107000, 72114505, 2901951, 2402951);
    $InitializeEvent(4506, 12107000, 72114506, 2901951, 2422950);
    $InitializeEvent(4507, 12107000, 72114507, 2901951, 2422952);
    $InitializeEvent(4508, 12107000, 72114508, 2901951, 2422951);
    $InitializeEvent(4509, 12107000, 72114509, 2901951, 2302950);
    $InitializeEvent(4510, 12107000, 72114510, 2901951, 2302951);
    $InitializeEvent(4511, 12107000, 72114511, 2901951, 2302952);
    $InitializeEvent(4512, 12107000, 72114512, 2901951, 2202950);
    $InitializeEvent(4513, 12107000, 72114513, 2901951, 2202951);
    $InitializeEvent(4514, 12107000, 72114514, 2901951, 2702950);
    $InitializeEvent(4515, 12107000, 72114515, 2901951, 2702951);
    $InitializeEvent(4516, 12107000, 72114516, 2901951, 3202950);
    $InitializeEvent(4517, 12107000, 72114517, 2901951, 3202952);
    $InitializeEvent(4518, 12107000, 72114518, 2901951, 2802950);
    $InitializeEvent(4519, 12107000, 72114519, 2901951, 2802953);
    $InitializeEvent(4520, 12107000, 72114520, 2901951, 2802951);
    $InitializeEvent(4521, 12107000, 72114521, 2901951, 2802952);
    $InitializeEvent(4522, 12107000, 72114522, 2901951, 2502950);
    $InitializeEvent(4523, 12107000, 72114523, 2901951, 2502952);
    $InitializeEvent(4524, 12107000, 72114524, 2901951, 2502951);
    $InitializeEvent(4525, 12107000, 72114525, 2901951, 2112950);
    $InitializeEvent(4526, 12107000, 72114526, 2901951, 3202951);
    $InitializeEvent(4527, 12107000, 72114527, 2901951, 3202953);
    $InitializeEvent(4528, 12107000, 72114528, 2901951, 3302950);
    $InitializeEvent(4529, 12107000, 72114529, 2901951, 3302951);
    $InitializeEvent(4530, 12107000, 72114530, 2901951, 2602950);
    $InitializeEvent(4531, 12107000, 72114531, 2901951, 2602953);
    $InitializeEvent(4532, 12107000, 72114532, 2901951, 2602952);
    $InitializeEvent(4533, 12107000, 72114533, 2901951, 2602951);
    $InitializeEvent(4534, 12107000, 72114534, 2901951, 3402950);
    $InitializeEvent(4535, 12107000, 72114535, 2901951, 3402951);
    $InitializeEvent(4536, 12107000, 72114536, 2901951, 3402953);
    $InitializeEvent(4537, 12107000, 72114537, 2901951, 3402952);
    $InitializeEvent(4538, 12107000, 72114538, 2901951, 3502950);
    $InitializeEvent(4539, 12107000, 72114539, 2901951, 3502951);
    $InitializeEvent(4540, 12107000, 72114540, 2901951, 3502952);
    $InitializeEvent(4541, 12107000, 72114541, 2901951, 3602950);
    $InitializeEvent(4542, 12107000, 72114542, 2901951, 3602951);
    $InitializeEvent(4543, 12107000, 72114543, 2901951, 3602952);
    $InitializeEvent(4544, 12107000, 72114544, 2901951, 2902950);
    $InitializeEvent(4545, 12107000, 72114545, 2901951, 2902951);
    $InitializeEvent(4546, 12107000, 72114546, 2901951, 2902952);
    $InitializeEvent(4547, 12107000, 72114547, 2901951, 2902953);
    $InitializeEvent(4548, 12107000, 72114548, 2901951, 2902954);
    $InitializeEvent(4549, 12107000, 72114549, 2901951, 2902955);
    $InitializeEvent(4550, 12107000, 72114550, 2901951, 2902956);
    $InitializeEvent(4551, 12107000, 72114551, 2901951, 2902957);
    $InitializeEvent(4552, 12107000, 72114552, 2901951, 2902958);
    $InitializeEvent(4553, 12107000, 72114553, 2901951, 2902959);
    
    $InitializeEvent(4600, 12107000, 72114600, 2901952, 2412950);
    $InitializeEvent(4601, 12107000, 72114601, 2901952, 2412951);
    $InitializeEvent(4602, 12107000, 72114602, 2901952, 2412952);
    $InitializeEvent(4603, 12107000, 72114603, 2901952, 2412953);
    $InitializeEvent(4604, 12107000, 72114604, 2901952, 2402950);
    $InitializeEvent(4605, 12107000, 72114605, 2901952, 2402951);
    $InitializeEvent(4606, 12107000, 72114606, 2901952, 2422950);
    $InitializeEvent(4607, 12107000, 72114607, 2901952, 2422952);
    $InitializeEvent(4608, 12107000, 72114608, 2901952, 2422951);
    $InitializeEvent(4609, 12107000, 72114609, 2901952, 2302950);
    $InitializeEvent(4610, 12107000, 72114610, 2901952, 2302951);
    $InitializeEvent(4611, 12107000, 72114611, 2901952, 2302952);
    $InitializeEvent(4612, 12107000, 72114612, 2901952, 2202950);
    $InitializeEvent(4613, 12107000, 72114613, 2901952, 2202951);
    $InitializeEvent(4614, 12107000, 72114614, 2901952, 2702950);
    $InitializeEvent(4615, 12107000, 72114615, 2901952, 2702951);
    $InitializeEvent(4616, 12107000, 72114616, 2901952, 3202950);
    $InitializeEvent(4617, 12107000, 72114617, 2901952, 3202952);
    $InitializeEvent(4618, 12107000, 72114618, 2901952, 2802950);
    $InitializeEvent(4619, 12107000, 72114619, 2901952, 2802953);
    $InitializeEvent(4620, 12107000, 72114620, 2901952, 2802951);
    $InitializeEvent(4621, 12107000, 72114621, 2901952, 2802952);
    $InitializeEvent(4622, 12107000, 72114622, 2901952, 2502950);
    $InitializeEvent(4623, 12107000, 72114623, 2901952, 2502952);
    $InitializeEvent(4624, 12107000, 72114624, 2901952, 2502951);
    $InitializeEvent(4625, 12107000, 72114625, 2901952, 2112950);
    $InitializeEvent(4626, 12107000, 72114626, 2901952, 3202951);
    $InitializeEvent(4627, 12107000, 72114627, 2901952, 3202953);
    $InitializeEvent(4628, 12107000, 72114628, 2901952, 3302950);
    $InitializeEvent(4629, 12107000, 72114629, 2901952, 3302951);
    $InitializeEvent(4630, 12107000, 72114630, 2901952, 2602950);
    $InitializeEvent(4631, 12107000, 72114631, 2901952, 2602953);
    $InitializeEvent(4632, 12107000, 72114632, 2901952, 2602952);
    $InitializeEvent(4633, 12107000, 72114633, 2901952, 2602951);
    $InitializeEvent(4634, 12107000, 72114634, 2901952, 3402950);
    $InitializeEvent(4635, 12107000, 72114635, 2901952, 3402951);
    $InitializeEvent(4636, 12107000, 72114636, 2901952, 3402953);
    $InitializeEvent(4637, 12107000, 72114637, 2901952, 3402952);
    $InitializeEvent(4638, 12107000, 72114638, 2901952, 3502950);
    $InitializeEvent(4639, 12107000, 72114639, 2901952, 3502951);
    $InitializeEvent(4640, 12107000, 72114640, 2901952, 3502952);
    $InitializeEvent(4641, 12107000, 72114641, 2901952, 3602950);
    $InitializeEvent(4642, 12107000, 72114642, 2901952, 3602951);
    $InitializeEvent(4643, 12107000, 72114643, 2901952, 3602952);
    $InitializeEvent(4644, 12107000, 72114644, 2901952, 2902950);
    $InitializeEvent(4645, 12107000, 72114645, 2901952, 2902951);
    $InitializeEvent(4646, 12107000, 72114646, 2901952, 2902952);
    $InitializeEvent(4647, 12107000, 72114647, 2901952, 2902953);
    $InitializeEvent(4648, 12107000, 72114648, 2901952, 2902954);
    $InitializeEvent(4649, 12107000, 72114649, 2901952, 2902955);
    $InitializeEvent(4650, 12107000, 72114650, 2901952, 2902956);
    $InitializeEvent(4651, 12107000, 72114651, 2901952, 2902957);
    $InitializeEvent(4652, 12107000, 72114652, 2901952, 2902958);
    $InitializeEvent(4653, 12107000, 72114653, 2901952, 2902959);
    
    $InitializeEvent(4700, 12107000, 72114700, 2901953, 2412950);
    $InitializeEvent(4701, 12107000, 72114701, 2901953, 2412951);
    $InitializeEvent(4702, 12107000, 72114702, 2901953, 2412952);
    $InitializeEvent(4703, 12107000, 72114703, 2901953, 2412953);
    $InitializeEvent(4704, 12107000, 72114704, 2901953, 2402950);
    $InitializeEvent(4705, 12107000, 72114705, 2901953, 2402951);
    $InitializeEvent(4706, 12107000, 72114706, 2901953, 2422950);
    $InitializeEvent(4707, 12107000, 72114707, 2901953, 2422952);
    $InitializeEvent(4708, 12107000, 72114708, 2901953, 2422951);
    $InitializeEvent(4709, 12107000, 72114709, 2901953, 2302950);
    $InitializeEvent(4710, 12107000, 72114710, 2901953, 2302951);
    $InitializeEvent(4711, 12107000, 72114711, 2901953, 2302952);
    $InitializeEvent(4712, 12107000, 72114712, 2901953, 2202950);
    $InitializeEvent(4713, 12107000, 72114713, 2901953, 2202951);
    $InitializeEvent(4714, 12107000, 72114714, 2901953, 2702950);
    $InitializeEvent(4715, 12107000, 72114715, 2901953, 2702951);
    $InitializeEvent(4716, 12107000, 72114716, 2901953, 3202950);
    $InitializeEvent(4717, 12107000, 72114717, 2901953, 3202952);
    $InitializeEvent(4718, 12107000, 72114718, 2901953, 2802950);
    $InitializeEvent(4719, 12107000, 72114719, 2901953, 2802953);
    $InitializeEvent(4720, 12107000, 72114720, 2901953, 2802951);
    $InitializeEvent(4721, 12107000, 72114721, 2901953, 2802952);
    $InitializeEvent(4722, 12107000, 72114722, 2901953, 2502950);
    $InitializeEvent(4723, 12107000, 72114723, 2901953, 2502952);
    $InitializeEvent(4724, 12107000, 72114724, 2901953, 2502951);
    $InitializeEvent(4725, 12107000, 72114725, 2901953, 2112950);
    $InitializeEvent(4726, 12107000, 72114726, 2901953, 3202951);
    $InitializeEvent(4727, 12107000, 72114727, 2901953, 3202953);
    $InitializeEvent(4728, 12107000, 72114728, 2901953, 3302950);
    $InitializeEvent(4729, 12107000, 72114729, 2901953, 3302951);
    $InitializeEvent(4730, 12107000, 72114730, 2901953, 2602950);
    $InitializeEvent(4731, 12107000, 72114731, 2901953, 2602953);
    $InitializeEvent(4732, 12107000, 72114732, 2901953, 2602952);
    $InitializeEvent(4733, 12107000, 72114733, 2901953, 2602951);
    $InitializeEvent(4734, 12107000, 72114734, 2901953, 3402950);
    $InitializeEvent(4735, 12107000, 72114735, 2901953, 3402951);
    $InitializeEvent(4736, 12107000, 72114736, 2901953, 3402953);
    $InitializeEvent(4737, 12107000, 72114737, 2901953, 3402952);
    $InitializeEvent(4738, 12107000, 72114738, 2901953, 3502950);
    $InitializeEvent(4739, 12107000, 72114739, 2901953, 3502951);
    $InitializeEvent(4740, 12107000, 72114740, 2901953, 3502952);
    $InitializeEvent(4741, 12107000, 72114741, 2901953, 3602950);
    $InitializeEvent(4742, 12107000, 72114742, 2901953, 3602951);
    $InitializeEvent(4743, 12107000, 72114743, 2901953, 3602952);
    $InitializeEvent(4744, 12107000, 72114744, 2901953, 2902950);
    $InitializeEvent(4745, 12107000, 72114745, 2901953, 2902951);
    $InitializeEvent(4746, 12107000, 72114746, 2901953, 2902952);
    $InitializeEvent(4747, 12107000, 72114747, 2901953, 2902953);
    $InitializeEvent(4748, 12107000, 72114748, 2901953, 2902954);
    $InitializeEvent(4749, 12107000, 72114749, 2901953, 2902955);
    $InitializeEvent(4750, 12107000, 72114750, 2901953, 2902956);
    $InitializeEvent(4751, 12107000, 72114751, 2901953, 2902957);
    $InitializeEvent(4752, 12107000, 72114752, 2901953, 2902958);
    $InitializeEvent(4753, 12107000, 72114753, 2901953, 2902959);
    
    $InitializeEvent(4800, 12107000, 72114800, 2901954, 2412950);
    $InitializeEvent(4801, 12107000, 72114801, 2901954, 2412951);
    $InitializeEvent(4802, 12107000, 72114802, 2901954, 2412952);
    $InitializeEvent(4803, 12107000, 72114803, 2901954, 2412953);
    $InitializeEvent(4804, 12107000, 72114804, 2901954, 2402950);
    $InitializeEvent(4805, 12107000, 72114805, 2901954, 2402951);
    $InitializeEvent(4806, 12107000, 72114806, 2901954, 2422950);
    $InitializeEvent(4807, 12107000, 72114807, 2901954, 2422952);
    $InitializeEvent(4808, 12107000, 72114808, 2901954, 2422951);
    $InitializeEvent(4809, 12107000, 72114809, 2901954, 2302950);
    $InitializeEvent(4810, 12107000, 72114810, 2901954, 2302951);
    $InitializeEvent(4811, 12107000, 72114811, 2901954, 2302952);
    $InitializeEvent(4812, 12107000, 72114812, 2901954, 2202950);
    $InitializeEvent(4813, 12107000, 72114813, 2901954, 2202951);
    $InitializeEvent(4814, 12107000, 72114814, 2901954, 2702950);
    $InitializeEvent(4815, 12107000, 72114815, 2901954, 2702951);
    $InitializeEvent(4816, 12107000, 72114816, 2901954, 3202950);
    $InitializeEvent(4817, 12107000, 72114817, 2901954, 3202952);
    $InitializeEvent(4818, 12107000, 72114818, 2901954, 2802950);
    $InitializeEvent(4819, 12107000, 72114819, 2901954, 2802953);
    $InitializeEvent(4820, 12107000, 72114820, 2901954, 2802951);
    $InitializeEvent(4821, 12107000, 72114821, 2901954, 2802952);
    $InitializeEvent(4822, 12107000, 72114822, 2901954, 2502950);
    $InitializeEvent(4823, 12107000, 72114823, 2901954, 2502952);
    $InitializeEvent(4824, 12107000, 72114824, 2901954, 2502951);
    $InitializeEvent(4825, 12107000, 72114825, 2901954, 2112950);
    $InitializeEvent(4826, 12107000, 72114826, 2901954, 3202951);
    $InitializeEvent(4827, 12107000, 72114827, 2901954, 3202953);
    $InitializeEvent(4828, 12107000, 72114828, 2901954, 3302950);
    $InitializeEvent(4829, 12107000, 72114829, 2901954, 3302951);
    $InitializeEvent(4830, 12107000, 72114830, 2901954, 2602950);
    $InitializeEvent(4831, 12107000, 72114831, 2901954, 2602953);
    $InitializeEvent(4832, 12107000, 72114832, 2901954, 2602952);
    $InitializeEvent(4833, 12107000, 72114833, 2901954, 2602951);
    $InitializeEvent(4834, 12107000, 72114834, 2901954, 3402950);
    $InitializeEvent(4835, 12107000, 72114835, 2901954, 3402951);
    $InitializeEvent(4836, 12107000, 72114836, 2901954, 3402953);
    $InitializeEvent(4837, 12107000, 72114837, 2901954, 3402952);
    $InitializeEvent(4838, 12107000, 72114838, 2901954, 3502950);
    $InitializeEvent(4839, 12107000, 72114839, 2901954, 3502951);
    $InitializeEvent(4840, 12107000, 72114840, 2901954, 3502952);
    $InitializeEvent(4841, 12107000, 72114841, 2901954, 3602950);
    $InitializeEvent(4842, 12107000, 72114842, 2901954, 3602951);
    $InitializeEvent(4843, 12107000, 72114843, 2901954, 3602952);
    $InitializeEvent(4844, 12107000, 72114844, 2901954, 2902950);
    $InitializeEvent(4845, 12107000, 72114845, 2901954, 2902951);
    $InitializeEvent(4846, 12107000, 72114846, 2901954, 2902952);
    $InitializeEvent(4847, 12107000, 72114847, 2901954, 2902953);
    $InitializeEvent(4848, 12107000, 72114848, 2901954, 2902954);
    $InitializeEvent(4849, 12107000, 72114849, 2901954, 2902955);
    $InitializeEvent(4850, 12107000, 72114850, 2901954, 2902956);
    $InitializeEvent(4851, 12107000, 72114851, 2901954, 2902957);
    $InitializeEvent(4852, 12107000, 72114852, 2901954, 2902958);
    $InitializeEvent(4853, 12107000, 72114853, 2901954, 2902959);
    
    $InitializeEvent(4900, 12107000, 72114900, 2901955, 2412950);
    $InitializeEvent(4901, 12107000, 72114901, 2901955, 2412951);
    $InitializeEvent(4902, 12107000, 72114902, 2901955, 2412952);
    $InitializeEvent(4903, 12107000, 72114903, 2901955, 2412953);
    $InitializeEvent(4904, 12107000, 72114904, 2901955, 2402950);
    $InitializeEvent(4905, 12107000, 72114905, 2901955, 2402951);
    $InitializeEvent(4906, 12107000, 72114906, 2901955, 2422950);
    $InitializeEvent(4907, 12107000, 72114907, 2901955, 2422952);
    $InitializeEvent(4908, 12107000, 72114908, 2901955, 2422951);
    $InitializeEvent(4909, 12107000, 72114909, 2901955, 2302950);
    $InitializeEvent(4910, 12107000, 72114910, 2901955, 2302951);
    $InitializeEvent(4911, 12107000, 72114911, 2901955, 2302952);
    $InitializeEvent(4912, 12107000, 72114912, 2901955, 2202950);
    $InitializeEvent(4913, 12107000, 72114913, 2901955, 2202951);
    $InitializeEvent(4914, 12107000, 72114914, 2901955, 2702950);
    $InitializeEvent(4915, 12107000, 72114915, 2901955, 2702951);
    $InitializeEvent(4916, 12107000, 72114916, 2901955, 3202950);
    $InitializeEvent(4917, 12107000, 72114917, 2901955, 3202952);
    $InitializeEvent(4918, 12107000, 72114918, 2901955, 2802950);
    $InitializeEvent(4919, 12107000, 72114919, 2901955, 2802953);
    $InitializeEvent(4920, 12107000, 72114920, 2901955, 2802951);
    $InitializeEvent(4921, 12107000, 72114921, 2901955, 2802952);
    $InitializeEvent(4922, 12107000, 72114922, 2901955, 2502950);
    $InitializeEvent(4923, 12107000, 72114923, 2901955, 2502952);
    $InitializeEvent(4924, 12107000, 72114924, 2901955, 2502951);
    $InitializeEvent(4925, 12107000, 72114925, 2901955, 2112950);
    $InitializeEvent(4926, 12107000, 72114926, 2901955, 3202951);
    $InitializeEvent(4927, 12107000, 72114927, 2901955, 3202953);
    $InitializeEvent(4928, 12107000, 72114928, 2901955, 3302950);
    $InitializeEvent(4929, 12107000, 72114929, 2901955, 3302951);
    $InitializeEvent(4930, 12107000, 72114930, 2901955, 2602950);
    $InitializeEvent(4931, 12107000, 72114931, 2901955, 2602953);
    $InitializeEvent(4932, 12107000, 72114932, 2901955, 2602952);
    $InitializeEvent(4933, 12107000, 72114933, 2901955, 2602951);
    $InitializeEvent(4934, 12107000, 72114934, 2901955, 3402950);
    $InitializeEvent(4935, 12107000, 72114935, 2901955, 3402951);
    $InitializeEvent(4936, 12107000, 72114936, 2901955, 3402953);
    $InitializeEvent(4937, 12107000, 72114937, 2901955, 3402952);
    $InitializeEvent(4938, 12107000, 72114938, 2901955, 3502950);
    $InitializeEvent(4939, 12107000, 72114939, 2901955, 3502951);
    $InitializeEvent(4940, 12107000, 72114940, 2901955, 3502952);
    $InitializeEvent(4941, 12107000, 72114941, 2901955, 3602950);
    $InitializeEvent(4942, 12107000, 72114942, 2901955, 3602951);
    $InitializeEvent(4943, 12107000, 72114943, 2901955, 3602952);
    $InitializeEvent(4944, 12107000, 72114944, 2901955, 2902950);
    $InitializeEvent(4945, 12107000, 72114945, 2901955, 2902951);
    $InitializeEvent(4946, 12107000, 72114946, 2901955, 2902952);
    $InitializeEvent(4947, 12107000, 72114947, 2901955, 2902953);
    $InitializeEvent(4948, 12107000, 72114948, 2901955, 2902954);
    $InitializeEvent(4949, 12107000, 72114949, 2901955, 2902955);
    $InitializeEvent(4950, 12107000, 72114950, 2901955, 2902956);
    $InitializeEvent(4951, 12107000, 72114951, 2901955, 2902957);
    $InitializeEvent(4952, 12107000, 72114952, 2901955, 2902958);
    $InitializeEvent(4953, 12107000, 72114953, 2901955, 2902959);
    
    $InitializeEvent(5000, 12107000, 72115000, 2901956, 2412950);
    $InitializeEvent(5001, 12107000, 72115001, 2901956, 2412951);
    $InitializeEvent(5002, 12107000, 72115002, 2901956, 2412952);
    $InitializeEvent(5003, 12107000, 72115003, 2901956, 2412953);
    $InitializeEvent(5004, 12107000, 72115004, 2901956, 2402950);
    $InitializeEvent(5005, 12107000, 72115005, 2901956, 2402951);
    $InitializeEvent(5006, 12107000, 72115006, 2901956, 2422950);
    $InitializeEvent(5007, 12107000, 72115007, 2901956, 2422952);
    $InitializeEvent(5008, 12107000, 72115008, 2901956, 2422951);
    $InitializeEvent(5009, 12107000, 72115009, 2901956, 2302950);
    $InitializeEvent(5010, 12107000, 72115010, 2901956, 2302951);
    $InitializeEvent(5011, 12107000, 72115011, 2901956, 2302952);
    $InitializeEvent(5012, 12107000, 72115012, 2901956, 2202950);
    $InitializeEvent(5013, 12107000, 72115013, 2901956, 2202951);
    $InitializeEvent(5014, 12107000, 72115014, 2901956, 2702950);
    $InitializeEvent(5015, 12107000, 72115015, 2901956, 2702951);
    $InitializeEvent(5016, 12107000, 72115016, 2901956, 3202950);
    $InitializeEvent(5017, 12107000, 72115017, 2901956, 3202952);
    $InitializeEvent(5018, 12107000, 72115018, 2901956, 2802950);
    $InitializeEvent(5019, 12107000, 72115019, 2901956, 2802953);
    $InitializeEvent(5020, 12107000, 72115020, 2901956, 2802951);
    $InitializeEvent(5021, 12107000, 72115021, 2901956, 2802952);
    $InitializeEvent(5022, 12107000, 72115022, 2901956, 2502950);
    $InitializeEvent(5023, 12107000, 72115023, 2901956, 2502952);
    $InitializeEvent(5024, 12107000, 72115024, 2901956, 2502951);
    $InitializeEvent(5025, 12107000, 72115025, 2901956, 2112950);
    $InitializeEvent(5026, 12107000, 72115026, 2901956, 3202951);
    $InitializeEvent(5027, 12107000, 72115027, 2901956, 3202953);
    $InitializeEvent(5028, 12107000, 72115028, 2901956, 3302950);
    $InitializeEvent(5029, 12107000, 72115029, 2901956, 3302951);
    $InitializeEvent(5030, 12107000, 72115030, 2901956, 2602950);
    $InitializeEvent(5031, 12107000, 72115031, 2901956, 2602953);
    $InitializeEvent(5032, 12107000, 72115032, 2901956, 2602952);
    $InitializeEvent(5033, 12107000, 72115033, 2901956, 2602951);
    $InitializeEvent(5034, 12107000, 72115034, 2901956, 3402950);
    $InitializeEvent(5035, 12107000, 72115035, 2901956, 3402951);
    $InitializeEvent(5036, 12107000, 72115036, 2901956, 3402953);
    $InitializeEvent(5037, 12107000, 72115037, 2901956, 3402952);
    $InitializeEvent(5038, 12107000, 72115038, 2901956, 3502950);
    $InitializeEvent(5039, 12107000, 72115039, 2901956, 3502951);
    $InitializeEvent(5040, 12107000, 72115040, 2901956, 3502952);
    $InitializeEvent(5041, 12107000, 72115041, 2901956, 3602950);
    $InitializeEvent(5042, 12107000, 72115042, 2901956, 3602951);
    $InitializeEvent(5043, 12107000, 72115043, 2901956, 3602952);
    $InitializeEvent(5044, 12107000, 72115044, 2901956, 2902950);
    $InitializeEvent(5045, 12107000, 72115045, 2901956, 2902951);
    $InitializeEvent(5046, 12107000, 72115046, 2901956, 2902952);
    $InitializeEvent(5047, 12107000, 72115047, 2901956, 2902953);
    $InitializeEvent(5048, 12107000, 72115048, 2901956, 2902954);
    $InitializeEvent(5049, 12107000, 72115049, 2901956, 2902955);
    $InitializeEvent(5050, 12107000, 72115050, 2901956, 2902956);
    $InitializeEvent(5051, 12107000, 72115051, 2901956, 2902957);
    $InitializeEvent(5052, 12107000, 72115052, 2901956, 2902958);
    $InitializeEvent(5053, 12107000, 72115053, 2901956, 2902959);
    
    $InitializeEvent(5100, 12107000, 72115100, 2901957, 2412950);
    $InitializeEvent(5101, 12107000, 72115101, 2901957, 2412951);
    $InitializeEvent(5102, 12107000, 72115102, 2901957, 2412952);
    $InitializeEvent(5103, 12107000, 72115103, 2901957, 2412953);
    $InitializeEvent(5104, 12107000, 72115104, 2901957, 2402950);
    $InitializeEvent(5105, 12107000, 72115105, 2901957, 2402951);
    $InitializeEvent(5106, 12107000, 72115106, 2901957, 2422950);
    $InitializeEvent(5107, 12107000, 72115107, 2901957, 2422952);
    $InitializeEvent(5108, 12107000, 72115108, 2901957, 2422951);
    $InitializeEvent(5109, 12107000, 72115109, 2901957, 2302950);
    $InitializeEvent(5110, 12107000, 72115110, 2901957, 2302951);
    $InitializeEvent(5111, 12107000, 72115111, 2901957, 2302952);
    $InitializeEvent(5112, 12107000, 72115112, 2901957, 2202950);
    $InitializeEvent(5113, 12107000, 72115113, 2901957, 2202951);
    $InitializeEvent(5114, 12107000, 72115114, 2901957, 2702950);
    $InitializeEvent(5115, 12107000, 72115115, 2901957, 2702951);
    $InitializeEvent(5116, 12107000, 72115116, 2901957, 3202950);
    $InitializeEvent(5117, 12107000, 72115117, 2901957, 3202952);
    $InitializeEvent(5118, 12107000, 72115118, 2901957, 2802950);
    $InitializeEvent(5119, 12107000, 72115119, 2901957, 2802953);
    $InitializeEvent(5120, 12107000, 72115120, 2901957, 2802951);
    $InitializeEvent(5121, 12107000, 72115121, 2901957, 2802952);
    $InitializeEvent(5122, 12107000, 72115122, 2901957, 2502950);
    $InitializeEvent(5123, 12107000, 72115123, 2901957, 2502952);
    $InitializeEvent(5124, 12107000, 72115124, 2901957, 2502951);
    $InitializeEvent(5125, 12107000, 72115125, 2901957, 2112950);
    $InitializeEvent(5126, 12107000, 72115126, 2901957, 3202951);
    $InitializeEvent(5127, 12107000, 72115127, 2901957, 3202953);
    $InitializeEvent(5128, 12107000, 72115128, 2901957, 3302950);
    $InitializeEvent(5129, 12107000, 72115129, 2901957, 3302951);
    $InitializeEvent(5130, 12107000, 72115130, 2901957, 2602950);
    $InitializeEvent(5131, 12107000, 72115131, 2901957, 2602953);
    $InitializeEvent(5132, 12107000, 72115132, 2901957, 2602952);
    $InitializeEvent(5133, 12107000, 72115133, 2901957, 2602951);
    $InitializeEvent(5134, 12107000, 72115134, 2901957, 3402950);
    $InitializeEvent(5135, 12107000, 72115135, 2901957, 3402951);
    $InitializeEvent(5136, 12107000, 72115136, 2901957, 3402953);
    $InitializeEvent(5137, 12107000, 72115137, 2901957, 3402952);
    $InitializeEvent(5138, 12107000, 72115138, 2901957, 3502950);
    $InitializeEvent(5139, 12107000, 72115139, 2901957, 3502951);
    $InitializeEvent(5140, 12107000, 72115140, 2901957, 3502952);
    $InitializeEvent(5141, 12107000, 72115141, 2901957, 3602950);
    $InitializeEvent(5142, 12107000, 72115142, 2901957, 3602951);
    $InitializeEvent(5143, 12107000, 72115143, 2901957, 3602952);
    $InitializeEvent(5144, 12107000, 72115144, 2901957, 2902950);
    $InitializeEvent(5145, 12107000, 72115145, 2901957, 2902951);
    $InitializeEvent(5146, 12107000, 72115146, 2901957, 2902952);
    $InitializeEvent(5147, 12107000, 72115147, 2901957, 2902953);
    $InitializeEvent(5148, 12107000, 72115148, 2901957, 2902954);
    $InitializeEvent(5149, 12107000, 72115149, 2901957, 2902955);
    $InitializeEvent(5150, 12107000, 72115150, 2901957, 2902956);
    $InitializeEvent(5151, 12107000, 72115151, 2901957, 2902957);
    $InitializeEvent(5152, 12107000, 72115152, 2901957, 2902958);
    $InitializeEvent(5153, 12107000, 72115153, 2901957, 2902959);
    
    $InitializeEvent(5200, 12107000, 72115200, 2901958, 2412950);
    $InitializeEvent(5201, 12107000, 72115201, 2901958, 2412951);
    $InitializeEvent(5202, 12107000, 72115202, 2901958, 2412952);
    $InitializeEvent(5203, 12107000, 72115203, 2901958, 2412953);
    $InitializeEvent(5204, 12107000, 72115204, 2901958, 2402950);
    $InitializeEvent(5205, 12107000, 72115205, 2901958, 2402951);
    $InitializeEvent(5206, 12107000, 72115206, 2901958, 2422950);
    $InitializeEvent(5207, 12107000, 72115207, 2901958, 2422952);
    $InitializeEvent(5208, 12107000, 72115208, 2901958, 2422951);
    $InitializeEvent(5209, 12107000, 72115209, 2901958, 2302950);
    $InitializeEvent(5210, 12107000, 72115210, 2901958, 2302951);
    $InitializeEvent(5211, 12107000, 72115211, 2901958, 2302952);
    $InitializeEvent(5212, 12107000, 72115212, 2901958, 2202950);
    $InitializeEvent(5213, 12107000, 72115213, 2901958, 2202951);
    $InitializeEvent(5214, 12107000, 72115214, 2901958, 2702950);
    $InitializeEvent(5215, 12107000, 72115215, 2901958, 2702951);
    $InitializeEvent(5216, 12107000, 72115216, 2901958, 3202950);
    $InitializeEvent(5217, 12107000, 72115217, 2901958, 3202952);
    $InitializeEvent(5218, 12107000, 72115218, 2901958, 2802950);
    $InitializeEvent(5219, 12107000, 72115219, 2901958, 2802953);
    $InitializeEvent(5220, 12107000, 72115220, 2901958, 2802951);
    $InitializeEvent(5221, 12107000, 72115221, 2901958, 2802952);
    $InitializeEvent(5222, 12107000, 72115222, 2901958, 2502950);
    $InitializeEvent(5223, 12107000, 72115223, 2901958, 2502952);
    $InitializeEvent(5224, 12107000, 72115224, 2901958, 2502951);
    $InitializeEvent(5225, 12107000, 72115225, 2901958, 2112950);
    $InitializeEvent(5226, 12107000, 72115226, 2901958, 3202951);
    $InitializeEvent(5227, 12107000, 72115227, 2901958, 3202953);
    $InitializeEvent(5228, 12107000, 72115228, 2901958, 3302950);
    $InitializeEvent(5229, 12107000, 72115229, 2901958, 3302951);
    $InitializeEvent(5230, 12107000, 72115230, 2901958, 2602950);
    $InitializeEvent(5231, 12107000, 72115231, 2901958, 2602953);
    $InitializeEvent(5232, 12107000, 72115232, 2901958, 2602952);
    $InitializeEvent(5233, 12107000, 72115233, 2901958, 2602951);
    $InitializeEvent(5234, 12107000, 72115234, 2901958, 3402950);
    $InitializeEvent(5235, 12107000, 72115235, 2901958, 3402951);
    $InitializeEvent(5236, 12107000, 72115236, 2901958, 3402953);
    $InitializeEvent(5237, 12107000, 72115237, 2901958, 3402952);
    $InitializeEvent(5238, 12107000, 72115238, 2901958, 3502950);
    $InitializeEvent(5239, 12107000, 72115239, 2901958, 3502951);
    $InitializeEvent(5240, 12107000, 72115240, 2901958, 3502952);
    $InitializeEvent(5241, 12107000, 72115241, 2901958, 3602950);
    $InitializeEvent(5242, 12107000, 72115242, 2901958, 3602951);
    $InitializeEvent(5243, 12107000, 72115243, 2901958, 3602952);
    $InitializeEvent(5244, 12107000, 72115244, 2901958, 2902950);
    $InitializeEvent(5245, 12107000, 72115245, 2901958, 2902951);
    $InitializeEvent(5246, 12107000, 72115246, 2901958, 2902952);
    $InitializeEvent(5247, 12107000, 72115247, 2901958, 2902953);
    $InitializeEvent(5248, 12107000, 72115248, 2901958, 2902954);
    $InitializeEvent(5249, 12107000, 72115249, 2901958, 2902955);
    $InitializeEvent(5250, 12107000, 72115250, 2901958, 2902956);
    $InitializeEvent(5251, 12107000, 72115251, 2901958, 2902957);
    $InitializeEvent(5252, 12107000, 72115252, 2901958, 2902958);
    $InitializeEvent(5253, 12107000, 72115253, 2901958, 2902959);
    
    $InitializeEvent(5300, 12107000, 72115300, 2901959, 2412950);
    $InitializeEvent(5301, 12107000, 72115301, 2901959, 2412951);
    $InitializeEvent(5302, 12107000, 72115302, 2901959, 2412952);
    $InitializeEvent(5303, 12107000, 72115303, 2901959, 2412953);
    $InitializeEvent(5304, 12107000, 72115304, 2901959, 2402950);
    $InitializeEvent(5305, 12107000, 72115305, 2901959, 2402951);
    $InitializeEvent(5306, 12107000, 72115306, 2901959, 2422950);
    $InitializeEvent(5307, 12107000, 72115307, 2901959, 2422952);
    $InitializeEvent(5308, 12107000, 72115308, 2901959, 2422951);
    $InitializeEvent(5309, 12107000, 72115309, 2901959, 2302950);
    $InitializeEvent(5310, 12107000, 72115310, 2901959, 2302951);
    $InitializeEvent(5311, 12107000, 72115311, 2901959, 2302952);
    $InitializeEvent(5312, 12107000, 72115312, 2901959, 2202950);
    $InitializeEvent(5313, 12107000, 72115313, 2901959, 2202951);
    $InitializeEvent(5314, 12107000, 72115314, 2901959, 2702950);
    $InitializeEvent(5315, 12107000, 72115315, 2901959, 2702951);
    $InitializeEvent(5316, 12107000, 72115316, 2901959, 3202950);
    $InitializeEvent(5317, 12107000, 72115317, 2901959, 3202952);
    $InitializeEvent(5318, 12107000, 72115318, 2901959, 2802950);
    $InitializeEvent(5319, 12107000, 72115319, 2901959, 2802953);
    $InitializeEvent(5320, 12107000, 72115320, 2901959, 2802951);
    $InitializeEvent(5321, 12107000, 72115321, 2901959, 2802952);
    $InitializeEvent(5322, 12107000, 72115322, 2901959, 2502950);
    $InitializeEvent(5323, 12107000, 72115323, 2901959, 2502952);
    $InitializeEvent(5324, 12107000, 72115324, 2901959, 2502951);
    $InitializeEvent(5325, 12107000, 72115325, 2901959, 2112950);
    $InitializeEvent(5326, 12107000, 72115326, 2901959, 3202951);
    $InitializeEvent(5327, 12107000, 72115327, 2901959, 3202953);
    $InitializeEvent(5328, 12107000, 72115328, 2901959, 3302950);
    $InitializeEvent(5329, 12107000, 72115329, 2901959, 3302951);
    $InitializeEvent(5330, 12107000, 72115330, 2901959, 2602950);
    $InitializeEvent(5331, 12107000, 72115331, 2901959, 2602953);
    $InitializeEvent(5332, 12107000, 72115332, 2901959, 2602952);
    $InitializeEvent(5333, 12107000, 72115333, 2901959, 2602951);
    $InitializeEvent(5334, 12107000, 72115334, 2901959, 3402950);
    $InitializeEvent(5335, 12107000, 72115335, 2901959, 3402951);
    $InitializeEvent(5336, 12107000, 72115336, 2901959, 3402953);
    $InitializeEvent(5337, 12107000, 72115337, 2901959, 3402952);
    $InitializeEvent(5338, 12107000, 72115338, 2901959, 3502950);
    $InitializeEvent(5339, 12107000, 72115339, 2901959, 3502951);
    $InitializeEvent(5340, 12107000, 72115340, 2901959, 3502952);
    $InitializeEvent(5341, 12107000, 72115341, 2901959, 3602950);
    $InitializeEvent(5342, 12107000, 72115342, 2901959, 3602951);
    $InitializeEvent(5343, 12107000, 72115343, 2901959, 3602952);
    $InitializeEvent(5344, 12107000, 72115344, 2901959, 2902950);
    $InitializeEvent(5345, 12107000, 72115345, 2901959, 2902951);
    $InitializeEvent(5346, 12107000, 72115346, 2901959, 2902952);
    $InitializeEvent(5347, 12107000, 72115347, 2901959, 2902953);
    $InitializeEvent(5348, 12107000, 72115348, 2901959, 2902954);
    $InitializeEvent(5349, 12107000, 72115349, 2901959, 2902955);
    $InitializeEvent(5350, 12107000, 72115350, 2901959, 2902956);
    $InitializeEvent(5351, 12107000, 72115351, 2901959, 2902957);
    $InitializeEvent(5352, 12107000, 72115352, 2901959, 2902958);
    $InitializeEvent(5353, 12107000, 72115353, 2901959, 2902959);
    
    SetEventFlag(72110044, OFF);
    SetEventFlag(72110144, OFF);
    SetEventFlag(72110244, OFF);
    SetEventFlag(72110344, OFF);
    SetEventFlag(72110444, OFF);
    SetEventFlag(72110544, OFF);
    SetEventFlag(72110644, OFF);
    SetEventFlag(72110744, OFF);
    SetEventFlag(72110844, OFF);
    SetEventFlag(72110944, OFF);
    SetEventFlag(72111044, OFF);
    SetEventFlag(72111144, OFF);
    SetEventFlag(72111244, OFF);
    SetEventFlag(72111344, OFF);
    SetEventFlag(72111444, OFF);
    SetEventFlag(72111544, OFF);
    SetEventFlag(72111644, OFF);
    SetEventFlag(72111744, OFF);
    SetEventFlag(72111844, OFF);
    SetEventFlag(72111944, OFF);
    SetEventFlag(72112044, OFF);
    SetEventFlag(72112144, OFF);
    SetEventFlag(72112244, OFF);
    SetEventFlag(72112344, OFF);
    SetEventFlag(72112444, OFF);
    SetEventFlag(72112544, OFF);
    SetEventFlag(72112644, OFF);
    SetEventFlag(72112744, OFF);
    SetEventFlag(72112844, OFF);
    SetEventFlag(72112944, OFF);
    SetEventFlag(72113044, OFF);
    SetEventFlag(72113144, OFF);
    SetEventFlag(72113244, OFF);
    SetEventFlag(72113344, OFF);
    SetEventFlag(72113444, OFF);
    SetEventFlag(72113544, OFF);
    SetEventFlag(72113644, OFF);
    SetEventFlag(72113744, OFF);
    SetEventFlag(72113844, OFF);
    SetEventFlag(72113944, OFF);
    SetEventFlag(72114044, OFF);
    SetEventFlag(72114144, OFF);
    SetEventFlag(72114244, OFF);
    SetEventFlag(72114344, OFF);
    SetEventFlag(72114444, OFF);
    SetEventFlag(72114544, OFF);
    SetEventFlag(72114644, OFF);
    SetEventFlag(72114744, OFF);
    SetEventFlag(72114844, OFF);
    SetEventFlag(72114944, OFF);
    SetEventFlag(72115044, OFF);
    SetEventFlag(72115144, OFF);
    SetEventFlag(72115244, OFF);
    SetEventFlag(72115344, OFF);
    
    SetEventFlag(72110045, OFF);
    SetEventFlag(72110145, OFF);
    SetEventFlag(72110245, OFF);
    SetEventFlag(72110345, OFF);
    SetEventFlag(72110445, OFF);
    SetEventFlag(72110545, OFF);
    SetEventFlag(72110645, OFF);
    SetEventFlag(72110745, OFF);
    SetEventFlag(72110845, OFF);
    SetEventFlag(72110945, OFF);
    SetEventFlag(72111045, OFF);
    SetEventFlag(72111145, OFF);
    SetEventFlag(72111245, OFF);
    SetEventFlag(72111345, OFF);
    SetEventFlag(72111445, OFF);
    SetEventFlag(72111545, OFF);
    SetEventFlag(72111645, OFF);
    SetEventFlag(72111745, OFF);
    SetEventFlag(72111845, OFF);
    SetEventFlag(72111945, OFF);
    SetEventFlag(72112045, OFF);
    SetEventFlag(72112145, OFF);
    SetEventFlag(72112245, OFF);
    SetEventFlag(72112345, OFF);
    SetEventFlag(72112445, OFF);
    SetEventFlag(72112545, OFF);
    SetEventFlag(72112645, OFF);
    SetEventFlag(72112745, OFF);
    SetEventFlag(72112845, OFF);
    SetEventFlag(72112945, OFF);
    SetEventFlag(72113045, OFF);
    SetEventFlag(72113145, OFF);
    SetEventFlag(72113245, OFF);
    SetEventFlag(72113345, OFF);
    SetEventFlag(72113445, OFF);
    SetEventFlag(72113545, OFF);
    SetEventFlag(72113645, OFF);
    SetEventFlag(72113745, OFF);
    SetEventFlag(72113845, OFF);
    SetEventFlag(72113945, OFF);
    SetEventFlag(72114045, OFF);
    SetEventFlag(72114145, OFF);
    SetEventFlag(72114245, OFF);
    SetEventFlag(72114345, OFF);
    SetEventFlag(72114445, OFF);
    SetEventFlag(72114545, OFF);
    SetEventFlag(72114645, OFF);
    SetEventFlag(72114745, OFF);
    SetEventFlag(72114845, OFF);
    SetEventFlag(72114945, OFF);
    SetEventFlag(72115045, OFF);
    SetEventFlag(72115145, OFF);
    SetEventFlag(72115245, OFF);
    SetEventFlag(72115345, OFF);
    
    SetEventFlag(72110046, OFF);
    SetEventFlag(72110146, OFF);
    SetEventFlag(72110246, OFF);
    SetEventFlag(72110346, OFF);
    SetEventFlag(72110446, OFF);
    SetEventFlag(72110546, OFF);
    SetEventFlag(72110646, OFF);
    SetEventFlag(72110746, OFF);
    SetEventFlag(72110846, OFF);
    SetEventFlag(72110946, OFF);
    SetEventFlag(72111046, OFF);
    SetEventFlag(72111146, OFF);
    SetEventFlag(72111246, OFF);
    SetEventFlag(72111346, OFF);
    SetEventFlag(72111446, OFF);
    SetEventFlag(72111546, OFF);
    SetEventFlag(72111646, OFF);
    SetEventFlag(72111746, OFF);
    SetEventFlag(72111846, OFF);
    SetEventFlag(72111946, OFF);
    SetEventFlag(72112046, OFF);
    SetEventFlag(72112146, OFF);
    SetEventFlag(72112246, OFF);
    SetEventFlag(72112346, OFF);
    SetEventFlag(72112446, OFF);
    SetEventFlag(72112546, OFF);
    SetEventFlag(72112646, OFF);
    SetEventFlag(72112746, OFF);
    SetEventFlag(72112846, OFF);
    SetEventFlag(72112946, OFF);
    SetEventFlag(72113046, OFF);
    SetEventFlag(72113146, OFF);
    SetEventFlag(72113246, OFF);
    SetEventFlag(72113346, OFF);
    SetEventFlag(72113446, OFF);
    SetEventFlag(72113546, OFF);
    SetEventFlag(72113646, OFF);
    SetEventFlag(72113746, OFF);
    SetEventFlag(72113846, OFF);
    SetEventFlag(72113946, OFF);
    SetEventFlag(72114046, OFF);
    SetEventFlag(72114146, OFF);
    SetEventFlag(72114246, OFF);
    SetEventFlag(72114346, OFF);
    SetEventFlag(72114446, OFF);
    SetEventFlag(72114546, OFF);
    SetEventFlag(72114646, OFF);
    SetEventFlag(72114746, OFF);
    SetEventFlag(72114846, OFF);
    SetEventFlag(72114946, OFF);
    SetEventFlag(72115046, OFF);
    SetEventFlag(72115146, OFF);
    SetEventFlag(72115246, OFF);
    SetEventFlag(72115346, OFF);
    
    SetEventFlag(72110047, OFF);
    SetEventFlag(72110147, OFF);
    SetEventFlag(72110247, OFF);
    SetEventFlag(72110347, OFF);
    SetEventFlag(72110447, OFF);
    SetEventFlag(72110547, OFF);
    SetEventFlag(72110647, OFF);
    SetEventFlag(72110747, OFF);
    SetEventFlag(72110847, OFF);
    SetEventFlag(72110947, OFF);
    SetEventFlag(72111047, OFF);
    SetEventFlag(72111147, OFF);
    SetEventFlag(72111247, OFF);
    SetEventFlag(72111347, OFF);
    SetEventFlag(72111447, OFF);
    SetEventFlag(72111547, OFF);
    SetEventFlag(72111647, OFF);
    SetEventFlag(72111747, OFF);
    SetEventFlag(72111847, OFF);
    SetEventFlag(72111947, OFF);
    SetEventFlag(72112047, OFF);
    SetEventFlag(72112147, OFF);
    SetEventFlag(72112247, OFF);
    SetEventFlag(72112347, OFF);
    SetEventFlag(72112447, OFF);
    SetEventFlag(72112547, OFF);
    SetEventFlag(72112647, OFF);
    SetEventFlag(72112747, OFF);
    SetEventFlag(72112847, OFF);
    SetEventFlag(72112947, OFF);
    SetEventFlag(72113047, OFF);
    SetEventFlag(72113147, OFF);
    SetEventFlag(72113247, OFF);
    SetEventFlag(72113347, OFF);
    SetEventFlag(72113447, OFF);
    SetEventFlag(72113547, OFF);
    SetEventFlag(72113647, OFF);
    SetEventFlag(72113747, OFF);
    SetEventFlag(72113847, OFF);
    SetEventFlag(72113947, OFF);
    SetEventFlag(72114047, OFF);
    SetEventFlag(72114147, OFF);
    SetEventFlag(72114247, OFF);
    SetEventFlag(72114347, OFF);
    SetEventFlag(72114447, OFF);
    SetEventFlag(72114547, OFF);
    SetEventFlag(72114647, OFF);
    SetEventFlag(72114747, OFF);
    SetEventFlag(72114847, OFF);
    SetEventFlag(72114947, OFF);
    SetEventFlag(72115047, OFF);
    SetEventFlag(72115147, OFF);
    SetEventFlag(72115247, OFF);
    SetEventFlag(72115347, OFF);
    
    SetEventFlag(72110048, OFF);
    SetEventFlag(72110148, OFF);
    SetEventFlag(72110248, OFF);
    SetEventFlag(72110348, OFF);
    SetEventFlag(72110448, OFF);
    SetEventFlag(72110548, OFF);
    SetEventFlag(72110648, OFF);
    SetEventFlag(72110748, OFF);
    SetEventFlag(72110848, OFF);
    SetEventFlag(72110948, OFF);
    SetEventFlag(72111048, OFF);
    SetEventFlag(72111148, OFF);
    SetEventFlag(72111248, OFF);
    SetEventFlag(72111348, OFF);
    SetEventFlag(72111448, OFF);
    SetEventFlag(72111548, OFF);
    SetEventFlag(72111648, OFF);
    SetEventFlag(72111748, OFF);
    SetEventFlag(72111848, OFF);
    SetEventFlag(72111948, OFF);
    SetEventFlag(72112048, OFF);
    SetEventFlag(72112148, OFF);
    SetEventFlag(72112248, OFF);
    SetEventFlag(72112348, OFF);
    SetEventFlag(72112448, OFF);
    SetEventFlag(72112548, OFF);
    SetEventFlag(72112648, OFF);
    SetEventFlag(72112748, OFF);
    SetEventFlag(72112848, OFF);
    SetEventFlag(72112948, OFF);
    SetEventFlag(72113048, OFF);
    SetEventFlag(72113148, OFF);
    SetEventFlag(72113248, OFF);
    SetEventFlag(72113348, OFF);
    SetEventFlag(72113448, OFF);
    SetEventFlag(72113548, OFF);
    SetEventFlag(72113648, OFF);
    SetEventFlag(72113748, OFF);
    SetEventFlag(72113848, OFF);
    SetEventFlag(72113948, OFF);
    SetEventFlag(72114048, OFF);
    SetEventFlag(72114148, OFF);
    SetEventFlag(72114248, OFF);
    SetEventFlag(72114348, OFF);
    SetEventFlag(72114448, OFF);
    SetEventFlag(72114548, OFF);
    SetEventFlag(72114648, OFF);
    SetEventFlag(72114748, OFF);
    SetEventFlag(72114848, OFF);
    SetEventFlag(72114948, OFF);
    SetEventFlag(72115048, OFF);
    SetEventFlag(72115148, OFF);
    SetEventFlag(72115248, OFF);
    SetEventFlag(72115348, OFF);
    
    SetEventFlag(72110049, OFF);
    SetEventFlag(72110149, OFF);
    SetEventFlag(72110249, OFF);
    SetEventFlag(72110349, OFF);
    SetEventFlag(72110449, OFF);
    SetEventFlag(72110549, OFF);
    SetEventFlag(72110649, OFF);
    SetEventFlag(72110749, OFF);
    SetEventFlag(72110849, OFF);
    SetEventFlag(72110949, OFF);
    SetEventFlag(72111049, OFF);
    SetEventFlag(72111149, OFF);
    SetEventFlag(72111249, OFF);
    SetEventFlag(72111349, OFF);
    SetEventFlag(72111449, OFF);
    SetEventFlag(72111549, OFF);
    SetEventFlag(72111649, OFF);
    SetEventFlag(72111749, OFF);
    SetEventFlag(72111849, OFF);
    SetEventFlag(72111949, OFF);
    SetEventFlag(72112049, OFF);
    SetEventFlag(72112149, OFF);
    SetEventFlag(72112249, OFF);
    SetEventFlag(72112349, OFF);
    SetEventFlag(72112449, OFF);
    SetEventFlag(72112549, OFF);
    SetEventFlag(72112649, OFF);
    SetEventFlag(72112749, OFF);
    SetEventFlag(72112849, OFF);
    SetEventFlag(72112949, OFF);
    SetEventFlag(72113049, OFF);
    SetEventFlag(72113149, OFF);
    SetEventFlag(72113249, OFF);
    SetEventFlag(72113349, OFF);
    SetEventFlag(72113449, OFF);
    SetEventFlag(72113549, OFF);
    SetEventFlag(72113649, OFF);
    SetEventFlag(72113749, OFF);
    SetEventFlag(72113849, OFF);
    SetEventFlag(72113949, OFF);
    SetEventFlag(72114049, OFF);
    SetEventFlag(72114149, OFF);
    SetEventFlag(72114249, OFF);
    SetEventFlag(72114349, OFF);
    SetEventFlag(72114449, OFF);
    SetEventFlag(72114549, OFF);
    SetEventFlag(72114649, OFF);
    SetEventFlag(72114749, OFF);
    SetEventFlag(72114849, OFF);
    SetEventFlag(72114949, OFF);
    SetEventFlag(72115049, OFF);
    SetEventFlag(72115149, OFF);
    SetEventFlag(72115249, OFF);
    SetEventFlag(72115349, OFF);
    
    SetEventFlag(72110050, OFF);
    SetEventFlag(72110150, OFF);
    SetEventFlag(72110250, OFF);
    SetEventFlag(72110350, OFF);
    SetEventFlag(72110450, OFF);
    SetEventFlag(72110550, OFF);
    SetEventFlag(72110650, OFF);
    SetEventFlag(72110750, OFF);
    SetEventFlag(72110850, OFF);
    SetEventFlag(72110950, OFF);
    SetEventFlag(72111050, OFF);
    SetEventFlag(72111150, OFF);
    SetEventFlag(72111250, OFF);
    SetEventFlag(72111350, OFF);
    SetEventFlag(72111450, OFF);
    SetEventFlag(72111550, OFF);
    SetEventFlag(72111650, OFF);
    SetEventFlag(72111750, OFF);
    SetEventFlag(72111850, OFF);
    SetEventFlag(72111950, OFF);
    SetEventFlag(72112050, OFF);
    SetEventFlag(72112150, OFF);
    SetEventFlag(72112250, OFF);
    SetEventFlag(72112350, OFF);
    SetEventFlag(72112450, OFF);
    SetEventFlag(72112550, OFF);
    SetEventFlag(72112650, OFF);
    SetEventFlag(72112750, OFF);
    SetEventFlag(72112850, OFF);
    SetEventFlag(72112950, OFF);
    SetEventFlag(72113050, OFF);
    SetEventFlag(72113150, OFF);
    SetEventFlag(72113250, OFF);
    SetEventFlag(72113350, OFF);
    SetEventFlag(72113450, OFF);
    SetEventFlag(72113550, OFF);
    SetEventFlag(72113650, OFF);
    SetEventFlag(72113750, OFF);
    SetEventFlag(72113850, OFF);
    SetEventFlag(72113950, OFF);
    SetEventFlag(72114050, OFF);
    SetEventFlag(72114150, OFF);
    SetEventFlag(72114250, OFF);
    SetEventFlag(72114350, OFF);
    SetEventFlag(72114450, OFF);
    SetEventFlag(72114550, OFF);
    SetEventFlag(72114650, OFF);
    SetEventFlag(72114750, OFF);
    SetEventFlag(72114850, OFF);
    SetEventFlag(72114950, OFF);
    SetEventFlag(72115050, OFF);
    SetEventFlag(72115150, OFF);
    SetEventFlag(72115250, OFF);
    SetEventFlag(72115350, OFF);
    
    SetEventFlag(72110051, OFF);
    SetEventFlag(72110151, OFF);
    SetEventFlag(72110251, OFF);
    SetEventFlag(72110351, OFF);
    SetEventFlag(72110451, OFF);
    SetEventFlag(72110551, OFF);
    SetEventFlag(72110651, OFF);
    SetEventFlag(72110751, OFF);
    SetEventFlag(72110851, OFF);
    SetEventFlag(72110951, OFF);
    SetEventFlag(72111051, OFF);
    SetEventFlag(72111151, OFF);
    SetEventFlag(72111251, OFF);
    SetEventFlag(72111351, OFF);
    SetEventFlag(72111451, OFF);
    SetEventFlag(72111551, OFF);
    SetEventFlag(72111651, OFF);
    SetEventFlag(72111751, OFF);
    SetEventFlag(72111851, OFF);
    SetEventFlag(72111951, OFF);
    SetEventFlag(72112051, OFF);
    SetEventFlag(72112151, OFF);
    SetEventFlag(72112251, OFF);
    SetEventFlag(72112351, OFF);
    SetEventFlag(72112451, OFF);
    SetEventFlag(72112551, OFF);
    SetEventFlag(72112651, OFF);
    SetEventFlag(72112751, OFF);
    SetEventFlag(72112851, OFF);
    SetEventFlag(72112951, OFF);
    SetEventFlag(72113051, OFF);
    SetEventFlag(72113151, OFF);
    SetEventFlag(72113251, OFF);
    SetEventFlag(72113351, OFF);
    SetEventFlag(72113451, OFF);
    SetEventFlag(72113551, OFF);
    SetEventFlag(72113651, OFF);
    SetEventFlag(72113751, OFF);
    SetEventFlag(72113851, OFF);
    SetEventFlag(72113951, OFF);
    SetEventFlag(72114051, OFF);
    SetEventFlag(72114151, OFF);
    SetEventFlag(72114251, OFF);
    SetEventFlag(72114351, OFF);
    SetEventFlag(72114451, OFF);
    SetEventFlag(72114551, OFF);
    SetEventFlag(72114651, OFF);
    SetEventFlag(72114751, OFF);
    SetEventFlag(72114851, OFF);
    SetEventFlag(72114951, OFF);
    SetEventFlag(72115051, OFF);
    SetEventFlag(72115151, OFF);
    SetEventFlag(72115251, OFF);
    SetEventFlag(72115351, OFF);
    
    SetEventFlag(72110052, OFF);
    SetEventFlag(72110152, OFF);
    SetEventFlag(72110252, OFF);
    SetEventFlag(72110352, OFF);
    SetEventFlag(72110452, OFF);
    SetEventFlag(72110552, OFF);
    SetEventFlag(72110652, OFF);
    SetEventFlag(72110752, OFF);
    SetEventFlag(72110852, OFF);
    SetEventFlag(72110952, OFF);
    SetEventFlag(72111052, OFF);
    SetEventFlag(72111152, OFF);
    SetEventFlag(72111252, OFF);
    SetEventFlag(72111352, OFF);
    SetEventFlag(72111452, OFF);
    SetEventFlag(72111552, OFF);
    SetEventFlag(72111652, OFF);
    SetEventFlag(72111752, OFF);
    SetEventFlag(72111852, OFF);
    SetEventFlag(72111952, OFF);
    SetEventFlag(72112052, OFF);
    SetEventFlag(72112152, OFF);
    SetEventFlag(72112252, OFF);
    SetEventFlag(72112352, OFF);
    SetEventFlag(72112452, OFF);
    SetEventFlag(72112552, OFF);
    SetEventFlag(72112652, OFF);
    SetEventFlag(72112752, OFF);
    SetEventFlag(72112852, OFF);
    SetEventFlag(72112952, OFF);
    SetEventFlag(72113052, OFF);
    SetEventFlag(72113152, OFF);
    SetEventFlag(72113252, OFF);
    SetEventFlag(72113352, OFF);
    SetEventFlag(72113452, OFF);
    SetEventFlag(72113552, OFF);
    SetEventFlag(72113652, OFF);
    SetEventFlag(72113752, OFF);
    SetEventFlag(72113852, OFF);
    SetEventFlag(72113952, OFF);
    SetEventFlag(72114052, OFF);
    SetEventFlag(72114152, OFF);
    SetEventFlag(72114252, OFF);
    SetEventFlag(72114352, OFF);
    SetEventFlag(72114452, OFF);
    SetEventFlag(72114552, OFF);
    SetEventFlag(72114652, OFF);
    SetEventFlag(72114752, OFF);
    SetEventFlag(72114852, OFF);
    SetEventFlag(72114952, OFF);
    SetEventFlag(72115052, OFF);
    SetEventFlag(72115152, OFF);
    SetEventFlag(72115252, OFF);
    SetEventFlag(72115352, OFF);
    
    SetEventFlag(72110053, OFF);
    SetEventFlag(72110153, OFF);
    SetEventFlag(72110253, OFF);
    SetEventFlag(72110353, OFF);
    SetEventFlag(72110453, OFF);
    SetEventFlag(72110553, OFF);
    SetEventFlag(72110653, OFF);
    SetEventFlag(72110753, OFF);
    SetEventFlag(72110853, OFF);
    SetEventFlag(72110953, OFF);
    SetEventFlag(72111053, OFF);
    SetEventFlag(72111153, OFF);
    SetEventFlag(72111253, OFF);
    SetEventFlag(72111353, OFF);
    SetEventFlag(72111453, OFF);
    SetEventFlag(72111553, OFF);
    SetEventFlag(72111653, OFF);
    SetEventFlag(72111753, OFF);
    SetEventFlag(72111853, OFF);
    SetEventFlag(72111953, OFF);
    SetEventFlag(72112053, OFF);
    SetEventFlag(72112153, OFF);
    SetEventFlag(72112253, OFF);
    SetEventFlag(72112353, OFF);
    SetEventFlag(72112453, OFF);
    SetEventFlag(72112553, OFF);
    SetEventFlag(72112653, OFF);
    SetEventFlag(72112753, OFF);
    SetEventFlag(72112853, OFF);
    SetEventFlag(72112953, OFF);
    SetEventFlag(72113053, OFF);
    SetEventFlag(72113153, OFF);
    SetEventFlag(72113253, OFF);
    SetEventFlag(72113353, OFF);
    SetEventFlag(72113453, OFF);
    SetEventFlag(72113553, OFF);
    SetEventFlag(72113653, OFF);
    SetEventFlag(72113753, OFF);
    SetEventFlag(72113853, OFF);
    SetEventFlag(72113953, OFF);
    SetEventFlag(72114053, OFF);
    SetEventFlag(72114153, OFF);
    SetEventFlag(72114253, OFF);
    SetEventFlag(72114353, OFF);
    SetEventFlag(72114453, OFF);
    SetEventFlag(72114553, OFF);
    SetEventFlag(72114653, OFF);
    SetEventFlag(72114753, OFF);
    SetEventFlag(72114853, OFF);
    SetEventFlag(72114953, OFF);
    SetEventFlag(72115053, OFF);
    SetEventFlag(72115153, OFF);
    SetEventFlag(72115253, OFF);
    SetEventFlag(72115353, OFF);
    
    $InitializeEvent(0, 12107100, 72100421, 2901950, 9021);
    $InitializeEvent(1, 12107100, 72100422, 2901950, 9022);
    $InitializeEvent(2, 12107100, 72100423, 2901950, 9023);
    $InitializeEvent(3, 12107100, 72100424, 2901950, 9024);
    $InitializeEvent(4, 12107100, 72100425, 2901950, 9025);
    $InitializeEvent(5, 12107100, 72100426, 2901950, 9026);
    
    $InitializeEvent(6, 12107100, 72100427, 2901951, 9021);
    $InitializeEvent(7, 12107100, 72100428, 2901951, 9022);
    $InitializeEvent(8, 12107100, 72100429, 2901951, 9023);
    $InitializeEvent(9, 12107100, 72100430, 2901951, 9024);
    $InitializeEvent(10, 12107100, 72100431, 2901951, 9025);
    $InitializeEvent(11, 12107100, 72100432, 2901951, 9026);
    
    $InitializeEvent(12, 12107100, 72100433, 2901952, 9021);
    $InitializeEvent(13, 12107100, 72100434, 2901952, 9022);
    $InitializeEvent(14, 12107100, 72100435, 2901952, 9023);
    $InitializeEvent(15, 12107100, 72100436, 2901952, 9024);
    $InitializeEvent(16, 12107100, 72100437, 2901952, 9025);
    $InitializeEvent(17, 12107100, 72100438, 2901952, 9026);
    
    $InitializeEvent(18, 12107100, 72100439, 2901953, 9021);
    $InitializeEvent(19, 12107100, 72100440, 2901953, 9022);
    $InitializeEvent(20, 12107100, 72100441, 2901953, 9023);
    $InitializeEvent(21, 12107100, 72100442, 2901953, 9024);
    $InitializeEvent(22, 12107100, 72100443, 2901953, 9025);
    $InitializeEvent(23, 12107100, 72100444, 2901953, 9026);
    
    $InitializeEvent(24, 12107100, 72100445, 2901954, 9021);
    $InitializeEvent(25, 12107100, 72100446, 2901954, 9022);
    $InitializeEvent(26, 12107100, 72100447, 2901954, 9023);
    $InitializeEvent(27, 12107100, 72100448, 2901954, 9024);
    $InitializeEvent(28, 12107100, 72100449, 2901954, 9025);
    $InitializeEvent(29, 12107100, 72100450, 2901954, 9026);
    
    $InitializeEvent(30, 12107100, 72100451, 2901955, 9021);
    $InitializeEvent(31, 12107100, 72100452, 2901955, 9022);
    $InitializeEvent(32, 12107100, 72100453, 2901955, 9023);
    $InitializeEvent(33, 12107100, 72100454, 2901955, 9024);
    $InitializeEvent(34, 12107100, 72100455, 2901955, 9025);
    $InitializeEvent(35, 12107100, 72100456, 2901955, 9026);
    
    $InitializeEvent(36, 12107100, 72100457, 2901956, 9021);
    $InitializeEvent(37, 12107100, 72100458, 2901956, 9022);
    $InitializeEvent(38, 12107100, 72100459, 2901956, 9023);
    $InitializeEvent(39, 12107100, 72100460, 2901956, 9024);
    $InitializeEvent(40, 12107100, 72100461, 2901956, 9025);
    $InitializeEvent(41, 12107100, 72100462, 2901956, 9026);
    
    $InitializeEvent(42, 12107100, 72100463, 2901957, 9021);
    $InitializeEvent(43, 12107100, 72100464, 2901957, 9022);
    $InitializeEvent(44, 12107100, 72100465, 2901957, 9023);
    $InitializeEvent(45, 12107100, 72100466, 2901957, 9024);
    $InitializeEvent(46, 12107100, 72100467, 2901957, 9025);
    $InitializeEvent(47, 12107100, 72100468, 2901957, 9026);
    
    $InitializeEvent(48, 12107100, 72100469, 2901958, 9021);
    $InitializeEvent(49, 12107100, 72100470, 2901958, 9022);
    $InitializeEvent(50, 12107100, 72100471, 2901958, 9023);
    $InitializeEvent(51, 12107100, 72100472, 2901958, 9024);
    $InitializeEvent(52, 12107100, 72100473, 2901958, 9025);
    $InitializeEvent(53, 12107100, 72100474, 2901958, 9026);
    
    $InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    $InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    $InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    $InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    $InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    $InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    $InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    $InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    $InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    $InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);
    
    $InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    $InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    $InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    $InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    $InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    $InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    $InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    $InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    $InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    $InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);
    
    $InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    $InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    $InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    $InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    $InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    $InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    $InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    $InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    $InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    $InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);
    
    $InitializeEvent(30, 12107200, 72100330, 2902950, 9001, 2901953);
    $InitializeEvent(31, 12107200, 72100331, 2902951, 9002, 2901953);
    $InitializeEvent(32, 12107200, 72100332, 2902952, 9003, 2901953);
    $InitializeEvent(33, 12107200, 72100333, 2902953, 9004, 2901953);
    $InitializeEvent(34, 12107200, 72100334, 2902954, 9005, 2901953);
    $InitializeEvent(35, 12107200, 72100335, 2902955, 9006, 2901953);
    $InitializeEvent(36, 12107200, 72100336, 2902956, 9007, 2901953);
    $InitializeEvent(37, 12107200, 72100337, 2902957, 9008, 2901953);
    $InitializeEvent(38, 12107200, 72100338, 2902958, 9009, 2901953);
    $InitializeEvent(39, 12107200, 72100339, 2902959, 9010, 2901953);
    
    $InitializeEvent(40, 12107200, 72100340, 2902950, 9001, 2901954);
    $InitializeEvent(41, 12107200, 72100341, 2902951, 9002, 2901954);
    $InitializeEvent(42, 12107200, 72100342, 2902952, 9003, 2901954);
    $InitializeEvent(43, 12107200, 72100343, 2902953, 9004, 2901954);
    $InitializeEvent(44, 12107200, 72100344, 2902954, 9005, 2901954);
    $InitializeEvent(45, 12107200, 72100345, 2902955, 9006, 2901954);
    $InitializeEvent(46, 12107200, 72100346, 2902956, 9007, 2901954);
    $InitializeEvent(47, 12107200, 72100347, 2902957, 9008, 2901954);
    $InitializeEvent(48, 12107200, 72100348, 2902958, 9009, 2901954);
    $InitializeEvent(49, 12107200, 72100349, 2902959, 9010, 2901954);
    
    $InitializeEvent(50, 12107200, 72100350, 2902950, 9001, 2901955);
    $InitializeEvent(51, 12107200, 72100351, 2902951, 9002, 2901955);
    $InitializeEvent(52, 12107200, 72100352, 2902952, 9003, 2901955);
    $InitializeEvent(53, 12107200, 72100353, 2902953, 9004, 2901955);
    $InitializeEvent(54, 12107200, 72100354, 2902954, 9005, 2901955);
    $InitializeEvent(55, 12107200, 72100355, 2902955, 9006, 2901955);
    $InitializeEvent(56, 12107200, 72100356, 2902956, 9007, 2901955);
    $InitializeEvent(57, 12107200, 72100357, 2902957, 9008, 2901955);
    $InitializeEvent(58, 12107200, 72100358, 2902958, 9009, 2901955);
    $InitializeEvent(59, 12107200, 72100359, 2902959, 9010, 2901955);
    
    $InitializeEvent(60, 12107200, 72100360, 2902950, 9001, 2901956);
    $InitializeEvent(61, 12107200, 72100361, 2902951, 9002, 2901956);
    $InitializeEvent(62, 12107200, 72100362, 2902952, 9003, 2901956);
    $InitializeEvent(63, 12107200, 72100363, 2902953, 9004, 2901956);
    $InitializeEvent(64, 12107200, 72100364, 2902954, 9005, 2901956);
    $InitializeEvent(65, 12107200, 72100365, 2902955, 9006, 2901956);
    $InitializeEvent(66, 12107200, 72100366, 2902956, 9007, 2901956);
    $InitializeEvent(67, 12107200, 72100367, 2902957, 9008, 2901956);
    $InitializeEvent(68, 12107200, 72100368, 2902958, 9009, 2901956);
    $InitializeEvent(69, 12107200, 72100369, 2902959, 9010, 2901956);
    
    $InitializeEvent(70, 12107200, 72100370, 2902950, 9001, 2901957);
    $InitializeEvent(71, 12107200, 72100371, 2902951, 9002, 2901957);
    $InitializeEvent(72, 12107200, 72100372, 2902952, 9003, 2901957);
    $InitializeEvent(73, 12107200, 72100373, 2902953, 9004, 2901957);
    $InitializeEvent(74, 12107200, 72100374, 2902954, 9005, 2901957);
    $InitializeEvent(75, 12107200, 72100375, 2902955, 9006, 2901957);
    $InitializeEvent(76, 12107200, 72100376, 2902956, 9007, 2901957);
    $InitializeEvent(77, 12107200, 72100377, 2902957, 9008, 2901957);
    $InitializeEvent(78, 12107200, 72100378, 2902958, 9009, 2901957);
    $InitializeEvent(79, 12107200, 72100379, 2902959, 9010, 2901957);
    
    $InitializeEvent(80, 12107200, 72100380, 2902950, 9001, 2901958);
    $InitializeEvent(81, 12107200, 72100381, 2902951, 9002, 2901958);
    $InitializeEvent(82, 12107200, 72100382, 2902952, 9003, 2901958);
    $InitializeEvent(83, 12107200, 72100383, 2902953, 9004, 2901958);
    $InitializeEvent(84, 12107200, 72100384, 2902954, 9005, 2901958);
    $InitializeEvent(85, 12107200, 72100385, 2902955, 9006, 2901958);
    $InitializeEvent(86, 12107200, 72100386, 2902956, 9007, 2901958);
    $InitializeEvent(87, 12107200, 72100387, 2902957, 9008, 2901958);
    $InitializeEvent(88, 12107200, 72100388, 2902958, 9009, 2901958);
    $InitializeEvent(89, 12107200, 72100389, 2902959, 9010, 2901958);
    
    // InitializeEvent(0, 12200220, 6890);
    
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, 9920, false);
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        BatchSetEventFlags(12906660, 12906725, OFF);
    }
    $InitializeEvent(0, 12901685);
    
    $InitializeEvent(0, 10000100, 2903960, 2903961, 12907810, -1);
    $InitializeEvent(0, 12907000, 2900950, 2901950, 10000999, 12907800, -1);
    $InitializeEvent(1, 10000100, 2903962, 2903963, 12907830, -1);
    $InitializeEvent(1, 12907000, 2900951, 2901951, 10000999, 12907820, -1);
    $InitializeEvent(2, 10000100, 2903964, 2903965, 12907850, boss_1_defeat);
    $InitializeEvent(2, 12907000, 2900952, 2901952, 12901800, 12907840, boss_1_defeat+1013);
    $InitializeEvent(3, 10000100, 2903966, 2903967, 12907870, -1);
    $InitializeEvent(3, 12907000, 2900953, 2901953, 10000999, 12907860, -1);
    $InitializeEvent(4, 10000100, 2903968, 2903969, 12907890, boss_2_defeat);
    $InitializeEvent(4, 12907000, 2900954, 2901954, 12901801, 12907880, boss_2_defeat+1023);
    $InitializeEvent(5, 10000100, 2903970, 2903971, 12907910, -1);
    $InitializeEvent(5, 12907000, 2900955, 2901955, 10000999, 12907900, -1);
    $InitializeEvent(6, 10000100, 2903972, 2903973, 12907930, boss_3_defeat);
    $InitializeEvent(6, 12907000, 2900956, 2901956, 12901802, 12907920, boss_3_defeat+1033);
    $InitializeEvent(7, 10000100, 2903974, 2903975, 12907950, -1);
    $InitializeEvent(7, 12907000, 2900957, 2901957, 10000999, 12907940, -1);
    $InitializeEvent(8, 10000100, 2903976, 2903977, 12907970, boss_4_defeat);
    $InitializeEvent(8, 12907000, 2900958, 2901958, 12901803, 12907960, boss_4_defeat+1043);
    
    $InitializeEvent(boss_1_offset, 10008800, boss_1_defeat+1013, boss_1_lamp_id-1000, boss_1_lamp_id, boss_1_lamp_id+3000);
    $InitializeEvent(boss_2_offset, 10008800, boss_2_defeat+1023, boss_2_lamp_id-1000, boss_2_lamp_id, boss_2_lamp_id+3000);
    $InitializeEvent(boss_3_offset, 10008800, boss_3_defeat+1033, boss_3_lamp_id-1000, boss_3_lamp_id, boss_3_lamp_id+3000);
    $InitializeEvent(boss_4_offset, 10008800, boss_4_defeat+1043, boss_4_lamp_id-1000, boss_4_lamp_id, boss_4_lamp_id+3000);
    
    $InitializeEvent(0, 12907010, 72900200, 2901950);
    $InitializeEvent(1, 12907010, 72900201, 2901951);
    $InitializeEvent(2, 12907010, 72900202, 2901952);
    $InitializeEvent(3, 12907010, 72900203, 2901953);
    $InitializeEvent(4, 12907010, 72900204, 2901954);
    $InitializeEvent(5, 12907010, 72900205, 2901955);
    $InitializeEvent(6, 12907010, 72900206, 2901956);
    $InitializeEvent(7, 12907010, 72900207, 2901957);
    $InitializeEvent(8, 12907010, 72900208, 2901958);
    $InitializeEvent(0, 12907020, 72900100, 2901950);
    $InitializeEvent(1, 12907020, 72900101, 2901951);
    $InitializeEvent(2, 12907020, 72900102, 2901952);
    $InitializeEvent(3, 12907020, 72900103, 2901953);
    $InitializeEvent(4, 12907020, 72900104, 2901954);
    $InitializeEvent(5, 12907020, 72900105, 2901955);
    $InitializeEvent(6, 12907020, 72900106, 2901956);
    $InitializeEvent(7, 12907020, 72900107, 2901957);
    $InitializeEvent(8, 12907020, 72900108, 2901958);
    $InitializeEvent(0, 12907030, 72102900, 2901950);
    $InitializeEvent(1, 12907030, 72102901, 2901951);
    $InitializeEvent(2, 12907030, 72102902, 2901952);
    $InitializeEvent(3, 12907030, 72102903, 2901953);
    $InitializeEvent(4, 12907030, 72102904, 2901954);
    $InitializeEvent(5, 12907030, 72102905, 2901955);
    $InitializeEvent(6, 12907030, 72102906, 2901956);
    $InitializeEvent(7, 12907030, 72102907, 2901957);
    $InitializeEvent(8, 12907030, 72102908, 2901958);
    $InitializeEvent(0, 12907420, 4730, 92905370, 4735, 4736);
    $InitializeEvent(1, 12907420, 4731, 92905371, 4735, 4736);
    $InitializeEvent(2, 12907420, 4732, 92905372, 4735, 4736);
    SetEventFlag(12907230, OFF);
    SetEventFlag(12907231, OFF);
    $InitializeEvent(0, 12907400);
});

// rematch boss triggered
$Event(10007700, Default, function(rematchTrigger, rematchActive, rematchSpawnPoint) {
    WaitFor(EventFlag(rematchTrigger));
    SetEventFlag(rematchTrigger, OFF);
    SetEventFlag(rematchActive, ON);
    SetSpEffect(10000, 4681, false);
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 829000);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 829000);
    WaitFixedTimeFrames(59);
    SetPlayerRespawnPoint(rematchSpawnPoint);
    SetSpEffect(10000, 2101, false);
});

// rematch victory
$Event(10007800, Default, function(postRematchSpawnPoint) {
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    
    // 15: super fx
    // 240: centered, subtle
    // 236 or 243?: ground
    // PlaySE(10000, SoundType.sSFX, 7012);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 829000);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 829000);
    
    WaitFixedTimeFrames(59);
    
    if (EventFlag(12100750) && EventFlag(12100963)) { // rematch started from broken lamp and return to dream enabled
        WarpPlayerToRespawnPoint(2102969);
    } else {
        // WarpPlayerToRespawnPoint(X0_4);
        SetPlayerRespawnPoint(postRematchSpawnPoint);
        SetSpEffect(10000, 2101, false);
    }
});

// return to boss
$Event(10007900, Default, function(warpTrigger, bossEntrancePoint, areaId, blockId) {
    WaitFor(EventFlag(warpTrigger)); // 12801899
    SetEventFlag(warpTrigger, OFF);
    SetEventFlag(10007999, ON);
    WaitFixedTimeFrames(1);
    if (AnyBatchEventFlags(10008500, 10008599)) { // resting
        BatchSetEventFlags(10008500, 10008599, OFF);
        WaitFixedTimeSeconds(0.5);
    } else { // not resting
        ForceAnimationPlayback(10000, 101167, false, false, false);
        WaitFixedTimeSeconds(3);
    }
    DummyPlayCutsceneAndWarpPlayer(bossEntrancePoint, areaId, blockId);
    SetCharacterAnimationState(10000, Enabled);
    SetCharacterTeamType(10000, TeamType.Host);
    ActivateHit(10000, Enabled);
    ForceAnimationPlayback(10000, 101201, false, false, false);
    RestartEvent();
});

// kindle
// this_event_slot, lamp_kindle_flag (12121100)
$Event(10008100, Default, function(thisEventSlot, lampKindleFlag) {
    SetEventFlag(thisEventSlot, OFF);
    WaitFor(ThisEventSlot());
    if (PlayerInsightAmount() == 0) { // no insight
        DisplayGenericDialog(200175, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RestartEvent();
    }
    if (EventValue(lampKindleFlag, 2) == 3) { // already maxed
        DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    } else if (EventValue(lampKindleFlag, 2) == 1 && !PlayerHasItemIncludingBBox(ItemType.Goods, 4002)) { // need rite of kindling
        DisplayGenericDialog(200169, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    } else {
        SetSpEffect(10000, 4681, false); // take insight
        IncrementEventValue(lampKindleFlag, 2, 3);
        if (EventValue(lampKindleFlag, 2) == 3) { // max kindling reached
            DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        } else {
            // increased
            DisplayGenericDialog(200170, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        }
    }
    RestartEvent();
});

// chalice has been removed, return to dream
$Event(10001511, Default, function() {
    SetEventFlag(10001511, OFF);
    WaitFor(ThisEvent());
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    WarpPlayerToRespawnPoint(2102962);
});

// reset statuses (poison, etc.) and restock bullets and vials
$Event(10008300, Default, function(spawnCheckerRegion, bypassChecker, lampKindleFlag, hiddenRegion, tempRegion) {
    const kindling_enabled_flag = 12100851;
    const restock_enabled_flag = 12100862;
    restock_enabled = EventFlag(restock_enabled_flag);
    
    WaitFor(InArea(10000, spawnCheckerRegion) || EventFlag(10001509) || EventFlag(bypassChecker)); // spawn checker timeout expired
    if (EventFlag(10001509)) {
        EndEvent();
    }
    SetEventFlag(10001509, ON);
    SetSpEffect(10000, 110, false);
    SetSpEffect(10000, 111, false);
    SetSpEffect(10000, 112, false);
    SetSpEffect(10000, 113, false);
    SetSpEffect(10000, 114, false);
    SetSpEffect(10000, 115, false);
    SetSpEffect(10000, 116, false);
    
    if (restock_enabled.Passed) {
        
        // EventValueOperation stores value in baseEventFlagId, the operand is only used if baseEventFlagIdOperand = 0
        // baseEventFlagIdOperand or operand is applied to baseEventFlagId, e.g.
        //     EventValueOperation(<10>, 8, 0, <2>, 8, CalculationType.Sub) == 8;
        
        if (!EventFlag(kindling_enabled_flag) || EventValue(lampKindleFlag, 2) == 3) { // kindling disabled or full kindle
            // move bloodstain out of the way
            MoveBloodstainAndDroppedItems(spawnCheckerRegion, tempRegion);
            // clear vials and bullets
            RemoveItemFromPlayer(ItemType.Goods, 900, 255);
            RemoveItemFromPlayer(ItemType.Goods, 1000, 255);
            // overfill vials and bullets
            EventValueOperation(12104050, 8, 1, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            EventValueOperation(12104050, 8, 255, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            // move overflow to hidden area
            MoveBloodstainAndDroppedItems(spawnCheckerRegion, hiddenRegion);
            // move bloodstain back to spawn
            MoveBloodstainAndDroppedItems(tempRegion, spawnCheckerRegion);
        } else {
            // kindling enabled and not full kindle
            StoreItemAmountHeldInEventValue(ItemType.Goods, 900, 12104030, 8);
            StoreItemAmountHeldInEventValue(ItemType.Goods, 1000, 12104040, 8);
            
            if (EventValue(lampKindleFlag, 2) == 0 && EventValue(12104030, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            } else if (EventValue(lampKindleFlag, 2) == 1 && EventValue(12104030, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            } else if (EventValue(lampKindleFlag, 2) == 2 && EventValue(12104030, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            
            if (EventValue(lampKindleFlag, 2) == 0 && EventValue(12104040, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            } else if (EventValue(lampKindleFlag, 2) == 1 && EventValue(12104040, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            } else if (EventValue(lampKindleFlag, 2) == 2 && EventValue(12104040, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
        }
    }
});

// resting
$Event(10008500, Default, function(lampId, lampWarpFlag) {
    SetEventFlag(10001510, OFF);
    WaitFor(ThisEventSlot()); // menu opened, trigger animation
    RotateCharacter(10000, lampId, 101280, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    SetCharacterAnimationState(10000, Disabled);
    SetCharacterTeamType(10000, TeamType.Baby);
    BatchSetEventFlags(10008630, 10008639, OFF); // dismiss summons or they'll tweak
    ActivateHit(10000, Disabled);
    WaitFor(!ThisEventSlot()); // wait for menu closed
    if (EventFlag(10007999)) {
        SetEventFlag(10007999, OFF);
        RestartEvent();
    }
    if (EventFlag(10001510)) {
        RestartEvent();
    }
    $InitializeEvent(0, 10008600);
    SetEventFlag(lampWarpFlag, ON);
    RestartEvent();
});

// fade
$Event(10008600, Default, function() {
    WaitFixedTimeSeconds(1);
    DisplayBanner(TextBannerType.StadiumLoss); // fade out
});

// gather summons
$Event(10007400, Default, function(npcId, summonedFlag, startAnimId, endAnimId, dummyPolyId) {
    WaitFor(EventFlag(12106500));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    WaitFixedTimeSeconds(0.5);
    if (CountEventFlags(TargetEventFlagType.EventFlag, 10008630, 10008639) > 0) {    
        SetSpEffect(10000, 2107, false);
        if (EventFlag(summonedFlag)) {
            ForceAnimationPlayback(npcId, startAnimId, false, false, false);
            WaitFixedTimeSeconds(2);
            WarpCharacterAndCopyFloor(npcId, TargetEntityType.Character, 10000, dummyPolyId, 10000);
            ForceAnimationPlayback(npcId, endAnimId, false, false, false);
        }
        WaitFixedTimeFrames(1);
    }
    else {
        DisplayMessage(200238, 0);
    }
    SetEventFlag(12106500, OFF);
    RestartEvent();
});

// summon npcs - new - bypasses summon system
$Event(10008630, Default, function(entryTriggeredFlag, entryEnabledFlag, npcId, summonedFlag, sfxId, spawnMessage, spawnAnimId, leaveMessage, deadMessage) {
    SetEventFlag(entryTriggeredFlag, OFF);
    SetEventFlag(entryEnabledFlag, ON);
    WaitFor(ThisEventSlot() || EventFlag(summonedFlag));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 2107, false);
    SetEventFlag(entryEnabledFlag, OFF);
    if (EventFlag(summonedFlag)) {
        SetEventFlag(entryTriggeredFlag, ON);
        EndEvent();
    }
    SetEventFlag(summonedFlag, ON);
    SetCharacterBackreadState(npcId, true);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(npcId, TargetEntityType.Character, 10000, 233, 10000);
    WaitFixedTimeFrames(1);
    DeleteMapSFX(sfxId, true);
    WaitFixedTimeSeconds(0.5);
    DisplayMessage(100051, 0);
    WaitFixedTimeSeconds(2);
    DisplayMessage(spawnMessage, 0);
    SetCharacterBackreadState(npcId, false);
    ChangeCharacterEnableState(npcId, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(npcId, spawnAnimId, false, false, false);
    SetSpEffect(npcId, 9006, false); // summon debuff
    WaitFixedTimeSeconds(1);
    WaitFor(!EventFlag(entryTriggeredFlag) || CharacterDead(npcId));
    if (CharacterDead(npcId)) {
        SetEventFlag(entryTriggeredFlag, OFF);
        DisplayMessage(deadMessage, 0);
    }
    else {
        if (!AnyBatchEventFlags(10008500, 10008599) && !EventFlag(10008650)) { // triggered manually, not by resting or map transition
            ForceAnimationPlayback(10000, 101222, false, false, false); // snap animation
        }
        else if (EventFlag(10008650)) {
            SetEventFlag(10008650, OFF);
        }
        WaitFixedTimeSeconds(0.2);
        if (npcId == 2410158) { // gascoigne
            RotateCharacter(npcId, 10000, 7012, true);
        }
        else { // other hunters
            RotateCharacter(npcId, 10000, 101160, true);
        }
        //SetEventFlag(summonedFlag, OFF);
        SetEventFlag(entryTriggeredFlag, OFF);
        SetEventFlag(entryEnabledFlag, OFF);
        SetCharacterBackreadState(npcId, true);
        DisplayMessage(leaveMessage, 0);
    }
    WaitFor(EventFlag(entryTriggeredFlag));
    SetEventFlag(entryTriggeredFlag, OFF); // shouldn't be reachable, but something needs to be after the WaitFor
});

// Disable restock after spawn
$Event(10008601, Default, function() {
    WaitFixedTimeSeconds(1);
    SetEventFlag(10001509, ON);
});

// hide lamp during rematch
$Event(10008800, Default, function(rematchActive, lampNpc, lampObject, tempLocation) {
    WaitFor(EventFlag(rematchActive));
    ChangeCharacterEnableState(lampNpc, Disabled);
    DeactivateObject(lampObject, Disabled);
    WaitFixedTimeFrames(1);
    CharacterWarpRequest(lampNpc, TargetEntityType.Area, tempLocation, -1);
});

// Auto restart rematch if dead + move player to rematch point
$Event(10008900, Default, function(autoRematchFlag, lampSpawnPoint, rematchStartRegion) {
    EndIf(!ThisEventSlot()); // game's state is not in rematch mode
    SetSpEffect(10000, 1934, false);
    DummyPlayCutsceneAndWarpPlayer(rematchStartRegion, 29, 0);
    WaitFor(HPRatio(10000) <= 0);
    SetEventFlag(autoRematchFlag, ON); // used for moving bloodstain
    SetPlayerRespawnPoint(lampSpawnPoint);
    if (EventFlag(12100864)) { // auto rematch enabled
        SetEventFlag(10008950, ON);
    }
});

$Event(12200220, Default, function(eventFlagId) {
    WaitFor(EventFlag(eventFlagId));
    DisplayMessage(10011260, 0);
    SetEventFlag(eventFlagId, OFF);
    EndEvent();
});

// acquire all trick weapons
$Event(12101300, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101400, ON);
    WaitFor(ThisEvent());
    SetEventFlag(12101301, ON);
    SetEventFlag(12101302, ON);
    SetEventFlag(12101303, ON);
    SetEventFlag(12101400, OFF);
});

// acquire all standard trick weapons
$Event(12101301, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101401, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 25000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 2000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31000000, 12104010, 1);
    if (EventFlag(12101302) && EventFlag(12101303)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101401, OFF);
});

// acquire all uncanny trick weapons
$Event(12101302, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101402, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5110000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7110000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8110000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10110000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32010000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38010000, 12104010, 1);
    if (EventFlag(12101301) && EventFlag(12101303)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101402, OFF);
});

// acquire all lost trick weapons
$Event(12101303, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101403, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5120000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7120000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8120000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10120000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32020000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38020000, 12104010, 1);
    if (EventFlag(12101301) && EventFlag(12101302)) {
        SetEventFlag(12101300, ON);
    }
    SetEventFlag(12101403, OFF);
});

// acquire all secondary weapons
$Event(12101310, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101410, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 15000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 35000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 34000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 33000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 36000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14200000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6000000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14000000, 12104010, 1);
    SetEventFlag(12101410, OFF);
});

// acquire all hunter tools
$Event(12101320, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101420, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 2010, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2130, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2020, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2120, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2050, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 1310, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2080, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2140, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2110, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2060, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2070, 12104010, 1);
    SetEventFlag(12101420, OFF);
});

// acquire all armor pieces
$Event(12101330, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101430, ON);
    WaitFor(ThisEvent());
    SetEventFlag(12101331, ON);
    SetEventFlag(12101332, ON);
    SetEventFlag(12101333, ON);
    SetEventFlag(12101334, ON);
    SetEventFlag(12101430, OFF);
});
    
// acquire all head pieces
$Event(12101331, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101431, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 180000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 110000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 230000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 20000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 120000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 60000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 40000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 390000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 330000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 100000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 250000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 220000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 430000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 130000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 200000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 150000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 30000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 10000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 340000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 50000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 70000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 270000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 80000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 210000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 370000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 260000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 190000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 350000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 360000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 380000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 320000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 140000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 280000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 290000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 400000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 90000, 12104010, 1);
    if (EventFlag(12101332) && EventFlag(12101333) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101431, OFF);
});

// acquire all torse pieces
$Event(12101332, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101432, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 241000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 391000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 111000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 331000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 41000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 101000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 11000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 121000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 381000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 181000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 361000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 221000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 151000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 231000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 131000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 201000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 31000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 341000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 51000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 281000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 401000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 81000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 211000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 371000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 311000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 351000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 191000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 301000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 321000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 141000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 291000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 21000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 61000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 91000, 12104010, 1);
    if (EventFlag(12101331) && EventFlag(12101333) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101432, OFF);
});

// acquire all hand pieces
$Event(12101333, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101433, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 242000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 392000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 42000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 332000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 102000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 12000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 122000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 182000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 222000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 152000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 132000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 32000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 342000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 52000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 72000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 82000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 212000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 372000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 402000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 352000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 232000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 112000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 142000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 22000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 62000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 382000, 12104010, 1);
    if (EventFlag(12101331) && EventFlag(12101332) && EventFlag(12101334)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101433, OFF);
});

// acquire all leg pieces
$Event(12101334, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101434, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 313000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 243000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 113000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 393000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 43000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 333000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 103000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 13000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 123000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 383000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 183000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 363000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 223000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 153000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 233000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 133000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 203000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 33000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 343000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 53000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 73000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 83000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 213000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 373000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 353000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 193000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 143000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 403000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 293000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 23000, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 63000, 12104010, 1);
    if (EventFlag(12101331) && EventFlag(12101332) && EventFlag(12101333)) {
        SetEventFlag(12101330, ON);
    }
    SetEventFlag(12101434, OFF);
});

// acquire all chalices
$Event(12101340, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101440, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104010, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 6100, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6109, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6200, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6209, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6210, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6219, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6300, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6302, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6309, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6310, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6312, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6319, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6401, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6409, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6420, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6429, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6500, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6502, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6509, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6520, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6522, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6529, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6530, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6532, 12104010, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6539, 12104010, 1);
    SetEventFlag(12101440, OFF);
});

// fill upgrade materials
$Event(12101360, Default, function() {
    SetEventFlag(12101360, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3000, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3000, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3010, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3010, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3020, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3020, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3030, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3030, 12104010, 8);
    
    RestartEvent();
});

// fill chalice materials
$Event(12101361, Default, function() {
    SetEventFlag(12101361, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7000, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7000, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7001, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7001, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7002, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7002, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7003, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7003, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7004, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7004, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7012, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7012, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7013, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7013, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7014, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7014, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7020, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7020, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7021, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7021, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7022, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7022, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7023, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7023, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7024, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7024, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7050, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7050, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7100, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7100, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7110, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7110, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7120, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7120, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7121, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7121, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7130, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7130, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7131, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7131, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7140, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7140, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7150, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7150, 12104010, 8);
    
    EventValueOperation(12104010, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7200, 12104020, 8);
    EventValueOperation(12104010, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7200, 12104010, 8);
    
    RestartEvent();
});

// Trading messenger_Lineup expansion_XX
$Event(12101000, Default, function(itemId, chrEntityId, bitNumber, bitNumber2) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, ON);
});

// Buy/Sell Messenger_Lineup Expansion_Time Zone Flag
$Event(12101010, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(9800)) {
        SetEventFlag(5900, ON);
    }
    if (EventFlag(9801)) {
        SetEventFlag(5901, ON);
    }
    if (EventFlag(9802)) {
        SetEventFlag(5902, ON);
    }
    if (EventFlag(12801800)) {
        SetEventFlag(5903, ON);
    }
    if (EventFlag(12601800)) {
        SetEventFlag(5904, ON);
    }
    if (EventFlag(6603)) {
        BatchSetEventFlags(5900, 5904, ON);
    }
});

// dress-up messenger_flag control_naked only
$Event(12105060, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(72100140));
    SetEventFlag(12105061, ON);
    SetEventFlag(72100140, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// Kisekae messenger_DLC validity judgment
$Event(12105064, Default, function() {
    SetNetworkSyncState(Disabled);
    ForceAnimationPlayback(2100232, 7053, true, false, false);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(
        (EventFlag(6900) && !EventFlag(6071))
            || (EventFlag(6901) && !EventFlag(6072))
            || (EventFlag(6902) && !EventFlag(6073)));
    ForceAnimationPlayback(2100232, 7054, false, false, false);
    WaitFixedTimeFrames(30);
    WaitFixedTimeFrames(79);
    ForceAnimationPlayback(2100232, 7051, true, false, false);
    WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(6025, 2100232));
    if (!EventFlag(6071)) {
        if (EventFlag(6900)) {
            AwardItemLot(2100900);
            SetEventFlag(6071, ON);
        }
    }
    if (!EventFlag(6072)) {
        if (EventFlag(6901)) {
            AwardItemLot(2100910);
            SetEventFlag(6072, ON);
        }
    }
    if (!EventFlag(6073)) {
        if (EventFlag(6902)) {
            AwardItemLot(2100920);
            SetEventFlag(6073, ON);
        }
    }
    ForceAnimationPlayback(2100232, 7052, false, false, false);
    WaitFixedTimeFrames(74);
L0:
    ChangeCharacterEnableState(2100232, Disabled);
});

// dress-up messenger_flag control_other than naked
$Event(12105070, Restart, function(eventFlagId, eventFlagId2, bitNumber) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(12105061, ON);
    SetEventFlag(eventFlagId, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    SetEventFlag(eventFlagId2, ON);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ChangeCharacterDispmask(2100218, bitNumber, ON);
    ForceAnimationPlayback(2100218, 7004, false, false, false);
    WaitFixedTimeFrames(49);
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 0
$Event(12105020, Restart, function() {
    WaitFor(
        EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850));
    SetEventFlag(12105030, ON);
    WaitFor(
        !(EventFlag(12417810)
            || EventFlag(12417830)
            || EventFlag(12417850)
            || EventFlag(12417870)
            || EventFlag(12407810)
            || EventFlag(12407830)
            || EventFlag(12427810)
            || EventFlag(12427830)
            || EventFlag(12427850)
            || EventFlag(12307810)
            || EventFlag(12307830)
            || EventFlag(12307850)));
    SetEventFlag(12105030, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 1
$Event(12105021, Restart, function() {
    WaitFor(
        EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850));
    SetEventFlag(12105031, ON);
    WaitFor(
        !(EventFlag(12207810)
            || EventFlag(12207830)
            || EventFlag(12707810)
            || EventFlag(12707830)
            || EventFlag(13207810)
            || EventFlag(13207850)));
    SetEventFlag(12105031, OFF);
    RestartEvent();
});

// Tombstone messenger animation propriety judgment_Tombstone 2
$Event(12105022, Restart, function() {
    WaitFor(
        EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810));
    SetEventFlag(12105032, ON);
    WaitFor(
        !(EventFlag(12807810)
            || EventFlag(12807830)
            || EventFlag(12807850)
            || EventFlag(12807870)
            || EventFlag(12507810)
            || EventFlag(12507830)
            || EventFlag(12507850)
            || EventFlag(12117810)));
    SetEventFlag(12105032, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 3
$Event(12105023, Restart, function() {
    WaitFor(
        EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810));
    SetEventFlag(12105033, ON);
    WaitFor(
        !(EventFlag(13207830)
            || EventFlag(13207870)
            || EventFlag(13307810)
            || EventFlag(13307830)
            || EventFlag(12607810)
            || EventFlag(12607830)
            || EventFlag(12607850)
            || EventFlag(12607870)
            || EventFlag(13307810)));
    SetEventFlag(12105033, OFF);
    RestartEvent();
});

// Gravestone messenger animation propriety judgment_gravestone 4
$Event(12105024, Restart, function() {
    WaitFor(
        EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850));
    SetEventFlag(12105034, ON);
    WaitFor(
        !(EventFlag(13407810)
            || EventFlag(13407830)
            || EventFlag(13407850)
            || EventFlag(13407870)
            || EventFlag(13507810)
            || EventFlag(13507830)
            || EventFlag(13507850)
            || EventFlag(13607810)
            || EventFlag(13607830)
            || EventFlag(13607850)));
    SetEventFlag(12105034, OFF);
    RestartEvent();
});

// Check if you have at least one dress-up messenger item
$Event(12105062, Default, function() {
    SetNetworkSyncState(Disabled);
    if (!EventFlag(12105063)) {
        ForceAnimationPlayback(2100218, 0, true, false, false);
        EndIf(!CharacterType(10000, TargetType.Alive));
        if (EventFlag(6011)) {
            ChangeCharacterDispmask(2100218, 20, ON);
        }
        if (EventFlag(6012)) {
            ChangeCharacterDispmask(2100218, 21, ON);
        }
        if (EventFlag(6013)) {
            ChangeCharacterDispmask(2100218, 22, ON);
        }
        if (EventFlag(6014)) {
            ChangeCharacterDispmask(2100218, 23, ON);
        }
        if (EventFlag(6015)) {
            ChangeCharacterDispmask(2100218, 24, ON);
        }
        if (EventFlag(6016)) {
            ChangeCharacterDispmask(2100218, 25, ON);
        }
        if (EventFlag(6017)) {
            ChangeCharacterDispmask(2100218, 26, ON);
        }
        if (EventFlag(6018)) {
            ChangeCharacterDispmask(2100218, 27, ON);
        }
        if (EventFlag(6019)) {
            ChangeCharacterDispmask(2100218, 28, ON);
        }
        WaitFor(
            EventFlag(6071)
                || EventFlag(6072)
                || EventFlag(6073)
                || EventFlag(6074)
                || EventFlag(6075)
                || EventFlag(6076)
                || EventFlag(6077)
                || EventFlag(6078)
                || EventFlag(6079)
                || EventFlag(6080)
                || EventFlag(6081)
                || EventFlag(6082)
                || EventFlag(6083)
                || EventFlag(6084)
                || EventFlag(6085));
        ForceAnimationPlayback(2100218, 7004, false, false, false);
        WaitFixedTimeFrames(89);
    }
L0:
    ForceAnimationPlayback(2100218, 7001, true, false, false);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105063, ON);
    WaitFor(
        !(EventFlag(6071)
            || EventFlag(6072)
            || EventFlag(6073)
            || EventFlag(6074)
            || EventFlag(6075)
            || EventFlag(6076)
            || EventFlag(6077)
            || EventFlag(6078)
            || EventFlag(6079)
            || EventFlag(6080)
            || EventFlag(6081)
            || EventFlag(6082)
            || EventFlag(6083)
            || EventFlag(6084)
            || EventFlag(6085)));
    SetEventFlag(12105063, OFF);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    RestartEvent();
});

// Headstone warp function
$Event(12107000, Default, function(eventFlagId, entityId, entityId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    } else {
        RotateCharacter(10000, entityId, 101164, false);
        WaitFixedTimeSeconds(2);
    }
    $InitializeEvent(0, 10008600);
    WaitFixedTimeSeconds(2);
    SetPlayerRespawnPoint(entityId2);
    SetSpEffect(10000, 2101, false);
});

// Warp OBJ_Warp to Dungeon_First Half_XX
$Event(12107100, Default, function(eventFlagId, entityId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    } else {
        RotateCharacter(10000, entityId, 101164, false);
        WaitFixedTimeSeconds(2);
    }
    WaitFixedTimeSeconds(2);
    $InitializeEvent(0, 10008600);
    SetEventFlag(9020, OFF);
    SetEventFlag(9021, OFF);
    SetEventFlag(9022, OFF);
    SetEventFlag(9023, OFF);
    SetEventFlag(9024, OFF);
    SetEventFlag(9025, OFF);
    SetEventFlag(9026, OFF);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId, OFF);
    EndEvent();
});


// Warp OBJ_Warp to Dungeon_Late_XX
$Event(12107200, Default, function(eventFlagId, entityId, eventFlagId2, entityId2) {
    SetEventFlag(10008630, OFF);
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    if (EventFlag(10008630)) { // portable lamp - bypass extra animations
        WaitFor(ElapsedFrames(0));
    }
    else if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        $InitializeEvent(0, 10008600);
        WaitFixedTimeSeconds(2);
    } else {
        RotateCharacter(10000, entityId2, 101164, false);
        WaitFixedTimeSeconds(2);
        $InitializeEvent(0, 10008600);
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(12106000)) {
        SetEventFlag(12106000, OFF);
        SetPlayerRespawnPoint(entityId);
        SetSpEffect(10000, 2101, false);
    } else {
        WarpPlayerToRespawnPoint(entityId);
    }
    SetEventFlag(eventFlagId2, ON);
});

// treasure chest_XX
$Event(12900000, Default, function(objEntityId, objactEventFlag) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(objEntityId)) {
            ReproduceObjectAnimation(objEntityId, 0);
        }
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag) || ObjectDestroyed(objEntityId));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(objEntityId, Enabled);
    SetObjactState(objEntityId, -1, Disabled);
});

// unique item switching_XX
$Event(12900060, Default, function(objEntityId, objEntityId2) {
    if (EventFlag(92905335)) {
        DeactivateObject(objEntityId, Disabled);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Disabled);
        EndEvent();
    }
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Rusted Treasure Chest_XX
$Event(12900067, Default, function(objEntityId, objactEventFlag, eventFlagId) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(objEntityId)) {
            ReproduceObjectAnimation(objEntityId, 0);
        }
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Enabled);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(objactEventFlag);
    obj2 = ObjectDestroyed(objEntityId);
    WaitFor(obj || obj2);
    WaitFixedTimeFrames(10);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Enabled);
    EndIf(obj2.Passed);
    SetEventFlag(eventFlagId, ON);
});

// Rusty Treasure Chest_Sound Trap_XX
$Event(12900078, Default, function(entityId, eventFlagId) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId));
    CreatePlaylog(0);
    ShootBullet(2900000, entityId, 90, 6051, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, entityId, 90, 6053, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, entityId, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, entityId, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, entityId, 90, 6055, 270, 0, 0);
});

// Delete door action_XX
$Event(12900089, Default, function(objEntityId, objactEventFlag, objParameterId, objParameterId2) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjactState(objEntityId, objParameterId2, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetObjactState(objEntityId, objParameterId2, Disabled);
    EndEvent();
});

// Delete door action_one-way door_XX
$Event(12900163, Default, function(objEntityId, objactEventFlag, objParameterId, eventFlagId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetEventFlag(eventFlagId, ON);
    EndEvent();
});

// one-way door_Msg_XX
$Event(12900174, Default, function(areaEntityId, objactEventFlag, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    act = ActionButtonInArea(7011, areaEntityId);
    WaitFor(act || ObjActEventFlag(objactEventFlag));
    if (!act.Passed) {
        EndEvent();
    }
L1:
    DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// lever door_XX
$Event(12900185, Default, function(objEntityId, objEntityId2, objactEventFlag, eventFlagId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId2, 9902, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    SetEventFlag(eventFlagId, ON);
});

// lever door_Msg_XX
$Event(12900186, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    act = ActionButtonInArea(7010, areaEntityId);
    act2 = ActionButtonInArea(7011, areaEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Lever Door_Lever Msg_XX
$Event(12900187, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Sealed Door_Pull Lever_XX
$Event(12900188, Default, function(objEntityId, objactEventFlag, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 1);
        SetObjactState(objEntityId, 9921, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(objEntityId, 9921, Disabled);
    WaitFor(ObjActEventFlag(objactEventFlag));
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetObjactState(objEntityId, 9921, Enabled);
    WaitFixedTimeSeconds(0.5);
    SetEventFlag(eventFlagId, ON);
});

// sealed door_open door_XX
$Event(12900189, Default, function(objEntityId, objactEventFlag, eventFlagId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, 9921, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetEventFlag(eventFlagId, ON);
    WaitFixedTimeSeconds(0);
});

// Sealed Door_Msg_XX
$Event(12900190, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(7010, areaEntityId));
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Sealed Door_Lever Msg_XX
$Event(12900191, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_pull lever_XX
$Event(12900192, Default, function(objactEventFlag, eventFlagId, objEntityId) {
    if (EventFlag(eventFlagId)) {
        SetObjactState(objEntityId, 2902000, Disabled);
        CreateObjectfollowingSFX(objEntityId, 703, 929136);
        EndEvent();
    }
    CreateObjectfollowingSFX(objEntityId, 703, 929134);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(56);
    SetEventFlag(eventFlagId, ON);
    DeleteObjectfollowingSFX(objEntityId, true);
    CreateObjectfollowingSFX(objEntityId, 703, 929136);
    DisplayBanner(TextBannerType.StadiumWin); // lever door unlocked
    PlaySE(10000, SoundType.vVoice, 888880000);
    WaitFixedTimeFrames(44);
    WaitFixedTimeSeconds(1);
    DisplayMessage(10011260, 0);
});

// Main block door_open door_XX
$Event(12900197, Default, function(objEntityId, objactEventFlag, eventFlagId) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, 2900100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetEventFlag(eventFlagId, ON);
    WaitFixedTimeSeconds(0);
});

// Main block door_Msg_XX
$Event(12900202, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId) || EventFlag(12100860));
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(7010, areaEntityId));
    DisplayGenericDialog(10010167, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_lever Msg_XX
$Event(12900207, Default, function(areaEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(3);
    WaitFor(ActionButtonInArea(7100, areaEntityId));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, areaEntityId, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_lever pulled_XX
$Event(12900229, Default, function(objEntityId, eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(2);
    if (EventFlag(eventFlagId2)) {
        CreateObjectfollowingSFX(objEntityId, 703, 929136);
        EndEvent();
    }
    if (ThisEventSlot() || EventFlag(12100860)) {
        ReproduceObjectAnimation(objEntityId, 1);
        CreateObjectfollowingSFX(objEntityId, 703, 929136);
        SetObjactState(objEntityId, 2900100, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(objEntityId, 2900100, Disabled);
    CreateObjectfollowingSFX(objEntityId, 703, 929134);
    WaitFor(EventFlag(eventFlagId));
    DeleteObjectfollowingSFX(objEntityId, true);
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    CreateObjectfollowingSFX(objEntityId, 703, 929136);
    SetObjactState(objEntityId, 2900100, Enabled);
    WaitFixedTimeSeconds(0.5);
});

// key consumption_door unlock_XX
$Event(12900234, Default, function(objactEventFlag, itemId, messageId, objEntityId, objParameterId, objParameterId2) {
    if (ThisEventSlot()) {
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjactState(objEntityId, objParameterId2, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RemoveItemFromPlayer(ItemType.Goods, itemId, 0);
    }
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetObjactState(objEntityId, objParameterId2, Disabled);
});

// hold key_unlock door_XX
$Event(12900235, Default, function(objactEventFlag, messageId, objEntityId, objParameterId, objParameterId2) {
    if (ThisEventSlot()) {
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjactState(objEntityId, objParameterId2, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(objactEventFlag));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(messageId, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    }
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetObjactState(objEntityId, objParameterId2, Disabled);
});

// Magic wall vanishes_XX
$Event(12900236, Default, function(objEntityId) {
    GotoIf(L0, !ThisEventSlot());
    DeactivateObject(objEntityId, Disabled);
    EndEvent();
    WaitFor(ObjectDestroyed(objEntityId));
    CreatePlaylog(38);
});

// Magic wall disappeared_New_XX
$Event(12901760, Default, function(objEntityId) {
    if (ThisEventSlot()) {
        DeactivateObject(objEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(objEntityId));
    CreatePlaylog(38);
});

// Rusted door_XX
$Event(12900238, Default, function(objEntityId, objactEventFlag, objParameterId, objParameterId2, eventFlagId) {
    if (!ThisEventSlot()) {
        SetObjactState(objEntityId, objParameterId, Disabled);
        SetObjactState(objEntityId, objParameterId2, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    SetObjactState(objEntityId, objParameterId, Disabled);
    SetObjactState(objEntityId, objParameterId2, Disabled);
    SetEventFlag(eventFlagId, ON);
});

// Rusted Door_Sound Trap XX
$Event(12900239, Default, function(entityId, eventFlagId) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(eventFlagId));
    CreatePlaylog(76);
    WaitFixedTimeSeconds(1.5);
    ShootBullet(2900000, entityId, 120, 6020, 270, 0, 0);
});

// Initialize Altar Elevator
$Event(12900240, Default, function(objEntityId, objEntityId2, objEntityId3, eventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 10);
        ReproduceObjectAnimation(objEntityId2, 0);
        ReproduceObjectAnimation(objEntityId3, 1);
    } else {
L0:
        ReproduceObjectAnimation(objEntityId, 0);
        ReproduceObjectAnimation(objEntityId2, 1);
        ReproduceObjectAnimation(objEntityId3, 0);
    }
L1:
    SetEventFlag(eventFlagId2, OFF);
});

// Go down the altar elevator
$Event(12900245, Default, function(entityId, entityId2, entityId3, areaEntityId, areaEntityId2, areaEntityId3, eventFlagId, eventFlagId2) {
    WaitFor(
        (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId3)));
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId, OFF);
    ForceAnimationPlayback(entityId3, 1, false, false, false);
    ForceAnimationPlayback(entityId, 10, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    SetEventFlag(eventFlagId2, OFF);
    ForceAnimationPlayback(entityId2, 0, false, false, false);
    RestartEvent();
});

// Go up the altar elevator
$Event(12900250, Default, function(entityId, entityId2, entityId3, areaEntityId, areaEntityId2, areaEntityId3, eventFlagId, eventFlagId2) {
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId2))
            || (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId3)));
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId, ON);
    ForceAnimationPlayback(entityId2, 1, false, false, false);
    ForceAnimationPlayback(entityId, 0, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId));
    SetEventFlag(eventFlagId2, OFF);
    ForceAnimationPlayback(entityId3, 0, false, false, false);
    RestartEvent();
});

// Altar Elevator Call Lever Inoperable
$Event(12900255, Default, function(areaEntityId, areaEntityId2, eventFlagId, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId2)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Bloodline Offline Rescue_XX
$Event(12900260, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(10000, 6100) && CharacterDead(chrEntityId));
    EndIf(
        !(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    AwardItemsIncludingClients(5530);
});

// Teleporter_Transfer start
$Event(12900293, Default, function(areaEntityId, eventFlagId, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(112);
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeFrames(6);
    RestartIf(!InArea(10000, areaEntityId));
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

// Teleporter_transfer completed
$Event(12900304, Default, function(eventFlagId, entityId, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    SetEventFlag(eventFlagId, OFF);
    WaitFor(EventFlag(eventFlagId));
    DummyPlayCutsceneAndWarpPlayer(entityId, 29, 0);
    WaitFixedTimeFrames(2);
    SetEventFlag(eventFlagId2, ON);
    ForceAnimationPlayback(10000, 101162, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Teleporter_Transfer Source_Transfer Effect
$Event(12901732, Default, function(eventFlagId, objEntityId) {
    if (ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 700, 929102);
        CreateObjectfollowingSFX(objEntityId, 702, 929102);
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 700, 929102);
        CreateObjectfollowingSFX(objEntityId, 702, 929102);
    }
L1:
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 200, 929213);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Teleporter_Destination_Transfer effect
$Event(12901743, Default, function(eventFlagId, entityId) {
    WaitFor(EventFlag(eventFlagId));
    SpawnOneshotSFX(TargetEntityType.Object, entityId, -1, 929215);
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Prison elevator initialization
$Event(12900315, Default, function(eventFlagId, objEntityId, objEntityId2, objParameterId, objEntityId3, eventFlagId2) {
    flag = EventFlag(eventFlagId);
    WaitFor(flag || !EventFlag(eventFlagId));
    if (!flag.Passed) {
        ReproduceObjectAnimation(objEntityId, 12);
        SetObjactState(objEntityId2, objParameterId, Disabled);
        SetObjactState(objEntityId3, objParameterId, Enabled);
    } else {
        ReproduceObjectAnimation(objEntityId, 132);
        SetObjactState(objEntityId3, objParameterId, Disabled);
        SetObjactState(objEntityId2, objParameterId, Enabled);
    }
    SetEventFlag(eventFlagId2, OFF);
});

// Up the prison elevator
$Event(12900323, Default, function(eventFlagId, eventFlagId2, areaEntityId, objactEventFlag, entityId, areaEntityId2, objEntityId, objEntityId2) {
    WaitFor(
        (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(entityId, 133, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(entityId, 35, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(entityId, 11, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Enabled);
    RestartEvent();
});

// Retreat elevator
$Event(12900331, Default, function(eventFlagId, eventFlagId2, areaEntityId, objactEventFlag, entityId, areaEntityId2, objEntityId, objEntityId2) {
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (!EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(entityId, 13, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(entityId, 16, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(entityId, 131, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Enabled);
    RestartEvent();
});

// Imprisoned Elevator Call Lever Inoperable
$Event(12900339, Default, function(eventFlagId, areaEntityId, eventFlagId2, areaEntityId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && ActionButtonInArea(7100, areaEntityId))
            || (!EventFlag(eventFlagId)
                && EventFlag(eventFlagId2)
                && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId) && ActionButtonInArea(7100, areaEntityId)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Floor movement elevator initialization
$Event(12900347, Default, function(objEntityId, objEntityId2, objEntityId3, eventFlagId, eventFlagId2, animationId, animationId2) {
    if (!EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, animationId);
        SetObjactState(objEntityId2, 9902, Disabled);
        SetObjactState(objEntityId3, 9902, Enabled);
    } else {
L0:
        ReproduceObjectAnimation(objEntityId, animationId2);
        SetObjactState(objEntityId2, 9902, Enabled);
        SetObjactState(objEntityId3, 9902, Disabled);
    }
L1:
    SetEventFlag(eventFlagId2, OFF);
});

// 21m_Floor moving elevator going up
$Event(12900351, Default, function(entityId, objEntityId, objEntityId2, areaEntityId, areaEntityId2, objactEventFlag, eventFlagId, eventFlagId2) {
    WaitFor(
        (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId2))
            || (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, ON);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    ForceAnimationPlayback(entityId, 0, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId));
    ForceAnimationPlayback(entityId, 1, false, true, false);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Enabled);
    RestartEvent();
});

// 42m_Floor moving elevator going up
$Event(12900353, Default, function(entityId, objEntityId, objEntityId2, areaEntityId, areaEntityId2, objactEventFlag, eventFlagId, eventFlagId2) {
    WaitFor(
        (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId2))
            || (EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, ON);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    ForceAnimationPlayback(entityId, 20, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId));
    ForceAnimationPlayback(entityId, 21, false, true, false);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Enabled);
    RestartEvent();
});

// 21m_Floor moving elevator down
$Event(12900354, Default, function(entityId, objEntityId, objEntityId2, areaEntityId, areaEntityId2, objactEventFlag, eventFlagId, eventFlagId2) {
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (!EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    ForceAnimationPlayback(entityId, 10, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    ForceAnimationPlayback(entityId, 11, false, true, false);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Enabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    RestartEvent();
});

// 42m_Floor moving elevator down
$Event(12900356, Default, function(entityId, objEntityId, objEntityId2, areaEntityId, areaEntityId2, objactEventFlag, eventFlagId, eventFlagId2) {
    WaitFor(
        (!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && InArea(10000, areaEntityId))
            || (!EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ObjActEventFlag(objactEventFlag)));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    SetObjactState(objEntityId, 9902, Disabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    ForceAnimationPlayback(entityId, 30, false, true, false);
    WaitFor(!AllPlayersInArea(areaEntityId2));
    ForceAnimationPlayback(entityId, 31, false, true, false);
    SetEventFlag(eventFlagId2, OFF);
    SetObjactState(objEntityId, 9902, Enabled);
    SetObjactState(objEntityId2, 9902, Disabled);
    RestartEvent();
});

// Floor Transfer Elevator Call Lever Inoperable
$Event(12900357, Default, function(areaEntityId, areaEntityId2, eventFlagId, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId)
                && !EventFlag(eventFlagId2)
                && ActionButtonInArea(7100, areaEntityId2))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId))
            || (EventFlag(eventFlagId2) && ActionButtonInArea(7100, areaEntityId2)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// [Middle/Lower] Balance Elevator Initialization
$Event(12900361, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, entityId, entityId2) {
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, ON);
    SetEventFlag(eventFlagId5, OFF);
    ForceAnimationPlayback(entityId, 2, false, true, false);
    ForceAnimationPlayback(entityId2, 2, false, true, false);
    EndEvent();
});

// [Middle and Lower] Tenbin Elevator First Time
$Event(12900363, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, eventFlagId3) {
    WaitFixedTimeSeconds(1);
    if (EventFlag(eventFlagId3)) {
        if (!EventFlag(eventFlagId2)) {
            WaitFor(
                EventFlag(eventFlagId)
                    && !EventFlag(eventFlagId2)
                    && InArea(10000, areaEntityId)
                    && EventFlag(eventFlagId3));
            SetEventFlag(eventFlagId2, ON);
            WaitFixedTimeSeconds(1);
            ForceAnimationPlayback(entityId, 3, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(entityId, 4, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(entityId, 121, false, true, false);
            ForceAnimationPlayback(entityId, 122, false, true, false);
            WaitFor(!AllPlayersInArea(areaEntityId2));
            SetEventFlag(eventFlagId, OFF);
            SetEventFlag(eventFlagId2, OFF);
            SetEventFlag(eventFlagId3, OFF);
            EndEvent();
        }
    }
});

// [Middle and lower] Balance Elevator_Balance A is up
$Event(12900365, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, entityId2, areaEntityId3, areaEntityId4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(12900500))) {
        WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && !EventFlag(12900500));
        WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(entityId2, 123, false, false, false);
        ForceAnimationPlayback(entityId, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId2, 24, false, false, false);
        ForceAnimationPlayback(entityId, 4, false, true, false);
        ForceAnimationPlayback(entityId2, 0, false, true, false);
        ForceAnimationPlayback(entityId, 120, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId, 121, false, false, false);
        ForceAnimationPlayback(entityId2, 1, false, true, false);
        ForceAnimationPlayback(entityId, 122, false, true, false);
        ForceAnimationPlayback(entityId2, 2, false, true, false);
        WaitFor(!AllPlayersInArea(areaEntityId3) && !AllPlayersInArea(areaEntityId4));
        SetEventFlag(eventFlagId, OFF);
        SetEventFlag(eventFlagId2, OFF);
    }
    RestartEvent();
});

// [Middle and lower] Balance Elevator_Balance A is lower
$Event(12900367, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, entityId2, areaEntityId3, areaEntityId4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(12900500))) {
        WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && !EventFlag(12900500));
        WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(entityId, 123, false, false, false);
        ForceAnimationPlayback(entityId2, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId2, 4, false, false, false);
        ForceAnimationPlayback(entityId, 24, false, true, false);
        ForceAnimationPlayback(entityId2, 120, false, true, false);
        ForceAnimationPlayback(entityId, 0, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId, 1, false, false, false);
        ForceAnimationPlayback(entityId2, 121, false, true, false);
        ForceAnimationPlayback(entityId, 2, false, true, false);
        ForceAnimationPlayback(entityId2, 122, false, true, false);
        WaitFor(!AllPlayersInArea(areaEntityId3) && !AllPlayersInArea(areaEntityId4));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, OFF);
    }
    RestartEvent();
});

// [Upper middle row] Balance elevator initialization
$Event(12900369, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, entityId, entityId2) {
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, ON);
    SetEventFlag(eventFlagId5, OFF);
    ForceAnimationPlayback(entityId, 12, false, true, false);
    ForceAnimationPlayback(entityId2, 12, false, true, false);
    EndEvent();
});

// [Upper Middle] Tenbin Elevator First Time
$Event(12900371, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, eventFlagId3) {
    WaitFixedTimeSeconds(1);
    if (EventFlag(eventFlagId3)) {
        if (!EventFlag(eventFlagId2)) {
            WaitFor(
                EventFlag(eventFlagId)
                    && !EventFlag(eventFlagId2)
                    && InArea(10000, areaEntityId)
                    && EventFlag(eventFlagId3));
            SetEventFlag(eventFlagId2, ON);
            WaitFixedTimeSeconds(1);
            ForceAnimationPlayback(entityId, 13, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(entityId, 14, false, true, false);
            WaitFixedTimeSeconds(0.5);
            ForceAnimationPlayback(entityId, 101, false, true, false);
            ForceAnimationPlayback(entityId, 102, false, true, false);
            WaitFor(!AllPlayersInArea(areaEntityId2));
            SetEventFlag(eventFlagId, OFF);
            SetEventFlag(eventFlagId2, OFF);
            SetEventFlag(eventFlagId3, OFF);
            EndEvent();
        }
    }
});

// [Upper Middle] Balance Elevator_Balance A is up
$Event(12900373, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, entityId2, areaEntityId3, areaEntityId4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(12900500))) {
        WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && !EventFlag(12900500));
        WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(entityId2, 103, false, false, false);
        ForceAnimationPlayback(entityId, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId2, 5, false, false, false);
        ForceAnimationPlayback(entityId, 14, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId, 101, false, false, false);
        ForceAnimationPlayback(entityId2, 11, false, true, false);
        ForceAnimationPlayback(entityId, 102, false, true, false);
        ForceAnimationPlayback(entityId2, 12, false, true, false);
        WaitFor(!AllPlayersInArea(areaEntityId3) && !AllPlayersInArea(areaEntityId4));
        SetEventFlag(eventFlagId, OFF);
        SetEventFlag(eventFlagId2, OFF);
        RestartEvent();
    }
});

// [Upper middle row] Balance elevator_Balance A is down
$Event(12900375, Default, function(eventFlagId, eventFlagId2, areaEntityId, areaEntityId2, entityId, entityId2, areaEntityId3, areaEntityId4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(12900500))) {
        WaitFor(!EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && !EventFlag(12900500));
        WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
        SetEventFlag(eventFlagId2, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(entityId, 103, false, false, false);
        ForceAnimationPlayback(entityId2, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId2, 14, false, false, false);
        ForceAnimationPlayback(entityId, 5, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(entityId, 11, false, false, false);
        ForceAnimationPlayback(entityId2, 101, false, true, false);
        ForceAnimationPlayback(entityId, 12, false, true, false);
        ForceAnimationPlayback(entityId2, 102, false, true, false);
        WaitFor(!AllPlayersInArea(areaEntityId3) && !AllPlayersInArea(areaEntityId4));
        SetEventFlag(eventFlagId, ON);
        SetEventFlag(eventFlagId2, OFF);
        RestartEvent();
    }
});

// Create damage sphere_XX
$Event(12900377, Default, function(objEntityId, eventFlagId) {
    if (!EventFlag(92905107)) {
        if (!EventFlag(92905106)) {
            if (!EventFlag(92905105)) {
                if (!EventFlag(92905104)) {
                    if (!EventFlag(92905103)) {
                        if (!EventFlag(92905102)) {
                            if (!EventFlag(92905101)) {
                                if (!EventFlag(92905100)) {
                                }
L0:
                                CreateDamagingObject(eventFlagId, objEntityId, 101, 6130, DamageTargetType.Character, 0.3, 0, 2);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(eventFlagId, objEntityId, 101, 6131, DamageTargetType.Character, 0.3, 0, 2);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(eventFlagId, objEntityId, 101, 6132, DamageTargetType.Character, 0.3, 0, 2);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(eventFlagId, objEntityId, 101, 6133, DamageTargetType.Character, 0.3, 0, 2);
                    EndEvent();
                }
L4:
                CreateDamagingObject(eventFlagId, objEntityId, 101, 6134, DamageTargetType.Character, 0.3, 0, 2);
                EndEvent();
            }
L5:
            CreateDamagingObject(eventFlagId, objEntityId, 101, 6135, DamageTargetType.Character, 0.3, 0, 2);
            EndEvent();
        }
L6:
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6136, DamageTargetType.Character, 0.3, 0, 2);
        EndEvent();
    }
L7:
    CreateDamagingObject(eventFlagId, objEntityId, 101, 6137, DamageTargetType.Character, 0.3, 0, 2);
});

// Create bonfire damage sphere_XX
$Event(12900395, Default, function(objEntityId, eventFlagId) {
    CreateObjectfollowingSFX(objEntityId, 704, 900110);
    if (!EventFlag(92905107)) {
        if (!EventFlag(92905106)) {
            if (!EventFlag(92905105)) {
                if (!EventFlag(92905104)) {
                    if (!EventFlag(92905103)) {
                        if (!EventFlag(92905102)) {
                            if (!EventFlag(92905101)) {
                                if (!EventFlag(92905100)) {
                                }
L0:
                                CreateDamagingObject(eventFlagId, objEntityId, 704, 6160, DamageTargetType.Character, 0.6, 0, 1);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(eventFlagId, objEntityId, 704, 6161, DamageTargetType.Character, 0.6, 0, 1);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(eventFlagId, objEntityId, 704, 6162, DamageTargetType.Character, 0.6, 0, 1);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(eventFlagId, objEntityId, 704, 6163, DamageTargetType.Character, 0.6, 0, 1);
                    EndEvent();
                }
L4:
                CreateDamagingObject(eventFlagId, objEntityId, 704, 6164, DamageTargetType.Character, 0.6, 0, 1);
                EndEvent();
            }
L5:
            CreateDamagingObject(eventFlagId, objEntityId, 704, 6165, DamageTargetType.Character, 0.6, 0, 1);
            EndEvent();
        }
L6:
        CreateDamagingObject(eventFlagId, objEntityId, 704, 6166, DamageTargetType.Character, 0.6, 0, 1);
        EndEvent();
    }
L7:
    CreateDamagingObject(eventFlagId, objEntityId, 704, 6167, DamageTargetType.Character, 0.6, 0, 1);
});

// Pitfall_XX
$Event(12900423, Default, function(areaEntityId, objEntityId) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(objEntityId, 1);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(152);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, -1, 929209);
    PlaySE(objEntityId, SoundType.oObject, 997400000);
    RequestObjectDestruction(objEntityId, 1);
});

// Widow generator disabled_XX
$Event(12900430, Default, function(generatorEntityId) {
    DeactivateGenerator(generatorEntityId, Disabled);
});

// Widow generation switch_XX
$Event(12901000, Default, function(chrEntityId, generatorEntityId) {
    DeactivateGenerator(generatorEntityId, Disabled);
    WaitFor(
        CharacterInsideDrawGroup(chrEntityId)
            && CharacterAIState(chrEntityId, AIStateType.Normal)
            && CharacterHasEventMessage(chrEntityId, 100));
    DeactivateGenerator(generatorEntityId, Enabled);
    WaitFor(
        !CharacterInsideDrawGroup(chrEntityId) || CharacterAIState(chrEntityId, AIStateType.Combat));
    RestartEvent();
});

// Summon Enemy Spawn Warp_XX
$Event(12901200, Default, function(chrEntityId, chrEntityId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId2, 100));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
    WaitFor(!CharacterHasEventMessage(chrEntityId2, 100));
    WaitFor(CharacterDead(chrEntityId2));
    SetSpEffectAndUnknown200455(chrEntityId2, 5751, false);
    RestartEvent();
});

// Widow died and Zako died_XX
$Event(12901272, Default, function(chrEntityId, generatorEntityId, chrEntityId2) {
    WaitFor(CharacterHasEventMessage(chrEntityId2, 100));
    chr = CharacterDead(chrEntityId2);
    chr2 = CharacterDead(chrEntityId);
    WaitFor(chr || chr2);
    if (chr2.Passed) {
        DeactivateGenerator(generatorEntityId, Disabled);
        ForceCharacterDeath(chrEntityId2, true);
    }
L0:
    RestartEvent();
});

// arrow trap_switch_XX
$Event(12901347, Default, function(areaEntityId, entityId, eventFlagId) {
    flagArea = !EventFlag(eventFlagId) && InArea(10000, areaEntityId);
    flagArea2 = EventFlag(eventFlagId) && !AllPlayersInArea(areaEntityId);
    WaitFor(flagArea || flagArea2);
    if (!flagArea2.Passed) {
        ForceAnimationPlayback(entityId, 0, false, true, false);
        SetEventFlag(eventFlagId, ON);
        WaitFixedTimeSeconds(2.1);
        RestartEvent();
    }
L0:
    SetEventFlag(eventFlagId, OFF);
    ForceAnimationPlayback(entityId, 1, false, true, false);
    RestartEvent();
});

// arrow trap_fire_XX
$Event(12901400, Default, function(objEntityId, eventFlagId) {
    obj = !ObjectDestroyed(objEntityId);
    WaitFor(obj && EventFlag(eventFlagId));
    EndIf(!obj.Passed);
    CreatePlaylog(188);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 101, 150005);
    PlaySE(objEntityId, SoundType.oObject, 990100001);
    GotoIf(S28, EventFlag(92905107));
    GotoIf(S25, EventFlag(92905106));
    GotoIf(S21, EventFlag(92905105));
    GotoIf(S17, EventFlag(92905104));
    GotoIf(S13, EventFlag(92905103));
    GotoIf(S9, EventFlag(92905102));
    GotoIf(S5, EventFlag(92905101));
    GotoIf(S0, EventFlag(92905100));
S0:
    GotoIf(S3, EventFlag(92905310));
    GotoIf(S2, EventFlag(92905204));
    GotoIf(S1, EventFlag(92905202));
    ShootBullet(2900000, objEntityId, 101, 6200, 0, 0, 0);
    Goto(S4);
S1:
    ShootBullet(2900000, objEntityId, 101, 6210, 0, 0, 0);
    Goto(S4);
S2:
    ShootBullet(2900000, objEntityId, 101, 6220, 0, 0, 0);
    Goto(S4);
S3:
    ShootBullet(2900000, objEntityId, 101, 6230, 0, 0, 0);
S4:
    Goto(S32);
S5:
    if (!EventFlag(92905310)) {
        GotoIf(S7, EventFlag(92905204));
        GotoIf(S6, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6201, 0, 0, 0);
        Goto(S8);
S6:
        ShootBullet(2900000, objEntityId, 101, 6211, 0, 0, 0);
        Goto(S8);
S7:
        ShootBullet(2900000, objEntityId, 101, 6221, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6231, 0, 0, 0);
    }
S8:
    Goto(S32);
S9:
    if (!EventFlag(92905310)) {
        GotoIf(S11, EventFlag(92905204));
        GotoIf(S10, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6202, 0, 0, 0);
        Goto(S12);
S10:
        ShootBullet(2900000, objEntityId, 101, 6212, 0, 0, 0);
        Goto(S12);
S11:
        ShootBullet(2900000, objEntityId, 101, 6222, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6232, 0, 0, 0);
    }
S12:
    Goto(S32);
S13:
    if (!EventFlag(92905310)) {
        GotoIf(S15, EventFlag(92905204));
        GotoIf(S14, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6203, 0, 0, 0);
        Goto(S16);
S14:
        ShootBullet(2900000, objEntityId, 101, 6213, 0, 0, 0);
        Goto(S16);
S15:
        ShootBullet(2900000, objEntityId, 101, 6223, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6233, 0, 0, 0);
    }
S16:
    Goto(S32);
S17:
    if (!EventFlag(92905310)) {
        GotoIf(S19, EventFlag(92905204));
        GotoIf(S18, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6204, 0, 0, 0);
        Goto(S20);
S18:
        ShootBullet(2900000, objEntityId, 101, 6214, 0, 0, 0);
        Goto(S20);
S19:
        ShootBullet(2900000, objEntityId, 101, 6224, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6234, 0, 0, 0);
    }
S20:
    Goto(S32);
S21:
    if (!EventFlag(92905310)) {
        GotoIf(S23, EventFlag(92905204));
        GotoIf(S22, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6205, 0, 0, 0);
        Goto(S24);
S22:
        ShootBullet(2900000, objEntityId, 101, 6215, 0, 0, 0);
        Goto(S24);
S23:
        ShootBullet(2900000, objEntityId, 101, 6225, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6235, 0, 0, 0);
    }
S24:
    Goto(S32);
S25:
    if (!EventFlag(92905310)) {
        GotoIf(S27, EventFlag(92905204));
        GotoIf(S26, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6206, 0, 0, 0);
        Goto(S32);
S26:
        ShootBullet(2900000, objEntityId, 101, 6216, 0, 0, 0);
        Goto(S32);
S27:
        ShootBullet(2900000, objEntityId, 101, 6226, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6236, 0, 0, 0);
    }
    Goto(S32);
S28:
    if (!EventFlag(92905310)) {
        GotoIf(S30, EventFlag(92905204));
        GotoIf(S29, EventFlag(92905202));
        ShootBullet(2900000, objEntityId, 101, 6207, 0, 0, 0);
        Goto(S31);
S29:
        ShootBullet(2900000, objEntityId, 101, 6217, 0, 0, 0);
        Goto(S31);
S30:
        ShootBullet(2900000, objEntityId, 101, 6227, 0, 0, 0);
    } else {
        ShootBullet(2900000, objEntityId, 101, 6237, 0, 0, 0);
    }
S31:
    Goto(S32);
S32:
    WaitFixedTimeSeconds(0.7);
    WaitFor(!EventFlag(eventFlagId));
    RestartEvent();
});

// NavMesh Node Bank_XX
$Event(12901447, Default, function(objactEventFlag, entityId) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(objactEventFlag));
    ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Delete);
});

// Drawbridge NavMesh Node Bank_XX
$Event(12901525, Default, function(objactEventFlag, entityId) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(3);
    ModifyNavimeshConnectionBitflag(entityId, NavimeshType.Solid, BitopType.Delete);
});

// Treasure Enemy Reappearance Control_XX
$Event(12901532, Restart, function(chrEntityId, eventFlagId) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(eventFlagId);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// drawbridge drop
$Event(12901550, Default, function(objactEventFlag, objEntityId, objEntityId2) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(objEntityId, 1);
        ReproduceObjectAnimation(objEntityId2, 0);
        SetObjactState(objEntityId, 2931100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    ForceAnimationPlayback(objEntityId2, 0, false, true, false);
    CreatePlaylog(224);
});

// Launch by surprise enemy_PC discovery
$Event(12901554, Default, function(chrEntityId, aiId) {
    WaitFor(CharacterTargetedBy(chrEntityId, 10000) || CharacterDamagedBy(chrEntityId, 10000));
    SetCharacterAIId(chrEntityId, aiId);
    RequestCharacterAIReplan(chrEntityId);
});

// create bullet owner
$Event(12901555, Default, function() {
    CreateBulletOwner(2900000);
    ChangeCharacterEnableState(2900000, Disabled);
});

// Ladder registration
$Event(12901556, Default, function(eventFlagId, eventFlagId2, objEntityId) {
    RegisterLadder(eventFlagId, eventFlagId2, objEntityId);
});

// Boss defeated
$Event(12901588, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2) {
    WaitFixedTimeSeconds(4);
    if (ThisEventSlot()
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(chrEntityId);
    CreatePlaylog(262);
    if (eventFlagId == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(eventFlagId, ON);
});

// Defeat multiple bosses
$Event(12901589, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2, chrEntityId2) {
    if (ThisEventSlot()
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId) && CharacterDead(chrEntityId2));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(chrEntityId);
    CreatePlaylog(262);
    if (eventFlagId == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(eventFlagId, ON);
});

// Boss Rush_Boss defeated
$Event(12901590, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId));
    CreatePlaylog(262);
    EndTimeMeasurement(2900020);
    HandleBossDefeat(chrEntityId);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    SetEventFlag(eventFlagId, ON);
});

// Defeat three bosses
$Event(12901591, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2, chrEntityId2, chrEntityId3) {
    if (ThisEventSlot()
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
    WaitFor(
        CharacterDead(chrEntityId) && CharacterDead(chrEntityId2) && CharacterDead(chrEntityId3));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(chrEntityId);
    CreatePlaylog(262);
    if (eventFlagId == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (eventFlagId == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(eventFlagId, ON);
});

// Boss room_4F door open
$Event(12901592, Default, function(eventFlagId, objEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId) && EventFlag(92905360) && !EventFlag(12907220));
        WaitFixedTimeSeconds(3);
    }
    SetEventFlag(12907220, ON);
    DeactivateObject(objEntityId, Disabled);
});

// Boss Rush_door release
$Event(12901593, Default, function(eventFlagId, objEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId));
    }
    DeactivateObject(objEntityId, Disabled);
});

// [For 3F] Boss defeat item acquisition
$Event(12901594, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3, itemLotId4, itemLotId5, itemLotId6, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(92905377) && !EventFlag(eventFlagId2)) {
        AwardItemLot(itemLotId4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(itemLotId);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(itemLotId4);
        EndEvent();
    }
    AwardItemLot(itemLotId5);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(eventFlagId2)) {
            AwardItemLot(itemLotId5);
            SetEventFlag(eventFlagId2, ON);
        } else {
            AwardItemLot(itemLotId6);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(itemLotId5);
        EndEvent();
    }
    AwardItemsIncludingClients(itemLotId2);
    EndEvent();
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(itemLotId3);
    }
    EndEvent();
});

// [For 4F] Boss defeat item acquisition
$Event(12901595, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3, itemLotId4, itemLotId5, itemLotId6, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(92905377) && !EventFlag(eventFlagId2)) {
        AwardItemLot(itemLotId4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(itemLotId);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(itemLotId4);
        EndEvent();
    }
    AwardItemLot(itemLotId5);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!EventFlag(92905360));
        AwardItemLot(itemLotId4);
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(eventFlagId2)) {
            AwardItemLot(itemLotId5);
            SetEventFlag(eventFlagId2, ON);
        } else {
            AwardItemLot(itemLotId6);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(itemLotId5);
        EndEvent();
    }
    AwardItemsIncludingClients(itemLotId2);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(itemLotId3);
    }
    EndEvent();
});

// [For 1, 2F] Boss defeat item acquisition
$Event(12901596, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(itemLotId);
        EndEvent();
    }
    AwardItemLot(itemLotId2);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(itemLotId3);
    }
    EndEvent();
});

// [For Boss Rush] Boss defeat item acquisition
$Event(12901597, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(itemLotId);
        EndEvent();
    }
    AwardItemLot(itemLotId2);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(itemLotId3);
    }
    EndEvent();
});

// [Floor Boss/Large Boss] Acquire boss defeat item
$Event(12901598, Default, function(eventFlagId, itemLotId, itemLotId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(itemLotId);
        EndEvent();
    }
    AwardItemLot(itemLotId2);
    EndEvent();
});

// Boss appearance animation playback_XX
$Event(12901599, Default, function(chrEntityId, areaEntityId, animationId, playAnimationId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    WaitFor(InArea(10000, areaEntityId));
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
});

// B boss appearance SFX playback_XX
$Event(12901600, Default, function(chrEntityId, areaEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(InArea(10000, areaEntityId));
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, 929227);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// Enable Boss Wall
$Event(12901601, Default, function(objEntityId) {
    DeactivateObject(objEntityId, Disabled);
});

// Lantern lights up when passing area_XX
$Event(12901602, Default, function(areaEntityId, objEntityId) {
    CreateObjectfollowingSFX(objEntityId, 200, 8020);
    ForceAnimationPlayback(objEntityId, 200, true, true, false);
    if (!ThisEventSlot()) {
        WaitFor(InArea(10000, areaEntityId));
    }
    ForceAnimationPlayback(objEntityId, 1000000, false, true, false);
    CreateObjectfollowingSFX(objEntityId, 100, 8023);
    ForceAnimationPlayback(objEntityId, 1000100, true, true, false);
});

// Trophy unlocked_XX
$Event(12901684, Default, function(eventFlagId, achievementId) {
    WaitFor(EventFlag(eventFlagId));
    AwardAchievement(achievementId);
});

// Playlog_clear time measurement
$Event(12901685, Default, function() {
    StartTimeMeasurement(2900000, 380, Disabled);
    if (!EventFlag(12901809)) {
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 398, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 398, PlayLogMultiplayerType.HostOnly);
        SetEventFlag(12901809, ON);
    }
    if (!EventFlag(12901800)) {
        StartTimeMeasurement(2901000, 426, Disabled);
        StartTimeMeasurement(2901001, 462, Enabled);
        WaitFor(EventFlag(12901800));
        EndTimeMeasurement(2901000);
        EndTimeMeasurement(2901001);
    }
    if (!EventFlag(12901801)) {
        StartTimeMeasurement(2901010, 502, Disabled);
        StartTimeMeasurement(2901011, 538, Enabled);
        WaitFor(EventFlag(12901801));
        EndTimeMeasurement(2901010);
        EndTimeMeasurement(2901011);
    }
    if (!EventFlag(12901802)) {
        StartTimeMeasurement(2901020, 578, Disabled);
        StartTimeMeasurement(2901021, 614, Enabled);
        WaitFor(EventFlag(12901802));
        EndTimeMeasurement(2901020);
        EndTimeMeasurement(2901021);
    }
    if (EventFlag(92905360)) {
        if (!EventFlag(12901803)) {
            StartTimeMeasurement(2901030, 654, Disabled);
            StartTimeMeasurement(2901031, 692, Enabled);
            WaitFor(EventFlag(12901803));
            EndTimeMeasurement(2901030);
            EndTimeMeasurement(2901031);
        }
    }
    EndTimeMeasurement(2900000);
    EndEvent();
});

// Boss defeat process
$Event(12901686, Default, function(chrEntityId, objEntityId, objEntityId2, entityId, entityId2, eventFlagId) {
    if (EventFlag(eventFlagId)
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId) || HPRatio(chrEntityId) == 0);
    WaitFor(CharacterDead(chrEntityId) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(chrEntityId);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (eventFlagId == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(eventFlagId, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            $InitializeEvent(boss_1_offset, 10007800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            $InitializeEvent(boss_2_offset, 10007800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            $InitializeEvent(boss_3_offset, 10007800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            $InitializeEvent(boss_4_offset, 10007800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(eventFlagId, ON);
});

// Boss defeat processing_no exit
$Event(12901690, Default, function(chrEntityId, objEntityId, entityId, eventFlagId) {
    if (EventFlag(eventFlagId)
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId) || HPRatio(chrEntityId) == 0);
    WaitFor(CharacterDead(chrEntityId) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.Every2Frames);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (eventFlagId == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(eventFlagId, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            $InitializeEvent(boss_1_offset, 10007800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            $InitializeEvent(boss_2_offset, 10007800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            $InitializeEvent(boss_3_offset, 10007800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            $InitializeEvent(boss_4_offset, 10007800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(eventFlagId, ON);
});

// Boss defeat processing_undercard
$Event(12901692, Default, function(chrEntityId, objEntityId, objEntityId2, entityId, entityId2, eventFlagId) {
    if (EventFlag(eventFlagId)
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId) || HPRatio(chrEntityId) == 0);
    WaitFor(CharacterDead(chrEntityId) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    HandleMinibossDefeat(chrEntityId);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (eventFlagId == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(eventFlagId, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            $InitializeEvent(boss_1_offset, 10007800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            $InitializeEvent(boss_2_offset, 10007800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            $InitializeEvent(boss_3_offset, 10007800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            $InitializeEvent(boss_4_offset, 10007800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(eventFlagId, ON);
});

// Boss reward_defeat item
$Event(12901693, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3, itemLotId4, itemLotId5, itemLotId6) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(92905385) && (EventFlag(12907212) || EventFlag(12907213))) {
            GotoIf(S0, EventFlag(12907213));
            AwardItemLot(itemLotId5);
            Goto(L1);
S0:
            AwardItemLot(itemLotId6);
        } else {
            GotoIf(L3, 
                !EventFlag(92905385)
                    && EventFlag(92905378)
                    && (EventFlag(12907211) || EventFlag(12907212)));
            Goto(L1);
L3:
            if (!EventFlag(12907212)) {
                AwardItemLot(itemLotId5);
            } else {
                AwardItemLot(itemLotId6);
                Goto(L1);
            }
        }
L1:
        GotoIf(L2, EventFlag(92905360));
        GotoIf(L0, !EventFlag(12907212));
        SetEventFlag(12907221, ON);
        Goto(L0);
L2:
        if (EventFlag(12907213)) {
            SetEventFlag(12907221, ON);
            Goto(L0);
        }
    }
L0:
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        GotoIf(S1, EventFlag(92905370));
        AwardItemsIncludingClients(itemLotId);
        Goto(L9);
S1:
        AwardItemsIncludingClients(itemLotId2);
    } else {
L4:
        if (!EventFlag(92905370)) {
            AwardItemsIncludingClients(itemLotId3);
        } else {
            AwardItemsIncludingClients(itemLotId4);
            Goto(L9);
        }
    }
L9:
    if (InArea(10000, 2902960) || InArea(10000, 2902961)) {
        if (EventFlag(92905100)) {
            AwardItemsIncludingClients(110001000);
            EndEvent();
        }
        if (EventFlag(92905101)) {
            AwardItemsIncludingClients(110002000);
            EndEvent();
        }
        if (EventFlag(92905102)) {
            AwardItemsIncludingClients(110003000);
            EndEvent();
        }
        if (EventFlag(92905103)) {
            AwardItemsIncludingClients(110004000);
            EndEvent();
        }
        if (EventFlag(92905104)) {
            AwardItemsIncludingClients(110005000);
            EndEvent();
        }
        EndEvent();
    }
    if (InArea(10000, 2902962) || InArea(10000, 2902963)) {
        if (EventFlag(92905100)) {
            AwardItemsIncludingClients(110001010);
            EndEvent();
        }
        if (EventFlag(92905101)) {
            AwardItemsIncludingClients(110002010);
            EndEvent();
        }
        if (EventFlag(92905102)) {
            AwardItemsIncludingClients(110003010);
            EndEvent();
        }
        if (EventFlag(92905103)) {
            AwardItemsIncludingClients(110004010);
            EndEvent();
        }
        if (EventFlag(92905104)) {
            AwardItemsIncludingClients(110005010);
            EndEvent();
        }
        EndEvent();
    }
    EndEvent();
});

// Boss room entry_host_first battle_animation
$Event(12901697, Default, function(chrEntityId, areaEntityId, animationId, playAnimationId, eventFlagId, eventFlagId2, eventFlagId3, objactEventFlag) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFor(
        !EventFlag(eventFlagId)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700)));
    if (eventFlagId == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    } else if (eventFlagId == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    } else if (eventFlagId == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    } else if (eventFlagId == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, ON);
});

// Boss room entry_host_first battle_SFX
$Event(12901701, Default, function(chrEntityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, objactEventFlag) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFor(
        !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700)));
    if (eventFlagId == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    } else if (eventFlagId == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    } else if (eventFlagId == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    } else if (eventFlagId == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, ON);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// Boss room entry_host_first match_anime_undercard
$Event(12901705, Default, function(chrEntityId, areaEntityId, animationId, playAnimationId, eventFlagId, eventFlagId2, eventFlagId3, objactEventFlag) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, true);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFor(
        !EventFlag(eventFlagId)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700)));
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, ON);
});

// Boss room entry_host_first match_SFX_undercard
$Event(12901706, Default, function(chrEntityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, objactEventFlag) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFor(
        !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700)));
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, ON);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// Boss room entry_host_first match_SFX_fat
$Event(12901707, Default, function(chrEntityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId2, chrEntityId3, objactEventFlag) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId3));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFor(
        !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700)));
    if (eventFlagId == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    } else if (eventFlagId == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    } else if (eventFlagId == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    } else if (eventFlagId == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(eventFlagId3, ON);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId2, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId3, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId3, Enabled);
});

// Boss Reward_Defeat SAN Value
$Event(12901708, Default, function(eventFlagId, value) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    GotoIf(L2, value == 127000);
    GotoIf(L2, value == 216000);
    GotoIf(L2, value == 304000);
    GotoIf(L2, value == 313000);
    GotoIf(L2, value == 750000);
    GotoIf(L2, value == 7200);
    GotoIf(L2, value == 7040);
    GotoIf(L2, value == 106000);
    GotoIf(L2, value == 218000);
    GotoIf(L2, value == 209000);
    GotoIf(L2, value == 257000);
    GotoIf(L2, value == 305000);
    GotoIf(L2, value == 305010);
    GotoIf(L2, value == 501000);
    GotoIf(L2, value == 504000);
    GotoIf(L2, value == 510000);
    GotoIf(L3, value == 251000);
    GotoIf(L3, value == 306000);
    GotoIf(L3, value == 508000);
    GotoIf(L3, value == 509000);
    GotoIf(L3, value == 509010);
    GotoIf(L3, value == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L0:
    NoOp();
});

// Boss Reward_Defeat SAN Value_Undercard
$Event(12901712, Default, function(eventFlagId, value) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    GotoIf(L2, value == 216000);
    GotoIf(L2, value == 216000);
    GotoIf(L2, value == 304000);
    GotoIf(L2, value == 313000);
    GotoIf(L2, value == 750000);
    GotoIf(L2, value == 7200);
    GotoIf(L2, value == 209000);
    GotoIf(L2, value == 257000);
    GotoIf(L2, value == 305000);
    GotoIf(L2, value == 305010);
    GotoIf(L2, value == 501000);
    GotoIf(L2, value == 504000);
    GotoIf(L2, value == 510000);
    GotoIf(L3, value == 251000);
    GotoIf(L3, value == 306000);
    GotoIf(L3, value == 508000);
    GotoIf(L3, value == 509000);
    GotoIf(L3, value == 509010);
    GotoIf(L3, value == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L0:
    NoOp();
});

// Boss entrance door open
$Event(12901713, Default, function(objactEventFlag, objEntityId, objParameterId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// Boss entrance door open_opening
$Event(12901717, Default, function(objactEventFlag, objEntityId, objParameterId, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        ReproduceObjectAnimation(objEntityId, 0);
        SetObjactState(objEntityId, objParameterId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(0);
});

// Boss Reward_Encounter SAN Value
$Event(12901718, Default, function(eventFlagId, value, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    GotoIf(L1, value == 216000);
    GotoIf(L1, value == 209000);
    GotoIf(L1, value == 305000);
    GotoIf(L1, value == 305010);
    GotoIf(L1, value == 501000);
    GotoIf(L2, value == 510000);
    GotoIf(L3, value == 251000);
    GotoIf(L1, value == 306000);
    GotoIf(L1, value == 508000);
    GotoIf(L1, value == 509000);
    GotoIf(L1, value == 509010);
    GotoIf(L3, value == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(eventFlagId2, ON);
});

// boss reward_encounter SAN value_undercard
$Event(12901722, Default, function(eventFlagId, value, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId));
    GotoIf(L1, value == 216000);
    GotoIf(L1, value == 209000);
    GotoIf(L1, value == 305000);
    GotoIf(L1, value == 305010);
    GotoIf(L1, value == 501000);
    GotoIf(L2, value == 510000);
    GotoIf(L3, value == 251000);
    GotoIf(L1, value == 306000);
    GotoIf(L1, value == 508000);
    GotoIf(L1, value == 509000);
    GotoIf(L1, value == 509010);
    GotoIf(L3, value == 512000);
    EndEvent();
L9:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L8:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L7:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L6:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L5:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L4:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L3:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L2:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(eventFlagId2, ON);
});

// Boss Defeat Processing_2
$Event(12901723, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2, chrEntityId2) {
    if (ThisEventSlot()
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterDead(chrEntityId) || HPRatio(chrEntityId) == 0)
            && (CharacterDead(chrEntityId2) || HPRatio(chrEntityId2) == 0));
    WaitFor((CharacterDead(chrEntityId) && CharacterDead(chrEntityId2)) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(chrEntityId);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (eventFlagId == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(eventFlagId, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            $InitializeEvent(boss_1_offset, 10007800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            $InitializeEvent(boss_2_offset, 10007800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            $InitializeEvent(boss_3_offset, 10007800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            $InitializeEvent(boss_4_offset, 10007800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(eventFlagId, ON);
});

// Boss Defeat Processing_Fat
$Event(12901725, Default, function(chrEntityId, objEntityId, entityId, eventFlagId, objEntityId2, entityId2, chrEntityId2, chrEntityId3) {
    if (ThisEventSlot()
        && !(eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
        && !(eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
        && !(eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
        && !(eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ChangeCharacterEnableState(chrEntityId3, Disabled);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        ForceCharacterDeath(chrEntityId3, false);
        DeactivateObject(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId, true);
        DeleteMapSFX(entityId2, true);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterDead(chrEntityId) || HPRatio(chrEntityId) == 0)
            && (CharacterDead(chrEntityId2) || HPRatio(chrEntityId2) == 0)
            && (CharacterDead(chrEntityId3) || HPRatio(chrEntityId3) == 0));
    WaitFor(
        (CharacterDead(chrEntityId) && CharacterDead(chrEntityId2) && CharacterDead(chrEntityId3))
            || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled); // boss defeated
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    DeleteMapSFX(entityId, true);
    DeleteMapSFX(entityId2, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(chrEntityId);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (eventFlagId == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (eventFlagId == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(eventFlagId, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            $InitializeEvent(boss_1_offset, 10007800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            $InitializeEvent(boss_2_offset, 10007800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            $InitializeEvent(boss_3_offset, 10007800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            $InitializeEvent(boss_4_offset, 10007800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(eventFlagId, ON);
});

// Boss room exit open_opening
$Event(12901727, Default, function(eventFlagId, objEntityId) {
    if (ThisEventSlot()) {
        DeactivateObject(objEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    DeactivateObject(objEntityId, Disabled);
});

// Boss room exit open_after 3F
$Event(12901728, Default, function(eventFlagId, objEntityId) {
    if (ThisEventSlot()) {
        DeactivateObject(objEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(eventFlagId) && EventFlag(92905360) && !EventFlag(12907220));
    WaitFixedTimeSeconds(3);
L0:
    ForceAnimationPlayback(objEntityId, 0, false, true, false);
    SetEventFlag(12907220, ON);
    DeactivateObject(objEntityId, Disabled);
});

// Boss reward_defeat item_undercard
$Event(12901730, Default, function(eventFlagId, itemLotId, itemLotId2, itemLotId3, itemLotId4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (!EventFlag(92905370)) {
            AwardItemLot(itemLotId);
            EndEvent();
        }
        AwardItemLot(itemLotId2);
        EndEvent();
    }
L0:
    if (!EventFlag(92905370)) {
        AwardItemLot(itemLotId3);
        EndEvent();
    }
    AwardItemLot(itemLotId4);
    EndEvent();
});

// Disable Zakobos
$Event(12901754, Default, function(chrEntityId) {
    WaitFor(
        !(EventFlag(boss_1_defeat+1013)
            || EventFlag(boss_2_defeat+1023)
            || EventFlag(boss_3_defeat+1033)
            || EventFlag(boss_4_defeat+1043)));
    if (ThisEventSlot()) {
        SetCharacterBackreadState(chrEntityId, true);
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    EndEvent();
});

// Star flower death animation
$Event(12904000, Restart, function(chrEntityId, chrEntityId2) {
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    WaitFor(HPRatio(chrEntityId) <= 0 && CharacterHasEventMessage(chrEntityId, 10));
    IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, chrEntityId, 90);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    ForceAnimationPlayback(chrEntityId2, 2250, true, false, false);
    WaitFixedTimeFrames(5);
    ForceCharacterTreasure(chrEntityId2);
    WaitFixedTimeFrames(135);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
});

// Forced change of star flower damage animation canceled
$Event(12904013, Restart, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5676));
    ClearSpEffect(chrEntityId, 5333);
});

// Bride alter ego initial setting
$Event(12904026, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterHPBarDisplay(chrEntityId2, Disabled);
    SetCharacterImmortality(chrEntityId, Enabled);
    SetCharacterImmortality(chrEntityId2, Enabled);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
});

// Defeating the Bride and Accompanied by a Bride
$Event(12904027, Default, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ChangeCharacterEnableState(chrEntityId3, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(chrEntityId) == 0);
    ForceCharacterDeath(chrEntityId2, false);
    ForceCharacterDeath(chrEntityId3, false);
});

// Bride_heat up
$Event(12904028, Default, function(chrEntityId, chrEntityId2, chrEntityId3, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.4);
    RequestCharacterAICommand(chrEntityId2, 100, 1);
    RequestCharacterAICommand(chrEntityId3, 100, 1);
});

// Bride's Warp Destination Selection_Large Category
$Event(12904029, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId4));
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    IncrementEventValue(baseEventFlagId, 10, 9);
    flag = EventValue(baseEventFlagId, 10) == 1
        || EventValue(baseEventFlagId, 10) == 3
        || EventValue(baseEventFlagId, 10) == 7;
    flag2 = EventValue(baseEventFlagId, 10) == 2
        || EventValue(baseEventFlagId, 10) == 5
        || EventValue(baseEventFlagId, 10) == 9;
    flag3 = EventValue(baseEventFlagId, 10) == 4
        || EventValue(baseEventFlagId, 10) == 6
        || EventValue(baseEventFlagId, 10) == 8;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(eventFlagId, ON);
    Goto(L3);
L1:
    SetEventFlag(eventFlagId2, ON);
    Goto(L3);
L2:
    SetEventFlag(eventFlagId3, ON);
L3:
    if (EventValue(baseEventFlagId, 10) == 9) {
        ClearEventValue(baseEventFlagId, 10);
    }
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 90));
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// Bride's warp destination selection_small category
$Event(12904030, Default, function(chrEntityId, eventFlagId, baseEventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(eventFlagId5));
    WaitFor(EventFlag(eventFlagId));
    IncrementEventValue(baseEventFlagId, 10, 12);
    flag = EventValue(baseEventFlagId, 10) == 4
        || EventValue(baseEventFlagId, 10) == 6
        || EventValue(baseEventFlagId, 10) == 8
        || EventValue(baseEventFlagId, 10) == 11;
    flag2 = EventValue(baseEventFlagId, 10) == 1
        || EventValue(baseEventFlagId, 10) == 5
        || EventValue(baseEventFlagId, 10) == 9
        || EventValue(baseEventFlagId, 10) == 12;
    flag3 = EventValue(baseEventFlagId, 10) == 2
        || EventValue(baseEventFlagId, 10) == 3
        || EventValue(baseEventFlagId, 10) == 7
        || EventValue(baseEventFlagId, 10) == 10;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(eventFlagId2, ON);
    Goto(L3);
L1:
    SetEventFlag(eventFlagId3, ON);
    Goto(L3);
L2:
    SetEventFlag(eventFlagId4, ON);
L3:
    if (EventValue(baseEventFlagId, 10) == 12) {
        ClearEventValue(baseEventFlagId, 10);
    }
    WaitFor(CharacterHasEventMessage(chrEntityId, 90));
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId3, OFF);
    SetEventFlag(eventFlagId4, OFF);
    RestartEvent();
});

// Bride performs warp
$Event(12904033, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, entityId, entityId2, entityId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId4));
    flagSp = EventFlag(eventFlagId) && !CharacterHasSpEffect(chrEntityId, 5516);
    flagSp2 = EventFlag(eventFlagId2) && !CharacterHasSpEffect(chrEntityId, 5516);
    flagSp3 = EventFlag(eventFlagId3) && !CharacterHasSpEffect(chrEntityId, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId2, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId3, -1);
L3:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3021, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// Bride executes warp_third stage
$Event(12904036, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, entityId, entityId2, entityId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId4));
    flagSp = EventFlag(eventFlagId) && CharacterHasSpEffect(chrEntityId, 5516);
    flagSp2 = EventFlag(eventFlagId2) && CharacterHasSpEffect(chrEntityId, 5516);
    flagSp3 = EventFlag(eventFlagId3) && CharacterHasSpEffect(chrEntityId, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId2, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId3, -1);
L3:
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3022, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// Bride alter ego appears
$Event(12904039, Default, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId2, chrEntityId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId4));
    WaitFor(CharacterHasEventMessage(chrEntityId3, 90) && EventFlag(eventFlagId3));
    SetSpEffect(chrEntityId, 5610, false);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 3021, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, ON);
    WaitFor(EventFlag(eventFlagId));
    RestartEvent();
});

// Destroyed Bride alter ego
$Event(12904040, Default, function(chrEntityId, eventFlagId, eventFlagId2, chrEntityId2, chrEntityId3, eventFlagId3) {
    EndIf(EventFlag(eventFlagId3));
    dmg = CharacterDamagedBy(chrEntityId, 10000);
    WaitFor(
        dmg
            || (CharacterHasEventMessage(chrEntityId3, 80) && EventFlag(eventFlagId2))
            || (CharacterHasSpEffect(chrEntityId3, 5517) && EventFlag(eventFlagId2)));
    if (dmg.Passed) {
        ForceAnimationPlayback(chrEntityId, 7010, false, true, false);
    } else {
L0:
        ForceAnimationPlayback(chrEntityId, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId, ON);
    RestartEvent();
});

// Fetal dummy character connection_XX
$Event(12904041, Restart, function(hitEntityId, chrEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(hitEntityId));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(hitEntityId) <= 0) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Character, hitEntityId, 6, hitEntityId);
    RestartEvent();
});

// State notification from bride to dummy character_XX
$Event(12904042, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    RequestCharacterAICommand(chrEntityId2, 100, 0);
    WaitFor(CharacterHasEventMessage(chrEntityId, 90));
    RequestCharacterAICommand(chrEntityId2, -1, 0);
    RestartEvent();
});

// falling enemy_XX
$Event(12904043, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 9000, true, false, false);
        SetCharacterMaphits(chrEntityId, true);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(
            (InArea(10000, areaEntityId) || CharacterDamagedBy(chrEntityId, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
    }
L0:
    CreatePlaylog(734);
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 1500, false, true, false);
    RequestCharacterAIReplan(chrEntityId);
});

// blood licking_XX
$Event(12904070, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    if (!EventFlag(eventFlagId)) {
        WaitFor(CharacterHasEventMessage(chrEntityId, 70));
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 230, chrEntityId);
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(!CharacterInsideDrawGroup(chrEntityId2));
    CreatePlaylog(768);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    RequestCharacterAIReplan(chrEntityId2);
});

// Simultaneous Summon Warp_XX
$Event(12904156, Restart, function(chrEntityId, chrEntityId2, dummypolyId) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, chrEntityId2, dummypolyId, chrEntityId2);
    WaitFor(!CharacterHasEventMessage(chrEntityId, 100));
    WaitFor(CharacterDead(chrEntityId));
    SetSpEffectAndUnknown200455(chrEntityId, 5751, false);
    RestartEvent();
});

// Simultaneous Summon Entourage Count_XX
$Event(12904183, Restart, function(chrEntityId, baseEventFlagId) {
    WaitFor(CharacterDead(chrEntityId));
    IncrementEventValue(baseEventFlagId, 3, 6);
    WaitFor(!CharacterDead(chrEntityId));
    EventValueOperation(baseEventFlagId, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// Simultaneous Summon Action Request_XX
$Event(12904210, Restart, function(eventFlagId, chrEntityId, baseEventFlagId, eventFlagId2) {
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId));
        RequestCharacterAICommand(chrEntityId, 100, 0);
        RequestCharacterAIReplan(chrEntityId);
        SetEventFlag(eventFlagId2, ON);
        WaitFor(ElapsedSeconds(2));
        RequestCharacterAICommand(chrEntityId, -1, 0);
    }
L0:
    WaitFor(EventFlag(eventFlagId) && EventValue(baseEventFlagId, 3) >= 3);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// Simultaneous Summon Generator Switch_XX
$Event(12904216, Restart, function(eventFlagId, chrEntityId, generatorEntityId) {
    DeactivateGenerator(generatorEntityId, Disabled);
    WaitFor(EventFlag(eventFlagId) && CharacterHasEventMessage(chrEntityId, 10));
    DeactivateGenerator(generatorEntityId, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(eventFlagId) || !CharacterHasEventMessage(chrEntityId, 10));
    RestartEvent();
});

// Simultaneous summon possible flag_XX
$Event(12904222, Restart, function(eventFlagId, chrEntityId) {
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat))
            && !CharacterDead(chrEntityId)
            && CharacterBackreadStatus(chrEntityId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Normal)
            || CharacterDead(chrEntityId)
            || !CharacterBackreadStatus(chrEntityId));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Special generated entourage count_XX
$Event(12904228, Restart, function(chrEntityId, baseEventFlagId) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    IncrementEventValue(baseEventFlagId, 3, 6);
    WaitFor(CharacterDead(chrEntityId));
    EventValueOperation(baseEventFlagId, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// Special generated action request_XX
$Event(12904274, Restart, function(eventFlagId, chrEntityId, baseEventFlagId) {
L0:
    WaitFor(EventFlag(eventFlagId) && EventValue(baseEventFlagId, 3) <= 2);
    ForceAnimationPlayback(chrEntityId, 3011, false, false, false);
    RequestCharacterAICommand(chrEntityId, 10, 2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(chrEntityId, -1, 2);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// special generation generator switch_XX
$Event(12904285, Restart, function(eventFlagId, chrEntityId, generatorEntityId, generatorEntityId2, generatorEntityId3) {
    DeactivateGenerator(generatorEntityId, Disabled);
    DeactivateGenerator(generatorEntityId2, Disabled);
    DeactivateGenerator(generatorEntityId3, Disabled);
    WaitFor(EventFlag(eventFlagId) && CharacterHasEventMessage(chrEntityId, 20));
    DeactivateGenerator(generatorEntityId, Enabled);
    DeactivateGenerator(generatorEntityId2, Enabled);
    DeactivateGenerator(generatorEntityId3, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(eventFlagId) || !CharacterHasEventMessage(chrEntityId, 20));
    RestartEvent();
});

// special generation possible flag _XX
$Event(12904326, Restart, function(eventFlagId, chrEntityId) {
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat))
            && !CharacterDead(chrEntityId)
            && CharacterBackreadStatus(chrEntityId));
    SetEventFlag(eventFlagId, ON);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Normal)
            || CharacterDead(chrEntityId)
            || !CharacterBackreadStatus(chrEntityId));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Trap Enemy _XX
$Event(12904337, Restart, function(chrEntityId, objactEventFlag) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(chrEntityId));
    SetCharacterAnimationState(chrEntityId, Disabled);
    SetSpEffect(chrEntityId, 5401, false);
    SetCharacterAIState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(ObjActEventFlag(objactEventFlag));
    CreatePlaylog(806);
    WaitFixedTimeSeconds(3);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SetCharacterAnimationState(chrEntityId, Enabled);
    SetCharacterAIState(chrEntityId, Enabled);
});

// Black Treasure Chest_XX
$Event(12904338, Restart, function(objEntityId, objactEventFlag, chrEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, -1, 0);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    SetCharacterAIState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    obj = ObjActEventFlag(objactEventFlag);
    obj2 = ObjectDestroyed(objEntityId);
    WaitFor(obj || obj2);
    SetEventFlag(eventFlagId, ON);
    CreatePlaylog(806);
    if (!obj2.Passed) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFixedTimeFrames(2);
    ForceAnimationPlayback(chrEntityId, 3020, false, false, false);
    WaitFor(ElapsedFrames(40) || HasDamageType(chrEntityId, 10000, DamageType.Unspecified));
    SetCharacterAIState(chrEntityId, Enabled);
});

// rock rumbling
$Event(12904342, Default, function(objEntityId, eventFlagId, objEntityId2, eventFlagId2, entityId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId, objEntityId, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(8.5);
    DeleteObjectEvent(eventFlagId);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId2, 10, false, false, false);
    WaitFixedTimeFrames(1);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId, objEntityId, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(eventFlagId2);
    DeactivateObject(objEntityId2, Disabled);
    RestartEvent();
});

// progenitor beast bug winner
$Event(12904343, Default, function(chrEntityId) {
    ChangeCharacterHitmask(chrEntityId, 0, ON);
});

// Kin of Death and Darkness_Fear Torch_XX
$Event(12904345, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, chrEntityId, 9));
    ForceAnimationPlayback(chrEntityId, 7007, false, false, false);
    RequestCharacterAICommand(chrEntityId, 10, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(!CharacterHasSpEffect(10000, 404) || ElapsedSeconds(10));
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
});

// scorpion child_XX
$Event(12904361, Default, function(chrEntityId, chrEntityId2) {
    if (ThisEventSlot()) {
        ChangeCharacterDispmask(chrEntityId, 0, OFF);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, 10, NPCPartType.Part1, 30, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 10, 59, 59);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    WaitFor(NPCPartHP(chrEntityId, 10) <= 0 || HPRatio(chrEntityId) <= 0);
    SetCharacterAIId(chrEntityId, 121001);
    SetCharacterGravity(chrEntityId2, Disabled);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 40, chrEntityId);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    ChangeCharacterDispmask(chrEntityId, 0, OFF);
    ForceAnimationPlayback(chrEntityId2, 8100, false, true, false);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
});

// Hanging Treasure Corpse_XX
$Event(12904369, Default, function(objEntityId, objEntityId2, eventFlagId, animationId, animationId2, animationId3) {
    if (EventFlag(eventFlagId)) {
        ReproduceObjectDestruction(objEntityId, 1);
        ForceAnimationPlayback(objEntityId2, animationId, false, false, false);
        SetObjectTreasureState(objEntityId2, Enabled);
        EndEvent();
    }
L0:
    CreateObjectfollowingSFX(objEntityId2, 90, 900201);
    ForceAnimationPlayback(objEntityId2, animationId2, false, false, false);
    WaitFor(ObjectDestroyed(objEntityId));
    ForceAnimationPlayback(objEntityId2, animationId3, false, true, false);
    DeleteObjectfollowingSFX(objEntityId2, true);
    SetObjectTreasureState(objEntityId2, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// Storm Beast_Obstacle Jumping Attack_XX
$Event(12904373, Restart, function(chrEntityId, areaEntityId, targetDistance, targetDistance2, animationId) {
    WaitFor(InArea(chrEntityId, areaEntityId));
    area = !EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
        && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance2);
    area2 = EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance)
        || !EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance2);
    area3 = area || area2;
    area4 = area2;
    WaitFor(area3);
    if (!area4.Passed) {
        SetCharacterGravity(chrEntityId, Disabled);
        SetCharacterMaphits(chrEntityId, true);
        ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
        SetCharacterGravity(chrEntityId, Enabled);
        SetCharacterMaphits(chrEntityId, false);
        WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    }
    RestartEvent();
});

// cannon fire_XX
$Event(12904374, Default, function(objactEventFlag, chrEntityId, objEntityId) {
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeSeconds(2.3);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Object, objEntityId, 200);
    SetSpEffect(chrEntityId, 5580, false);
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    ClearSpEffect(chrEntityId, 5580);
    WaitFixedTimeFrames(30);
    SetObjactState(objEntityId, 9800, Enabled);
    RestartEvent();
});

// Request the enemy to activate the cannon ObjAct_XX
$Event(12904382, Default, function(chrEntityId, objEntityId, targetDistance, areaEntityId, areaEntityId2) {
    chrArea = (CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Combat))
        && EntityInRadiusOfEntity(chrEntityId, objEntityId, targetDistance)
        && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
    chrArea2 = !chrArea;
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RequestObjactActivation(objEntityId, 9800, -1, chrEntityId);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Guillotine_animation control
$Event(12904390, Restart, function(entityId, entityId2, areaEntityId, areaEntityId2, entityId3, entityId4, eventFlagId) {
    ForceAnimationPlayback(entityId, 0, false, false, false);
    ForceAnimationPlayback(entityId2, 0, false, false, false);
    WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
    CreatePlaylog(844);
    PlaySE(entityId3, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId3, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, entityId3, 101, 150005);
    PlaySE(entityId4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId4, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, entityId4, 101, 150005);
    WaitFixedTimeSeconds(0.1);
    SetEventFlag(eventFlagId, ON);
    ForceAnimationPlayback(entityId2, 1, false, false, false);
    ForceAnimationPlayback(entityId, 1, false, true, false);
    ForceAnimationPlayback(entityId2, 10, false, false, false);
    ForceAnimationPlayback(entityId, 10, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(entityId2, 11, false, false, false);
    ForceAnimationPlayback(entityId, 11, false, true, false);
    WaitFor(!InArea(10000, areaEntityId));
    PlaySE(entityId3, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId3, 1, false, false, false);
    PlaySE(entityId4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId4, 1, false, false, false);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Guillotine_Damage control
$Event(12904398, Restart, function(objEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId);
    if (EventFlag(92905100)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6250, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905101)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6251, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905102)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6252, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905103)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6253, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905104)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6254, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905105)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6255, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905106)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6256, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905107)) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 6257, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(eventFlagId2, objEntityId, 100, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId3, objEntityId, 101, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(eventFlagId4, objEntityId, 102, 5041, DamageTargetType.Character, 0.8, 1, 0);
    }
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, eventFlagId);
    RestartEvent();
});

// spawn spider control
$Event(12904406, Restart, function(chrEntityId, aiId, aiId2) {
    EndEvent();
    WaitFor(EntityInRadiusOfEntity(chrEntityId, 10000, 35));
    SetCharacterAIId(chrEntityId, aiId);
    WaitFor(!EntityInRadiusOfEntity(chrEntityId, 10000, 55));
    SetCharacterAIId(chrEntityId, aiId2);
    RestartEvent();
});

// spider ceiling wait
$Event(12904410, Restart, function(chrEntityId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 9000, true, false, false);
        SetCharacterMaphits(chrEntityId, true);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(
            (CharacterAIState(chrEntityId, AIStateType.Alert)
                || CharacterDamagedBy(chrEntityId, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(880);
        WaitFixedTimeSeconds(0.3);
    }
L0:
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 9060, false, true, false);
    RequestCharacterAIReplan(chrEntityId);
});

// Spider ceiling standby_Use area (for upper room system)
$Event(12904426, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
        SetCharacterMaphits(chrEntityId, true);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(
            (InArea(10000, areaEntityId) || CharacterDamagedBy(chrEntityId, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 7001, false, true, false);
    RequestCharacterAIReplan(chrEntityId);
});

// Spider Ceiling Wait_Area Use
$Event(12904466, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, 9000, true, false, false);
        SetCharacterMaphits(chrEntityId, true);
        SetCharacterGravity(chrEntityId, Disabled);
        WaitFor(
            (InArea(10000, areaEntityId) || CharacterDamagedBy(chrEntityId, 10000))
                && (CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 9060, false, true, false);
    RequestCharacterAIReplan(chrEntityId);
});

// Enable companion character
$Event(12904477, Restart, function(chrEntityId, chrEntityId2) {
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    ChangeCharacterEnableState(chrEntityId2, Enabled);
});

// Disable attached characters
$Event(12904487, Restart, function(chrEntityId, chrEntityId2) {
    SetCharacterGravity(chrEntityId2, Disabled);
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(chrEntityId2, 2200, false, true, false);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
});

// Larvae Flying Fox_Statue Waiting
$Event(12904501, Restart, function(chrEntityId, animationId) {
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId, AIStateType.Alert));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
});

// Fresh Golem Part Damage_XX
$Event(12904506, Default, function(chrEntityId, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP, animationId, spEffectId, spEffectId2) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 60, 60);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetSpEffect(chrEntityId, spEffectId, true);
    ClearSpEffect(chrEntityId, spEffectId2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    SetSpEffect(chrEntityId, spEffectId2, true);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Fresh golem blood bean part destruction_XX
$Event(12904540, Default, function(chrEntityId, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP, animationId, bitNumber, bitNumber2) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 60, 60);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
    SetSpEffect(chrEntityId, 5667, true);
    RequestCharacterAIReplan(chrEntityId);
});

// Fresh Golem Unnecessary Blood Bead Ragdoll Mask_XX
$Event(12904544, Default, function(chrEntityId, bitNumber) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    WaitFixedTimeSeconds(3);
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
});

// Enemies popping out of coffins_XX
$Event(12904568, Restart, function(chrEntityId, objEntityId) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId, Disabled);
    area = EntityInRadiusOfEntity(chrEntityId, 10000, 4);
    WaitFor(
        (area || ObjectDestroyed(objEntityId))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(objEntityId, 1);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, -1, 900257);
    PlaySE(objEntityId, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(objEntityId, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(chrEntityId, 10000, 3024, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(chrEntityId, Enabled);
});

// popping enemy_XX
$Event(12904579, Restart, function(chrEntityId, objEntityId, chrEntityId2, playAnimationId, targetDistance) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    SetCharacterAIState(chrEntityId, Disabled);
    area = EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance);
    WaitFor(
        (area || ObjectDestroyed(objEntityId))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(objEntityId, 1);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, -1, 900257);
    PlaySE(objEntityId, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(objEntityId, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(chrEntityId, Enabled);
});

// Enemies popping out in the area_XX
$Event(12904584, Restart, function(chrEntityId, objEntityId, entityId, playAnimationId, areaEntityId) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId, Disabled);
    area = InArea(10000, areaEntityId);
    WaitFor(
        (area || ObjectDestroyed(objEntityId))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(1008);
    }
    RequestObjectDestruction(objEntityId, 1);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, -1, 900257);
    PlaySE(objEntityId, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(objEntityId, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, entityId, 101);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(chrEntityId, 10000, playAnimationId, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(chrEntityId, Enabled);
});

// Enemy starts moving to designated point_XX
$Event(12904594, Restart, function(chrEntityId, areaEntityId, areaEntityId2, commandId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, areaEntityId));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Enemy has moved to designated point_XX
$Event(12904595, Restart, function(chrEntityId, areaEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            InArea(chrEntityId, areaEntityId)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, chrEntityId, 3))
                || HasDamageType(chrEntityId, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Enemy stops moving to designated point_XX
$Event(12904596, Restart, function(chrEntityId, commandId, eventFlagId) {
    GotoIf(L0, EventFlag(eventFlagId));
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    flag = EventFlag(eventFlagId);
    WaitFor(chr || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Normal);
    flag2 = EventFlag(eventFlagId);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(chrEntityId, commandId, 0);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Monster Room_XX
$Event(12904597, Restart, function(chrEntityId, areaEntityId, entityId, sfxId) {
    flagChrArea |= ThisEventSlot() || CharacterDead(chrEntityId);
    if (flagChrArea) {
        ChangeCharacterEnableState(chrEntityId, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(chrEntityId, Disabled);
    flagChrArea |= InArea(10000, areaEntityId);
    WaitFor(flagChrArea);
    CreatePlaylog(1052);
    PlaySE(entityId, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, entityId, -1, 929200);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 203, sfxId);
});

// Summon NPC_Invasion_XX
$Event(12904634, Restart, function(npcEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, timeSeconds, timeSeconds2) {
    SetCharacterDefaultBackreadState(npcEntityId, Disabled);
    ChangeCharacterEnableState(npcEntityId, Disabled);
    EndEvent();
    ChangeCharacterEnableState(npcEntityId, Disabled);
    WaitFor(IsOnline());
    Goto(S0);
    EndIf(EventFlag(eventFlagId3));
S0:
    EndIf(EventFlag(eventFlagId2));
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetSpEffect(npcEntityId, 9025, false);
    SetNetworkUpdateAuthority(npcEntityId, AuthorityLevel.Forced);
    WaitFor(CharacterHasSpEffect(10000, 9020) && EventFlag(eventFlagId4));
    WaitFixedTimeSeconds(timeSeconds);
    SummonNPC(SingleplayerSummonSignType.ScriptedInvasion, npcEntityId, 0, eventFlagId, eventFlagId2);
    WaitFixedTimeSeconds(timeSeconds2);
});

// The dog barks to let others know _XX
$Event(12904643, Restart, function(chrEntityId) {
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Combat);
    area = EntityInRadiusOfEntity(chrEntityId, 10000, 8.8);
    hp = HPRatio(chrEntityId) == 1;
    chr3 = chr || chr2;
    WaitFor(chr3 && area && hp);
    if (!EntityInRadiusOfEntity(chrEntityId, 10000, 5.8)) {
        ForceAnimationPlayback(chrEntityId, 3010, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, chrEntityId, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
        ShootBullet(2900000, chrEntityId, 205, 6051, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
    }
    ShootBullet(2900000, chrEntityId, 205, 6053, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// Enhanced Possession_XX
$Event(12904677, Restart, function(chrEntityId, chrEntityId2, animationId) {
    WaitFor(CharacterHasSpEffect(chrEntityId2, 5622));
    WaitFixedTimeFrames(5);
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, false);
    WaitFixedTimeFrames(2);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    CreatePlaylog(1096);
});

// HP half curse
$Event(12904733, Restart, function(areaEntityId, objEntityId) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    SetSpEffect(10000, 71, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 7, 850);
    WaitFor(ObjectDestroyed(objEntityId));
    ClearSpEffect(10000, 71);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 200, 851);
});

// Surprise enemy activation
$Event(12904736, Restart, function(chrEntityId, areaEntityId, targetDistance) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    area = InArea(10000, areaEntityId);
    WaitFor(
        (area
            || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)
            || CharacterDamagedBy(10000, chrEntityId))
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    if (area.Passed) {
        ForceAnimationPlayback(chrEntityId, 3007, false, false, false);
        WaitFixedTimeFrames(50);
        RotateCharacter(chrEntityId, 10000, 3006, false);
        SetCharacterAIState(chrEntityId, Enabled);
        RequestCharacterAIReplan(chrEntityId);
        EndEvent();
    }
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// ring the bell
$Event(12904737, Restart, function(objEntityId) {
    SetObjectInvulnerability(objEntityId, Enabled);
    WaitFor(ActionButtonInArea(2400900, objEntityId) || ObjectHitBy(objEntityId, 10000));
    CreatePlaylog(1132);
    ForceAnimationPlayback(objEntityId, 1, false, false, false);
    PlaySE(objEntityId, SoundType.aEnvironmentalSound, 24011006);
    ShootBullet(2900000, objEntityId, 101, 6063, 270, 0, 0);
    WaitFixedTimeFrames(10);
    ShootBullet(2900000, objEntityId, 101, 6055, 270, 0, 0);
    WaitFixedTimeFrames(90);
    ShootBullet(2900000, objEntityId, 101, 6059, 270, 0, 0);
    WaitFixedTimeFrames(80);
    ShootBullet(2900000, objEntityId, 101, 6062, 270, 0, 0);
    RestartEvent();
});

// pause patrol_XX
$Event(12904754, Default, function(chrEntityId, entityId, entityId2, areaEntityId) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal) && InArea(chrEntityId, areaEntityId));
    ForceAnimationPlayback(chrEntityId, 0, false, false, false);
    ForceAnimationPlayback(entityId, 0, false, false, false);
    ForceAnimationPlayback(entityId2, 0, false, true, false);
    WaitFor(!InArea(chrEntityId, areaEntityId));
    RestartEvent();
});

// Monster Room_Return to Nest_XXX
$Event(12904755, Restart, function(chrEntityId, areaEntityId, entityId, sfxId, areaEntityId2) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(chrEntityId, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(1170);
    PlaySE(entityId, SoundType.oObject, 990100001);
    ForceAnimationPlayback(entityId, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, entityId, -1, 929200);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 203, sfxId);
    WaitFixedTimeSeconds(1);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    SetCharacterHome(chrEntityId, areaEntityId2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(InArea(chrEntityId, areaEntityId2));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Ambusher fall_XXX
$Event(12904759, Default, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    chr = CharacterAIState(chrEntityId, AIStateType.Recognition)
        || CharacterAIState(chrEntityId, AIStateType.Alert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    WaitFor(
        (InArea(10000, areaEntityId) || chr)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    EndIf(chr.Passed);
    CreatePlaylog(1224);
    ForceAnimationPlayback(chrEntityId, 3024, false, true, false);
});

// Throw into gunpowder pot_XX
$Event(12904772, Default, function(areaEntityId, objEntityId, chrEntityId, chrEntityId2) {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, areaEntityId)
            && !ObjectDestroyed(objEntityId)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    EndEvent();
});

// Boss Rush_Host enters boss room
$Event(12904773, Default, function(entityId, areaEntityId, eventFlagId) {
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(2900010, areaEntityId));
    RotateCharacter(10000, entityId, 101130, false);
    RestartEvent();
});

// Boss Rush_Host has entered the boss room
$Event(12904774, Default, function(eventFlagId, areaEntityId, eventFlagId2) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(eventFlagId) && InArea(10000, areaEntityId));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(eventFlagId2, ON);
});

// Boss Rush_Client enters boss room
$Event(12904775, Default, function(entityId, areaEntityId, eventFlagId, eventFlagId2) {
    WaitFor(
        !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, areaEntityId));
    RotateCharacter(10000, entityId, 101130, false);
    RestartEvent();
});

// Boss Rush_Boss starts moving
$Event(12904776, Default, function(chrEntityId, areaEntityId, entityId, nameId, eventFlagId, eventFlagId2, sfxId, objEntityId) {
    DeleteMapSFX(entityId, true);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    if (EventFlag(eventFlagId2)) {
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(1260);
    StartTimeMeasurement(2900020, 1276, Enabled);
    DeactivateObject(objEntityId, Enabled);
    SpawnMapSFX(entityId);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, sfxId);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    SetEventFlag(eventFlagId, ON);
});

// Boss Rush_Boss BGM ON
$Event(12904777, Default, function(eventFlagId, eventFlagId2, areaEntityId, entityId, entityId2, chrEntityId) {
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2) && InArea(10000, areaEntityId));
    EnableBossMapSound(entityId, Enabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    EnableBossMapSound(entityId, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(entityId2, Enabled);
});

// Boss Rush_Boss Camera ON
$Event(12904778, Default, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    cond &= HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, 5.5);
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 1);
    cond &= HPRatio(chrEntityId) > 0;
    WaitFor(!EntityInRadiusOfEntity(10000, chrEntityId, 6));
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Rush_Boss BGM OFF
$Event(12904779, Default, function(eventFlagId, entityId, entityId2) {
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Heteromorphic beast fears torches_XX
$Event(12904780, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, chrEntityId, 4));
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(!CharacterHasSpEffect(10000, 404));
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Silver beast's relative parasite outbreak_XX
$Event(12904852, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    WaitFixedTimeFrames(5);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, 30, chrEntityId);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    ForceAnimationPlayback(chrEntityId2, 7000, false, false, false);
    RequestCharacterAIReplan(chrEntityId3);
});

// Traplord porting_Boss darkness magic management
$Event(12904858, Restart, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(10000, 5630));
    SetSpEffect(chrEntityId, 5631, false);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    WaitFor(!CharacterHasSpEffect(10000, 5630));
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RestartEvent();
});

// Traplord transplant_Boss random warp destination selection
$Event(12904859, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RandomlySetEventFlagInRange(eventFlagId, eventFlagId2, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Traplord Transplant_Boss Random Warp
$Event(12904860, Restart, function(chrEntityId, eventFlagId, areaEntityId, entityId) {
    SetEventFlag(eventFlagId, OFF);
    WaitFor(EventFlag(eventFlagId));
    if (!InArea(chrEntityId, areaEntityId)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, 0);
    } else {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Area, entityId, -1, 0);
    }
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    RequestAnimationPlayback(chrEntityId, 7000, false, true);
    RestartEvent();
});

// Traplord transplant_Second boss appears secretly
$Event(12904861, Restart, function(chrEntityId, entityId) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(CharacterHasSpEffect(10000, 5630));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
});

// Traplord transplant_Death after the second one by defeating the boss
$Event(12904862, Default, function(chrEntityId, chrEntityId2, chrEntityId3) {
    WaitFor(HPRatio(chrEntityId) <= 0);
    ForceCharacterDeath(chrEntityId2, false);
    ForceCharacterDeath(chrEntityId3, false);
});

// Traplord transplant_Boss starts moving
$Event(12904863, Default, function(chrEntityId, chrEntityId2, chrEntityId3, areaEntityId, eventFlagId, eventFlagId2, nameId) {
    SetCharacterAIState(chrEntityId3, Disabled);
    SetCharacterGravity(chrEntityId3, Disabled);
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId2, Disabled);
    if (EventFlag(eventFlagId2)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ChangeCharacterEnableState(chrEntityId3, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterHPBarDisplay(chrEntityId2, Disabled);
    CreateReferredDamagePair(chrEntityId, chrEntityId3);
    CreateReferredDamagePair(chrEntityId2, chrEntityId3);
    DisplayBossHealthBar(Enabled, chrEntityId3, 0, nameId);
    CreatePlaylog(1260);
    if (eventFlagId2 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (eventFlagId2 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (eventFlagId2 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (eventFlagId2 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    SetEventFlag(eventFlagId, ON);
});

// Traplord transplant_Boss starts moving 2
$Event(12904864, Default, function(eventFlagId, objEntityId, entityId, chrEntityId, chrEntityId2, chrEntityId3, sfxId, eventFlagId2) {
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(EventFlag(eventFlagId));
    DeactivateObject(objEntityId, Enabled);
    SpawnMapSFX(entityId);
    SetEventFlag(eventFlagId, OFF);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, sfxId);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ActivateMultiplayerdependantBuffs(chrEntityId);
    ActivateMultiplayerdependantBuffs(chrEntityId2);
    ActivateMultiplayerdependantBuffs(chrEntityId3);
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterAIState(chrEntityId2, Enabled);
    SetEventFlag(eventFlagId2, ON);
});

// Idiot Spider_Spider Child Replenishment
$Event(12904865, Default, function(chrEntityId, targetHPRatio, chrEntityId2) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(CharacterHasEventMessage(chrEntityId2, 20) && HPRatio(chrEntityId2) <= targetHPRatio);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// Idiot Spider_Child Spider Forced Death
$Event(12904866, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    if (EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId));
    ForceCharacterDeath(chrEntityId2, true);
});

// Idiot spider_baby spider starts to move
$Event(12904867, Default, function(chrEntityId, areaEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    WaitFor(InArea(10000, areaEntityId));
    WaitFixedTimeFrames(45);
    SetCharacterAIState(chrEntityId, Enabled);
});

// Idiot Spider_Heat Up
$Event(12904868, Default, function(chrEntityId, entityId, entityId2) {
    WaitFor(HPRatio(chrEntityId) <= 0.75);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3021, false, false, false);
    RequestCharacterAICommand(chrEntityId, 101, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(HPRatio(chrEntityId) <= 0.5);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId2, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3021, false, false, false);
    RequestCharacterAICommand(chrEntityId, 111, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Idiot Spider_Left body injury
$Event(12904869, Default, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, 2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 2, 59, 59);
    hp = NPCPartHP(chrEntityId, 2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    chr = CharacterHasEventMessage(chrEntityId, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
        SetNPCPartHP(chrEntityId, 2, 100, true);
        hp3 = NPCPartHP(chrEntityId, 2) <= 0;
        hp4 = HPRatio(chrEntityId) <= 0;
        chr2 = CharacterHasEventMessage(chrEntityId, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
            ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
            SetNPCPartHP(chrEntityId, 2, 50, true);
            hp5 = NPCPartHP(chrEntityId, 2) <= 0;
            hp6 = HPRatio(chrEntityId) <= 0;
            chr3 = CharacterHasEventMessage(chrEntityId, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
                ForceAnimationPlayback(chrEntityId, 7002, false, false, false);
                CreateNPCPart(chrEntityId, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(chrEntityId, 2, 60, 60);
                RequestCharacterAIReplan(chrEntityId);
                WaitFor(CharacterHasEventMessage(chrEntityId, 20));
            }
        }
    }
L0:
    SetNPCPartHP(chrEntityId, 2, -1, true);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot Spider_Right side injury
$Event(12904870, Default, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, 3, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 3, 59, 59);
    hp = NPCPartHP(chrEntityId, 3) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    chr = CharacterHasEventMessage(chrEntityId, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        ForceAnimationPlayback(chrEntityId, 7005, false, false, false);
        SetNPCPartHP(chrEntityId, 3, 100, true);
        hp3 = NPCPartHP(chrEntityId, 3) <= 0;
        hp4 = HPRatio(chrEntityId) <= 0;
        chr2 = CharacterHasEventMessage(chrEntityId, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
            ForceAnimationPlayback(chrEntityId, 7006, false, false, false);
            SetNPCPartHP(chrEntityId, 3, 50, true);
            hp5 = NPCPartHP(chrEntityId, 3) <= 0;
            hp6 = HPRatio(chrEntityId) <= 0;
            chr3 = CharacterHasEventMessage(chrEntityId, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
                ForceAnimationPlayback(chrEntityId, 7007, false, false, false);
                CreateNPCPart(chrEntityId, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(chrEntityId, 3, 60, 60);
                RequestCharacterAIReplan(chrEntityId);
                WaitFor(CharacterHasEventMessage(chrEntityId, 20));
            }
        }
    }
L0:
    SetNPCPartHP(chrEntityId, 3, -1, true);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot spider_head part setting
$Event(12904871, Default, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 1, 61, 61);
});

// Idiot Spider_Initial child spider activation
$Event(12904872, Default, function(chrEntityId, eventFlagId, areaEntityId, sfxId) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    WaitFixedTimeSeconds(2.6);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, sfxId);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// 3 bosses start moving (for fat)
$Event(12904877, Default, function(chrEntityId, areaEntityId, entityId, chrEntityId2, eventFlagId, eventFlagId2, objEntityId, chrEntityId3) {
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId2, Disabled);
    SetCharacterAIState(chrEntityId3, Disabled);
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    if (EventFlag(eventFlagId)) {
        DeactivateObject(objEntityId, Enabled);
        SpawnMapSFX(entityId);
    }
    if (EventFlag(eventFlagId2)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ChangeCharacterEnableState(chrEntityId3, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(1260);
    if (eventFlagId2 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (eventFlagId2 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (eventFlagId2 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (eventFlagId2 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(eventFlagId)) {
        DeactivateObject(objEntityId, Enabled);
        SpawnMapSFX(entityId);
    }
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(chrEntityId, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(chrEntityId, 7501, true);
L4:
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, 304001);
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId2, Enabled);
    DisplayBossHealthBar(Enabled, chrEntityId2, 1, 304002);
    SetCharacterHPBarDisplay(chrEntityId2, Disabled);
    SetCharacterAIState(chrEntityId3, Enabled);
    DisplayBossHealthBar(Enabled, chrEntityId3, 2, 304003);
    SetCharacterHPBarDisplay(chrEntityId3, Disabled);
    SetEventFlag(eventFlagId, ON);
});

// Host enters boss room
$Event(12904878, Default, function(entityId, areaEntityId, eventFlagId, eventFlagId2) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId2);
    WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(2900010, areaEntityId));
    RotateCharacter(10000, entityId, 101130, false);
    RestartEvent();
});

// The host has entered the boss room
$Event(12904879, Default, function(eventFlagId, areaEntityId, eventFlagId2) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(eventFlagId) && InArea(10000, areaEntityId));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(eventFlagId2, ON);
});

// Client enters boss room
$Event(12904880, Default, function(entityId, areaEntityId, eventFlagId, eventFlagId2) {
    WaitFor(
        !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, areaEntityId));
    RotateCharacter(10000, entityId, 101130, false);
    RestartEvent();
});

// Boss starts moving
$Event(12904881, Default, function(chrEntityId, areaEntityId, entityId, nameId, eventFlagId, eventFlagId2, objEntityId) {
    SetCharacterAIState(chrEntityId, Disabled);
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    if (EventFlag(eventFlagId)) {
        DeactivateObject(objEntityId, Enabled);
        SpawnMapSFX(entityId);
    }
    if (EventFlag(eventFlagId2)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId, 7020, true, false, true);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 7020, true, false, true);
    WaitFor(InArea(10000, areaEntityId));
    CreatePlaylog(1260);
    if (eventFlagId2 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (eventFlagId2 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (eventFlagId2 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (eventFlagId2 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(eventFlagId)) {
        DeactivateObject(objEntityId, Enabled);
        SpawnMapSFX(entityId);
    }
    RotateCharacter(chrEntityId, 10000, 7021, false);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(chrEntityId, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(chrEntityId, 7501, true);
L4:
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetEventFlag(eventFlagId, ON);
});

// Boss BGM ON
$Event(12904882, Default, function(eventFlagId, eventFlagId2, areaEntityId, entityId, entityId2, chrEntityId) {
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2) && InArea(10000, areaEntityId));
    EnableBossMapSound(entityId, Enabled);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    EnableBossMapSound(entityId, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(entityId2, Enabled);
});

// Boss camera ON
$Event(12904883, Default, function(chrEntityId, eventFlagId) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, 5.5));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(chrEntityId) > 0 && !EntityInRadiusOfEntity(10000, chrEntityId, 6));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss BGM OFF
$Event(12904886, Default, function(eventFlagId, entityId, entityId2) {
    EndIf(EventFlag(eventFlagId));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(eventFlagId));
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Multiple bosses appear_XX
$Event(12904887, Default, function(chrEntityId, chrEntityId2, eventFlagId, entityId, nameId, targetHPRatio) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFor(EventFlag(eventFlagId) && HPRatio(chrEntityId2) <= targetHPRatio);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Character, chrEntityId2, -1);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 203, 929203);
});

// Boss Roar
$Event(12904888, Restart, function(chrEntityId) {
    WaitFor(HPRatio(chrEntityId) < 0.5);
    RequestCharacterAICommand(chrEntityId, 1, 1);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    RequestCharacterAICommand(chrEntityId, -1, 1);
});

// [Circular Boss Room only] Boss begins to move
$Event(12904890, Default, function(chrEntityId, areaEntityId, entityId, nameId, eventFlagId, eventFlagId2, value, objEntityId) {
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    if (EventFlag(eventFlagId2)) {
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    DeactivateObject(objEntityId, Enabled);
    SpawnMapSFX(entityId);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, 929227);
    WaitFor(value == value);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ActivateMultiplayerdependantBuffs(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 7010, false, true, false);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    SetEventFlag(eventFlagId, ON);
});

// [Only for circular boss room] Boss Rush_Boss begins to move
$Event(12904891, Default, function(chrEntityId, areaEntityId, entityId, nameId, eventFlagId, eventFlagId2, value, objEntityId) {
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    if (EventFlag(eventFlagId2)) {
        EndEvent();
    }
    WaitFor(InArea(10000, areaEntityId));
    DeactivateObject(objEntityId, Enabled);
    SpawnMapSFX(entityId);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 205, 929227);
    WaitFor(value == value);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ActivateMultiplayerdependantBuffs(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 7010, false, true, false);
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    SetEventFlag(eventFlagId, ON);
});

// Boss map sound registration
$Event(12904892, Default, function(entityId, entityId2) {
    SetMapSoundState(entityId, Disabled);
    SetMapSoundState(entityId2, Disabled);
});

// Boss part regeneration explosion first time
$Event(12904893, Default, function(chrEntityId) {
    WaitFor(HPRatio(chrEntityId) < 0.5);
    RequestCharacterAICommand(chrEntityId, 1, 1);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    RequestCharacterAICommand(chrEntityId, -1, 1);
});

// Toggle boss part destruction prohibition
$Event(12904894, Default, function(chrEntityId, eventFlagId) {
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    SetEventFlag(eventFlagId, ON);
    WaitFor(CharacterHasEventMessage(chrEntityId, 20));
    SetEventFlag(eventFlagId, OFF);
    RestartEvent();
});

// Passage in front of the boss SFX
$Event(12904895, Default, function(entityId, entityId2, entityId3, areaEntityId) {
    DeleteMapSFX(entityId, false);
    DeleteMapSFX(entityId2, false);
    DeleteMapSFX(entityId3, false);
    WaitFor(InArea(10000, areaEntityId));
    SpawnMapSFX(entityId);
    SpawnMapSFX(entityId2);
    SpawnMapSFX(entityId3);
});

// Silver beast_Boss part destruction damage_Right body
$Event(12904896, Default, function(chrEntityId, npcPartId, npcPartId2, spEffectId, spEffectId2, npcPartGroupIdx, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
    hpSp = NPCPartHP(chrEntityId, npcPartId2) <= 0 && CharacterHasSpEffect(chrEntityId, 5021);
    hpSp2 = NPCPartHP(chrEntityId, npcPartId2) <= 0 && !CharacterHasSpEffect(chrEntityId, 5021);
    flag = EventFlag(eventFlagId2);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
    SetSpEffect(chrEntityId, 5021, true);
    SetSpEffect(chrEntityId, spEffectId, true);
    ClearSpEffect(chrEntityId, spEffectId2);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 7003, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    SetSpEffect(chrEntityId, 5911, true);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    ClearSpEffect(chrEntityId, 5021);
    SetSpEffect(chrEntityId, spEffectId2, false);
    ClearSpEffect(chrEntityId, spEffectId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Silver beast_Boss part destruction damage_Left body
$Event(12904897, Default, function(chrEntityId, npcPartId, npcPartId2, spEffectId, spEffectId2, npcPartGroupIdx, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
    hpSp = NPCPartHP(chrEntityId, npcPartId2) <= 0 && CharacterHasSpEffect(chrEntityId, 5021);
    hpSp2 = NPCPartHP(chrEntityId, npcPartId2) <= 0 && !CharacterHasSpEffect(chrEntityId, 5021);
    flag = EventFlag(eventFlagId2);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 66, 66);
    SetSpEffect(chrEntityId, 5021, true);
    SetSpEffect(chrEntityId, spEffectId, true);
    ClearSpEffect(chrEntityId, spEffectId2);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    SetSpEffect(chrEntityId, 5911, true);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    ClearSpEffect(chrEntityId, 5021);
    SetSpEffect(chrEntityId, spEffectId2, false);
    ClearSpEffect(chrEntityId, spEffectId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 1
$Event(12904898, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 1
$Event(12904899, Default, function(chrEntityId, npcPartId, npcPartId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 130, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 130, true);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 1
$Event(12904900, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 65, 65);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 2
$Event(12904901, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 2
$Event(12904902, Default, function(chrEntityId, npcPartId, npcPartId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 150, true);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 2
$Event(12904903, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 65, 65);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 3
$Event(12904904, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 3
$Event(12904905, Default, function(chrEntityId, npcPartId, npcPartId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 150, true);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 3
$Event(12904906, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 65, 65);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 4
$Event(12904907, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 4
$Event(12904908, Default, function(chrEntityId, npcPartId, npcPartId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 200, true);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 4
$Event(12904909, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 65, 65);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 5
$Event(12904910, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 5
$Event(12904913, Default, function(chrEntityId, npcPartId, npcPartId2, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 200, true);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 5
$Event(12904911, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 65, 65);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Bloodthirsty Beast_Boss Bleed
$Event(12904912, Restart, function(chrEntityId) {
    WaitFor(HPRatio(chrEntityId) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(HPRatio(chrEntityId) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    RequestCharacterAICommand(chrEntityId, 101, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 20));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Boss part damage effect_XX
$Event(12904914, Default, function(spEffectId, spEffectId2, bitNumber, bitNumber2, bitNumber3, chrEntityId) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId)
            && !CharacterHasSpEffect(chrEntityId, spEffectId2));
    ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
    ChangeCharacterDispmask(chrEntityId, bitNumber3, OFF);
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, spEffectId)
            && CharacterHasSpEffect(chrEntityId, spEffectId2));
    ChangeCharacterDispmask(chrEntityId, bitNumber2, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Part damage effect _ Cross gentle
$Event(12904915, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 482));
    ChangeCharactersCloth(chrEntityId, 15, 2);
});

// normal oily_forced cancellation
$Event(12904916, Default, function(chrEntityId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 420));
    WaitFixedTimeFrames(10);
    ClearSpEffect(chrEntityId, 420);
    RestartEvent();
});

// Part covered with oil _XX
$Event(12904917, Default, function(npcPartId, npcPartId2, npcPartGroupIdx, spEffectId, eventFlagId, chrEntityId) {
    WaitFor(EventFlag(eventFlagId) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 1, 1, 1, false, false);
    hp = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || NPCPartHP(chrEntityId, npcPartId2) <= 0);
    EndIf(hp.Passed);
    if (CharacterHasSpEffect(chrEntityId, 420)) {
        SetSpEffect(chrEntityId, spEffectId, true);
    }
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Parts covered with oil_Fire Daruma_XX
$Event(12904918, Default, function(spEffectId, animationId, npcPartId, eventFlagId, chrEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(eventFlagId));
    }
    spHp = CharacterHasSpEffect(chrEntityId, spEffectId)
        && CharacterHasSpEffect(chrEntityId, 421)
        && NPCPartHP(chrEntityId, npcPartId) <= 0;
    spHp2 = CharacterHasSpEffect(chrEntityId, spEffectId)
        && CharacterHasSpEffect(chrEntityId, 421)
        && NPCPartHP(chrEntityId, npcPartId) > 0;
    WaitFor(spHp || spHp2);
    if (!spHp2.Passed) {
        ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    } else {
        SetSpEffect(chrEntityId, spEffectId, true);
    }
    RestartEvent();
});

// Sub Feature_Special Enemy_1 Arrangement_Special Enemy_XX
$Event(12904919, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905320) || EventFlag(92905324) || EventFlag(92905325) || EventFlag(92905326));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_NPC Enemy_XX
$Event(12904979, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905321) || EventFlag(92905327) || EventFlag(92905328));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_Strengthening Enemies_XX
$Event(12905000, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905322) || EventFlag(92905329));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_Immortal Enemy_XX
$Event(12905013, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905323));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub-feature_special enemy_1 placement_no feature_XX
$Event(12905026, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Arrangement_Special Enemy_XX
$Event(12905042, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905320));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Placement_NPC Enemy_XX
$Event(12905097, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905321) || EventFlag(92905324));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Arrangement_Strengthen Surrounding Enemy_XX
$Event(12905108, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905322) || EventFlag(92905325) || EventFlag(92905327));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Placement_Immortal Enemy_XX
$Event(12905119, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(EventFlag(92905323) || EventFlag(92905326) || EventFlag(92905328) || EventFlag(92905329));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Sub-feature_special enemy_2 placement_no feature_XX
$Event(12905130, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, objEntityId) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    ChangeCharacterEnableState(chrEntityId7, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    SetCharacterBackreadState(chrEntityId7, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    EndEvent();
});

// Immortal Enemy Death_XX
$Event(12905147, Restart, function(chrEntityId, eventFlagId) {
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterImmortality(chrEntityId, Enabled);
    SetSpEffect(chrEntityId, 5626, false);
    WaitFor(EventFlag(eventFlagId));
    WaitRandomTimeFrames(0, 50);
    SetCharacterImmortality(chrEntityId, Disabled);
    ForceCharacterDeath(chrEntityId, true);
    EndEvent();
});

// Immortal enemy initial setting_XX
$Event(12905178, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, chrEntityId7, eventFlagId) {
    WaitFor(
        CharacterBackreadStatus(chrEntityId)
            || CharacterBackreadStatus(chrEntityId2)
            || CharacterBackreadStatus(chrEntityId3)
            || CharacterBackreadStatus(chrEntityId4)
            || CharacterBackreadStatus(chrEntityId5)
            || CharacterBackreadStatus(chrEntityId6)
            || CharacterBackreadStatus(chrEntityId7));
    SetSpEffect(chrEntityId, 5913, false);
    SetSpEffect(chrEntityId2, 5913, false);
    SetSpEffect(chrEntityId3, 5913, false);
    SetSpEffect(chrEntityId4, 5913, false);
    SetSpEffect(chrEntityId5, 5913, false);
    SetSpEffect(chrEntityId6, 5913, false);
    SetSpEffect(chrEntityId7, 5913, false);
    RestartIf(
        !(EntityInRadiusOfEntity(10000, chrEntityId, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId2, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId3, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId4, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId5, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId6, 7)
            || EntityInRadiusOfEntity(10000, chrEntityId7, 7)));
    ClearSpEffect(chrEntityId, 5913);
    ClearSpEffect(chrEntityId2, 5913);
    ClearSpEffect(chrEntityId3, 5913);
    ClearSpEffect(chrEntityId4, 5913);
    ClearSpEffect(chrEntityId5, 5913);
    ClearSpEffect(chrEntityId6, 5913);
    ClearSpEffect(chrEntityId7, 5913);
    SetSpEffect(chrEntityId, 5625, false);
    SetSpEffect(chrEntityId2, 5625, false);
    SetSpEffect(chrEntityId3, 5625, false);
    SetSpEffect(chrEntityId4, 5625, false);
    SetSpEffect(chrEntityId5, 5625, false);
    SetSpEffect(chrEntityId6, 5625, false);
    SetSpEffect(chrEntityId7, 5625, false);
    SetCharacterHPBarDisplay(chrEntityId, Enabled);
    SetCharacterHPBarDisplay(chrEntityId2, Enabled);
    SetCharacterHPBarDisplay(chrEntityId3, Enabled);
    SetCharacterHPBarDisplay(chrEntityId4, Enabled);
    SetCharacterHPBarDisplay(chrEntityId5, Enabled);
    SetCharacterHPBarDisplay(chrEntityId6, Enabled);
    SetCharacterHPBarDisplay(chrEntityId7, Enabled);
    WaitFixedTimeSeconds(1);
    spCmp = CharacterHasSpEffect(chrEntityId, 5913) || chrEntityId == 0;
    spCmp2 = CharacterHasSpEffect(chrEntityId2, 5913) || chrEntityId2 == 0;
    spCmp3 = CharacterHasSpEffect(chrEntityId3, 5913) || chrEntityId3 == 0;
    spCmp4 = CharacterHasSpEffect(chrEntityId4, 5913) || chrEntityId4 == 0;
    spCmp5 = CharacterHasSpEffect(chrEntityId5, 5913) || chrEntityId5 == 0;
    spCmp6 = CharacterHasSpEffect(chrEntityId6, 5913)
        || chrEntityId6 == 0
        || CharacterHasSpEffect(chrEntityId7, 5913)
        || chrEntityId7 == 0;
    WaitFor(spCmp && spCmp2 && spCmp3 && spCmp4 && spCmp5 && spCmp6 && cond);
    SetEventFlag(eventFlagId, ON);
    EndEvent();
});

// Sub-feature_special character_with shop_shop_XX
$Event(12905188, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, objEntityId, objEntityId2, objEntityId3, objEntityId4) {
    if (!(EventFlag(92905330)
        || EventFlag(92905332)
        || EventFlag(92905333)
        || EventFlag(92905334)
        || AnyBatchEventFlags(92905385, 92905389))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ChangeCharacterEnableState(chrEntityId3, Disabled);
        ChangeCharacterEnableState(chrEntityId4, Disabled);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        SetCharacterBackreadState(chrEntityId3, true);
        SetCharacterBackreadState(chrEntityId4, true);
        DeactivateObject(objEntityId, Disabled);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        SetObjactState(objEntityId2, -1, Disabled);
        SetObjectTreasureState(objEntityId2, Disabled);
        DeactivateObject(objEntityId3, Disabled);
        SetObjactState(objEntityId3, -1, Disabled);
        SetObjectTreasureState(objEntityId3, Disabled);
        DeactivateObject(objEntityId4, Disabled);
        SetObjactState(objEntityId4, -1, Disabled);
        SetObjectTreasureState(objEntityId4, Disabled);
        EndEvent();
    }
L0:
    if (!((EventFlag(92905332) || EventFlag(92905334)) && (EventFlag(1423) || EventFlag(1432)))) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        SetCharacterBackreadState(chrEntityId, true);
        SetCharacterBackreadState(chrEntityId2, true);
        DeactivateObject(objEntityId, Disabled);
        SetObjactState(objEntityId, -1, Disabled);
        SetObjectTreasureState(objEntityId, Disabled);
        DeactivateObject(objEntityId2, Disabled);
        SetObjactState(objEntityId2, -1, Disabled);
        SetObjectTreasureState(objEntityId2, Disabled);
        EndEvent();
    }
L1:
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    DeactivateObject(objEntityId3, Disabled);
    SetObjactState(objEntityId3, -1, Disabled);
    SetObjectTreasureState(objEntityId3, Disabled);
    DeactivateObject(objEntityId4, Disabled);
    SetObjactState(objEntityId4, -1, Disabled);
    SetObjectTreasureState(objEntityId4, Disabled);
    EndEvent();
});

// Sub-feature_special character_shop available_fighting each other_XX
$Event(12905190, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, objEntityId, objEntityId2, objEntityId3, objEntityId4) {
    EndIf(EventFlag(92905331));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    SetObjactState(objEntityId3, -1, Disabled);
    SetObjectTreasureState(objEntityId3, Disabled);
    DeactivateObject(objEntityId4, Disabled);
    SetObjactState(objEntityId4, -1, Disabled);
    SetObjectTreasureState(objEntityId4, Disabled);
    EndEvent();
});

// Sub-feature_special character_with shop_no feature_XX
$Event(12905192, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, objEntityId, objEntityId2, objEntityId3, objEntityId4) {
    if (!AnyBatchEventFlags(92905385, 92905389)) {
        EndIf(!AnyBatchEventFlags(92905330, 92905334));
    }
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    SetObjactState(objEntityId3, -1, Disabled);
    SetObjectTreasureState(objEntityId3, Disabled);
    DeactivateObject(objEntityId4, Disabled);
    SetObjactState(objEntityId4, -1, Disabled);
    SetObjectTreasureState(objEntityId4, Disabled);
    EndEvent();
});

// Sub-feature_special character_no shop_shop_XX
$Event(12905195, Restart, function() {
    EndEvent();
});

// Sub-feature_special character_no shop_fighting each other_XX
$Event(12905198, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, objEntityId, objEntityId2, objEntityId3, objEntityId4) {
    EndIf(EventFlag(92905331) || EventFlag(92905333) || EventFlag(92905334));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    SetObjactState(objEntityId3, -1, Disabled);
    SetObjectTreasureState(objEntityId3, Disabled);
    DeactivateObject(objEntityId4, Disabled);
    SetObjactState(objEntityId4, -1, Disabled);
    SetObjectTreasureState(objEntityId4, Disabled);
    EndEvent();
});

// Sub-feature_special character_no shop_no feature_XX
$Event(12905201, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, objEntityId, objEntityId2, objEntityId3, objEntityId4) {
    EndIf(!EventFlag(92905331) && !EventFlag(92905333) && !EventFlag(92905334));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    SetObjactState(objEntityId3, -1, Disabled);
    SetObjectTreasureState(objEntityId3, Disabled);
    DeactivateObject(objEntityId4, Disabled);
    SetObjactState(objEntityId4, -1, Disabled);
    SetObjectTreasureState(objEntityId4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong_strong_XX
$Event(12905209, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong_weak_weak_XX
$Event(12905210, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    EndIf(!EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strength_no feature_XX
$Event(12905211, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong only_strong_XX
$Event(12905212, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong only_weak_XX
$Event(12905221, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// sub-feature_multi-summon enemy_strong only_no feature_XX
$Event(12905226, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, chrEntityId4, chrEntityId5, chrEntityId6, objEntityId, objEntityId2) {
    EndIf(!EventFlag(92905340));
    ChangeCharacterEnableState(chrEntityId, Disabled);
    ChangeCharacterEnableState(chrEntityId2, Disabled);
    ChangeCharacterEnableState(chrEntityId3, Disabled);
    ChangeCharacterEnableState(chrEntityId4, Disabled);
    ChangeCharacterEnableState(chrEntityId5, Disabled);
    ChangeCharacterEnableState(chrEntityId6, Disabled);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    SetCharacterBackreadState(chrEntityId4, true);
    SetCharacterBackreadState(chrEntityId5, true);
    SetCharacterBackreadState(chrEntityId6, true);
    DeactivateObject(objEntityId, Disabled);
    SetObjactState(objEntityId, -1, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Disabled);
    SetObjactState(objEntityId2, -1, Disabled);
    SetObjectTreasureState(objEntityId2, Disabled);
    EndEvent();
});

// Disable placement character_by sub-feature
$Event(12905232, Restart, function(eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(!AnyBatchEventFlags(eventFlagId, eventFlagId2));
    ChangeCharacterEnableState(chrEntityId, Disabled);
});

// Initialize trading messenger
$Event(12905233, Restart, function(chrEntityId, chrEntityId2) {
    SetCharacterAnimationState(chrEntityId, Disabled);
    SetCharacterAnimationState(chrEntityId2, Disabled);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId2, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    SetCharacterMaphits(chrEntityId2, true);
});

// Buy and Sell Messenger Anime
$Event(12905235, Restart, function(entityId, entityId2) {
    ForceAnimationPlayback(entityId, 7001, true, false, false);
    ForceAnimationPlayback(entityId2, 7002, true, false, false);
    WaitFor(EventFlag(12907224));
    ForceAnimationPlayback(entityId, 7005, false, false, false);
    ForceAnimationPlayback(entityId2, 7006, false, false, false);
    WaitFixedTimeFrames(29);
    ForceAnimationPlayback(entityId, 7003, true, false, false);
    ForceAnimationPlayback(entityId2, 7004, true, false, false);
    WaitFor(!EventFlag(12907224));
    ForceAnimationPlayback(entityId, 7007, false, false, false);
    ForceAnimationPlayback(entityId2, 7008, false, false, false);
    WaitFixedTimeFrames(28);
    RestartEvent();
});

// buy and sell messenger display mask
$Event(12905237, Restart, function(chrEntityId, chrEntityId2) {
    WaitFixedTimeFrames(12);
    if (!PlayerHasItem(ItemType.Goods, 4111)) {
        ChangeCharacterDispmask(chrEntityId, 1, OFF);
        ChangeCharacterDispmask(chrEntityId, 10, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4112)) {
        ChangeCharacterDispmask(chrEntityId, 2, OFF);
        ChangeCharacterDispmask(chrEntityId, 13, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4113)) {
        ChangeCharacterDispmask(chrEntityId, 3, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4114)) {
        ChangeCharacterDispmask(chrEntityId2, 0, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4115)) {
        ChangeCharacterDispmask(chrEntityId2, 1, OFF);
        ChangeCharacterDispmask(chrEntityId2, 12, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4116)) {
        ChangeCharacterDispmask(chrEntityId2, 2, OFF);
        ChangeCharacterDispmask(chrEntityId2, 11, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4117)) {
        ChangeCharacterDispmask(chrEntityId2, 3, OFF);
    }
});

// Disable placement characters_other than sub-features
$Event(12905239, Restart, function(eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    ChangeCharacterEnableState(chrEntityId, Disabled);
});

// disabling placement objects_per sub-feature
$Event(12905243, Restart, function(eventFlagId, eventFlagId2, objEntityId) {
    WaitFor(!AnyBatchEventFlags(eventFlagId, eventFlagId2));
    DeactivateObject(objEntityId, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
});

// Disable placement object_other than sub-features
$Event(12905244, Restart, function(eventFlagId, eventFlagId2, objEntityId) {
    WaitFor(AnyBatchEventFlags(eventFlagId, eventFlagId2));
    DeactivateObject(objEntityId, Disabled);
    SetObjectTreasureState(objEntityId, Disabled);
});

// map switch_XX
$Event(12905245, Default, function(mapPartEntityId, eventFlagId, mapPartEntityId2) {
    if (EventFlag(eventFlagId)) {
        ActivateMapPart(mapPartEntityId, Disabled);
    } else {
        ActivateMapPart(mapPartEntityId2, Disabled);
    }
    EndEvent();
});

// hit switch_XX
$Event(12905271, Default, function(hitEntityId, eventFlagId, hitEntityId2) {
    if (EventFlag(eventFlagId)) {
        ActivateHit(hitEntityId, Disabled);
    } else {
        ActivateHit(hitEntityId2, Disabled);
    }
    EndEvent();
});

// disable bridge hit_XX
$Event(12905302, Default, function(hitEntityId) {
    ActivateHit(hitEntityId, Disabled);
    Goto(S0);
S0:
    NoOp();
});

// Shake the bridge_XX
$Event(12905303, Default, function(entityId, hitEntityId) {
    WaitFor(PlayerMovingOnHit(hitEntityId));
    ForceAnimationPlayback(entityId, 0, false, true, false);
    RestartEvent();
});

// patrol enemy forced loading
$Event(12905314, Restart, function(chrEntityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndEvent();
    WaitFor(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) == 1);
    WaitFixedTimeFrames(1);
    EndEvent();
});

// Demon_Bullet dummy character connection_XX
$Event(12905337, Restart, function(hitEntityId, chrEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(hitEntityId));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(hitEntityId) <= 0) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 3002, false, true, false);
        EndEvent();
    }
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Character, hitEntityId, 6, hitEntityId);
    RestartEvent();
});

// Status communication from demon_body to dummy character_XX
$Event(12905347, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5401));
    RequestCharacterAICommand(chrEntityId2, 100, 0);
    WaitFor(CharacterHasSpEffect(chrEntityId, 5400));
    RequestCharacterAICommand(chrEntityId2, -1, 0);
    RestartEvent();
});

// Unlock Grave Digger Pickaxe Work Animation_XX
$Event(12905357, Restart, function(chrEntityId, animationId, animationId2, animationId3, aiId, aiId2) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    SetCharacterAIId(chrEntityId, aiId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        CharacterDamagedBy(chrEntityId, 10000)
            || HPRatio(chrEntityId) != 1
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
    SetCharacterAIId(chrEntityId, aiId2);
    if (!EntityInRadiusOfEntity(chrEntityId, 10000, 5)) {
        ForceAnimationPlayback(chrEntityId, animationId3, false, false, false);
    }
});

// Indifferent special standby release_XX
$Event(12905369, Restart, function(chrEntityId, animationId, animationId2) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        CharacterDamagedBy(chrEntityId, 10000)
            || HPRatio(chrEntityId) != 1
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, animationId2, false, true, false);
});

// Brain Eater Special Standby_XX
$Event(12905387, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    WaitFor(
        HasDamageType(chrEntityId, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(chrEntityId, 10000, 2)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition));
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// Special standby for silver beast follower_XX
$Event(12905396, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(chrEntityId, 7000, true, false, false);
    SetCharacterAIId(chrEntityId, 218085);
    SetSpEffect(chrEntityId, 5629, false);
    WaitFor(
        HasDamageType(chrEntityId, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(chrEntityId, 10000, 2)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Recognition));
    ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
    SetCharacterAIId(chrEntityId, 218080);
    ClearSpEffect(chrEntityId, 5629);
    RequestCharacterAIReplan(chrEntityId);
});

// Flag ON_XX triggered by opening the door
$Event(12905401, Restart, function(objactEventFlag, eventFlagId) {
    WaitFor(ObjActEventFlag(objactEventFlag));
    WaitFixedTimeFrames(45);
    SetEventFlag(eventFlagId, ON);
});

// flag ON_XX to wake up when the bell rings
$Event(12905402, Restart, function(objEntityId, eventFlagId) {
    WaitFor(ObjectHitBy(objEntityId, 10000));
    WaitFixedTimeFrames(45);
    SetEventFlag(eventFlagId, ON);
});

// flag ON_XX to force wake up on alert action
$Event(12905403, Restart, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(8);
    SetEventFlag(eventFlagId2, ON);
});

// Enemies wake up when opening treasure chests
$Event(12905404, Default, function(objactEventFlag, eventFlagId) {
    WaitFor(ObjActEventFlag(objactEventFlag));
    CreatePlaylog(0);
    WaitFixedTimeFrames(100);
    SetEventFlag(eventFlagId, ON);
});

// Appearance of crazy evil spirit with SAN value_dungeon_XX
$Event(12905406, Default, function(chrEntityId, eventFlagId) {
    ChangeCharacterEnableState(chrEntityId, Disabled);
    EndEvent();
    WaitFor(
        PlayerInsightAmount() >= 10
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, chrEntityId, 10));
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 6200, false, true, false);
    SetEventFlag(eventFlagId, ON);
});

// Crazy demon disappearance with SAN value_dungeon_XX
$Event(12905407, Default, function(chrEntityId, eventFlagId) {
    EndEvent();
    WaitFor(EventFlag(eventFlagId) && PlayerInsightAmount() <= 8);
L0:
    ForceCharacterDeath(chrEntityId, false);
});

// Gunpowder Barrel Explosion
$Event(12906400, Restart, function(objEntityId) {
    dmg = HasDamageType(objEntityId, -1, DamageType.Fire);
    dmg2 = HasDamageType(objEntityId, -1, DamageType.None);
    cond = dmg || dmg2;
    WaitFor(dmg || dmg2 || ObjectHP(objEntityId) < 999);
    if (!cond.Passed) {
        RequestObjectDestruction(objEntityId, 1);
        PlaySE(objEntityId, SoundType.oObject, 299961000);
        WaitFixedTimeFrames(10);
        ShootBullet(2900000, objEntityId, 200, 6051, 270, 0, 0);
        WaitFixedTimeFrames(45);
        ShootBullet(2900000, objEntityId, 200, 6053, 270, 0, 0);
        EndEvent();
    }
    CreatePlaylog(1462);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        ShootBullet(2900000, objEntityId, 200, 6150, 0, 90, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        ShootBullet(2900000, objEntityId, 200, 6151, 0, 90, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        ShootBullet(2900000, objEntityId, 200, 6152, 0, 90, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        ShootBullet(2900000, objEntityId, 200, 6153, 0, 90, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        ShootBullet(2900000, objEntityId, 200, 6154, 0, 90, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        ShootBullet(2900000, objEntityId, 200, 6155, 0, 90, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        ShootBullet(2900000, objEntityId, 200, 6156, 0, 90, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        ShootBullet(2900000, objEntityId, 200, 6157, 0, 90, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        ShootBullet(2900000, objEntityId, 200, 6000, 0, 90, 0);
    }
    ShootBullet(2900000, objEntityId, 200, 6055, 270, 0, 0);
    RequestObjectDestruction(objEntityId, 1);
    PlaySE(objEntityId, SoundType.oObject, 299961000);
});

// immortality settings
$Event(12906500, Restart, function(chrEntityId, chrEntityId2) {
    SetCharacterImmortality(chrEntityId, Enabled);
    WaitFor(CharacterDead(chrEntityId2));
    SetCharacterImmortality(chrEntityId, Disabled);
    ForceCharacterDeath(chrEntityId, true);
});

// Iron Ball Rumbling_XX
$Event(12906534, Default, function(objEntityId, eventFlagId, objEntityId2, eventFlagId2, objEntityId3, eventFlagId3, entityId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId, objEntityId, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(eventFlagId);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6140, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6141, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6142, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6143, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6144, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6145, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6146, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6147, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 5110, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    WaitFixedTimeSeconds(5.6);
    DeleteObjectEvent(eventFlagId2);
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId3, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(eventFlagId3);
    DeactivateObject(objEntityId3, Disabled);
    RestartEvent();
});

// iron ball rumbling long _XX
$Event(12906537, Default, function(objEntityId, eventFlagId, objEntityId2, eventFlagId2, objEntityId3, eventFlagId3, entityId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId, objEntityId, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(eventFlagId);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(6);
    DeleteObjectEvent(eventFlagId2);
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId3, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(eventFlagId3);
    DeactivateObject(objEntityId3, Disabled);
    RestartEvent();
});

// Single shot iron ball rumbling 16 squares_XX
$Event(12906540, Default, function(objEntityId, eventFlagId, objEntityId2, eventFlagId2, objEntityId3, eventFlagId3, entityId, areaEntityId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    WaitFor(InArea(10000, areaEntityId));
    ForceAnimationPlayback(objEntityId, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId, objEntityId, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(eventFlagId);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6140, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6141, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6142, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6143, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6144, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6145, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6146, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 6147, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId2, objEntityId2, 101, 5110, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    WaitFixedTimeSeconds(12);
    DeleteObjectEvent(eventFlagId2);
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(objEntityId3, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    flag |= EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107);
    if (!flag) {
        CreateDamagingObject(eventFlagId3, objEntityId3, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(eventFlagId3);
    DeactivateObject(objEntityId3, Disabled);
    EndEvent();
});

// Spiral staircase upper, middle and lower_iron ball rumble_XX
$Event(12906541, Default, function(objEntityId, objEntityId2, objEntityId3, areaEntityId, areaEntityId2, chrEntityId, entityId, eventFlagId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    ForceAnimationPlayback(objEntityId, 100, true, false, false);
    WaitFor(
        InArea(10000, areaEntityId) || InArea(10000, areaEntityId2) || CharacterDead(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 3000, false, true, false);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 20, false, false, false);
    CreateObjectfollowingSFX(objEntityId2, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6140, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6141, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6142, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6143, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6144, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6145, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6146, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6147, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 5110, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    WaitFixedTimeFrames(370);
    DeleteObjectEvent(eventFlagId);
    DeleteObjectfollowingSFX(objEntityId2, true);
    DeactivateObject(objEntityId3, Enabled);
    ForceAnimationPlayback(objEntityId3, 100, false, false, false);
    RequestObjectDestruction(objEntityId3, 1);
    DeactivateObject(objEntityId2, Disabled);
});

// Middle and bottom of spiral staircase_Iron ball rolling_XX
$Event(12906543, Default, function(objEntityId, objEntityId2, objEntityId3, areaEntityId, areaEntityId2, chrEntityId, entityId, eventFlagId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    ForceAnimationPlayback(objEntityId, 100, true, false, false);
    WaitFor(
        InArea(10000, areaEntityId) || InArea(10000, areaEntityId2) || CharacterDead(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 3000, false, true, false);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 30, false, false, false);
    CreateObjectfollowingSFX(objEntityId2, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6140, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6141, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6142, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6143, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6144, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6145, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6146, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6147, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 5110, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(eventFlagId);
    DeleteObjectfollowingSFX(objEntityId2, true);
    DeactivateObject(objEntityId3, Enabled);
    ForceAnimationPlayback(objEntityId3, 100, false, false, false);
    RequestObjectDestruction(objEntityId3, 1);
    DeactivateObject(objEntityId2, Disabled);
});

// Spiral staircase upper middle_Iron ball rolling_XX
$Event(12906545, Default, function(objEntityId, objEntityId2, objEntityId3, areaEntityId, areaEntityId2, chrEntityId, entityId, eventFlagId) {
    DeactivateObject(objEntityId2, Disabled);
    DeactivateObject(objEntityId3, Disabled);
    DeactivateObject(objEntityId, Enabled);
    ForceAnimationPlayback(objEntityId, 100, true, false, false);
    WaitFor(
        InArea(10000, areaEntityId) || InArea(10000, areaEntityId2) || CharacterDead(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 3000, false, true, false);
    DeactivateObject(objEntityId, Disabled);
    DeactivateObject(objEntityId2, Enabled);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(entityId, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(objEntityId2, 40, false, false, false);
    CreateObjectfollowingSFX(objEntityId2, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6140, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6141, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6142, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6143, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6144, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6145, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6146, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 6147, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(eventFlagId, objEntityId2, 100, 5110, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(eventFlagId);
    DeleteObjectfollowingSFX(objEntityId2, true);
    DeactivateObject(objEntityId3, Enabled);
    ForceAnimationPlayback(objEntityId3, 100, false, false, false);
    RequestObjectDestruction(objEntityId3, 1);
    DeactivateObject(objEntityId2, Disabled);
});

// Infection_Strengthening Surroundings_XX
$Event(12906548, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(
        CharacterHasEventMessage(chrEntityId, 10)
            && EntityInRadiusOfEntity(chrEntityId, chrEntityId2, 25)
            && !CharacterDead(chrEntityId2));
    RequestCharacterAICommand(chrEntityId2, 200, 1);
    WaitFor(CharacterHasEventMessage(chrEntityId2, 20));
    SetSpEffect(chrEntityId2, 5645, false);
    RequestCharacterAICommand(chrEntityId2, -1, 1);
    RestartEvent();
});

// Infection_enhanced surroundings_enhanced poisoning_XX
$Event(12906567, Restart, function(chrEntityId, spEffectId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 5645));
    SetSpEffect(chrEntityId, spEffectId, false);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 5645));
    ClearSpEffect(chrEntityId, spEffectId);
    RestartEvent();
});

// sleeper wakes up_XX
$Event(12906586, Restart, function(chrEntityId, animationId, animationId2, aiId, aiId2, aiId3, animationId3) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    SetCharacterAIId(chrEntityId, aiId);
    chr = CharacterAIState(chrEntityId, AIStateType.Alert);
    chr2 = CharacterAIState(chrEntityId, AIStateType.Recognition);
    chr3 = CharacterAIState(chrEntityId, AIStateType.Combat);
    sp = CharacterHasSpEffect(chrEntityId, 4740);
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    chrSpDmg = chr || chr2 || chr3 || sp || dmg;
    chrSp = chr2 || chr3 || sp;
    WaitFor(chrSpDmg);
    if (!dmg.Passed) {
        if (!sp.Passed) {
            if (!chrSp.Passed) {
                SetCharacterAIId(chrEntityId, aiId2);
                ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
                chr4 = CharacterAIState(chrEntityId, AIStateType.Normal);
                chr5 = CharacterAIState(chrEntityId, AIStateType.Recognition);
                chr6 = CharacterAIState(chrEntityId, AIStateType.Combat);
                sp2 = CharacterHasSpEffect(chrEntityId, 4740);
                dmg2 = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
                chrSpDmg2 = chr4 || chr5 || chr6 || sp2 || dmg2;
                chrSp2 = chr5 || chr6 || sp2;
                WaitFor(chrSpDmg2);
                GotoIf(L1, dmg2.Passed);
                if (!chrSp2.Passed) {
                    WaitFixedTimeSeconds(3);
                    RestartEvent();
                }
            }
        }
L0:
        ForceAnimationPlayback(chrEntityId, animationId3, false, false, false);
    }
L1:
    SetCharacterAIId(chrEntityId, aiId3);
});

// Snake ball (small) _ Crawl out of the ground
$Event(12906648, Restart, function(chrEntityId, chrEntityId2, animationId, entityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId2));
    SetCharacterAIState(chrEntityId2, Disabled);
    SetCharacterGravity(chrEntityId2, Disabled);
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    WaitRandomTimeFrames(0, 60);
    IssueShortWarpRequest(chrEntityId2, TargetEntityType.Area, entityId, -1);
    ForceAnimationPlayback(chrEntityId2, animationId, false, true, false);
    SetCharacterGravity(chrEntityId2, Enabled);
    SetCharacterAIState(chrEntityId2, Enabled);
    RequestCharacterAIReplan(chrEntityId2);
});

// Alert enemy returning to nest XX
$Event(12906654, Restart, function(chrEntityId, areaEntityId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(3);
    ShootBullet(2900000, chrEntityId, 32, 210200599, 0, 0, 0);
    PlaySE(chrEntityId, SoundType.aEnvironmentalSound, 225000000);
    WaitFor(InArea(chrEntityId, areaEntityId));
    ForceAnimationPlayback(chrEntityId, 3010, false, true, false);
    PlaySE(chrEntityId, SoundType.aEnvironmentalSound, 225000000);
    ShootBullet(2900000, chrEntityId, 32, 210200599, 0, 0, 0);
    ForceAnimationPlayback(chrEntityId, 7004, false, true, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Play animation with PC discovery_XX
$Event(12906655, Restart, function(chrEntityId, animationId) {
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, animationId, false, true, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// Alert enemy XX shouting on the spot
$Event(12906656, Restart, function(chrEntityId, soundId, chrEntityId2) {
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Recognition)
            || CharacterAIState(chrEntityId, AIStateType.Combat))
            && HPRatio(chrEntityId) == 1);
    if (!EntityInRadiusOfEntity(chrEntityId, 10000, 5)) {
        WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 236, 10000);
        PlaySE(chrEntityId, SoundType.cCharacterMotion, soundId);
        ForceAnimationPlayback(chrEntityId, 3020, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, chrEntityId2, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
        ShootBullet(2900000, chrEntityId2, 101, 6051, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
        ShootBullet(2900000, chrEntityId2, 101, 6054, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
        ShootBullet(2900000, chrEntityId2, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
        ShootBullet(2900000, chrEntityId2, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(chrEntityId) != 1);
    }
    ShootBullet(2900000, chrEntityId2, 101, 6056, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Normal));
    RestartEvent();
});

// Incense Burner_XX
$Event(12906660, Default, function(objEntityId) {
    EndIf(ObjectDestroyed(objEntityId));
    if (!EventFlag(92905310)) {
        GotoIf(L0, EventFlag(92905301));
        CreateObjectfollowingSFX(objEntityId, 600, 929302);
        WaitFor(ObjectHitBy(objEntityId, -1));
        Goto(L3);
L0:
        if (!ThisEventSlot()) {
            CreateObjectfollowingSFX(objEntityId, 600, 929305);
        }
        ShootBullet(2900000, objEntityId, 100, 6090, 0, 0, 0);
        Goto(L2);
    }
L1:
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(objEntityId, 600, 929304);
    }
    GotoIf(S6, EventFlag(92905107));
    GotoIf(S5, EventFlag(92905106));
    GotoIf(S4, EventFlag(92905105));
    GotoIf(S3, EventFlag(92905104));
    GotoIf(S2, EventFlag(92905103));
    GotoIf(S1, EventFlag(92905102));
    GotoIf(S0, EventFlag(92905101));
    if (!EventFlag(92905100)) {
    }
    ShootBullet(2900000, objEntityId, 100, 6120, 0, 0, 0);
    Goto(L2);
S0:
    ShootBullet(2900000, objEntityId, 100, 6121, 0, 0, 0);
    Goto(L2);
S1:
    ShootBullet(2900000, objEntityId, 100, 6122, 0, 0, 0);
    Goto(L2);
S2:
    ShootBullet(2900000, objEntityId, 100, 6123, 0, 0, 0);
    Goto(L2);
S3:
    ShootBullet(2900000, objEntityId, 100, 6124, 0, 0, 0);
    Goto(L2);
S4:
    ShootBullet(2900000, objEntityId, 100, 6125, 0, 0, 0);
    Goto(L2);
S5:
    ShootBullet(2900000, objEntityId, 100, 6126, 0, 0, 0);
    Goto(L2);
S6:
    ShootBullet(2900000, objEntityId, 100, 6127, 0, 0, 0);
L2:
    cond = ElapsedSeconds(0.5);
    obj = ObjectHP(objEntityId) < 999;
    WaitFor(cond || obj);
    RestartIf(!obj.Passed);
L3:
    DeleteObjectfollowingSFX(objEntityId, true);
    WaitFor(ElapsedFrames(1));
    RequestObjectDestruction(objEntityId, 1);
});

// Moans from the coffin_XX
$Event(12906726, Restart, function(chrEntityId, soundId, targetDistance) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    WaitFor(
        CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom));
    PlaySE(chrEntityId, SoundType.cCharacterMotion, soundId);
    chrArea = CharacterDead(chrEntityId) || EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance);
    WaitFor(ElapsedFrames(120) || chrArea);
    EndIf(chrArea.Passed);
    RestartEvent();
});

// spider man patch_dead
$Event(12906738, Restart, function(chrEntityId) {
    if (EventFlag(1431)) {
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1431, ON);
});

// Spider man patch_hostile_hostile flag ON
$Event(12906740, Restart, function(chrEntityId, eventFlagId) {
    EndIf(AnyBatchEventFlags(1431, 1432));
    WaitFor(
        (HPRatio(chrEntityId) < 0.9 && CharacterDamagedBy(chrEntityId, 10000))
            || EventFlag(eventFlagId));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1432, ON);
});

// Spider Man Patch_Hostile_Team Type Switch
$Event(12906742, Restart, function(chrEntityId) {
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    WaitFor(EventFlag(1432));
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
});

// Spider man patch_hostile_attack count
$Event(12906744, Restart, function(chrEntityId, eventFlagId) {
    WaitFor(CharacterDamagedBy(chrEntityId, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(chrEntityId, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(chrEntityId, 10000));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
});

// Spider man patch_Fall when you talk to him
$Event(12906746, Default, function(chrEntityId) {
    ForceAnimationPlayback(chrEntityId, 7015, true, true, true);
    SetEventFlag(72900001, OFF);
    WaitFor(EventFlag(72900001) || EventFlag(1432));
    SetSpEffect(chrEntityId, 151, true);
});

// Spider Man Patch_Fall when damaged
$Event(12906748, Default, function(chrEntityId) {
    WaitFor(
        CharacterDamagedBy(chrEntityId, 10000)
            && CharacterHasSpEffect(chrEntityId, 5543)
            && HPRatio(chrEntityId) > 0);
    ForceAnimationPlayback(chrEntityId, 7021, false, true, false);
});

// Emissary tentacle warp from the moon
$Event(12906750, Restart, function(chrEntityId, chrEntityId2, dummypolyId) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(chrEntityId) && CharacterBackreadStatus(chrEntityId));
    IssueShortWarpRequest(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId);
    RestartEvent();
});

// Part Damage_Head_Moon Spawn
$Event(12906764, Restart, function(chrEntityId, npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetSpEffect(chrEntityId, spEffectId, true);
    ClearSpEffect(chrEntityId, spEffectId2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    SetNPCPartHP(chrEntityId, npcPartId2, -1, true);
    SetSpEffect(chrEntityId, spEffectId2, true);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Parts Damage_Other than Head_Moon Spawn
$Event(12906765, Restart, function(chrEntityId, npcPartId, npcPartId2, npcPartGroupIdx, npcPartHP, spEffectId, spEffectId2, animationId) {
    WaitFor(CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetSpEffect(chrEntityId, spEffectId, true);
    ClearSpEffect(chrEntityId, spEffectId2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 100));
    SetNPCPartHP(chrEntityId, npcPartId2, -1, true);
    SetSpEffect(chrEntityId, spEffectId2, true);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss Heat Up_1st_Evil God
$Event(12906766, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(chrEntityId) < 0.7);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId2, ON);
});

// Boss Heat Up_2nd_Evil God
$Event(12906767, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(chrEntityId) < 0.3 && EventFlag(eventFlagId2));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Evil God_Strengthening Boss Parts_XX
$Event(12906768, Restart, function(chrEntityId, eventFlagId, npcPartId, npcPartId2, npcPartGroupIdx, bitNumber, bitNumber2) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(chrEntityId, bitNumber2, ON);
    }
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 5402));
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
    ChangeCharacterHitmask(chrEntityId, bitNumber2, OFF);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
});

// Progenitor Beast_Boss Part Damage_Part 1
$Event(12906769, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 2
$Event(12906770, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 3
$Event(12906771, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 4
$Event(12906772, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 5
$Event(12906773, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 1
$Event(12906774, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Lunar Spawn_Boss Part Damage_Part 2
$Event(12906775, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 3
$Event(12906776, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Lunar Spawn_Boss Part Damage_Part 4
$Event(12906777, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 5
$Event(12906778, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 1
$Event(12906779, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 2
$Event(12906780, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 3
$Event(12906781, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 4
$Event(12906782, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 5
$Event(12906783, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 1
$Event(12906784, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 2
$Event(12906785, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 3
$Event(12906786, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 4
$Event(12906787, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 5
$Event(12906788, Default, function(chrEntityId, baseEventFlagId, eventFlagId, eventFlagId2, npcPartGroupIdx, npcPartId, npcPartId2, npcPartHP) {
    WaitFor(EventFlag(eventFlagId2) && CharacterBackreadStatus(chrEntityId));
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, npcPartHP, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId2, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId, 73, 73);
    EventValueOperation(baseEventFlagId, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(eventFlagId, ON);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId, npcPartHP, true);
    EventValueOperation(baseEventFlagId, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(eventFlagId, ON);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Flesh Golem_Part Damage_XX
$Event(12906827, Default, function(chrEntityId, npcPartGroupIdx, npcPartId, npcPartId2, animationId, spEffectId) {
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetSpEffect(chrEntityId, spEffectId, false);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(30);
    ClearSpEffect(chrEntityId, spEffectId);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Fresh Golem_Blood Bean Part Destruction_XX
$Event(12906828, Default, function(chrEntityId, npcPartGroupIdx, npcPartId, npcPartId2, animationId, bitNumber, bitNumber2) {
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(chrEntityId, 1, ON);
        ChangeCharacterHitmask(chrEntityId, 2, ON);
        ChangeCharacterHitmask(chrEntityId, 3, ON);
        ChangeCharacterHitmask(chrEntityId, 4, ON);
        ChangeCharacterDispmask(chrEntityId, 9, OFF);
        ChangeCharacterDispmask(chrEntityId, 10, OFF);
        ChangeCharacterDispmask(chrEntityId, 11, OFF);
        ChangeCharacterDispmask(chrEntityId, 12, OFF);
        ChangeCharacterHitmask(chrEntityId, bitNumber, OFF);
        ChangeCharacterDispmask(chrEntityId, bitNumber2, ON);
        CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 100, 1, 1.5, false, false);
        SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
        hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
        hp2 = HPRatio(chrEntityId) <= 0;
        WaitFor(hp || hp2);
        EndIf(hp2.Passed);
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        SetSpEffect(chrEntityId, 5667, true);
        RequestCharacterAIReplan(chrEntityId);
    }
L0:
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
    ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
});

// Boss room entry_host_rematch_undercard
$Event(12906789, Default, function(areaEntityId, objEntityId, objEntityId2, entityId, entityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(objEntityId, Disabled);
            DeleteMapSFX(entityId, false);
        }
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId2, false);
        WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2));
        DeactivateObject(objEntityId, Enabled);
        DeactivateObject(objEntityId2, Enabled);
        SpawnMapSFX(entityId);
        SpawnMapSFX(entityId2);
    }
L0:
    flagChrAct = !EventFlag(eventFlagId)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2900010, objEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, areaEntityId, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(eventFlagId3, ON);
    }
L1:
    RestartEvent();
});

// Boss room entrance_guest_undercard
$Event(12906790, Default, function(areaEntityId, areaEntityId2, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, areaEntityId2));
    RotateCharacter(10000, areaEntityId, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom)
        && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(eventFlagId4, ON);
    }
L0:
    RestartEvent();
});

// Boss battle start_undercard
$Event(12906791, Default, function(chrEntityId, nameId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterInvincibility(chrEntityId, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId2)
                || (eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
                || (eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
                || (eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
                || (eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043)));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(chrEntityId, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(chrEntityId, 7501, true);
    Goto(L4);
L4:
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterInvincibility(chrEntityId, Disabled);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlag(eventFlagId3, ON);
    CreatePlaylog(1260);
    if (eventFlagId == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (eventFlagId == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (eventFlagId == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (eventFlagId == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// Boss BGM_Activation_Undercard
$Event(12906792, Default, function(chrEntityId, areaEntityId, entityId, entityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(entityId, Disabled);
    SetMapSoundState(entityId2, Disabled);
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(eventFlagId) && EventFlag(eventFlagId2);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(eventFlagId3);
        }
        flagArea &= InArea(10000, areaEntityId);
        WaitFor(flagArea);
        EnableBossMapSound(entityId, Enabled);
        chrFlagArea &= CharacterHasEventMessage(chrEntityId, 500);
    }
L0:
    chrFlagArea &= !EventFlag(eventFlagId) && EventFlag(eventFlagId2);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(eventFlagId3);
    }
    chrFlagArea &= InArea(10000, areaEntityId);
    WaitFor(chrFlagArea);
    EnableBossMapSound(entityId, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(entityId2, Enabled);
});

// Boss camera switching_opening
$Event(12906794, Default, function(chrEntityId, eventFlagId, targetDistance, targetDistance2) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        HPRatio(chrEntityId) > 0 && !EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss battle start_Deb
$Event(12906795, Default, function(chrEntityId, nameId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId2, chrEntityId3) {
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterAIState(chrEntityId2, Disabled);
    SetCharacterAIState(chrEntityId3, Disabled);
    SetCharacterHPBarDisplay(chrEntityId, Disabled);
    SetCharacterHPBarDisplay(chrEntityId2, Disabled);
    SetCharacterHPBarDisplay(chrEntityId3, Disabled);
    SetCharacterInvincibility(chrEntityId, Enabled);
    SetCharacterInvincibility(chrEntityId2, Enabled);
    SetCharacterInvincibility(chrEntityId3, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(eventFlagId2)
                || (eventFlagId == boss_1_defeat && EventFlag(boss_1_defeat+1013))
                || (eventFlagId == boss_2_defeat && EventFlag(boss_2_defeat+1023))
                || (eventFlagId == boss_3_defeat && EventFlag(boss_3_defeat+1033))
                || (eventFlagId == boss_4_defeat && EventFlag(boss_4_defeat+1043)));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(chrEntityId2, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(chrEntityId3, AuthorityLevel.Forced);
            SetEventFlag(12907230, OFF);
            SetEventFlag(12907231, OFF);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(chrEntityId, 7500, true);
    SetSpEffect(chrEntityId2, 7500, true);
    SetSpEffect(chrEntityId3, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(chrEntityId, 7501, true);
    SetSpEffect(chrEntityId2, 7501, true);
    SetSpEffect(chrEntityId3, 7501, true);
    Goto(L4);
L4:
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(chrEntityId, Enabled);
    SetCharacterAIState(chrEntityId2, Enabled);
    SetCharacterAIState(chrEntityId3, Enabled);
    SetCharacterInvincibility(chrEntityId, Disabled);
    SetCharacterInvincibility(chrEntityId2, Disabled);
    SetCharacterInvincibility(chrEntityId3, Disabled);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    DisplayBossHealthBar(Enabled, chrEntityId2, 1, 304002);
    DisplayBossHealthBar(Enabled, chrEntityId3, 2, 304003);
    SetEventFlag(eventFlagId3, ON);
    CreatePlaylog(1260);
    if (eventFlagId == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (eventFlagId == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (eventFlagId == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (eventFlagId == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// Enter boss room_host_rematch
$Event(12906796, Default, function(areaEntityId, objEntityId, objEntityId2, entityId, entityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(objEntityId, Disabled);
            DeleteMapSFX(entityId, false);
        }
        DeactivateObject(objEntityId2, Disabled);
        DeleteMapSFX(entityId2, false);
        WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2));
        DeactivateObject(objEntityId, Enabled);
        DeactivateObject(objEntityId2, Enabled);
        SpawnMapSFX(entityId);
        SpawnMapSFX(entityId2);
    }
L0:
    flagChrAct = !EventFlag(eventFlagId)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2900010, objEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, areaEntityId, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(eventFlagId3, ON);
    }
L1:
    RestartEvent();
});

// Enter boss room_host_rematch_no exit
$Event(12906800, Default, function(areaEntityId, objEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(objEntityId, Disabled);
            DeleteMapSFX(entityId, false);
        }
        WaitFor(!EventFlag(eventFlagId) && EventFlag(eventFlagId2));
        DeactivateObject(objEntityId, Enabled);
        SpawnMapSFX(entityId);
    }
L0:
    flagChrAct = !EventFlag(eventFlagId)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2900010, objEntityId);
    flag = EventFlag(eventFlagId);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, areaEntityId, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive)
        && (InArea(10000, areaEntityId) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(eventFlagId3, ON);
    }
L1:
    RestartEvent();
});

// Enter boss room_guest
$Event(12906802, Default, function(entityId, areaEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, areaEntityId));
    RotateCharacter(10000, entityId, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom)
        && (InArea(10000, 2412801) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(eventFlagId4, ON);
    }
L0:
    RestartEvent();
});

// Begin boss battle
$Event(12906806, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_1) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X12_4)
                || (X8_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
                || (X8_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
                || (X8_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
                || (X8_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043)));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
            SetEventFlag(12907230, OFF);
            SetEventFlag(12907231, OFF);
        }
    }
L0:
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(X0_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
    Goto(L4);
L4:
    if (EventFlag(boss_1_defeat+1013)
        || EventFlag(boss_1_defeat+1023)
        || EventFlag(boss_1_defeat+1033)
        || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetEventFlag(X16_4, ON);
    CreatePlaylog(1260);
    if (X8_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X8_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X8_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X8_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
});

// Boss BGM_enable
$Event(12906810, Default, function(chrEntityId, areaEntityId, entityId, entityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(entityId, Disabled);
    SetMapSoundState(entityId2, Disabled);
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(eventFlagId) && EventFlag(eventFlagId2);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(eventFlagId3);
        }
        flagArea &= InArea(10000, areaEntityId);
        WaitFor(flagArea);
        EnableBossMapSound(entityId, Enabled);
        chrFlagArea &= CharacterHasEventMessage(chrEntityId, 500);
    }
L0:
    chrFlagArea &= !EventFlag(eventFlagId) && EventFlag(eventFlagId2);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(eventFlagId3);
    }
    chrFlagArea &= InArea(10000, areaEntityId);
    WaitFor(chrFlagArea);
    EnableBossMapSound(entityId, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(entityId2, Enabled);
});

// Boss BGM_Activation_2
$Event(12906978, Default, function(eventFlagId, areaEntityId, entityId, entityId2, eventFlagId2, eventFlagId3, eventFlagId4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(entityId, Disabled);
    SetMapSoundState(entityId2, Disabled);
    EndIf(EventFlag(eventFlagId2));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(eventFlagId2) && EventFlag(eventFlagId3);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(eventFlagId4);
        }
        flagArea &= InArea(10000, areaEntityId);
        WaitFor(flagArea);
        EnableBossMapSound(entityId, Enabled);
        flagArea2 &= EventFlag(eventFlagId);
    }
L0:
    flagArea2 &= !EventFlag(eventFlagId2) && EventFlag(eventFlagId3);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(eventFlagId4);
    }
    flagArea2 &= InArea(10000, areaEntityId);
    WaitFor(flagArea2);
    EnableBossMapSound(entityId, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(entityId2, Enabled);
});

// Switch boss camera
$Event(12906818, Default, function(chrEntityId, eventFlagId, targetDistance, targetDistance2) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        HPRatio(chrEntityId) > 0 && !EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Camera Switch_Fat
$Event(12906822, Default, function(chrEntityId, eventFlagId, targetDistance, targetDistance2, chrEntityId2, chrEntityId3) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        (HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance))
            || (HPRatio(chrEntityId2) > 0
                && EntityInRadiusOfEntity(10000, chrEntityId2, targetDistance))
            || (HPRatio(chrEntityId3) > 0
                && EntityInRadiusOfEntity(10000, chrEntityId3, targetDistance)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2))
            || (HPRatio(chrEntityId2) > 0
                && EntityInRadiusOfEntity(10000, chrEntityId2, targetDistance2))
            || (HPRatio(chrEntityId3) > 0
                && EntityInRadiusOfEntity(10000, chrEntityId3, targetDistance2))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Camera Switch_2
$Event(12906823, Default, function(chrEntityId, eventFlagId, targetDistance, targetDistance2, chrEntityId2, eventFlagId2) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        (HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance))
            || (HPRatio(chrEntityId2) > 0
                && EventFlag(eventFlagId2)
                && EntityInRadiusOfEntity(10000, chrEntityId2, targetDistance)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(chrEntityId) > 0 && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2))
            || (HPRatio(chrEntityId2) > 0
                && EventFlag(eventFlagId2)
                && EntityInRadiusOfEntity(10000, chrEntityId2, targetDistance2))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Dedicated flag ON when boss is defeated
$Event(12906824, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId2, ON);
});

// Boss Appearance_2
$Event(12906825, Default, function(chrEntityId, chrEntityId2, eventFlagId, entityId, nameId, targetHPRatio, eventFlagId2, eventFlagId3) {
    if (EventFlag(eventFlagId3)) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
L0:
    if (!EventFlag(eventFlagId2)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        WaitFor(EventFlag(eventFlagId) && HPRatio(chrEntityId2) <= targetHPRatio);
        IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
        if (EventFlag(boss_1_defeat+1013)
            || EventFlag(boss_1_defeat+1023)
            || EventFlag(boss_1_defeat+1033)
            || EventFlag(boss_1_defeat+1043)) {
            WaitFixedTimeSeconds(2);
        }
        ChangeCharacterEnableState(chrEntityId, Enabled);
        SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 6, 929203);
    }
L1:
    DisplayBossHealthBar(Enabled, chrEntityId, 1, nameId);
    SetEventFlag(eventFlagId2, ON);
});

// Flame Beast_Part Damage_Part 1
$Event(12906841, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 400, 1, 0.75, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 2
$Event(12906843, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 3
$Event(12906845, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 4
$Event(12906847, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 5
$Event(12906849, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 64, 64);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 65, 65);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_SFX setup
$Event(12906851, Default, function(chrEntityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    EndIf(!EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ForceAnimationPlayback(chrEntityId, 7020, true, false, false);
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    ForceAnimationPlayback(chrEntityId, 7021, false, false, false);
});

// Progenitor Beast_part damage_part 1
$Event(12906853, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 73, 73);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_part damage_part 2
$Event(12906855, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 73, 73);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_part damage_part 3
$Event(12906857, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 73, 73);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_Part damage_Part 4
$Event(12906859, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 73, 73);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_Part damage_Part 5
$Event(12906861, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 72, 72);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 73, 73);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 1
$Event(12906831, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 2
$Event(12906833, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 3
$Event(12906835, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 4
$Event(12906837, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 5
$Event(12906839, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 59, 59);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 60, 60);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Boss BGM_Disable_Undercard
$Event(12906793, Default, function(eventFlagId, entityId, entityId2) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss BGM_Disable
$Event(12906814, Default, function(eventFlagId, entityId, entityId2) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    EnableBossMapSound(entityId, Disabled);
    EnableBossMapSound(entityId2, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Evil God_Heat Up_1st time
$Event(12906869, Default, function(chrEntityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(chrEntityId) < 0.7 && HPRatio(chrEntityId) != 0);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId, ON);
});

// Evil God_Heat Up_2nd time
$Event(12906870, Default, function(chrEntityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(chrEntityId) < 0.33 && HPRatio(chrEntityId) != 0 && EventFlag(eventFlagId));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Evil god_pull out arm
$Event(12906865, Restart, function(chrEntityId, npcPartId, npcPartId2, npcPartGroupIdx, bitNumber, bitNumber2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(chrEntityId, bitNumber2, ON);
        WaitFor(CharacterHasSpEffect(chrEntityId, 5402));
    }
L0:
    ChangeCharacterHitmask(chrEntityId, bitNumber, ON);
    ChangeCharacterHitmask(chrEntityId, bitNumber2, OFF);
    CreateNPCPart(chrEntityId, npcPartId, npcPartGroupIdx, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
});

// Evil God_part damage_part 1
$Event(12906871, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 300, 1, 1.4, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 2.1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 3
$Event(12906879, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 400, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 488, true);
    ClearSpEffect(chrEntityId, 498);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 498, true);
    ClearSpEffect(chrEntityId, 488);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 4
$Event(12906872, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 485, true);
    ClearSpEffect(chrEntityId, 495);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 495, true);
    ClearSpEffect(chrEntityId, 485);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_part damage_part 5
$Event(12906875, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 230, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 6
$Event(12906873, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part6, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part6, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 486, true);
    ClearSpEffect(chrEntityId, 496);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 496, true);
    ClearSpEffect(chrEntityId, 486);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 7
$Event(12906876, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part7, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part7, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 8
$Event(12906874, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part8, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part8, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 487, true);
    ClearSpEffect(chrEntityId, 497);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 497, true);
    ClearSpEffect(chrEntityId, 487);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 9
$Event(12906877, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part9, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part9, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 10
$Event(12906878, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part10, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part10, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 11
$Event(12906880, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part11, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part11, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 488, true);
    ClearSpEffect(chrEntityId, 498);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 498, true);
    ClearSpEffect(chrEntityId, 488);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 12
$Event(12906881, Default, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part12, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part12, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 488, true);
    ClearSpEffect(chrEntityId, 498);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 100, 1);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetSpEffect(chrEntityId, 498, true);
    ClearSpEffect(chrEntityId, 488);
    RequestCharacterAICommand(chrEntityId, -1, 1);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast (Bone)_Heat Up
$Event(12904889, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    RequestCharacterAICommand(chrEntityId, 2, 1);
    WaitFor(HPRatio(chrEntityId) < 0.67 && CharacterHasSpEffect(chrEntityId, 5402));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(chrEntityId, 100, 2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 20));
    RequestCharacterAICommand(chrEntityId, -1, 2);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(chrEntityId, 3, 1);
});

// Storm Beast (Bone)_Part Damage_Part 1
$Event(12904723, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 180, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, false, false);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 130, true);
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 2
$Event(12904724, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, false, false);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 150, true);
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 3
$Event(12904725, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, false, false);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 150, true);
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 4
$Event(12904726, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, false, false);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 200, true);
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 5
$Event(12904727, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(chrEntityId, 10, 2);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, false, false);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 300));
    SetNPCPartHP(chrEntityId, npcPartId2, 200, true);
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    ChangeCharactersCloth(chrEntityId, 10, 1);
    RestartEvent();
});

// Idiot Spider_Spider Child Replenishment_XX
$Event(12906882, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    SetCharacterGravity(chrEntityId, Disabled);
    SetSpEffect(chrEntityId, 5401, false);
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId2));
    WaitFor(
        EventFlag(eventFlagId)
            && (RandomElapsedSeconds(0, 1)
                || (ElapsedSeconds(1) && CharacterType(10000, TargetType.WhitePhantom))));
    SetCharacterGravity(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
    WaitFixedTimeFrames(64);
    SetCharacterAIState(chrEntityId, Enabled);
});

// Idiot Spider_Heat Up_XX
$Event(12906863, Default, function(chrEntityId, entityId, entityId2, eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(HPRatio(chrEntityId) <= 0.75 && HPRatio(chrEntityId) != 0);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10) && HPRatio(chrEntityId) != 0);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3021, false, false, false);
    RequestCharacterAICommand(chrEntityId, 101, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId, ON);
    WaitFor(HPRatio(chrEntityId) <= 0.5 && HPRatio(chrEntityId) != 0);
    RequestCharacterAICommand(chrEntityId, 110, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10) && HPRatio(chrEntityId) != 0);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId2, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    ForceAnimationPlayback(chrEntityId, 3021, false, false, false);
    RequestCharacterAICommand(chrEntityId, 111, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId2, ON);
});

// Idiot Spider_Child Spider Forced Death_XX
$Event(12906912, Default, function(chrEntityId, chrEntityId2, eventFlagId) {
    WaitFixedTimeFrames(1);
    chrFlag &= CharacterDead(chrEntityId);
    if (chrFlag) {
        ChangeCharacterEnableState(chrEntityId2, Disabled);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    chrFlag &= CharacterDead(chrEntityId) && EventFlag(eventFlagId);
    WaitFor(chrFlag);
    ForceCharacterDeath(chrEntityId2, false);
});

// Idiot Spider_Left Body Injury_XX
$Event(12906864, Default, function(chrEntityId) {
    CreateNPCPart(chrEntityId, 2, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 2, 59, 59);
    hp = NPCPartHP(chrEntityId, 2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    chr = CharacterHasEventMessage(chrEntityId, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        ForceAnimationPlayback(chrEntityId, 7000, false, false, false);
        SetNPCPartHP(chrEntityId, 2, 100, true);
        hp3 = NPCPartHP(chrEntityId, 2) <= 0;
        hp4 = HPRatio(chrEntityId) <= 0;
        chr2 = CharacterHasEventMessage(chrEntityId, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
            ForceAnimationPlayback(chrEntityId, 7001, false, false, false);
            SetNPCPartHP(chrEntityId, 2, 50, true);
            hp5 = NPCPartHP(chrEntityId, 2) <= 0;
            hp6 = HPRatio(chrEntityId) <= 0;
            chr3 = CharacterHasEventMessage(chrEntityId, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
                ForceAnimationPlayback(chrEntityId, 7002, false, false, false);
                CreateNPCPart(chrEntityId, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(chrEntityId, 2, 60, 60);
                RequestCharacterAIReplan(chrEntityId);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(chrEntityId, 2, -1, true);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot Spider_Right Body Injury_XX
$Event(12906867, Default, function(chrEntityId) {
    CreateNPCPart(chrEntityId, 3, NPCPartType.Part3, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 3, 59, 59);
    hp = NPCPartHP(chrEntityId, 3) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    chr = CharacterHasEventMessage(chrEntityId, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
        ForceAnimationPlayback(chrEntityId, 7005, false, false, false);
        SetNPCPartHP(chrEntityId, 3, 100, true);
        hp3 = NPCPartHP(chrEntityId, 3) <= 0;
        hp4 = HPRatio(chrEntityId) <= 0;
        chr2 = CharacterHasEventMessage(chrEntityId, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
            ForceAnimationPlayback(chrEntityId, 7006, false, false, false);
            SetNPCPartHP(chrEntityId, 3, 50, true);
            hp5 = NPCPartHP(chrEntityId, 3) <= 0;
            hp6 = HPRatio(chrEntityId) <= 0;
            chr3 = CharacterHasEventMessage(chrEntityId, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
                ForceAnimationPlayback(chrEntityId, 7007, false, false, false);
                CreateNPCPart(chrEntityId, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(chrEntityId, 3, 60, 60);
                RequestCharacterAIReplan(chrEntityId);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(chrEntityId, 3, -1, true);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeFrames(10);
    RestartEvent();
    RestartEvent();
});

// Idiot spider_head part setting_XX
$Event(12906868, Default, function(chrEntityId) {
    EndIf(EventFlag(13201800));
    CreateNPCPart(chrEntityId, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 1, 61, 61);
    hp = NPCPartHP(chrEntityId, 1) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RestartEvent();
});

// Messenger from the Moon (Large)_Tentacle Warp
$Event(12906829, Restart, function(chrEntityId, chrEntityId2, dummypolyId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(chrEntityId));
        SetCharacterGravity(chrEntityId2, Disabled);
    }
L0:
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, chrEntityId, dummypolyId, chrEntityId);
    RestartEvent();
});

// Emissary from the Moon (Large)_Disable Tentacles_XX
$Event(12904873, Restart, function(chrEntityId, chrEntityId2, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(CharacterDead(chrEntityId));
    }
L0:
    ChangeCharacterEnableState(chrEntityId2, Disabled);
});

// Envoy from the Moon (Large) Tentacle Stretch Control_XX
$Event(12904875, Restart, function(chrEntityId, entityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(HPRatio(chrEntityId) <= 0.5);
    ForceAnimationPlayback(entityId, 3000, false, false, false);
});

// Bloodthirsty Beast_Heat Up
$Event(12904884, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(HPRatio(chrEntityId) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 10));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(HPRatio(chrEntityId) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Uninterpolated);
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    RequestCharacterAICommand(chrEntityId, 101, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 20));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Moon Spawn_Kojima Particles
$Event(12904734, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterHasSpEffect(chrEntityId, 5650) && CharacterHPValue(chrEntityId) < 0);
    ShootBullet(2900000, chrEntityId, 6, 225100310, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// Moon Spawn_Heat Up
$Event(12904735, Default, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(HPRatio(chrEntityId) < 0.5);
    RequestCharacterAICommand(chrEntityId, 100, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Moon Spawn_Part Damage_Part 5
$Event(12904728, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 400, 1, 2, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part5, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 480, true);
    ClearSpEffect(chrEntityId, 490);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    SetSpEffect(chrEntityId, 490, true);
    ClearSpEffect(chrEntityId, 480);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Moon Spawn_part damage_part 1
$Event(12904729, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part1, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 481, true);
    ClearSpEffect(chrEntityId, 491);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    SetSpEffect(chrEntityId, 491, true);
    ClearSpEffect(chrEntityId, 481);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 2
$Event(12904730, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 482, true);
    ClearSpEffect(chrEntityId, 492);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    SetSpEffect(chrEntityId, 492, true);
    ClearSpEffect(chrEntityId, 482);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 3
$Event(12904731, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part3, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 483, true);
    ClearSpEffect(chrEntityId, 493);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    SetSpEffect(chrEntityId, 493, true);
    ClearSpEffect(chrEntityId, 483);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 4
$Event(12904732, Restart, function(chrEntityId, npcPartId, npcPartId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterAIState(chrEntityId, AIStateType.Combat));
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 74, 74);
    hp = NPCPartHP(chrEntityId, npcPartId2) <= 0;
    hp2 = HPRatio(chrEntityId) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(chrEntityId, npcPartId, NPCPartType.Part4, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(chrEntityId, npcPartId2, 75, 75);
    SetSpEffect(chrEntityId, 484, true);
    ClearSpEffect(chrEntityId, 494);
    RequestCharacterAIReplan(chrEntityId);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    ForceAnimationPlayback(chrEntityId, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(chrEntityId, 1, 0);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(CharacterHasEventMessage(chrEntityId, 500));
    SetSpEffect(chrEntityId, 494, true);
    ClearSpEffect(chrEntityId, 484);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNPCPartHP(chrEntityId, npcPartId2, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Bride double appears
$Event(12906942, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3, chrEntityId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId2));
    WaitFor(CharacterHasEventMessage(chrEntityId2, 90) && EventFlag(eventFlagId3));
    SetSpEffect(chrEntityId, 5610, false);
    IssueShortWarpRequest(chrEntityId, TargetEntityType.Area, entityId, -1);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 3021, false, true, false);
    SetEventFlag(eventFlagId, OFF);
    SetEventFlag(eventFlagId2, ON);
    WaitFor(EventFlag(eventFlagId));
    RestartEvent();
});

// Bride double disappears
$Event(12906960, Restart, function(chrEntityId, eventFlagId, eventFlagId2, chrEntityId2) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(chrEntityId2));
    dmg = CharacterDamagedBy(chrEntityId, 10000)
        || CharacterDamagedBy(chrEntityId, 2900248)
        || CharacterDamagedBy(chrEntityId, 2900249)
        || CharacterDamagedBy(chrEntityId, 2900250);
    WaitFor(dmg || (CharacterHasEventMessage(chrEntityId2, 80) && EventFlag(eventFlagId2)));
    if (dmg.Passed) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(chrEntityId, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    } else {
L0:
        ForceAnimationPlayback(chrEntityId, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(chrEntityId, Disabled);
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId, ON);
    RestartEvent();
});

// Warp OBJ_Registration_XX
$Event(12907000, Default, function(chrEntityId, objEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    ChangeCharacterEnableState(chrEntityId, Disabled);
    DeactivateObject(objEntityId, Disabled);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    if (!EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(chrEntityId, Disabled);
        DeactivateObject(objEntityId, Disabled);
        WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId3));
        DeactivateObject(objEntityId, Enabled);
        ChangeCharacterEnableState(chrEntityId, Enabled);
        SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 100, 100330);
    }
L0:
    DeactivateObject(objEntityId, Enabled);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    RegisterHealingFountain(eventFlagId2, objEntityId, 0, 0, 0, 0);
});

// Warp OBJ_start_XX
$Event(12907010, Default, function(eventFlagId, objEntityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    RotateCharacter(10000, objEntityId, 101170, false);
    WaitFixedTimeFrames(32);
    InitializeWarpObject(objEntityId);
});

// Warp OBJ_Warp to Base_XX
$Event(12907020, Default, function(eventFlagId, entityId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    
    if (!EventFlag(12100761)) {
        RotateCharacter(10000, entityId, 101160, false);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(1);
        $InitializeEvent(0, 10008600);
        WaitFixedTimeSeconds(2);
    } else {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        $InitializeEvent(0, 10008600);
        WaitFixedTimeSeconds(2);
    }
    
    if (EventFlag(9020)) {
        WarpPlayerToRespawnPoint(2102954);
        EndEvent();
    }
    if (EventFlag(9021)) {
        WarpPlayerToRespawnPoint(2102955);
        EndEvent();
    }
    if (EventFlag(9022)) {
        WarpPlayerToRespawnPoint(2102956);
        EndEvent();
    }
    if (EventFlag(9023)) {
        WarpPlayerToRespawnPoint(2102957);
        EndEvent();
    }
    if (EventFlag(9024)) {
        WarpPlayerToRespawnPoint(2102958);
        EndEvent();
    }
    if (EventFlag(9025)) {
        WarpPlayerToRespawnPoint(2102959);
        EndEvent();
    }
    if (EventFlag(9026)) {
        WarpPlayerToRespawnPoint(2102960);
        EndEvent();
    }
    WarpPlayerToRespawnPoint(2102954);
});

// warp OBJ_ warp from base_XX
$Event(12907030, Default, function(eventFlagId, objEntityId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 100, 100321);
    InitializeWarpObject(objEntityId);
    SetEventFlag(eventFlagId, OFF);
});

// Key acquisition monitoring process_XX
$Event(12907300, Default, function(itemId, eventFlagId) {
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    SetEventFlag(eventFlagId, ON);
});

// Multi-intrusion management
$Event(12907400, Default, function() {
    WaitFor(
        (EventFlag(12907230)
            && EventFlag(12907231)
            && NumberOfClientsOfType(ClientType.Invader) < 2)
            || (NumberOfClientsOfType(ClientType.Invader) < 1
                && (EventFlag(12907230) || EventFlag(12907231))));
    WaitFor(ElapsedSeconds(10) && CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 9020, false);
    DisplayMessage(100002, 0);
    WaitFor(
        (!EventFlag(12907230) && !EventFlag(12907231))
            || (EventFlag(12907230)
                && !EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (!EventFlag(12907230)
                && EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (EventFlag(12907230)
                && EventFlag(12907231)
                && NumberOfClientsOfType(ClientType.Invader) >= 2));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    RestartEvent();
});

// Widow_Appearance_Placement Widow_XX
$Event(12907401, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (!EventFlag(92905340)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(eventFlagId4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025))
        && !EventFlag(eventFlagId2)
        && !EventFlag(eventFlagId3)
        && EventFlag(eventFlagId5);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (EventFlag(eventFlagId4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(12907230, ON);
});

// widow_appearance_appearance widow_XX
$Event(12907405, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    flag = !EventFlag(eventFlagId4) && EventFlag(eventFlagId6);
    if (!flag) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025))
        && !EventFlag(eventFlagId2)
        && !EventFlag(eventFlagId3)
        && EventFlag(eventFlagId5);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (!flag.Passed) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(12907231, ON);
});

// Widow_Disappeared_Placement Widow_XX
$Event(12907409, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3));
    hp = HPRatio(chrEntityId) == 0;
    WaitFor(EventFlag(eventFlagId) && (hp || EventFlag(eventFlagId3)));
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(12907230, OFF);
    if (hp.Passed) {
        SetEventFlag(eventFlagId4, ON);
        EndIf(EventFlag(12907231));
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
});

// Widow_Disappearing_Appearing Widow_XX
$Event(12907413, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3));
    hp = HPRatio(chrEntityId) == 0;
    WaitFor(EventFlag(eventFlagId) && (hp || EventFlag(eventFlagId3)));
    SetEventFlag(eventFlagId2, ON);
    SetEventFlag(12907231, OFF);
    if (hp.Passed) {
        SetEventFlag(eventFlagId4, ON);
        EndIf(EventFlag(12907230));
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
});

// widow_bell_control_XX
$Event(12907440, Default, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2));
    WaitFor(CharacterHasSpEffect(10000, 9020));
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    WaitFor(!CharacterHasSpEffect(10000, 9020) || EventFlag(eventFlagId2));
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    RestartEvent();
});

// Added PCHP reduction special effect
$Event(12907420, Default, function(spEffectId, eventFlagId, spEffectId2, spEffectId3) {
    EndIf(!EventFlag(eventFlagId));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, spEffectId, false);
        EndEvent();
    }
    if (!(CharacterHasSpEffect(10000, 6142) && CharacterType(10000, TargetType.WhitePhantom))) {
        SetSpEffect(10000, spEffectId2, false);
        EndEvent();
    }
    SetSpEffect(10000, spEffectId3, false);
});

// Hierarchical stay flag processing_XX
$Event(12907430, Default, function(areaEntityId, eventFlagId) {
    SetEventFlag(eventFlagId, OFF);
    WaitFor(InArea(10000, areaEntityId) && HasMultiplayerState(MultiplayerState.Host));
    WaitFixedTimeFrames(1);
    SetEventFlag(eventFlagId, ON);
    WaitFor(!InArea(10000, areaEntityId) && HasMultiplayerState(MultiplayerState.Host));
    RestartEvent();
});

// Multi Confinement Wall_XX
$Event(12907600, Default, function(objEntityId, entityId) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(objEntityId, Disabled);
    DeleteMapSFX(entityId, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    DeactivateObject(objEntityId, Enabled);
    SpawnMapSFX(entityId);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    RestartEvent();
});

// Dungeon_New NPC Summoning_Summoning Judgment_General Purpose
$Event(12906962, Restart, function(eventFlagId, entityId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    if (EventFlag(12100889)) {
        SetEventFlag(eventFlagId2, OFF);
        SetEventFlag(eventFlagId3, OFF);
        SpawnMapSFX(entityId);
        WaitFor(EventFlag(eventFlagId2));
        DeleteMapSFX(entityId, true);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        SetEventFlag(eventFlagId, OFF);
        DeleteMapSFX(entityId, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(eventFlagId5))
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(eventFlagId, ON);
    SpawnMapSFX(entityId);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(eventFlagId2)
                && !EventFlag(eventFlagId3)
                && !EventFlag(eventFlagId4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(eventFlagId5))));
    SetEventFlag(eventFlagId, OFF);
    DeleteMapSFX(entityId, true);
    RestartEvent();
});

// Dungeon_New NPC Summon_Participation_XX
$Event(12906966, Restart, function(signType, entityId, areaEntityId, eventFlagId, eventFlagId2, actionButtonParameterId, eventFlagId3, eventFlagId4) {
    if (EventFlag(12100889)) {
        ChangeCharacterEnableState(entityId, Disabled);
        WaitFor(!EventFlag(eventFlagId) && ActionButtonInArea(actionButtonParameterId, entityId));
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Character, 10000, 236, 10000);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 100111, false, false, false);
        SetSpEffect(10000, 4682, false);
        SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
        ClearSpEffect(10000, 9005);
        ClearSpEffect(10000, 9025);
        WaitFixedTimeSeconds(5);
        DisplayMessage(100051, 0);
        WaitFixedTimeSeconds(5);
        WarpCharacterAndCopyFloor(entityId, TargetEntityType.Area, areaEntityId, -1, areaEntityId);
        ActivateHit(2404120, Disabled);
        EndEvent();
    }
    if (!EventFlag(eventFlagId)) {
        ChangeCharacterEnableState(entityId, Disabled);
    }
    GotoIf(S0, EventFlag(eventFlagId2));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(eventFlagId));
S0:
    ChangeCharacterEnableState(entityId, Disabled);
S1:
    EndIf(EventFlag(eventFlagId3));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(entityId, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlagState(ON, TargetEventFlagType.EventIDAndSlotNumber, 14)
            && !EventFlag(eventFlagId3)
            && ActionButtonInArea(actionButtonParameterId, entityId));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(signType, entityId, areaEntityId, eventFlagId, eventFlagId2);
    SetEventFlag(eventFlagId4, ON);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★Dungeon_New NPC summons_Aim for the boss room_XX
$Event(12906970, Restart, function(chrEntityId, entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(chrEntityId, entityId, 1);
    WaitFor(EventFlag(eventFlagId) && !EventFlag(eventFlagId2) && EventFlag(eventFlagId3));
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Dungeon_New NPC summons_Enter boss room_XX
$Event(12906974, Restart, function(chrEntityId, areaEntityId, entityId, areaEntityId2, playAnimationId, eventFlagId, areaEntityId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    WaitFor(EventFlag(eventFlagId) && InArea(chrEntityId, areaEntityId));
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    RequestCharacterAnimationReset(chrEntityId, Interpolation.Interpolated);
    RotateCharacter(chrEntityId, entityId, playAnimationId, true);
    RestartIf(!InArea(chrEntityId, areaEntityId2));
    SetEventPoint(chrEntityId, entityId, 1);
    RequestCharacterAICommand(chrEntityId, 990, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetCharacterGravity(chrEntityId, Disabled);
    SetCharacterMaphits(chrEntityId, true);
    WaitFor(InArea(chrEntityId, areaEntityId3));
    SetCharacterGravity(chrEntityId, Enabled);
    SetCharacterMaphits(chrEntityId, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Dungeon_New NPC summons_Disabled throw during boss battle_XX
$Event(12907610, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && EventFlag(eventFlagId3));
    SetSpEffectAndUnknown200455(chrEntityId, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// Coping process for staggered entry guests_XX
$Event(12907620, Restart, function(eventFlagId, eventFlagId2) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
});

// Coping process for staggered entry guests_with enemy appearance_XX
$Event(12907625, Restart, function(eventFlagId, eventFlagId2, chrEntityId) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId, Enabled);
});

// Coping process for staggered entry guests_with 3 enemies appearing_XX
$Event(12907630, Restart, function(eventFlagId, eventFlagId2, chrEntityId, chrEntityId2, chrEntityId3) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(eventFlagId, ON);
    SetEventFlag(eventFlagId2, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId2, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(chrEntityId3, Enabled);
});

// lamp music
$Event(10000100, Default, function(soundState1, soundState2, lampActiveFlag, bossDefeatFlag) {
    SetMapSoundState(soundState1, Disabled);
    SetMapSoundState(soundState2, Disabled);
    WaitFor(EventFlag(12100891) && EventFlag(lampActiveFlag));
    if (bossDefeatFlag != -1) {
        WaitFor(EventFlag(bossDefeatFlag));
    }
    SetEventFlag(12103903, OFF);
    if (!AnyBatchEventFlags(12103904, 12103907)) {
        SetEventFlag(12103904, ON);
    }
    GotoIf(L0, EventFlag(12103904)); // default
    GotoIf(L1, EventFlag(12103905)); // music 1
    GotoIf(L2, EventFlag(12103906)); // music 2
    GotoIf(L3, EventFlag(12103907)); // no music
L0:
    if (!EventFlag(9462)) {
        if (!(PlayerInsightAmount() >= 50 || EventFlag(9802))) {
            Goto(L1);
        }
        Goto(L2);
    }
    Goto(L3);
L1:
    SetMapSoundState(soundState1, Enabled);
    SetMapSoundState(soundState2, Disabled);
    Goto(L4);
L2:
    SetMapSoundState(soundState1, Disabled);
    SetMapSoundState(soundState2, Enabled);
    Goto(L4);
L3:
    SetMapSoundState(soundState1, Disabled);
    SetMapSoundState(soundState2, Disabled);
    Goto(L4);
L4:
    WaitFor(EventFlag(12103903));
    WaitFixedTimeFrames(1);
    RestartEvent();
});
