// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ダンジョン_トラップ発動_錆びた宝箱\u0000ダンジョン_ギミック起動_魔法壁消失\u0000ダンジョン_トラップ発動_錆びた扉\u0000ダンジョン_トラップ発動_テレポーター\u0000ダンジョン_トラップ発動_落とし穴\u0000ダンジョン_トラップ発動_火矢作動\u0000ダンジョン_ギミック起動_跳ね橋降下\u0000ボス_撃破\u0000PC情報_ボス撃破_上層\u0000PC情報_ボス撃破_中層\u0000PC情報_ボス撃破_下層\u0000PC情報_ボス撃破_最下層\u0000クリア時間_通し\u0000PC情報_ダンジョン到達時\u0000ダンジョン_上層_クリア時間_通し\u0000ダンジョン_上層_クリア時間_1プレイ\u0000ダンジョン_中層_クリア時間_通し\u0000ダンジョン_中層_クリア時間_1プレイ\u0000ダンジョン_下層_クリア時間_通し\u0000ダンジョン_下層_クリア時間_1プレイ\u0000ダンジョン_最下層_クリア時間_通し\u0000ダンジョン_最下層_クリア時間_1プレイ\u0000ダンジョン_トラップ発動_落下敵\u0000ダンジョン_ギミック起動_血舐め発生\u0000ダンジョン_トラップ発動_悪霊女出現\u0000ダンジョン_トラップ発動_ギロチン\u0000ダンジョン_トラップ発動_クモ天井待機\u0000ダンジョン_トラップ発動_クモ天井待機_領域使用\u0000ダンジョン_トラップ発動_飛び出す敵\u0000ダンジョン_トラップ発動_領域で飛び出す敵\u0000ダンジョン_トラップ発動_モンスタールーム\u0000ダンジョン_ギミック起動_強化憑依\u0000ダンジョン_トラップ発動_鐘を鳴らす\u0000ダンジョン_トラップ発動_モンスタールーム_巣に帰る\u0000ダンジョン_トラップ発動_伏兵落下\u0000ボス_戦闘開始\u0000ダンジョン_ボスラッシュ前座_撃破時間\u0000ダンジョン_上層_ボス戦_撃破時間\u0000ダンジョン_中層_ボス戦_撃破時間\u0000ダンジョン_下層_ボス戦_撃破時間\u0000ダンジョン_最下層_ボス戦_撃破時間\u0000ダンジョン_トラップ発動_火薬タル爆発\u0000\u0000"
// @linked    []
// @version    3.4.2
// ==/EMEVD==

var area_id = 29;
var block_id = 0;

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
    
    InitializeEvent(0, 1511, 0);
    
    SetEventFlag(1509, OFF);
    SetEventFlag(1510, OFF);
    SetEventFlag(12100761, OFF); // re-enable rest in the menu
    
    SetEventFlag(8900+boss_1_offset, OFF);
    SetEventFlag(8900+boss_2_offset, OFF);
    SetEventFlag(8900+boss_3_offset, OFF);
    SetEventFlag(8900+boss_4_offset, OFF);
    
    InitializeEvent(38, 7900, 10000000+boss_1_return, boss_1_return, area_id, block_id, 8500+lamp_1_offset);
    InitializeEvent(39, 7900, 10000000+boss_1_return-1, boss_1_return, area_id, block_id, 8500+lamp_2_offset);
    
    InitializeEvent(40, 7900, 10000000+boss_2_return, boss_2_return, area_id, block_id, 8500+lamp_1_offset);
    InitializeEvent(41, 7900, 10000000+boss_2_return-1, boss_2_return, area_id, block_id, 8500+lamp_2_offset);
    InitializeEvent(42, 7900, 10000000+boss_2_return-2, boss_2_return, area_id, block_id, 8500+boss_1_lamp_offset);
    InitializeEvent(43, 7900, 10000000+boss_2_return-3, boss_2_return, area_id, block_id, 8500+lamp_4_offset);
    
    InitializeEvent(44, 7900, 10000000+boss_3_return, boss_3_return, area_id, block_id, 8500+lamp_1_offset);
    InitializeEvent(45, 7900, 10000000+boss_3_return-1, boss_3_return, area_id, block_id, 8500+lamp_2_offset);
    InitializeEvent(46, 7900, 10000000+boss_3_return-2, boss_3_return, area_id, block_id, 8500+boss_1_lamp_offset);
    InitializeEvent(47, 7900, 10000000+boss_3_return-3, boss_3_return, area_id, block_id, 8500+lamp_4_offset);
    InitializeEvent(48, 7900, 10000000+boss_3_return-4, boss_3_return, area_id, block_id, 8500+boss_2_lamp_offset);
    InitializeEvent(49, 7900, 10000000+boss_3_return-5, boss_3_return, area_id, block_id, 8500+lamp_6_offset);
    
    InitializeEvent(50, 7900, 10000000+boss_4_return, boss_4_return, area_id, block_id, 8500+lamp_1_offset);
    InitializeEvent(51, 7900, 10000000+boss_4_return-1, boss_4_return, area_id, block_id, 8500+lamp_2_offset);
    InitializeEvent(52, 7900, 10000000+boss_4_return-2, boss_4_return, area_id, block_id, 8500+boss_1_lamp_offset);
    InitializeEvent(53, 7900, 10000000+boss_4_return-3, boss_4_return, area_id, block_id, 8500+lamp_4_offset);
    InitializeEvent(54, 7900, 10000000+boss_4_return-4, boss_4_return, area_id, block_id, 8500+boss_2_lamp_offset);
    InitializeEvent(55, 7900, 10000000+boss_4_return-5, boss_4_return, area_id, block_id, 8500+lamp_6_offset);
    InitializeEvent(56, 7900, 10000000+boss_4_return-6, boss_4_return, area_id, block_id, 8500+boss_3_lamp_offset);
    InitializeEvent(57, 7900, 10000000+boss_4_return-7, boss_4_return, area_id, block_id, 8500+lamp_8_offset);
    
    if (EventFlag(8950)) {
        SetEventFlag(8950, OFF);
        SetSpEffect(10000, 4682, false);
    }
    
    InitializeEvent(boss_1_offset, 7700, boss_1_defeat+1011, boss_1_defeat+1012, boss_1_lamp_id+1000);
    InitializeEvent(boss_2_offset, 7700, boss_2_defeat+1021, boss_2_defeat+1022, boss_2_lamp_id+1000);
    InitializeEvent(boss_3_offset, 7700, boss_3_defeat+1031, boss_3_defeat+1032, boss_3_lamp_id+1000);
    InitializeEvent(boss_4_offset, 7700, boss_4_defeat+1041, boss_4_defeat+1042, boss_4_lamp_id+1000);
    
    InitializeEvent(lamp_1_offset, 8100, 8100+lamp_1_offset, lamp_1_kindle);
    InitializeEvent(lamp_2_offset, 8100, 8100+lamp_2_offset, lamp_2_kindle);
    InitializeEvent(boss_1_lamp_offset, 8100, 8100+boss_1_lamp_offset, boss_1_lamp_kindle);
    InitializeEvent(lamp_4_offset, 8100, 8100+lamp_4_offset, lamp_4_kindle);
    InitializeEvent(boss_2_lamp_offset, 8100, 8100+boss_2_lamp_offset, boss_2_lamp_kindle);
    InitializeEvent(lamp_6_offset, 8100, 8100+lamp_6_offset, lamp_6_kindle);
    InitializeEvent(boss_3_lamp_offset, 8100, 8100+boss_3_lamp_offset, boss_3_lamp_kindle);
    InitializeEvent(lamp_8_offset, 8100, 8100+lamp_8_offset, lamp_8_kindle);
    InitializeEvent(boss_4_lamp_offset, 8100, 8100+boss_4_lamp_offset, boss_4_lamp_kindle);
    
    InitializeEvent(lamp_1_offset, 8300, lamp_1_id+2000, -1, lamp_1_kindle, lamp_1_id+6000, lamp_1_id+3000)
    InitializeEvent(lamp_1_offset, 8300, lamp_2_id+2000, -1, lamp_2_kindle, lamp_2_id+6000, lamp_2_id+3000)
    InitializeEvent(lamp_1_offset, 8300, lamp_4_id+2000, -1, lamp_4_kindle, lamp_4_id+6000, lamp_4_id+3000)
    InitializeEvent(lamp_1_offset, 8300, lamp_6_id+2000, -1, lamp_6_kindle, lamp_6_id+6000, lamp_6_id+3000)
    InitializeEvent(lamp_1_offset, 8300, lamp_8_id+2000, -1, lamp_8_kindle, lamp_8_id+6000, lamp_8_id+3000)
    
    if(EventFlag(boss_1_defeat+1013) && !EventFlag(boss_1_defeat+1019)) {
        SetEventFlag(boss_1_defeat+1013, OFF);
        SetEventFlag(boss_1_defeat, ON);
        InitializeEvent(boss_1_lamp_offset, 8300, boss_1_lamp_id+2000, 999, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_1_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(boss_1_defeat+1012) || EventFlag(boss_1_defeat+1019)) {
        SetEventFlag(boss_1_defeat, OFF);
        SetEventFlag(boss_1_defeat+1012, OFF);
        SetEventFlag(boss_1_defeat+1013, ON);
        SetEventFlag(boss_1_defeat+1019, OFF);
        SetEventFlag(8900+boss_1_offset, ON);
        InitializeEvent(boss_1_lamp_offset, 8300, boss_1_lamp_id+2000, -1, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
    }
    else {
        InitializeEvent(boss_1_lamp_offset, 8300, boss_1_lamp_id+2000, -1, boss_1_lamp_kindle, boss_1_lamp_id+6000, boss_1_lamp_id+3000);
    }
    
    if(EventFlag(boss_2_defeat+1023) && !EventFlag(boss_2_defeat+1029)) {
        SetEventFlag(boss_2_defeat+1023, OFF);
        SetEventFlag(boss_2_defeat, ON);
        InitializeEvent(boss_2_lamp_offset, 8300, boss_2_lamp_id+2000, 999, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_2_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(boss_2_defeat+1022) || EventFlag(boss_2_defeat+1029)) {
        SetEventFlag(boss_2_defeat, OFF);
        SetEventFlag(boss_2_defeat+1022, OFF);
        SetEventFlag(boss_2_defeat+1023, ON);
        SetEventFlag(boss_2_defeat+1029, OFF);
        SetEventFlag(8900+boss_2_offset, ON);
        InitializeEvent(boss_2_lamp_offset, 8300, boss_2_lamp_id+2000, -1, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
    }
    else {
        InitializeEvent(boss_2_lamp_offset, 8300, boss_2_lamp_id+2000, -1, boss_2_lamp_kindle, boss_2_lamp_id+6000, boss_2_lamp_id+3000);
    }
    
    if(EventFlag(boss_3_defeat+1033) && !EventFlag(boss_3_defeat+1039)) {
        SetEventFlag(boss_3_defeat+1033, OFF);
        SetEventFlag(boss_3_defeat, ON);
        InitializeEvent(boss_3_lamp_offset, 8300, boss_3_lamp_id+2000, 999, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_3_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(boss_3_defeat+1032) || EventFlag(boss_3_defeat+1039)) {
        SetEventFlag(boss_3_defeat, OFF);
        SetEventFlag(boss_3_defeat+1032, OFF);
        SetEventFlag(boss_3_defeat+1033, ON);
        SetEventFlag(boss_3_defeat+1039, OFF);
        SetEventFlag(8900+boss_3_offset, ON);
        InitializeEvent(boss_3_lamp_offset, 8300, boss_3_lamp_id+2000, -1, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
    }
    else {
        InitializeEvent(boss_3_lamp_offset, 8300, boss_3_lamp_id+2000, -1, boss_3_lamp_kindle, boss_3_lamp_id+6000, boss_3_lamp_id+3000);
    }
    
    if(EventFlag(boss_4_defeat+1043) && !EventFlag(boss_4_defeat+1049)) {
        SetEventFlag(boss_4_defeat+1043, OFF);
        SetEventFlag(boss_4_defeat, ON);
        InitializeEvent(boss_4_lamp_offset, 8300, boss_4_lamp_id+2000, 999, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(boss_4_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(boss_4_defeat+1042) || EventFlag(boss_4_defeat+1049)) {
        SetEventFlag(boss_4_defeat, OFF);
        SetEventFlag(boss_4_defeat+1042, OFF);
        SetEventFlag(boss_4_defeat+1043, ON);
        SetEventFlag(boss_4_defeat+1049, OFF);
        SetEventFlag(8900+boss_4_offset, ON);
        InitializeEvent(boss_4_lamp_offset, 8300, boss_4_lamp_id+2000, -1, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
    }
    else {
        InitializeEvent(boss_4_lamp_offset, 8300, boss_4_lamp_id+2000, -1, boss_4_lamp_kindle, boss_4_lamp_id+6000, boss_4_lamp_id+3000);
    }
    
    InitializeEvent(lamp_1_offset, 8500, 8500+lamp_1_offset, lamp_1_id, 72114444);
    InitializeEvent(lamp_2_offset, 8500, 8500+lamp_2_offset, lamp_2_id, 72114545);
    InitializeEvent(boss_1_lamp_offset, 8500, 8500+boss_1_lamp_offset, boss_1_lamp_id, 72114646);
    InitializeEvent(lamp_4_offset, 8500, 8500+lamp_4_offset, lamp_4_id, 72114747);
    InitializeEvent(boss_2_lamp_offset, 8500, 8500+boss_2_lamp_offset, boss_2_lamp_id, 72114848);
    InitializeEvent(lamp_6_offset, 8500, 8500+lamp_6_offset, lamp_6_id, 72114949);
    InitializeEvent(boss_3_lamp_offset, 8500, 8500+boss_3_lamp_offset, boss_3_lamp_id, 72115050);
    InitializeEvent(lamp_8_offset, 8500, 8500+lamp_8_offset, lamp_8_id, 72115151);
    InitializeEvent(boss_4_lamp_offset, 8500, 8500+boss_4_lamp_offset, boss_4_lamp_id, 72115252);
    
    InitializeEvent(0, 8700, 0); // disable item refill after time limit
    
    InitializeEvent(boss_1_offset, 8900, boss_1_defeat+1019, boss_1_lamp_id+1000, boss_1_lamp_id+5000);
    InitializeEvent(boss_2_offset, 8900, boss_2_defeat+1029, boss_2_lamp_id+1000, boss_2_lamp_id+5000);
    InitializeEvent(boss_3_offset, 8900, boss_3_defeat+1039, boss_3_lamp_id+1000, boss_3_lamp_id+5000);
    InitializeEvent(boss_4_offset, 8900, boss_4_defeat+1049, boss_4_lamp_id+1000, boss_4_lamp_id+5000);
    
    InitializeEvent(0, 12101000, 4110, 2100211, 2561);
    InitializeEvent(1, 12101000, 4111, 2100211, 3330);
    InitializeEvent(2, 12101000, 4112, 2100211, 3843);
    InitializeEvent(3, 12101000, 4113, 2100212, 3840);
    InitializeEvent(4, 12101000, 4114, 2100212, 3073);
    InitializeEvent(5, 12101000, 4115, 2100212, 2818);
    InitializeEvent(6, 12101000, 4116, 2100212, 3843);
    InitializeEvent(7, 12101000, 4117, 2100213, 3840);
    InitializeEvent(8, 12101000, 4118, 2100213, 3841);
    InitializeEvent(9, 12101000, 4119, 2100213, 3842);
    
    InitializeEvent(0, 12101010, 0);
    InitializeEvent(0, 12100005, 0);
    
    // specialty items
    InitializeEvent(0, 12101300, 0);
    InitializeEvent(0, 12101301, 0);
    InitializeEvent(0, 12101302, 0);
    InitializeEvent(0, 12101303, 0);
    InitializeEvent(0, 12101310, 0);
    InitializeEvent(0, 12101320, 0);
    InitializeEvent(0, 12101330, 0);
    InitializeEvent(0, 12101331, 0);
    InitializeEvent(0, 12101332, 0);
    InitializeEvent(0, 12101333, 0);
    InitializeEvent(0, 12101334, 0);
    InitializeEvent(0, 12101340, 0);
    InitializeEvent(0, 12101360, 0);
    InitializeEvent(0, 12101361, 0);
    
    // beast and broccoli
    InitializeEvent(0, 12100770, 0);
    InitializeEvent(0, 12100769, 0);
    
    InitializeEvent(0, 12105062, 0);
    
    InitializeEvent(0, 12105020, 0);
    InitializeEvent(0, 12105021, 0);
    InitializeEvent(0, 12105022, 0);
    InitializeEvent(0, 12105023, 0);
    InitializeEvent(0, 12105024, 0);
    
    SetEventFlag(72100420, OFF);
    SetEventFlag(72100421, OFF);
    SetEventFlag(72100422, OFF);
    SetEventFlag(72100423, OFF);
    SetEventFlag(72100424, OFF);
    SetEventFlag(72100425, OFF);
    SetEventFlag(72100426, OFF);
    
    InitializeEvent(4400, 12107000, 72114400, 2901950, 2412950);
    InitializeEvent(4401, 12107000, 72114401, 2901950, 2412951);
    InitializeEvent(4402, 12107000, 72114402, 2901950, 2412952);
    InitializeEvent(4403, 12107000, 72114403, 2901950, 2412953);
    InitializeEvent(4404, 12107000, 72114404, 2901950, 2402950);
    InitializeEvent(4405, 12107000, 72114405, 2901950, 2402951);
    InitializeEvent(4406, 12107000, 72114406, 2901950, 2422950);
    InitializeEvent(4407, 12107000, 72114407, 2901950, 2422952);
    InitializeEvent(4408, 12107000, 72114408, 2901950, 2422951);
    InitializeEvent(4409, 12107000, 72114409, 2901950, 2302950);
    InitializeEvent(4410, 12107000, 72114410, 2901950, 2302951);
    InitializeEvent(4411, 12107000, 72114411, 2901950, 2302952);
    InitializeEvent(4412, 12107000, 72114412, 2901950, 2202950);
    InitializeEvent(4413, 12107000, 72114413, 2901950, 2202951);
    InitializeEvent(4414, 12107000, 72114414, 2901950, 2702950);
    InitializeEvent(4415, 12107000, 72114415, 2901950, 2702951);
    InitializeEvent(4416, 12107000, 72114416, 2901950, 3202950);
    InitializeEvent(4417, 12107000, 72114417, 2901950, 3202952);
    InitializeEvent(4418, 12107000, 72114418, 2901950, 2802950);
    InitializeEvent(4419, 12107000, 72114419, 2901950, 2802953);
    InitializeEvent(4420, 12107000, 72114420, 2901950, 2802951);
    InitializeEvent(4421, 12107000, 72114421, 2901950, 2802952);
    InitializeEvent(4422, 12107000, 72114422, 2901950, 2502950);
    InitializeEvent(4423, 12107000, 72114423, 2901950, 2502952);
    InitializeEvent(4424, 12107000, 72114424, 2901950, 2502951);
    InitializeEvent(4425, 12107000, 72114425, 2901950, 2112950);
    InitializeEvent(4426, 12107000, 72114426, 2901950, 3202951);
    InitializeEvent(4427, 12107000, 72114427, 2901950, 3202953);
    InitializeEvent(4428, 12107000, 72114428, 2901950, 3302950);
    InitializeEvent(4429, 12107000, 72114429, 2901950, 3302951);
    InitializeEvent(4430, 12107000, 72114430, 2901950, 2602950);
    InitializeEvent(4431, 12107000, 72114431, 2901950, 2602953);
    InitializeEvent(4432, 12107000, 72114432, 2901950, 2602952);
    InitializeEvent(4433, 12107000, 72114433, 2901950, 2602951);
    InitializeEvent(4434, 12107000, 72114434, 2901950, 3402950);
    InitializeEvent(4435, 12107000, 72114435, 2901950, 3402951);
    InitializeEvent(4436, 12107000, 72114436, 2901950, 3402953);
    InitializeEvent(4437, 12107000, 72114437, 2901950, 3402952);
    InitializeEvent(4438, 12107000, 72114438, 2901950, 3502950);
    InitializeEvent(4439, 12107000, 72114439, 2901950, 3502951);
    InitializeEvent(4440, 12107000, 72114440, 2901950, 3502952);
    InitializeEvent(4441, 12107000, 72114441, 2901950, 3602950);
    InitializeEvent(4442, 12107000, 72114442, 2901950, 3602951);
    InitializeEvent(4443, 12107000, 72114443, 2901950, 3602952);
    InitializeEvent(4444, 12107000, 72114444, 2901950, 2902950);
    InitializeEvent(4445, 12107000, 72114445, 2901950, 2902951);
    InitializeEvent(4446, 12107000, 72114446, 2901950, 2902952);
    InitializeEvent(4447, 12107000, 72114447, 2901950, 2902953);
    InitializeEvent(4448, 12107000, 72114448, 2901950, 2902954);
    InitializeEvent(4449, 12107000, 72114449, 2901950, 2902955);
    InitializeEvent(4450, 12107000, 72114450, 2901950, 2902956);
    InitializeEvent(4451, 12107000, 72114451, 2901950, 2902957);
    InitializeEvent(4452, 12107000, 72114452, 2901950, 2902958);
    InitializeEvent(4453, 12107000, 72114453, 2901950, 2902959);

    InitializeEvent(4500, 12107000, 72114500, 2901951, 2412950);
    InitializeEvent(4501, 12107000, 72114501, 2901951, 2412951);
    InitializeEvent(4502, 12107000, 72114502, 2901951, 2412952);
    InitializeEvent(4503, 12107000, 72114503, 2901951, 2412953);
    InitializeEvent(4504, 12107000, 72114504, 2901951, 2402950);
    InitializeEvent(4505, 12107000, 72114505, 2901951, 2402951);
    InitializeEvent(4506, 12107000, 72114506, 2901951, 2422950);
    InitializeEvent(4507, 12107000, 72114507, 2901951, 2422952);
    InitializeEvent(4508, 12107000, 72114508, 2901951, 2422951);
    InitializeEvent(4509, 12107000, 72114509, 2901951, 2302950);
    InitializeEvent(4510, 12107000, 72114510, 2901951, 2302951);
    InitializeEvent(4511, 12107000, 72114511, 2901951, 2302952);
    InitializeEvent(4512, 12107000, 72114512, 2901951, 2202950);
    InitializeEvent(4513, 12107000, 72114513, 2901951, 2202951);
    InitializeEvent(4514, 12107000, 72114514, 2901951, 2702950);
    InitializeEvent(4515, 12107000, 72114515, 2901951, 2702951);
    InitializeEvent(4516, 12107000, 72114516, 2901951, 3202950);
    InitializeEvent(4517, 12107000, 72114517, 2901951, 3202952);
    InitializeEvent(4518, 12107000, 72114518, 2901951, 2802950);
    InitializeEvent(4519, 12107000, 72114519, 2901951, 2802953);
    InitializeEvent(4520, 12107000, 72114520, 2901951, 2802951);
    InitializeEvent(4521, 12107000, 72114521, 2901951, 2802952);
    InitializeEvent(4522, 12107000, 72114522, 2901951, 2502950);
    InitializeEvent(4523, 12107000, 72114523, 2901951, 2502952);
    InitializeEvent(4524, 12107000, 72114524, 2901951, 2502951);
    InitializeEvent(4525, 12107000, 72114525, 2901951, 2112950);
    InitializeEvent(4526, 12107000, 72114526, 2901951, 3202951);
    InitializeEvent(4527, 12107000, 72114527, 2901951, 3202953);
    InitializeEvent(4528, 12107000, 72114528, 2901951, 3302950);
    InitializeEvent(4529, 12107000, 72114529, 2901951, 3302951);
    InitializeEvent(4530, 12107000, 72114530, 2901951, 2602950);
    InitializeEvent(4531, 12107000, 72114531, 2901951, 2602953);
    InitializeEvent(4532, 12107000, 72114532, 2901951, 2602952);
    InitializeEvent(4533, 12107000, 72114533, 2901951, 2602951);
    InitializeEvent(4534, 12107000, 72114534, 2901951, 3402950);
    InitializeEvent(4535, 12107000, 72114535, 2901951, 3402951);
    InitializeEvent(4536, 12107000, 72114536, 2901951, 3402953);
    InitializeEvent(4537, 12107000, 72114537, 2901951, 3402952);
    InitializeEvent(4538, 12107000, 72114538, 2901951, 3502950);
    InitializeEvent(4539, 12107000, 72114539, 2901951, 3502951);
    InitializeEvent(4540, 12107000, 72114540, 2901951, 3502952);
    InitializeEvent(4541, 12107000, 72114541, 2901951, 3602950);
    InitializeEvent(4542, 12107000, 72114542, 2901951, 3602951);
    InitializeEvent(4543, 12107000, 72114543, 2901951, 3602952);
    InitializeEvent(4544, 12107000, 72114544, 2901951, 2902950);
    InitializeEvent(4545, 12107000, 72114545, 2901951, 2902951);
    InitializeEvent(4546, 12107000, 72114546, 2901951, 2902952);
    InitializeEvent(4547, 12107000, 72114547, 2901951, 2902953);
    InitializeEvent(4548, 12107000, 72114548, 2901951, 2902954);
    InitializeEvent(4549, 12107000, 72114549, 2901951, 2902955);
    InitializeEvent(4550, 12107000, 72114550, 2901951, 2902956);
    InitializeEvent(4551, 12107000, 72114551, 2901951, 2902957);
    InitializeEvent(4552, 12107000, 72114552, 2901951, 2902958);
    InitializeEvent(4553, 12107000, 72114553, 2901951, 2902959);

    InitializeEvent(4600, 12107000, 72114600, 2901952, 2412950);
    InitializeEvent(4601, 12107000, 72114601, 2901952, 2412951);
    InitializeEvent(4602, 12107000, 72114602, 2901952, 2412952);
    InitializeEvent(4603, 12107000, 72114603, 2901952, 2412953);
    InitializeEvent(4604, 12107000, 72114604, 2901952, 2402950);
    InitializeEvent(4605, 12107000, 72114605, 2901952, 2402951);
    InitializeEvent(4606, 12107000, 72114606, 2901952, 2422950);
    InitializeEvent(4607, 12107000, 72114607, 2901952, 2422952);
    InitializeEvent(4608, 12107000, 72114608, 2901952, 2422951);
    InitializeEvent(4609, 12107000, 72114609, 2901952, 2302950);
    InitializeEvent(4610, 12107000, 72114610, 2901952, 2302951);
    InitializeEvent(4611, 12107000, 72114611, 2901952, 2302952);
    InitializeEvent(4612, 12107000, 72114612, 2901952, 2202950);
    InitializeEvent(4613, 12107000, 72114613, 2901952, 2202951);
    InitializeEvent(4614, 12107000, 72114614, 2901952, 2702950);
    InitializeEvent(4615, 12107000, 72114615, 2901952, 2702951);
    InitializeEvent(4616, 12107000, 72114616, 2901952, 3202950);
    InitializeEvent(4617, 12107000, 72114617, 2901952, 3202952);
    InitializeEvent(4618, 12107000, 72114618, 2901952, 2802950);
    InitializeEvent(4619, 12107000, 72114619, 2901952, 2802953);
    InitializeEvent(4620, 12107000, 72114620, 2901952, 2802951);
    InitializeEvent(4621, 12107000, 72114621, 2901952, 2802952);
    InitializeEvent(4622, 12107000, 72114622, 2901952, 2502950);
    InitializeEvent(4623, 12107000, 72114623, 2901952, 2502952);
    InitializeEvent(4624, 12107000, 72114624, 2901952, 2502951);
    InitializeEvent(4625, 12107000, 72114625, 2901952, 2112950);
    InitializeEvent(4626, 12107000, 72114626, 2901952, 3202951);
    InitializeEvent(4627, 12107000, 72114627, 2901952, 3202953);
    InitializeEvent(4628, 12107000, 72114628, 2901952, 3302950);
    InitializeEvent(4629, 12107000, 72114629, 2901952, 3302951);
    InitializeEvent(4630, 12107000, 72114630, 2901952, 2602950);
    InitializeEvent(4631, 12107000, 72114631, 2901952, 2602953);
    InitializeEvent(4632, 12107000, 72114632, 2901952, 2602952);
    InitializeEvent(4633, 12107000, 72114633, 2901952, 2602951);
    InitializeEvent(4634, 12107000, 72114634, 2901952, 3402950);
    InitializeEvent(4635, 12107000, 72114635, 2901952, 3402951);
    InitializeEvent(4636, 12107000, 72114636, 2901952, 3402953);
    InitializeEvent(4637, 12107000, 72114637, 2901952, 3402952);
    InitializeEvent(4638, 12107000, 72114638, 2901952, 3502950);
    InitializeEvent(4639, 12107000, 72114639, 2901952, 3502951);
    InitializeEvent(4640, 12107000, 72114640, 2901952, 3502952);
    InitializeEvent(4641, 12107000, 72114641, 2901952, 3602950);
    InitializeEvent(4642, 12107000, 72114642, 2901952, 3602951);
    InitializeEvent(4643, 12107000, 72114643, 2901952, 3602952);
    InitializeEvent(4644, 12107000, 72114644, 2901952, 2902950);
    InitializeEvent(4645, 12107000, 72114645, 2901952, 2902951);
    InitializeEvent(4646, 12107000, 72114646, 2901952, 2902952);
    InitializeEvent(4647, 12107000, 72114647, 2901952, 2902953);
    InitializeEvent(4648, 12107000, 72114648, 2901952, 2902954);
    InitializeEvent(4649, 12107000, 72114649, 2901952, 2902955);
    InitializeEvent(4650, 12107000, 72114650, 2901952, 2902956);
    InitializeEvent(4651, 12107000, 72114651, 2901952, 2902957);
    InitializeEvent(4652, 12107000, 72114652, 2901952, 2902958);
    InitializeEvent(4653, 12107000, 72114653, 2901952, 2902959);

    InitializeEvent(4700, 12107000, 72114700, 2901953, 2412950);
    InitializeEvent(4701, 12107000, 72114701, 2901953, 2412951);
    InitializeEvent(4702, 12107000, 72114702, 2901953, 2412952);
    InitializeEvent(4703, 12107000, 72114703, 2901953, 2412953);
    InitializeEvent(4704, 12107000, 72114704, 2901953, 2402950);
    InitializeEvent(4705, 12107000, 72114705, 2901953, 2402951);
    InitializeEvent(4706, 12107000, 72114706, 2901953, 2422950);
    InitializeEvent(4707, 12107000, 72114707, 2901953, 2422952);
    InitializeEvent(4708, 12107000, 72114708, 2901953, 2422951);
    InitializeEvent(4709, 12107000, 72114709, 2901953, 2302950);
    InitializeEvent(4710, 12107000, 72114710, 2901953, 2302951);
    InitializeEvent(4711, 12107000, 72114711, 2901953, 2302952);
    InitializeEvent(4712, 12107000, 72114712, 2901953, 2202950);
    InitializeEvent(4713, 12107000, 72114713, 2901953, 2202951);
    InitializeEvent(4714, 12107000, 72114714, 2901953, 2702950);
    InitializeEvent(4715, 12107000, 72114715, 2901953, 2702951);
    InitializeEvent(4716, 12107000, 72114716, 2901953, 3202950);
    InitializeEvent(4717, 12107000, 72114717, 2901953, 3202952);
    InitializeEvent(4718, 12107000, 72114718, 2901953, 2802950);
    InitializeEvent(4719, 12107000, 72114719, 2901953, 2802953);
    InitializeEvent(4720, 12107000, 72114720, 2901953, 2802951);
    InitializeEvent(4721, 12107000, 72114721, 2901953, 2802952);
    InitializeEvent(4722, 12107000, 72114722, 2901953, 2502950);
    InitializeEvent(4723, 12107000, 72114723, 2901953, 2502952);
    InitializeEvent(4724, 12107000, 72114724, 2901953, 2502951);
    InitializeEvent(4725, 12107000, 72114725, 2901953, 2112950);
    InitializeEvent(4726, 12107000, 72114726, 2901953, 3202951);
    InitializeEvent(4727, 12107000, 72114727, 2901953, 3202953);
    InitializeEvent(4728, 12107000, 72114728, 2901953, 3302950);
    InitializeEvent(4729, 12107000, 72114729, 2901953, 3302951);
    InitializeEvent(4730, 12107000, 72114730, 2901953, 2602950);
    InitializeEvent(4731, 12107000, 72114731, 2901953, 2602953);
    InitializeEvent(4732, 12107000, 72114732, 2901953, 2602952);
    InitializeEvent(4733, 12107000, 72114733, 2901953, 2602951);
    InitializeEvent(4734, 12107000, 72114734, 2901953, 3402950);
    InitializeEvent(4735, 12107000, 72114735, 2901953, 3402951);
    InitializeEvent(4736, 12107000, 72114736, 2901953, 3402953);
    InitializeEvent(4737, 12107000, 72114737, 2901953, 3402952);
    InitializeEvent(4738, 12107000, 72114738, 2901953, 3502950);
    InitializeEvent(4739, 12107000, 72114739, 2901953, 3502951);
    InitializeEvent(4740, 12107000, 72114740, 2901953, 3502952);
    InitializeEvent(4741, 12107000, 72114741, 2901953, 3602950);
    InitializeEvent(4742, 12107000, 72114742, 2901953, 3602951);
    InitializeEvent(4743, 12107000, 72114743, 2901953, 3602952);
    InitializeEvent(4744, 12107000, 72114744, 2901953, 2902950);
    InitializeEvent(4745, 12107000, 72114745, 2901953, 2902951);
    InitializeEvent(4746, 12107000, 72114746, 2901953, 2902952);
    InitializeEvent(4747, 12107000, 72114747, 2901953, 2902953);
    InitializeEvent(4748, 12107000, 72114748, 2901953, 2902954);
    InitializeEvent(4749, 12107000, 72114749, 2901953, 2902955);
    InitializeEvent(4750, 12107000, 72114750, 2901953, 2902956);
    InitializeEvent(4751, 12107000, 72114751, 2901953, 2902957);
    InitializeEvent(4752, 12107000, 72114752, 2901953, 2902958);
    InitializeEvent(4753, 12107000, 72114753, 2901953, 2902959);

    InitializeEvent(4800, 12107000, 72114800, 2901954, 2412950);
    InitializeEvent(4801, 12107000, 72114801, 2901954, 2412951);
    InitializeEvent(4802, 12107000, 72114802, 2901954, 2412952);
    InitializeEvent(4803, 12107000, 72114803, 2901954, 2412953);
    InitializeEvent(4804, 12107000, 72114804, 2901954, 2402950);
    InitializeEvent(4805, 12107000, 72114805, 2901954, 2402951);
    InitializeEvent(4806, 12107000, 72114806, 2901954, 2422950);
    InitializeEvent(4807, 12107000, 72114807, 2901954, 2422952);
    InitializeEvent(4808, 12107000, 72114808, 2901954, 2422951);
    InitializeEvent(4809, 12107000, 72114809, 2901954, 2302950);
    InitializeEvent(4810, 12107000, 72114810, 2901954, 2302951);
    InitializeEvent(4811, 12107000, 72114811, 2901954, 2302952);
    InitializeEvent(4812, 12107000, 72114812, 2901954, 2202950);
    InitializeEvent(4813, 12107000, 72114813, 2901954, 2202951);
    InitializeEvent(4814, 12107000, 72114814, 2901954, 2702950);
    InitializeEvent(4815, 12107000, 72114815, 2901954, 2702951);
    InitializeEvent(4816, 12107000, 72114816, 2901954, 3202950);
    InitializeEvent(4817, 12107000, 72114817, 2901954, 3202952);
    InitializeEvent(4818, 12107000, 72114818, 2901954, 2802950);
    InitializeEvent(4819, 12107000, 72114819, 2901954, 2802953);
    InitializeEvent(4820, 12107000, 72114820, 2901954, 2802951);
    InitializeEvent(4821, 12107000, 72114821, 2901954, 2802952);
    InitializeEvent(4822, 12107000, 72114822, 2901954, 2502950);
    InitializeEvent(4823, 12107000, 72114823, 2901954, 2502952);
    InitializeEvent(4824, 12107000, 72114824, 2901954, 2502951);
    InitializeEvent(4825, 12107000, 72114825, 2901954, 2112950);
    InitializeEvent(4826, 12107000, 72114826, 2901954, 3202951);
    InitializeEvent(4827, 12107000, 72114827, 2901954, 3202953);
    InitializeEvent(4828, 12107000, 72114828, 2901954, 3302950);
    InitializeEvent(4829, 12107000, 72114829, 2901954, 3302951);
    InitializeEvent(4830, 12107000, 72114830, 2901954, 2602950);
    InitializeEvent(4831, 12107000, 72114831, 2901954, 2602953);
    InitializeEvent(4832, 12107000, 72114832, 2901954, 2602952);
    InitializeEvent(4833, 12107000, 72114833, 2901954, 2602951);
    InitializeEvent(4834, 12107000, 72114834, 2901954, 3402950);
    InitializeEvent(4835, 12107000, 72114835, 2901954, 3402951);
    InitializeEvent(4836, 12107000, 72114836, 2901954, 3402953);
    InitializeEvent(4837, 12107000, 72114837, 2901954, 3402952);
    InitializeEvent(4838, 12107000, 72114838, 2901954, 3502950);
    InitializeEvent(4839, 12107000, 72114839, 2901954, 3502951);
    InitializeEvent(4840, 12107000, 72114840, 2901954, 3502952);
    InitializeEvent(4841, 12107000, 72114841, 2901954, 3602950);
    InitializeEvent(4842, 12107000, 72114842, 2901954, 3602951);
    InitializeEvent(4843, 12107000, 72114843, 2901954, 3602952);
    InitializeEvent(4844, 12107000, 72114844, 2901954, 2902950);
    InitializeEvent(4845, 12107000, 72114845, 2901954, 2902951);
    InitializeEvent(4846, 12107000, 72114846, 2901954, 2902952);
    InitializeEvent(4847, 12107000, 72114847, 2901954, 2902953);
    InitializeEvent(4848, 12107000, 72114848, 2901954, 2902954);
    InitializeEvent(4849, 12107000, 72114849, 2901954, 2902955);
    InitializeEvent(4850, 12107000, 72114850, 2901954, 2902956);
    InitializeEvent(4851, 12107000, 72114851, 2901954, 2902957);
    InitializeEvent(4852, 12107000, 72114852, 2901954, 2902958);
    InitializeEvent(4853, 12107000, 72114853, 2901954, 2902959);

    InitializeEvent(4900, 12107000, 72114900, 2901955, 2412950);
    InitializeEvent(4901, 12107000, 72114901, 2901955, 2412951);
    InitializeEvent(4902, 12107000, 72114902, 2901955, 2412952);
    InitializeEvent(4903, 12107000, 72114903, 2901955, 2412953);
    InitializeEvent(4904, 12107000, 72114904, 2901955, 2402950);
    InitializeEvent(4905, 12107000, 72114905, 2901955, 2402951);
    InitializeEvent(4906, 12107000, 72114906, 2901955, 2422950);
    InitializeEvent(4907, 12107000, 72114907, 2901955, 2422952);
    InitializeEvent(4908, 12107000, 72114908, 2901955, 2422951);
    InitializeEvent(4909, 12107000, 72114909, 2901955, 2302950);
    InitializeEvent(4910, 12107000, 72114910, 2901955, 2302951);
    InitializeEvent(4911, 12107000, 72114911, 2901955, 2302952);
    InitializeEvent(4912, 12107000, 72114912, 2901955, 2202950);
    InitializeEvent(4913, 12107000, 72114913, 2901955, 2202951);
    InitializeEvent(4914, 12107000, 72114914, 2901955, 2702950);
    InitializeEvent(4915, 12107000, 72114915, 2901955, 2702951);
    InitializeEvent(4916, 12107000, 72114916, 2901955, 3202950);
    InitializeEvent(4917, 12107000, 72114917, 2901955, 3202952);
    InitializeEvent(4918, 12107000, 72114918, 2901955, 2802950);
    InitializeEvent(4919, 12107000, 72114919, 2901955, 2802953);
    InitializeEvent(4920, 12107000, 72114920, 2901955, 2802951);
    InitializeEvent(4921, 12107000, 72114921, 2901955, 2802952);
    InitializeEvent(4922, 12107000, 72114922, 2901955, 2502950);
    InitializeEvent(4923, 12107000, 72114923, 2901955, 2502952);
    InitializeEvent(4924, 12107000, 72114924, 2901955, 2502951);
    InitializeEvent(4925, 12107000, 72114925, 2901955, 2112950);
    InitializeEvent(4926, 12107000, 72114926, 2901955, 3202951);
    InitializeEvent(4927, 12107000, 72114927, 2901955, 3202953);
    InitializeEvent(4928, 12107000, 72114928, 2901955, 3302950);
    InitializeEvent(4929, 12107000, 72114929, 2901955, 3302951);
    InitializeEvent(4930, 12107000, 72114930, 2901955, 2602950);
    InitializeEvent(4931, 12107000, 72114931, 2901955, 2602953);
    InitializeEvent(4932, 12107000, 72114932, 2901955, 2602952);
    InitializeEvent(4933, 12107000, 72114933, 2901955, 2602951);
    InitializeEvent(4934, 12107000, 72114934, 2901955, 3402950);
    InitializeEvent(4935, 12107000, 72114935, 2901955, 3402951);
    InitializeEvent(4936, 12107000, 72114936, 2901955, 3402953);
    InitializeEvent(4937, 12107000, 72114937, 2901955, 3402952);
    InitializeEvent(4938, 12107000, 72114938, 2901955, 3502950);
    InitializeEvent(4939, 12107000, 72114939, 2901955, 3502951);
    InitializeEvent(4940, 12107000, 72114940, 2901955, 3502952);
    InitializeEvent(4941, 12107000, 72114941, 2901955, 3602950);
    InitializeEvent(4942, 12107000, 72114942, 2901955, 3602951);
    InitializeEvent(4943, 12107000, 72114943, 2901955, 3602952);
    InitializeEvent(4944, 12107000, 72114944, 2901955, 2902950);
    InitializeEvent(4945, 12107000, 72114945, 2901955, 2902951);
    InitializeEvent(4946, 12107000, 72114946, 2901955, 2902952);
    InitializeEvent(4947, 12107000, 72114947, 2901955, 2902953);
    InitializeEvent(4948, 12107000, 72114948, 2901955, 2902954);
    InitializeEvent(4949, 12107000, 72114949, 2901955, 2902955);
    InitializeEvent(4950, 12107000, 72114950, 2901955, 2902956);
    InitializeEvent(4951, 12107000, 72114951, 2901955, 2902957);
    InitializeEvent(4952, 12107000, 72114952, 2901955, 2902958);
    InitializeEvent(4953, 12107000, 72114953, 2901955, 2902959);

    InitializeEvent(5000, 12107000, 72115000, 2901956, 2412950);
    InitializeEvent(5001, 12107000, 72115001, 2901956, 2412951);
    InitializeEvent(5002, 12107000, 72115002, 2901956, 2412952);
    InitializeEvent(5003, 12107000, 72115003, 2901956, 2412953);
    InitializeEvent(5004, 12107000, 72115004, 2901956, 2402950);
    InitializeEvent(5005, 12107000, 72115005, 2901956, 2402951);
    InitializeEvent(5006, 12107000, 72115006, 2901956, 2422950);
    InitializeEvent(5007, 12107000, 72115007, 2901956, 2422952);
    InitializeEvent(5008, 12107000, 72115008, 2901956, 2422951);
    InitializeEvent(5009, 12107000, 72115009, 2901956, 2302950);
    InitializeEvent(5010, 12107000, 72115010, 2901956, 2302951);
    InitializeEvent(5011, 12107000, 72115011, 2901956, 2302952);
    InitializeEvent(5012, 12107000, 72115012, 2901956, 2202950);
    InitializeEvent(5013, 12107000, 72115013, 2901956, 2202951);
    InitializeEvent(5014, 12107000, 72115014, 2901956, 2702950);
    InitializeEvent(5015, 12107000, 72115015, 2901956, 2702951);
    InitializeEvent(5016, 12107000, 72115016, 2901956, 3202950);
    InitializeEvent(5017, 12107000, 72115017, 2901956, 3202952);
    InitializeEvent(5018, 12107000, 72115018, 2901956, 2802950);
    InitializeEvent(5019, 12107000, 72115019, 2901956, 2802953);
    InitializeEvent(5020, 12107000, 72115020, 2901956, 2802951);
    InitializeEvent(5021, 12107000, 72115021, 2901956, 2802952);
    InitializeEvent(5022, 12107000, 72115022, 2901956, 2502950);
    InitializeEvent(5023, 12107000, 72115023, 2901956, 2502952);
    InitializeEvent(5024, 12107000, 72115024, 2901956, 2502951);
    InitializeEvent(5025, 12107000, 72115025, 2901956, 2112950);
    InitializeEvent(5026, 12107000, 72115026, 2901956, 3202951);
    InitializeEvent(5027, 12107000, 72115027, 2901956, 3202953);
    InitializeEvent(5028, 12107000, 72115028, 2901956, 3302950);
    InitializeEvent(5029, 12107000, 72115029, 2901956, 3302951);
    InitializeEvent(5030, 12107000, 72115030, 2901956, 2602950);
    InitializeEvent(5031, 12107000, 72115031, 2901956, 2602953);
    InitializeEvent(5032, 12107000, 72115032, 2901956, 2602952);
    InitializeEvent(5033, 12107000, 72115033, 2901956, 2602951);
    InitializeEvent(5034, 12107000, 72115034, 2901956, 3402950);
    InitializeEvent(5035, 12107000, 72115035, 2901956, 3402951);
    InitializeEvent(5036, 12107000, 72115036, 2901956, 3402953);
    InitializeEvent(5037, 12107000, 72115037, 2901956, 3402952);
    InitializeEvent(5038, 12107000, 72115038, 2901956, 3502950);
    InitializeEvent(5039, 12107000, 72115039, 2901956, 3502951);
    InitializeEvent(5040, 12107000, 72115040, 2901956, 3502952);
    InitializeEvent(5041, 12107000, 72115041, 2901956, 3602950);
    InitializeEvent(5042, 12107000, 72115042, 2901956, 3602951);
    InitializeEvent(5043, 12107000, 72115043, 2901956, 3602952);
    InitializeEvent(5044, 12107000, 72115044, 2901956, 2902950);
    InitializeEvent(5045, 12107000, 72115045, 2901956, 2902951);
    InitializeEvent(5046, 12107000, 72115046, 2901956, 2902952);
    InitializeEvent(5047, 12107000, 72115047, 2901956, 2902953);
    InitializeEvent(5048, 12107000, 72115048, 2901956, 2902954);
    InitializeEvent(5049, 12107000, 72115049, 2901956, 2902955);
    InitializeEvent(5050, 12107000, 72115050, 2901956, 2902956);
    InitializeEvent(5051, 12107000, 72115051, 2901956, 2902957);
    InitializeEvent(5052, 12107000, 72115052, 2901956, 2902958);
    InitializeEvent(5053, 12107000, 72115053, 2901956, 2902959);

    InitializeEvent(5100, 12107000, 72115100, 2901957, 2412950);
    InitializeEvent(5101, 12107000, 72115101, 2901957, 2412951);
    InitializeEvent(5102, 12107000, 72115102, 2901957, 2412952);
    InitializeEvent(5103, 12107000, 72115103, 2901957, 2412953);
    InitializeEvent(5104, 12107000, 72115104, 2901957, 2402950);
    InitializeEvent(5105, 12107000, 72115105, 2901957, 2402951);
    InitializeEvent(5106, 12107000, 72115106, 2901957, 2422950);
    InitializeEvent(5107, 12107000, 72115107, 2901957, 2422952);
    InitializeEvent(5108, 12107000, 72115108, 2901957, 2422951);
    InitializeEvent(5109, 12107000, 72115109, 2901957, 2302950);
    InitializeEvent(5110, 12107000, 72115110, 2901957, 2302951);
    InitializeEvent(5111, 12107000, 72115111, 2901957, 2302952);
    InitializeEvent(5112, 12107000, 72115112, 2901957, 2202950);
    InitializeEvent(5113, 12107000, 72115113, 2901957, 2202951);
    InitializeEvent(5114, 12107000, 72115114, 2901957, 2702950);
    InitializeEvent(5115, 12107000, 72115115, 2901957, 2702951);
    InitializeEvent(5116, 12107000, 72115116, 2901957, 3202950);
    InitializeEvent(5117, 12107000, 72115117, 2901957, 3202952);
    InitializeEvent(5118, 12107000, 72115118, 2901957, 2802950);
    InitializeEvent(5119, 12107000, 72115119, 2901957, 2802953);
    InitializeEvent(5120, 12107000, 72115120, 2901957, 2802951);
    InitializeEvent(5121, 12107000, 72115121, 2901957, 2802952);
    InitializeEvent(5122, 12107000, 72115122, 2901957, 2502950);
    InitializeEvent(5123, 12107000, 72115123, 2901957, 2502952);
    InitializeEvent(5124, 12107000, 72115124, 2901957, 2502951);
    InitializeEvent(5125, 12107000, 72115125, 2901957, 2112950);
    InitializeEvent(5126, 12107000, 72115126, 2901957, 3202951);
    InitializeEvent(5127, 12107000, 72115127, 2901957, 3202953);
    InitializeEvent(5128, 12107000, 72115128, 2901957, 3302950);
    InitializeEvent(5129, 12107000, 72115129, 2901957, 3302951);
    InitializeEvent(5130, 12107000, 72115130, 2901957, 2602950);
    InitializeEvent(5131, 12107000, 72115131, 2901957, 2602953);
    InitializeEvent(5132, 12107000, 72115132, 2901957, 2602952);
    InitializeEvent(5133, 12107000, 72115133, 2901957, 2602951);
    InitializeEvent(5134, 12107000, 72115134, 2901957, 3402950);
    InitializeEvent(5135, 12107000, 72115135, 2901957, 3402951);
    InitializeEvent(5136, 12107000, 72115136, 2901957, 3402953);
    InitializeEvent(5137, 12107000, 72115137, 2901957, 3402952);
    InitializeEvent(5138, 12107000, 72115138, 2901957, 3502950);
    InitializeEvent(5139, 12107000, 72115139, 2901957, 3502951);
    InitializeEvent(5140, 12107000, 72115140, 2901957, 3502952);
    InitializeEvent(5141, 12107000, 72115141, 2901957, 3602950);
    InitializeEvent(5142, 12107000, 72115142, 2901957, 3602951);
    InitializeEvent(5143, 12107000, 72115143, 2901957, 3602952);
    InitializeEvent(5144, 12107000, 72115144, 2901957, 2902950);
    InitializeEvent(5145, 12107000, 72115145, 2901957, 2902951);
    InitializeEvent(5146, 12107000, 72115146, 2901957, 2902952);
    InitializeEvent(5147, 12107000, 72115147, 2901957, 2902953);
    InitializeEvent(5148, 12107000, 72115148, 2901957, 2902954);
    InitializeEvent(5149, 12107000, 72115149, 2901957, 2902955);
    InitializeEvent(5150, 12107000, 72115150, 2901957, 2902956);
    InitializeEvent(5151, 12107000, 72115151, 2901957, 2902957);
    InitializeEvent(5152, 12107000, 72115152, 2901957, 2902958);
    InitializeEvent(5153, 12107000, 72115153, 2901957, 2902959);

    InitializeEvent(5200, 12107000, 72115200, 2901958, 2412950);
    InitializeEvent(5201, 12107000, 72115201, 2901958, 2412951);
    InitializeEvent(5202, 12107000, 72115202, 2901958, 2412952);
    InitializeEvent(5203, 12107000, 72115203, 2901958, 2412953);
    InitializeEvent(5204, 12107000, 72115204, 2901958, 2402950);
    InitializeEvent(5205, 12107000, 72115205, 2901958, 2402951);
    InitializeEvent(5206, 12107000, 72115206, 2901958, 2422950);
    InitializeEvent(5207, 12107000, 72115207, 2901958, 2422952);
    InitializeEvent(5208, 12107000, 72115208, 2901958, 2422951);
    InitializeEvent(5209, 12107000, 72115209, 2901958, 2302950);
    InitializeEvent(5210, 12107000, 72115210, 2901958, 2302951);
    InitializeEvent(5211, 12107000, 72115211, 2901958, 2302952);
    InitializeEvent(5212, 12107000, 72115212, 2901958, 2202950);
    InitializeEvent(5213, 12107000, 72115213, 2901958, 2202951);
    InitializeEvent(5214, 12107000, 72115214, 2901958, 2702950);
    InitializeEvent(5215, 12107000, 72115215, 2901958, 2702951);
    InitializeEvent(5216, 12107000, 72115216, 2901958, 3202950);
    InitializeEvent(5217, 12107000, 72115217, 2901958, 3202952);
    InitializeEvent(5218, 12107000, 72115218, 2901958, 2802950);
    InitializeEvent(5219, 12107000, 72115219, 2901958, 2802953);
    InitializeEvent(5220, 12107000, 72115220, 2901958, 2802951);
    InitializeEvent(5221, 12107000, 72115221, 2901958, 2802952);
    InitializeEvent(5222, 12107000, 72115222, 2901958, 2502950);
    InitializeEvent(5223, 12107000, 72115223, 2901958, 2502952);
    InitializeEvent(5224, 12107000, 72115224, 2901958, 2502951);
    InitializeEvent(5225, 12107000, 72115225, 2901958, 2112950);
    InitializeEvent(5226, 12107000, 72115226, 2901958, 3202951);
    InitializeEvent(5227, 12107000, 72115227, 2901958, 3202953);
    InitializeEvent(5228, 12107000, 72115228, 2901958, 3302950);
    InitializeEvent(5229, 12107000, 72115229, 2901958, 3302951);
    InitializeEvent(5230, 12107000, 72115230, 2901958, 2602950);
    InitializeEvent(5231, 12107000, 72115231, 2901958, 2602953);
    InitializeEvent(5232, 12107000, 72115232, 2901958, 2602952);
    InitializeEvent(5233, 12107000, 72115233, 2901958, 2602951);
    InitializeEvent(5234, 12107000, 72115234, 2901958, 3402950);
    InitializeEvent(5235, 12107000, 72115235, 2901958, 3402951);
    InitializeEvent(5236, 12107000, 72115236, 2901958, 3402953);
    InitializeEvent(5237, 12107000, 72115237, 2901958, 3402952);
    InitializeEvent(5238, 12107000, 72115238, 2901958, 3502950);
    InitializeEvent(5239, 12107000, 72115239, 2901958, 3502951);
    InitializeEvent(5240, 12107000, 72115240, 2901958, 3502952);
    InitializeEvent(5241, 12107000, 72115241, 2901958, 3602950);
    InitializeEvent(5242, 12107000, 72115242, 2901958, 3602951);
    InitializeEvent(5243, 12107000, 72115243, 2901958, 3602952);
    InitializeEvent(5244, 12107000, 72115244, 2901958, 2902950);
    InitializeEvent(5245, 12107000, 72115245, 2901958, 2902951);
    InitializeEvent(5246, 12107000, 72115246, 2901958, 2902952);
    InitializeEvent(5247, 12107000, 72115247, 2901958, 2902953);
    InitializeEvent(5248, 12107000, 72115248, 2901958, 2902954);
    InitializeEvent(5249, 12107000, 72115249, 2901958, 2902955);
    InitializeEvent(5250, 12107000, 72115250, 2901958, 2902956);
    InitializeEvent(5251, 12107000, 72115251, 2901958, 2902957);
    InitializeEvent(5252, 12107000, 72115252, 2901958, 2902958);
    InitializeEvent(5253, 12107000, 72115253, 2901958, 2902959);

    InitializeEvent(5300, 12107000, 72115300, 2901959, 2412950);
    InitializeEvent(5301, 12107000, 72115301, 2901959, 2412951);
    InitializeEvent(5302, 12107000, 72115302, 2901959, 2412952);
    InitializeEvent(5303, 12107000, 72115303, 2901959, 2412953);
    InitializeEvent(5304, 12107000, 72115304, 2901959, 2402950);
    InitializeEvent(5305, 12107000, 72115305, 2901959, 2402951);
    InitializeEvent(5306, 12107000, 72115306, 2901959, 2422950);
    InitializeEvent(5307, 12107000, 72115307, 2901959, 2422952);
    InitializeEvent(5308, 12107000, 72115308, 2901959, 2422951);
    InitializeEvent(5309, 12107000, 72115309, 2901959, 2302950);
    InitializeEvent(5310, 12107000, 72115310, 2901959, 2302951);
    InitializeEvent(5311, 12107000, 72115311, 2901959, 2302952);
    InitializeEvent(5312, 12107000, 72115312, 2901959, 2202950);
    InitializeEvent(5313, 12107000, 72115313, 2901959, 2202951);
    InitializeEvent(5314, 12107000, 72115314, 2901959, 2702950);
    InitializeEvent(5315, 12107000, 72115315, 2901959, 2702951);
    InitializeEvent(5316, 12107000, 72115316, 2901959, 3202950);
    InitializeEvent(5317, 12107000, 72115317, 2901959, 3202952);
    InitializeEvent(5318, 12107000, 72115318, 2901959, 2802950);
    InitializeEvent(5319, 12107000, 72115319, 2901959, 2802953);
    InitializeEvent(5320, 12107000, 72115320, 2901959, 2802951);
    InitializeEvent(5321, 12107000, 72115321, 2901959, 2802952);
    InitializeEvent(5322, 12107000, 72115322, 2901959, 2502950);
    InitializeEvent(5323, 12107000, 72115323, 2901959, 2502952);
    InitializeEvent(5324, 12107000, 72115324, 2901959, 2502951);
    InitializeEvent(5325, 12107000, 72115325, 2901959, 2112950);
    InitializeEvent(5326, 12107000, 72115326, 2901959, 3202951);
    InitializeEvent(5327, 12107000, 72115327, 2901959, 3202953);
    InitializeEvent(5328, 12107000, 72115328, 2901959, 3302950);
    InitializeEvent(5329, 12107000, 72115329, 2901959, 3302951);
    InitializeEvent(5330, 12107000, 72115330, 2901959, 2602950);
    InitializeEvent(5331, 12107000, 72115331, 2901959, 2602953);
    InitializeEvent(5332, 12107000, 72115332, 2901959, 2602952);
    InitializeEvent(5333, 12107000, 72115333, 2901959, 2602951);
    InitializeEvent(5334, 12107000, 72115334, 2901959, 3402950);
    InitializeEvent(5335, 12107000, 72115335, 2901959, 3402951);
    InitializeEvent(5336, 12107000, 72115336, 2901959, 3402953);
    InitializeEvent(5337, 12107000, 72115337, 2901959, 3402952);
    InitializeEvent(5338, 12107000, 72115338, 2901959, 3502950);
    InitializeEvent(5339, 12107000, 72115339, 2901959, 3502951);
    InitializeEvent(5340, 12107000, 72115340, 2901959, 3502952);
    InitializeEvent(5341, 12107000, 72115341, 2901959, 3602950);
    InitializeEvent(5342, 12107000, 72115342, 2901959, 3602951);
    InitializeEvent(5343, 12107000, 72115343, 2901959, 3602952);
    InitializeEvent(5344, 12107000, 72115344, 2901959, 2902950);
    InitializeEvent(5345, 12107000, 72115345, 2901959, 2902951);
    InitializeEvent(5346, 12107000, 72115346, 2901959, 2902952);
    InitializeEvent(5347, 12107000, 72115347, 2901959, 2902953);
    InitializeEvent(5348, 12107000, 72115348, 2901959, 2902954);
    InitializeEvent(5349, 12107000, 72115349, 2901959, 2902955);
    InitializeEvent(5350, 12107000, 72115350, 2901959, 2902956);
    InitializeEvent(5351, 12107000, 72115351, 2901959, 2902957);
    InitializeEvent(5352, 12107000, 72115352, 2901959, 2902958);
    InitializeEvent(5353, 12107000, 72115353, 2901959, 2902959);

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

    InitializeEvent(0, 12107100, 72100421, 2901950, 9021)
    InitializeEvent(1, 12107100, 72100422, 2901950, 9022)
    InitializeEvent(2, 12107100, 72100423, 2901950, 9023)
    InitializeEvent(3, 12107100, 72100424, 2901950, 9024)
    InitializeEvent(4, 12107100, 72100425, 2901950, 9025)
    InitializeEvent(5, 12107100, 72100426, 2901950, 9026)

    InitializeEvent(6, 12107100, 72100427, 2901951, 9021)
    InitializeEvent(7, 12107100, 72100428, 2901951, 9022)
    InitializeEvent(8, 12107100, 72100429, 2901951, 9023)
    InitializeEvent(9, 12107100, 72100430, 2901951, 9024)
    InitializeEvent(10, 12107100, 72100431, 2901951, 9025)
    InitializeEvent(11, 12107100, 72100432, 2901951, 9026)

    InitializeEvent(12, 12107100, 72100433, 2901952, 9021)
    InitializeEvent(13, 12107100, 72100434, 2901952, 9022)
    InitializeEvent(14, 12107100, 72100435, 2901952, 9023)
    InitializeEvent(15, 12107100, 72100436, 2901952, 9024)
    InitializeEvent(16, 12107100, 72100437, 2901952, 9025)
    InitializeEvent(17, 12107100, 72100438, 2901952, 9026)

    InitializeEvent(18, 12107100, 72100439, 2901953, 9021)
    InitializeEvent(19, 12107100, 72100440, 2901953, 9022)
    InitializeEvent(20, 12107100, 72100441, 2901953, 9023)
    InitializeEvent(21, 12107100, 72100442, 2901953, 9024)
    InitializeEvent(22, 12107100, 72100443, 2901953, 9025)
    InitializeEvent(23, 12107100, 72100444, 2901953, 9026)

    InitializeEvent(24, 12107100, 72100445, 2901954, 9021)
    InitializeEvent(25, 12107100, 72100446, 2901954, 9022)
    InitializeEvent(26, 12107100, 72100447, 2901954, 9023)
    InitializeEvent(27, 12107100, 72100448, 2901954, 9024)
    InitializeEvent(28, 12107100, 72100449, 2901954, 9025)
    InitializeEvent(29, 12107100, 72100450, 2901954, 9026)

    InitializeEvent(30, 12107100, 72100451, 2901955, 9021)
    InitializeEvent(31, 12107100, 72100452, 2901955, 9022)
    InitializeEvent(32, 12107100, 72100453, 2901955, 9023)
    InitializeEvent(33, 12107100, 72100454, 2901955, 9024)
    InitializeEvent(34, 12107100, 72100455, 2901955, 9025)
    InitializeEvent(35, 12107100, 72100456, 2901955, 9026)

    InitializeEvent(36, 12107100, 72100457, 2901956, 9021)
    InitializeEvent(37, 12107100, 72100458, 2901956, 9022)
    InitializeEvent(38, 12107100, 72100459, 2901956, 9023)
    InitializeEvent(39, 12107100, 72100460, 2901956, 9024)
    InitializeEvent(40, 12107100, 72100461, 2901956, 9025)
    InitializeEvent(41, 12107100, 72100462, 2901956, 9026)

    InitializeEvent(42, 12107100, 72100463, 2901957, 9021)
    InitializeEvent(43, 12107100, 72100464, 2901957, 9022)
    InitializeEvent(44, 12107100, 72100465, 2901957, 9023)
    InitializeEvent(45, 12107100, 72100466, 2901957, 9024)
    InitializeEvent(46, 12107100, 72100467, 2901957, 9025)
    InitializeEvent(47, 12107100, 72100468, 2901957, 9026)

    InitializeEvent(48, 12107100, 72100469, 2901958, 9021)
    InitializeEvent(49, 12107100, 72100470, 2901958, 9022)
    InitializeEvent(50, 12107100, 72100471, 2901958, 9023)
    InitializeEvent(51, 12107100, 72100472, 2901958, 9024)
    InitializeEvent(52, 12107100, 72100473, 2901958, 9025)
    InitializeEvent(53, 12107100, 72100474, 2901958, 9026)

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

    InitializeEvent(30, 12107200, 72100330, 2902950, 9001, 2901953);
    InitializeEvent(31, 12107200, 72100331, 2902951, 9002, 2901953);
    InitializeEvent(32, 12107200, 72100332, 2902952, 9003, 2901953);
    InitializeEvent(33, 12107200, 72100333, 2902953, 9004, 2901953);
    InitializeEvent(34, 12107200, 72100334, 2902954, 9005, 2901953);
    InitializeEvent(35, 12107200, 72100335, 2902955, 9006, 2901953);
    InitializeEvent(36, 12107200, 72100336, 2902956, 9007, 2901953);
    InitializeEvent(37, 12107200, 72100337, 2902957, 9008, 2901953);
    InitializeEvent(38, 12107200, 72100338, 2902958, 9009, 2901953);
    InitializeEvent(39, 12107200, 72100339, 2902959, 9010, 2901953);

    InitializeEvent(40, 12107200, 72100340, 2902950, 9001, 2901954);
    InitializeEvent(41, 12107200, 72100341, 2902951, 9002, 2901954);
    InitializeEvent(42, 12107200, 72100342, 2902952, 9003, 2901954);
    InitializeEvent(43, 12107200, 72100343, 2902953, 9004, 2901954);
    InitializeEvent(44, 12107200, 72100344, 2902954, 9005, 2901954);
    InitializeEvent(45, 12107200, 72100345, 2902955, 9006, 2901954);
    InitializeEvent(46, 12107200, 72100346, 2902956, 9007, 2901954);
    InitializeEvent(47, 12107200, 72100347, 2902957, 9008, 2901954);
    InitializeEvent(48, 12107200, 72100348, 2902958, 9009, 2901954);
    InitializeEvent(49, 12107200, 72100349, 2902959, 9010, 2901954);

    InitializeEvent(50, 12107200, 72100350, 2902950, 9001, 2901955);
    InitializeEvent(51, 12107200, 72100351, 2902951, 9002, 2901955);
    InitializeEvent(52, 12107200, 72100352, 2902952, 9003, 2901955);
    InitializeEvent(53, 12107200, 72100353, 2902953, 9004, 2901955);
    InitializeEvent(54, 12107200, 72100354, 2902954, 9005, 2901955);
    InitializeEvent(55, 12107200, 72100355, 2902955, 9006, 2901955);
    InitializeEvent(56, 12107200, 72100356, 2902956, 9007, 2901955);
    InitializeEvent(57, 12107200, 72100357, 2902957, 9008, 2901955);
    InitializeEvent(58, 12107200, 72100358, 2902958, 9009, 2901955);
    InitializeEvent(59, 12107200, 72100359, 2902959, 9010, 2901955);

    InitializeEvent(60, 12107200, 72100360, 2902950, 9001, 2901956);
    InitializeEvent(61, 12107200, 72100361, 2902951, 9002, 2901956);
    InitializeEvent(62, 12107200, 72100362, 2902952, 9003, 2901956);
    InitializeEvent(63, 12107200, 72100363, 2902953, 9004, 2901956);
    InitializeEvent(64, 12107200, 72100364, 2902954, 9005, 2901956);
    InitializeEvent(65, 12107200, 72100365, 2902955, 9006, 2901956);
    InitializeEvent(66, 12107200, 72100366, 2902956, 9007, 2901956);
    InitializeEvent(67, 12107200, 72100367, 2902957, 9008, 2901956);
    InitializeEvent(68, 12107200, 72100368, 2902958, 9009, 2901956);
    InitializeEvent(69, 12107200, 72100369, 2902959, 9010, 2901956);

    InitializeEvent(70, 12107200, 72100370, 2902950, 9001, 2901957);
    InitializeEvent(71, 12107200, 72100371, 2902951, 9002, 2901957);
    InitializeEvent(72, 12107200, 72100372, 2902952, 9003, 2901957);
    InitializeEvent(73, 12107200, 72100373, 2902953, 9004, 2901957);
    InitializeEvent(74, 12107200, 72100374, 2902954, 9005, 2901957);
    InitializeEvent(75, 12107200, 72100375, 2902955, 9006, 2901957);
    InitializeEvent(76, 12107200, 72100376, 2902956, 9007, 2901957);
    InitializeEvent(77, 12107200, 72100377, 2902957, 9008, 2901957);
    InitializeEvent(78, 12107200, 72100378, 2902958, 9009, 2901957);
    InitializeEvent(79, 12107200, 72100379, 2902959, 9010, 2901957);

    InitializeEvent(80, 12107200, 72100380, 2902950, 9001, 2901958);
    InitializeEvent(81, 12107200, 72100381, 2902951, 9002, 2901958);
    InitializeEvent(82, 12107200, 72100382, 2902952, 9003, 2901958);
    InitializeEvent(83, 12107200, 72100383, 2902953, 9004, 2901958);
    InitializeEvent(84, 12107200, 72100384, 2902954, 9005, 2901958);
    InitializeEvent(85, 12107200, 72100385, 2902955, 9006, 2901958);
    InitializeEvent(86, 12107200, 72100386, 2902956, 9007, 2901958);
    InitializeEvent(87, 12107200, 72100387, 2902957, 9008, 2901958);
    InitializeEvent(88, 12107200, 72100388, 2902958, 9009, 2901958);
    InitializeEvent(89, 12107200, 72100389, 2902959, 9010, 2901958);
    
    // InitializeEvent(0, 12200220, 6890);
    
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, 9920, false);
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        BatchSetEventFlags(12906660, 12906725, OFF);
    }
    InitializeEvent(0, 12901685, 0);
    
    InitializeEvent(0, 12907000, 2900950, 2901950, 999, 12907800, -1);
    InitializeEvent(1, 12907000, 2900951, 2901951, 999, 12907820, -1);
    InitializeEvent(2, 12907000, 2900952, 2901952, 12901800, 12907840, boss_1_defeat+1013);
    InitializeEvent(3, 12907000, 2900953, 2901953, 999, 12907860, -1);
    InitializeEvent(4, 12907000, 2900954, 2901954, 12901801, 12907880, boss_2_defeat+1023);
    InitializeEvent(5, 12907000, 2900955, 2901955, 999, 12907900, -1);
    InitializeEvent(6, 12907000, 2900956, 2901956, 12901802, 12907920, boss_3_defeat+1033);
    InitializeEvent(7, 12907000, 2900957, 2901957, 999, 12907940, -1);
    InitializeEvent(8, 12907000, 2900958, 2901958, 12901803, 12907960, boss_4_defeat+1043);
    
    InitializeEvent(boss_1_offset, 8800, boss_1_defeat+1013, boss_1_lamp_id-1000, boss_1_lamp_id, boss_1_lamp_id+3000);
    InitializeEvent(boss_2_offset, 8800, boss_2_defeat+1023, boss_2_lamp_id-1000, boss_2_lamp_id, boss_2_lamp_id+3000);
    InitializeEvent(boss_3_offset, 8800, boss_3_defeat+1033, boss_3_lamp_id-1000, boss_3_lamp_id, boss_3_lamp_id+3000);
    InitializeEvent(boss_4_offset, 8800, boss_4_defeat+1043, boss_4_lamp_id-1000, boss_4_lamp_id, boss_4_lamp_id+3000);
    
    InitializeEvent(0, 12907010, 72900200, 2901950);
    InitializeEvent(1, 12907010, 72900201, 2901951);
    InitializeEvent(2, 12907010, 72900202, 2901952);
    InitializeEvent(3, 12907010, 72900203, 2901953);
    InitializeEvent(4, 12907010, 72900204, 2901954);
    InitializeEvent(5, 12907010, 72900205, 2901955);
    InitializeEvent(6, 12907010, 72900206, 2901956);
    InitializeEvent(7, 12907010, 72900207, 2901957);
    InitializeEvent(8, 12907010, 72900208, 2901958);
    InitializeEvent(0, 12907020, 72900100, 2901950);
    InitializeEvent(1, 12907020, 72900101, 2901951);
    InitializeEvent(2, 12907020, 72900102, 2901952);
    InitializeEvent(3, 12907020, 72900103, 2901953);
    InitializeEvent(4, 12907020, 72900104, 2901954);
    InitializeEvent(5, 12907020, 72900105, 2901955);
    InitializeEvent(6, 12907020, 72900106, 2901956);
    InitializeEvent(7, 12907020, 72900107, 2901957);
    InitializeEvent(8, 12907020, 72900108, 2901958);
    InitializeEvent(0, 12907030, 72102900, 2901950);
    InitializeEvent(1, 12907030, 72102901, 2901951);
    InitializeEvent(2, 12907030, 72102902, 2901952);
    InitializeEvent(3, 12907030, 72102903, 2901953);
    InitializeEvent(4, 12907030, 72102904, 2901954);
    InitializeEvent(5, 12907030, 72102905, 2901955);
    InitializeEvent(6, 12907030, 72102906, 2901956);
    InitializeEvent(7, 12907030, 72102907, 2901957);
    InitializeEvent(8, 12907030, 72102908, 2901958);
    InitializeEvent(0, 12907420, 4730, 92905370, 4735, 4736);
    InitializeEvent(1, 12907420, 4731, 92905371, 4735, 4736);
    InitializeEvent(2, 12907420, 4732, 92905372, 4735, 4736);
    SetEventFlag(12907230, OFF);
    SetEventFlag(12907231, OFF);
    InitializeEvent(0, 12907400, 0);
});

$Event(9000, Default, function() {
    WaitFixedTimeSeconds(1);
    // SpawnOneshotSFX(TargetEntityType.Object, 2901950, 10, 7123);
    // CreateObjectfollowingSFX(10000, 10, 829000);
});


// rematch boss triggered
$Event(7700, Default, function(X0_4, X4_4, X8_4) { // event_flag_11, event_flag_12, spawn_point
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, ON);
    SetSpEffect(10000, 4681, false);
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    
    // 15: super fx
    // 240: centered, subtle
    // 236 or 243?: ground
    // PlaySE(10000, SoundType.sSFX, 7012);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 829000);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 829000);
    // SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 928028);
    // SpawnOneshotSFX(TargetEntityType.Character, 10000, 15, effect_id);
    
    WaitFixedTimeFrames(59);
    // WarpPlayerToRespawnPoint(X8_4);
    SetPlayerRespawnPoint(X8_4);
    SetSpEffect(10000, 2101, false);
});

// rematch victory
$Event(7800, Default, function(X0_4) {
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    AwardItemLot(17020);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 829000);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, 829000);
    WaitFixedTimeFrames(59);
    
    
    // SpawnOneshotSFX(TargetEntityType.Character, 10000, 15, effect_id);
    if (EventFlag(12100995)) { // whether or not rematch was triggered from the hunter's dream
        WarpPlayerToRespawnPoint(2102969);
    }
    else {
        // WarpPlayerToRespawnPoint(X0_4);
        SetPlayerRespawnPoint(X0_4);
        SetSpEffect(10000, 2101, false);
    }
});

// return to boss
$Event(7900, Default, function(X0_4, X4_4, X8_1, X12_1, X16_4) {
    WaitFor(EventFlag(X0_4)); // 12902820
    SetEventFlag(X0_4, OFF);
    SetEventFlag(7999, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(X16_4, OFF); // 8570
    WaitFixedTimeSeconds(0.5);
    DummyPlayCutsceneAndWarpPlayer(X4_4, X8_1, X12_1); // 2902820
    SetCharacterAnimationState(10000, Enabled);
    SetCharacterTeamType(10000, TeamType.Host);
    ActivateHit(10000, Enabled);
    ForceAnimationPlayback(10000, 101282, false, false, false);
    RestartEvent();
});

// kindle
// this_event_slot, lamp_kindle_flag (12121100)
$Event(8100, Default, function(X0_4, X4_4) {
    const this_event_slot = X0_4;
    const lamp_kindle_flag = X4_4;
    SetEventFlag(this_event_slot, OFF);
    WaitFor(ThisEventSlot());
    if (PlayerInsightAmount() == 0) {
        // no insight
        DisplayGenericDialog(200175, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RestartEvent();
    }
    if (EventValue(lamp_kindle_flag, 2) == 3) {
        // already maxed
        DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    }
    else {
        if (EventValue(lamp_kindle_flag, 2) == 1 && !PlayerHasItem(ItemType.Goods, 4002)) {
            // need rite of kindling
            DisplayGenericDialog(200169, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        }
        else {
            SetSpEffect(10000, 4681, false); // take insight
            IncrementEventValue(lamp_kindle_flag, 2, 3);
            if (EventValue(lamp_kindle_flag, 2) == 3) {
                // max kindling reached
                DisplayGenericDialog(200171, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
            }
            else {
                // increased
                DisplayGenericDialog(200170, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
            }
        }
    }
    RestartEvent();
});

// chalice has been removed, return to dream
$Event(1511, Default, function() {
    SetEventFlag(1511, OFF);
    WaitFor(ThisEvent());
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    WarpPlayerToRespawnPoint(2102962);
});

// reset statuses (poison, etc.) and restock bullets and vials
$Event(8300, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    const spawn_checker_region = X0_4;
    const bypass_spawn_checker = X4_4;
    const lamp_kindle_flag = X8_4;
    const hidden_region = X12_4;
    const hidden_region2 = X16_4;
    const kindling_enabled_flag = 12100851;
    const restock_enabled_flag = 12100862;
    kindling_enabled = EventFlag(kindling_enabled_flag);
    restock_enabled = EventFlag(restock_enabled_flag);
    
    WaitFor(InArea(10000, spawn_checker_region) || EventFlag(1509) || EventFlag(bypass_spawn_checker));
    if (EventFlag(1509)) {
        EndEvent();
    }
    SetEventFlag(1509, ON);
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
        
        if (!EventFlag(kindling_enabled_flag) || EventValue(lamp_kindle_flag, 2) == 3) { // kindling disabled or full kindle
            MoveBloodstainAndDroppedItems(spawn_checker_region, hidden_region2);
            RemoveItemFromPlayer(ItemType.Goods, 900, 255);
            RemoveItemFromPlayer(ItemType.Goods, 1000, 255);
            EventValueOperation(12104050, 8, 1, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            EventValueOperation(12104050, 8, 255, 0, 0, CalculationType.Assign);
            DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            MoveBloodstainAndDroppedItems(spawn_checker_region, hidden_region);
            MoveBloodstainAndDroppedItems(hidden_region2, spawn_checker_region);
        }
        else { // kindling enabled and not full kindle
            StoreItemAmountHeldInEventValue(ItemType.Goods, 900, 12104030, 8);
            StoreItemAmountHeldInEventValue(ItemType.Goods, 1000, 12104040, 8);
            
            if (EventValue(lamp_kindle_flag, 2) == 0 && EventValue(12104030, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 1 && EventValue(12104030, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 2 && EventValue(12104030, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104030, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 900, 12104050, 8);
            }
            
            if (EventValue(lamp_kindle_flag, 2) == 0 && EventValue(12104040, 8) < 5) {
                EventValueOperation(12104050, 8, 5, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 1 && EventValue(12104040, 8) < 10) {
                EventValueOperation(12104050, 8, 10, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
            else if (EventValue(lamp_kindle_flag, 2) == 2 && EventValue(12104040, 8) < 15) {
                EventValueOperation(12104050, 8, 15, 0, 0, CalculationType.Assign);
                EventValueOperation(12104050, 8, 0, 12104040, 8, CalculationType.Sub);
                DirectlyGivePlayerItem(ItemType.Goods, 1000, 12104050, 8);
            }
        }
    }
});

// rest
$Event(8500, Default, function(X0_4, X4_4, X8_4) {
    SetEventFlag(X0_4, OFF); // this event slot
    WaitFixedTimeSeconds(2);
    if (EventFlag(1510)) { // a chalice menu has been opened
        WaitFixedTimeSeconds(0.5);
        SetEventFlag(1510, OFF);
        SetEventFlag(X0_4, ON);
    }
    WaitFor(ThisEventSlot()); // menu opened, trigger animation
    RotateCharacter(10000, X4_4, 101280, false);
    PlaySE(10000, SoundType.sSFX, 777777774);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    SetCharacterAnimationState(10000, Disabled);
    SetCharacterTeamType(10000, TeamType.Baby);
    ActivateHit(10000, Disabled);
    WaitFor(!ThisEventSlot()); // wait for menu closed (8540)
    if (EventFlag(7999)) {
        SetEventFlag(7999, OFF);
        RestartEvent();
    }
    if (EventFlag(1510) ) {
        RestartEvent();
    }
    InitializeEvent(0, 8600, 0);
    SetEventFlag(X8_4, ON);
    RestartEvent();
});

// fade
$Event(8600, Default, function(){
    WaitFixedTimeSeconds(1);
    DisplayBanner(TextBannerType.StadiumLoss);
});

// Disable restock after spawn
$Event(8700, Default, function() {
    WaitFixedTimeSeconds(1);
    SetEventFlag(1509, ON);
});

// hide lamp during rematch
$Event(8800, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X0_4));
    ChangeCharacterEnableState(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    WaitFixedTimeFrames(1);
    CharacterWarpRequest(X4_4, TargetEntityType.Area, X12_4, -1);
});

// InitializeEvent(gascoigne_offset, 8900, gascoigne_defeat-1, gascoigne_lamp_id+1000, gascoigne_defeat-2, gascoigne_defeat+15, gascoigne_defeat+14);
// Auto restart rematch if dead + move player to rematch point
$Event(8900, Default, function(X0_4, X4_4, X8_4) {
    const auto_rematch_flag = X0_4;
    const lamp_spawn_point = X4_4;
    const rematch_start_region = X8_4;
    EndIf(!ThisEventSlot()); // game's state is in rematch mode
    DummyPlayCutsceneAndWarpPlayer(rematch_start_region, area_id, block_id);
    WaitFor(HPRatio(10000) <= 0);
    if (EventFlag(12100864)) { // auto rematch enabled
        SetEventFlag(auto_rematch_flag, ON);
        SetPlayerRespawnPoint(lamp_spawn_point);
        SetEventFlag(8950, ON);
    }
    else {
        SetPlayerRespawnPoint(lamp_spawn_point);
    }
});

$Event(12200220, Default, function(X0_4) {
    WaitFor(EventFlag(X0_4));
    DisplayMessage(10011260, 0);
    SetEventFlag(X0_4, OFF);
    EndEvent();
});

// beast 
$Event(12100770, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12100870, ON);
    WaitFor(ThisEvent());
    AwardItemLot(3401850);
    SetEventFlag(12100870, OFF);
});

// milkweed
$Event(12100769, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12100869, ON);
    WaitFor(ThisEvent());
    AwardItemLot(43020);
    SetEventFlag(12100869, OFF);
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
$Event(12101000, Default, function(X0_4, X4_4, X8_1, X9_1) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X4_4));
    ChangeCharacterDispmask(X4_4, X8_1, OFF);
    ChangeCharacterDispmask(X4_4, X9_1, OFF);
    WaitFor(PlayerHasItem(ItemType.Goods, X0_4));
    ChangeCharacterDispmask(X4_4, X8_1, ON);
    ChangeCharacterDispmask(X4_4, X9_1, ON);
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
    GotoIf(S0, EventFlag(6071));
    GotoIf(S0, !EventFlag(6900));
    AwardItemLot(2100900);
    SetEventFlag(6071, ON);
S0:
    GotoIf(S1, EventFlag(6072));
    GotoIf(S1, !EventFlag(6901));
    AwardItemLot(2100910);
    SetEventFlag(6072, ON);
S1:
    GotoIf(S2, EventFlag(6073));
    GotoIf(S2, !EventFlag(6902));
    AwardItemLot(2100920);
    SetEventFlag(6073, ON);
S2:
    ForceAnimationPlayback(2100232, 7052, false, false, false);
    WaitFixedTimeFrames(74);
L0:
    ChangeCharacterEnableState(2100232, Disabled);
});

// dress-up messenger_flag control_other than naked
$Event(12105070, Restart, function(X0_4, X4_4, X8_1) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(12105061, OFF);
    WaitFor(EventFlag(X0_4));
    SetEventFlag(12105061, ON);
    SetEventFlag(X0_4, OFF);
    BatchSetEventFlags(6011, 6025, OFF);
    RotateCharacter(10000, 2100218, 101310, false);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(2100218, 7003, false, false, false);
    WaitFixedTimeFrames(39);
    SetEventFlag(X4_4, ON);
    ChangeCharacterDispmask(2100218, 20, OFF);
    ChangeCharacterDispmask(2100218, 21, OFF);
    ChangeCharacterDispmask(2100218, 22, OFF);
    ChangeCharacterDispmask(2100218, 23, OFF);
    ChangeCharacterDispmask(2100218, 24, OFF);
    ChangeCharacterDispmask(2100218, 25, OFF);
    ChangeCharacterDispmask(2100218, 26, OFF);
    ChangeCharacterDispmask(2100218, 27, OFF);
    ChangeCharacterDispmask(2100218, 28, OFF);
    ChangeCharacterDispmask(2100218, X8_1, ON);
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
$Event(12107000, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    else {
        RotateCharacter(10000, X4_4, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    SetPlayerRespawnPoint(X8_4);
    SetSpEffect(10000, 2101, false);
});

// Warp OBJ_Warp to Dungeon_First Half_XX
$Event(12107100, Default, function(X0_4, X4_4, X8_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    else {
        RotateCharacter(10000, X4_4, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    SetEventFlag(9020, OFF);
    SetEventFlag(9021, OFF);
    SetEventFlag(9022, OFF);
    SetEventFlag(9023, OFF);
    SetEventFlag(9024, OFF);
    SetEventFlag(9025, OFF);
    SetEventFlag(9026, OFF);
    SetEventFlag(X8_4, ON);
    SetEventFlag(X0_4, OFF);
    EndEvent();
});


// Warp OBJ_Warp to Dungeon_Late_XX
$Event(12107200, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    else {
        RotateCharacter(10000, X12_4, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    if (EventFlag(12106000)) {
        SetEventFlag(12106000, OFF);
        SetPlayerRespawnPoint(X4_4);
        SetSpEffect(10000, 2101, false);
    }
    else {
        WarpPlayerToRespawnPoint(X4_4);
    }
    SetEventFlag(X8_4, ON);
});

// treasure chest_XX
$Event(12900000, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(X0_4)) {
            ReproduceObjectAnimation(X0_4, 0);
        }
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4) || ObjectDestroyed(X0_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
    SetObjactState(X0_4, -1, Disabled);
});

// unique item switching_XX
$Event(12900060, Default, function(X0_4, X4_4) {
    if (EventFlag(92905335)) {
        DeactivateObject(X0_4, Disabled);
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Disabled);
        EndEvent();
    }
    DeactivateObject(X4_4, Disabled);
    SetObjactState(X4_4, -1, Disabled);
    SetObjectTreasureState(X4_4, Disabled);
    EndEvent();
});

// Rusted Treasure Chest_XX
$Event(12900067, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        if (!ObjectDestroyed(X0_4)) {
            ReproduceObjectAnimation(X0_4, 0);
        }
        SetObjactState(X0_4, -1, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(X4_4);
    obj2 = ObjectDestroyed(X0_4);
    WaitFor(obj || obj2);
    WaitFixedTimeFrames(10);
    SetObjactState(X0_4, -1, Disabled);
    SetObjectTreasureState(X0_4, Enabled);
    EndIf(obj2.Passed);
    SetEventFlag(X8_4, ON);
});

// Rusty Treasure Chest_Sound Trap_XX
$Event(12900078, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4));
    CreatePlaylog(0);
    ShootBullet(2900000, X0_4, 90, 6051, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6053, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
    WaitFixedTimeSeconds(2);
    ShootBullet(2900000, X0_4, 90, 6055, 270, 0, 0);
});

// Delete door action_XX
$Event(12900089, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetObjactState(X0_4, X12_4, Disabled);
    EndEvent();
});

// Delete door action_one-way door_XX
$Event(12900163, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetEventFlag(X12_4, ON);
    EndEvent();
});

// one-way door_Msg_XX
$Event(12900174, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X8_4)) {
        EndEvent();
    }
L0:
    SetNetworkSyncState(Disabled);
    act = ActionButtonInArea(7011, X0_4);
    WaitFor(act || ObjActEventFlag(X4_4));
    if (!act.Passed) {
        EndEvent();
    }
L1:
    DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// lever door_XX
$Event(12900185, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X4_4, 9902, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X8_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    SetEventFlag(X12_4, ON);
});

// lever door_Msg_XX
$Event(12900186, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    act = ActionButtonInArea(7010, X0_4);
    act2 = ActionButtonInArea(7011, X0_4);
    flag = EventFlag(X4_4);
    WaitFor(act || act2 || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Lever Door_Lever Msg_XX
$Event(12900187, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4) && ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Sealed Door_Pull Lever_XX
$Event(12900188, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 1);
        SetObjactState(X0_4, 9921, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(X0_4, 9921, Disabled);
    WaitFor(ObjActEventFlag(X4_4));
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetObjactState(X0_4, 9921, Enabled);
    WaitFixedTimeSeconds(0.5);
    SetEventFlag(X8_4, ON);
});

// sealed door_open door_XX
$Event(12900189, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, 9921, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetEventFlag(X8_4, ON);
    WaitFixedTimeSeconds(0);
});

// Sealed Door_Msg_XX
$Event(12900190, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(!EventFlag(X4_4) && ActionButtonInArea(7010, X0_4));
    DisplayGenericDialog(10010160, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Sealed Door_Lever Msg_XX
$Event(12900191, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4) && ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_pull lever_XX
$Event(12900192, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        SetObjactState(X8_4, 2902000, Disabled);
        CreateObjectfollowingSFX(X8_4, 703, 929136);
        EndEvent();
    }
    CreateObjectfollowingSFX(X8_4, 703, 929134);
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(56);
    SetEventFlag(X4_4, ON);
    DeleteObjectfollowingSFX(X8_4, true);
    CreateObjectfollowingSFX(X8_4, 703, 929136);
    DisplayBanner(TextBannerType.StadiumWin);
    PlaySE(10000, SoundType.vVoice, 888880000);
    WaitFixedTimeFrames(44);
    WaitFixedTimeSeconds(1);
    DisplayMessage(10011260, 0);
});

// Main block door_open door_XX
$Event(12900197, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, 2900100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetEventFlag(X8_4, ON);
    WaitFixedTimeSeconds(0);
});

// Main block door_Msg_XX
$Event(12900202, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4) || EventFlag(12100860));
    WaitFor(!EventFlag(X4_4) && ActionButtonInArea(7010, X0_4));
    DisplayGenericDialog(10010167, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_lever Msg_XX
$Event(12900207, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(3);
    WaitFor(ActionButtonInArea(7100, X0_4));
    DisplayGenericDialog(10010170, PromptType.OKCANCEL, NumberofOptions.OneButton, X0_4, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Main block door_lever pulled_XX
$Event(12900229, Default, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(2);
    if (EventFlag(X8_4)) {
        CreateObjectfollowingSFX(X0_4, 703, 929136);
        EndEvent();
    }
    if (ThisEventSlot() || EventFlag(12100860)) {
        ReproduceObjectAnimation(X0_4, 1);
        CreateObjectfollowingSFX(X0_4, 703, 929136);
        SetObjactState(X0_4, 2900100, Enabled);
        EndEvent();
    }
L0:
    SetObjactState(X0_4, 2900100, Disabled);
    CreateObjectfollowingSFX(X0_4, 703, 929134);
    WaitFor(EventFlag(X4_4));
    DeleteObjectfollowingSFX(X0_4, true);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    WaitFixedTimeSeconds(2.5);
    CreateObjectfollowingSFX(X0_4, 703, 929136);
    SetObjactState(X0_4, 2900100, Enabled);
    WaitFixedTimeSeconds(0.5);
});

// key consumption_door unlock_XX
$Event(12900234, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        SetObjactState(X12_4, X16_4, Disabled);
        SetObjactState(X12_4, X20_4, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        RemoveItemFromPlayer(ItemType.Goods, X4_4, 0);
    }
    SetObjactState(X12_4, X16_4, Disabled);
    SetObjactState(X12_4, X20_4, Disabled);
});

// hold key_unlock door_XX
$Event(12900235, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        SetObjactState(X8_4, X12_4, Disabled);
        SetObjactState(X8_4, X16_4, Disabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        DisplayGenericDialog(X4_4, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
    }
    SetObjactState(X8_4, X12_4, Disabled);
    SetObjactState(X8_4, X16_4, Disabled);
});

// Magic wall vanishes_XX
$Event(12900236, Default, function(X0_4) {
    GotoIf(L0, !ThisEventSlot());
    DeactivateObject(X0_4, Disabled);
    EndEvent();
    WaitFor(ObjectDestroyed(X0_4));
    CreatePlaylog(38);
});

// Magic wall disappeared_New_XX
$Event(12901760, Default, function(X0_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X0_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjectDestroyed(X0_4));
    CreatePlaylog(38);
});

// Rusted door_XX
$Event(12900238, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    SetObjactState(X0_4, X8_4, Disabled);
    SetObjactState(X0_4, X12_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// Rusted Door_Sound Trap XX
$Event(12900239, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4));
    CreatePlaylog(76);
    WaitFixedTimeSeconds(1.5);
    ShootBullet(2900000, X0_4, 120, 6020, 270, 0, 0);
});

// Initialize Altar Elevator
$Event(12900240, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!EventFlag(X12_4)) {
        ReproduceObjectAnimation(X0_4, 10);
        ReproduceObjectAnimation(X4_4, 0);
        ReproduceObjectAnimation(X8_4, 1);
    } else {
L0:
        ReproduceObjectAnimation(X0_4, 0);
        ReproduceObjectAnimation(X4_4, 1);
        ReproduceObjectAnimation(X8_4, 0);
    }
L1:
    SetEventFlag(X16_4, OFF);
});

// Go down the altar elevator
$Event(12900245, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X20_4)));
    SetEventFlag(X28_4, ON);
    SetEventFlag(X24_4, OFF);
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    SetEventFlag(X28_4, OFF);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    RestartEvent();
});

// Go up the altar elevator
$Event(12900250, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X20_4)));
    SetEventFlag(X28_4, ON);
    SetEventFlag(X24_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    SetEventFlag(X28_4, OFF);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    RestartEvent();
});

// Altar Elevator Call Lever Inoperable
$Event(12900255, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (!EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X4_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Bloodline Offline Rescue_XX
$Event(12900260, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 6100) && CharacterDead(X0_4));
    EndIf(!(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    AwardItemsIncludingClients(5530);
});

// Teleporter_Transfer start
$Event(12900293, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, X0_4));
    CreatePlaylog(112);
    SetEventFlag(X8_4, ON);
    WaitFixedTimeFrames(6);
    RestartIf(!InArea(10000, X0_4));
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    SetEventFlag(X4_4, ON);
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

// Teleporter_transfer completed
$Event(12900304, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X0_4));
    DummyPlayCutsceneAndWarpPlayer(X4_4, 29, 0);
    WaitFixedTimeFrames(2);
    SetEventFlag(X8_4, ON);
    ForceAnimationPlayback(10000, 101162, false, true, false);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Teleporter_Transfer Source_Transfer Effect
$Event(12901732, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        CreateObjectfollowingSFX(X4_4, 700, 929102);
        CreateObjectfollowingSFX(X4_4, 702, 929102);
    }
L0:
    WaitFor(EventFlag(X0_4));
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(X4_4, 700, 929102);
        CreateObjectfollowingSFX(X4_4, 702, 929102);
    }
L1:
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 200, 929213);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Teleporter_Destination_Transfer effect
$Event(12901743, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 929215);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Prison elevator initialization
$Event(12900315, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    flag = EventFlag(X0_4);
    WaitFor(flag || !EventFlag(X0_4));
    if (!flag.Passed) {
        ReproduceObjectAnimation(X4_4, 12);
        SetObjactState(X8_4, X12_4, Disabled);
        SetObjactState(X16_4, X12_4, Enabled);
    } else {
        ReproduceObjectAnimation(X4_4, 132);
        SetObjactState(X16_4, X12_4, Disabled);
        SetObjactState(X8_4, X12_4, Enabled);
    }
    SetEventFlag(X20_4, OFF);
});

// Up the prison elevator
$Event(12900323, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4))
            || (EventFlag(X0_4) && !EventFlag(X4_4) && ObjActEventFlag(X12_4)));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 133, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 35, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 11, false, true, false);
    WaitFor(!AllPlayersInArea(X20_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetObjactState(X24_4, 9902, Disabled);
    SetObjactState(X28_4, 9902, Enabled);
    RestartEvent();
});

// Retreat elevator
$Event(12900331, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4))
            || (!EventFlag(X0_4) && !EventFlag(X4_4) && ObjActEventFlag(X12_4)));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 13, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 16, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 131, false, true, false);
    WaitFor(!AllPlayersInArea(X20_4));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, OFF);
    SetObjactState(X24_4, 9902, Disabled);
    SetObjactState(X28_4, 9902, Enabled);
    RestartEvent();
});

// Imprisoned Elevator Call Lever Inoperable
$Event(12900339, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X0_4) && !EventFlag(X8_4) && ActionButtonInArea(7100, X4_4))
            || (!EventFlag(X0_4) && EventFlag(X8_4) && ActionButtonInArea(7100, X12_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X12_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Floor movement elevator initialization
$Event(12900347, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (!EventFlag(X12_4)) {
        ReproduceObjectAnimation(X0_4, X20_4);
        SetObjactState(X4_4, 9902, Disabled);
        SetObjactState(X8_4, 9902, Enabled);
    } else {
L0:
        ReproduceObjectAnimation(X0_4, X24_4);
        SetObjactState(X4_4, 9902, Enabled);
        SetObjactState(X8_4, 9902, Disabled);
    }
L1:
    SetEventFlag(X16_4, OFF);
});

// 21m_Floor moving elevator going up
$Event(12900351, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, OFF);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    ForceAnimationPlayback(X0_4, 1, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Enabled);
    RestartEvent();
});

// 42m_Floor moving elevator going up
$Event(12900353, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X16_4))
            || (EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, OFF);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 20, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    ForceAnimationPlayback(X0_4, 21, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Enabled);
    RestartEvent();
});

// 21m_Floor moving elevator down
$Event(12900354, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, ON);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    ForceAnimationPlayback(X0_4, 11, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Enabled);
    SetObjactState(X8_4, 9902, Disabled);
    RestartEvent();
});

// 42m_Floor moving elevator down
$Event(12900356, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        (!EventFlag(X24_4) && !EventFlag(X28_4) && InArea(10000, X12_4))
            || (!EventFlag(X24_4) && !EventFlag(X28_4) && ObjActEventFlag(X20_4)));
    SetEventFlag(X24_4, ON);
    SetEventFlag(X28_4, ON);
    SetObjactState(X4_4, 9902, Disabled);
    SetObjactState(X8_4, 9902, Disabled);
    ForceAnimationPlayback(X0_4, 30, false, true, false);
    WaitFor(!AllPlayersInArea(X16_4));
    ForceAnimationPlayback(X0_4, 31, false, true, false);
    SetEventFlag(X28_4, OFF);
    SetObjactState(X4_4, 9902, Enabled);
    SetObjactState(X8_4, 9902, Disabled);
    RestartEvent();
});

// Floor Transfer Elevator Call Lever Inoperable
$Event(12900357, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X8_4) && !EventFlag(X12_4) && ActionButtonInArea(7100, X4_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X0_4))
            || (EventFlag(X12_4) && ActionButtonInArea(7100, X4_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// [Middle/Lower] Balance Elevator Initialization
$Event(12900361, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, OFF);
    ForceAnimationPlayback(X20_4, 2, false, true, false);
    ForceAnimationPlayback(X24_4, 2, false, true, false);
    EndEvent();
});

// [Middle and Lower] Tenbin Elevator First Time
$Event(12900363, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeSeconds(1);
    GotoIf(S0, !EventFlag(X20_4));
    GotoIf(S0, EventFlag(X4_4));
    WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4) && EventFlag(X20_4));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 3, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 4, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 121, false, true, false);
    ForceAnimationPlayback(X16_4, 122, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetEventFlag(X20_4, OFF);
    EndEvent();
S0:
    NoOp();
});

// [Middle and lower] Balance Elevator_Balance A is up
$Event(12900365, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X20_4, 123, false, false, false);
        ForceAnimationPlayback(X16_4, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 24, false, false, false);
        ForceAnimationPlayback(X16_4, 4, false, true, false);
        ForceAnimationPlayback(X20_4, 0, false, true, false);
        ForceAnimationPlayback(X16_4, 120, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 121, false, false, false);
        ForceAnimationPlayback(X20_4, 1, false, true, false);
        ForceAnimationPlayback(X16_4, 122, false, true, false);
        ForceAnimationPlayback(X20_4, 2, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, OFF);
        SetEventFlag(X4_4, OFF);
    }
    RestartEvent();
});

// [Middle and lower] Balance Elevator_Balance A is lower
$Event(12900367, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(!EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X16_4, 123, false, false, false);
        ForceAnimationPlayback(X20_4, 3, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 4, false, false, false);
        ForceAnimationPlayback(X16_4, 24, false, true, false);
        ForceAnimationPlayback(X20_4, 120, false, true, false);
        ForceAnimationPlayback(X16_4, 0, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 1, false, false, false);
        ForceAnimationPlayback(X20_4, 121, false, true, false);
        ForceAnimationPlayback(X16_4, 2, false, true, false);
        ForceAnimationPlayback(X20_4, 122, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, OFF);
    }
    RestartEvent();
});

// [Upper middle row] Balance elevator initialization
$Event(12900369, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, OFF);
    ForceAnimationPlayback(X20_4, 12, false, true, false);
    ForceAnimationPlayback(X24_4, 12, false, true, false);
    EndEvent();
});

// [Upper Middle] Tenbin Elevator First Time
$Event(12900371, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeSeconds(1);
    GotoIf(S0, !EventFlag(X20_4));
    GotoIf(S0, EventFlag(X4_4));
    WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && InArea(10000, X8_4) && EventFlag(X20_4));
    SetEventFlag(X4_4, ON);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X16_4, 13, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 14, false, true, false);
    WaitFixedTimeSeconds(0.5);
    ForceAnimationPlayback(X16_4, 101, false, true, false);
    ForceAnimationPlayback(X16_4, 102, false, true, false);
    WaitFor(!AllPlayersInArea(X12_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetEventFlag(X20_4, OFF);
    EndEvent();
S0:
    NoOp();
});

// [Upper Middle] Balance Elevator_Balance A is up
$Event(12900373, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(!EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X20_4, 103, false, false, false);
        ForceAnimationPlayback(X16_4, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 5, false, false, false);
        ForceAnimationPlayback(X16_4, 14, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 101, false, false, false);
        ForceAnimationPlayback(X20_4, 11, false, true, false);
        ForceAnimationPlayback(X16_4, 102, false, true, false);
        ForceAnimationPlayback(X20_4, 12, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, OFF);
        SetEventFlag(X4_4, OFF);
        RestartEvent();
    }
});

// [Upper middle row] Balance elevator_Balance A is down
$Event(12900375, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFixedTimeSeconds(0.5);
    if (!(EventFlag(X0_4) || EventFlag(X4_4) || EventFlag(12900500))) {
        WaitFor(!EventFlag(X0_4) && !EventFlag(X4_4) && !EventFlag(12900500));
        WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
        SetEventFlag(X4_4, ON);
        WaitFixedTimeSeconds(1);
        ForceAnimationPlayback(X16_4, 103, false, false, false);
        ForceAnimationPlayback(X20_4, 13, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X20_4, 14, false, false, false);
        ForceAnimationPlayback(X16_4, 5, false, true, false);
        WaitFixedTimeSeconds(0.5);
        ForceAnimationPlayback(X16_4, 11, false, false, false);
        ForceAnimationPlayback(X20_4, 101, false, true, false);
        ForceAnimationPlayback(X16_4, 12, false, true, false);
        ForceAnimationPlayback(X20_4, 102, false, true, false);
        WaitFor(!AllPlayersInArea(X24_4) && !AllPlayersInArea(X28_4));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, OFF);
        RestartEvent();
    }
});

// Create damage sphere_XX
$Event(12900377, Default, function(X0_4, X4_4) {
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
                                CreateDamagingObject(X4_4, X0_4, 101, 6130, DamageTargetType.Character, 0.3, 0, 2);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(X4_4, X0_4, 101, 6131, DamageTargetType.Character, 0.3, 0, 2);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(X4_4, X0_4, 101, 6132, DamageTargetType.Character, 0.3, 0, 2);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(X4_4, X0_4, 101, 6133, DamageTargetType.Character, 0.3, 0, 2);
                    EndEvent();
                }
L4:
                CreateDamagingObject(X4_4, X0_4, 101, 6134, DamageTargetType.Character, 0.3, 0, 2);
                EndEvent();
            }
L5:
            CreateDamagingObject(X4_4, X0_4, 101, 6135, DamageTargetType.Character, 0.3, 0, 2);
            EndEvent();
        }
L6:
        CreateDamagingObject(X4_4, X0_4, 101, 6136, DamageTargetType.Character, 0.3, 0, 2);
        EndEvent();
    }
L7:
    CreateDamagingObject(X4_4, X0_4, 101, 6137, DamageTargetType.Character, 0.3, 0, 2);
});

// Create bonfire damage sphere_XX
$Event(12900395, Default, function(X0_4, X4_4) {
    CreateObjectfollowingSFX(X0_4, 704, 900110);
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
                                CreateDamagingObject(X4_4, X0_4, 704, 6160, DamageTargetType.Character, 0.6, 0, 1);
                                EndEvent();
                            }
L1:
                            CreateDamagingObject(X4_4, X0_4, 704, 6161, DamageTargetType.Character, 0.6, 0, 1);
                            EndEvent();
                        }
L2:
                        CreateDamagingObject(X4_4, X0_4, 704, 6162, DamageTargetType.Character, 0.6, 0, 1);
                        EndEvent();
                    }
L3:
                    CreateDamagingObject(X4_4, X0_4, 704, 6163, DamageTargetType.Character, 0.6, 0, 1);
                    EndEvent();
                }
L4:
                CreateDamagingObject(X4_4, X0_4, 704, 6164, DamageTargetType.Character, 0.6, 0, 1);
                EndEvent();
            }
L5:
            CreateDamagingObject(X4_4, X0_4, 704, 6165, DamageTargetType.Character, 0.6, 0, 1);
            EndEvent();
        }
L6:
        CreateDamagingObject(X4_4, X0_4, 704, 6166, DamageTargetType.Character, 0.6, 0, 1);
        EndEvent();
    }
L7:
    CreateDamagingObject(X4_4, X0_4, 704, 6167, DamageTargetType.Character, 0.6, 0, 1);
});

// Pitfall_XX
$Event(12900423, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(X4_4, 1);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, X0_4));
    CreatePlaylog(152);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 929209);
    PlaySE(X4_4, SoundType.oObject, 997400000);
    RequestObjectDestruction(X4_4, 1);
});

// Widow generator disabled_XX
$Event(12900430, Default, function(X0_4) {
    DeactivateGenerator(X0_4, Disabled);
});

// Widow generation switch_XX
$Event(12901000, Default, function(X0_4, X4_4) {
    DeactivateGenerator(X4_4, Disabled);
    WaitFor(
        CharacterInsideDrawGroup(X0_4)
            && CharacterAIState(X0_4, AIStateType.Normal)
            && CharacterHasEventMessage(X0_4, 100));
    DeactivateGenerator(X4_4, Enabled);
    WaitFor(!CharacterInsideDrawGroup(X0_4) || CharacterAIState(X0_4, AIStateType.Combat));
    RestartEvent();
});

// Summon Enemy Spawn Warp_XX
$Event(12901200, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(X4_4, 100));
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 30, X0_4);
    WaitFor(!CharacterHasEventMessage(X4_4, 100));
    WaitFor(CharacterDead(X4_4));
    SetSpEffectAndUnknown200455(X4_4, 5751, false);
    RestartEvent();
});

// Widow died and Zako died_XX
$Event(12901272, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasEventMessage(X8_4, 100));
    chr = CharacterDead(X8_4);
    chr2 = CharacterDead(X0_4);
    WaitFor(chr || chr2);
    if (chr2.Passed) {
        DeactivateGenerator(X4_4, Disabled);
        ForceCharacterDeath(X8_4, true);
    }
L0:
    RestartEvent();
});

// arrow trap_switch_XX
$Event(12901347, Default, function(X0_4, X4_4, X8_4) {
    flagArea = !EventFlag(X8_4) && InArea(10000, X0_4);
    flagArea2 = EventFlag(X8_4) && !AllPlayersInArea(X0_4);
    WaitFor(flagArea || flagArea2);
    if (!flagArea2.Passed) {
        ForceAnimationPlayback(X4_4, 0, false, true, false);
        SetEventFlag(X8_4, ON);
        WaitFixedTimeSeconds(2.1);
        RestartEvent();
    }
L0:
    SetEventFlag(X8_4, OFF);
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    RestartEvent();
});

// arrow trap_fire_XX
$Event(12901400, Default, function(X0_4, X4_4) {
    obj = !ObjectDestroyed(X0_4);
    WaitFor(obj && EventFlag(X4_4));
    EndIf(!obj.Passed);
    CreatePlaylog(188);
    SpawnOneshotSFX(TargetEntityType.Object, X0_4, 101, 150005);
    PlaySE(X0_4, SoundType.oObject, 990100001);
    if (!EventFlag(92905107)) {
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
        ShootBullet(2900000, X0_4, 101, 6200, 0, 0, 0);
        Goto(S4);
S1:
        ShootBullet(2900000, X0_4, 101, 6210, 0, 0, 0);
        Goto(S4);
S2:
        ShootBullet(2900000, X0_4, 101, 6220, 0, 0, 0);
        Goto(S4);
S3:
        ShootBullet(2900000, X0_4, 101, 6230, 0, 0, 0);
S4:
        Goto(S31);
S5:
        if (!EventFlag(92905310)) {
            GotoIf(S7, EventFlag(92905204));
            GotoIf(S6, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6201, 0, 0, 0);
            Goto(S8);
S6:
            ShootBullet(2900000, X0_4, 101, 6211, 0, 0, 0);
            Goto(S8);
S7:
            ShootBullet(2900000, X0_4, 101, 6221, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6231, 0, 0, 0);
        }
S8:
        Goto(S31);
S9:
        if (!EventFlag(92905310)) {
            GotoIf(S11, EventFlag(92905204));
            GotoIf(S10, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6202, 0, 0, 0);
            Goto(S12);
S10:
            ShootBullet(2900000, X0_4, 101, 6212, 0, 0, 0);
            Goto(S12);
S11:
            ShootBullet(2900000, X0_4, 101, 6222, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6232, 0, 0, 0);
        }
S12:
        Goto(S31);
S13:
        if (!EventFlag(92905310)) {
            GotoIf(S15, EventFlag(92905204));
            GotoIf(S14, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6203, 0, 0, 0);
            Goto(S16);
S14:
            ShootBullet(2900000, X0_4, 101, 6213, 0, 0, 0);
            Goto(S16);
S15:
            ShootBullet(2900000, X0_4, 101, 6223, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6233, 0, 0, 0);
        }
S16:
        Goto(S31);
S17:
        if (!EventFlag(92905310)) {
            GotoIf(S19, EventFlag(92905204));
            GotoIf(S18, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6204, 0, 0, 0);
            Goto(S20);
S18:
            ShootBullet(2900000, X0_4, 101, 6214, 0, 0, 0);
            Goto(S20);
S19:
            ShootBullet(2900000, X0_4, 101, 6224, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6234, 0, 0, 0);
        }
S20:
        Goto(S31);
S21:
        if (!EventFlag(92905310)) {
            GotoIf(S23, EventFlag(92905204));
            GotoIf(S22, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6205, 0, 0, 0);
            Goto(S24);
S22:
            ShootBullet(2900000, X0_4, 101, 6215, 0, 0, 0);
            Goto(S24);
S23:
            ShootBullet(2900000, X0_4, 101, 6225, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6235, 0, 0, 0);
        }
S24:
        Goto(S31);
S25:
        if (!EventFlag(92905310)) {
            GotoIf(S27, EventFlag(92905204));
            GotoIf(S26, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6206, 0, 0, 0);
            Goto(S31);
S26:
            ShootBullet(2900000, X0_4, 101, 6216, 0, 0, 0);
            Goto(S31);
S27:
            ShootBullet(2900000, X0_4, 101, 6226, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6236, 0, 0, 0);
        }
    } else {
        if (!EventFlag(92905310)) {
            GotoIf(S29, EventFlag(92905204));
            GotoIf(S28, EventFlag(92905202));
            ShootBullet(2900000, X0_4, 101, 6207, 0, 0, 0);
            Goto(S30);
S28:
            ShootBullet(2900000, X0_4, 101, 6217, 0, 0, 0);
            Goto(S30);
S29:
            ShootBullet(2900000, X0_4, 101, 6227, 0, 0, 0);
        } else {
            ShootBullet(2900000, X0_4, 101, 6237, 0, 0, 0);
        }
S30:
        Goto(S31);
    }
S31:
    WaitFixedTimeSeconds(0.7);
    WaitFor(!EventFlag(X4_4));
    RestartEvent();
});

// NavMesh Node Bank_XX
$Event(12901447, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(X0_4));
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
});

// Drawbridge NavMesh Node Bank_XX
$Event(12901525, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Add);
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(3);
    ModifyNavimeshConnectionBitflag(X4_4, NavimeshType.Solid, BitopType.Delete);
});

// Treasure Enemy Reappearance Control_XX
$Event(12901532, Restart, function(X0_4, X4_4) {
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

// drawbridge drop
$Event(12901550, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X4_4, 1);
        ReproduceObjectAnimation(X8_4, 0);
        SetObjactState(X4_4, 2931100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    CreatePlaylog(224);
});

// Launch by surprise enemy_PC discovery
$Event(12901554, Default, function(X0_4, X4_4) {
    WaitFor(CharacterTargetedBy(X0_4, 10000) || CharacterDamagedBy(X0_4, 10000));
    SetCharacterAIId(X0_4, X4_4);
    RequestCharacterAIReplan(X0_4);
});

// create bullet owner
$Event(12901555, Default, function() {
    CreateBulletOwner(2900000);
    ChangeCharacterEnableState(2900000, Disabled);
});

// Ladder registration
$Event(12901556, Default, function(X0_4, X4_4, X8_4) {
    RegisterLadder(X0_4, X4_4, X8_4);
});

// Boss defeated
$Event(12901588, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeSeconds(4);
    if (ThisEventSlot()
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// Defeat multiple bosses
$Event(12901589, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4) && CharacterDead(X24_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// Boss Rush_Boss defeated
$Event(12901590, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    CreatePlaylog(262);
    EndTimeMeasurement(2900020);
    HandleBossDefeat(X0_4);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    SetEventFlag(X12_4, ON);
});

// Defeat three bosses
$Event(12901591, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (ThisEventSlot()
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4) && CharacterDead(X24_4) && CharacterDead(X28_4));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 4680, false);
    SetSpEffect(10000, 4680, false);
    HandleBossDefeat(X0_4);
    CreatePlaylog(262);
    if (X12_4 == 12901800) {
        EndTimeMeasurement(2900010);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901801) {
        EndTimeMeasurement(2900011);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901802) {
        EndTimeMeasurement(2900012);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
    }
    if (X12_4 == 12901803) {
        EndTimeMeasurement(2900013);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
    }
    SetEventFlag(X12_4, ON);
});

// Boss room_4F door open
$Event(12901592, Default, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X0_4) && EventFlag(92905360) && !EventFlag(12907220));
        WaitFixedTimeSeconds(3);
    }
    SetEventFlag(12907220, ON);
    DeactivateObject(X4_4, Disabled);
});

// Boss Rush_door release
$Event(12901593, Default, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X0_4));
    }
    DeactivateObject(X4_4, Disabled);
});

// [For 3F] Boss defeat item acquisition
$Event(12901594, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    if (EventFlag(92905377) && !EventFlag(X28_4)) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    AwardItemLot(X20_4);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(X28_4)) {
            AwardItemLot(X20_4);
            SetEventFlag(X28_4, ON);
        } else {
            AwardItemLot(X24_4);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(X20_4);
        EndEvent();
    }
    AwardItemsIncludingClients(X8_4);
    EndEvent();
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// [For 4F] Boss defeat item acquisition
$Event(12901595, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    if (EventFlag(92905377) && !EventFlag(X28_4)) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    if (!EventFlag(92905378)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    if (!(EventFlag(92905360) && EventFlag(12907220))) {
        AwardItemLot(X16_4);
        EndEvent();
    }
    AwardItemLot(X20_4);
    EndEvent();
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        EndIf(!EventFlag(92905360));
        AwardItemLot(X16_4);
        EndIf(!AnyBatchEventFlags(92905370, 92905373));
        if (!EventFlag(X28_4)) {
            AwardItemLot(X20_4);
            SetEventFlag(X28_4, ON);
        } else {
            AwardItemLot(X24_4);
        }
        EndIf(!AnyBatchEventFlags(92905371, 92905373));
        AwardItemLot(X20_4);
        EndEvent();
    }
    AwardItemsIncludingClients(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// [For 1, 2F] Boss defeat item acquisition
$Event(12901596, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// [For Boss Rush] Boss defeat item acquisition
$Event(12901597, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    if (AnyBatchEventFlags(92905370, 92905373)) {
        AwardItemsIncludingClients(X12_4);
    }
    EndEvent();
});

// [Floor Boss/Large Boss] Acquire boss defeat item
$Event(12901598, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        AwardItemLot(X4_4);
        EndEvent();
    }
    AwardItemLot(X8_4);
    EndEvent();
});

// Boss appearance animation playback_XX
$Event(12901599, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(InArea(10000, X4_4));
    RotateCharacter(X0_4, 10000, X12_4, false);
});

// B boss appearance SFX playback_XX
$Event(12901600, Default, function(X0_4, X4_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Enable Boss Wall
$Event(12901601, Default, function(X0_4) {
    DeactivateObject(X0_4, Disabled);
});

// Lantern lights up when passing area_XX
$Event(12901602, Default, function(X0_4, X4_4) {
    CreateObjectfollowingSFX(X4_4, 200, 8020);
    ForceAnimationPlayback(X4_4, 200, true, true, false);
    if (!ThisEventSlot()) {
        WaitFor(InArea(10000, X0_4));
    }
    ForceAnimationPlayback(X4_4, 1000000, false, true, false);
    CreateObjectfollowingSFX(X4_4, 100, 8023);
    ForceAnimationPlayback(X4_4, 1000100, true, true, false);
});

// Trophy unlocked_XX
$Event(12901684, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    AwardAchievement(X4_4);
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
    GotoIf(S0, !EventFlag(92905360));
    GotoIf(S0, EventFlag(12901803));
    StartTimeMeasurement(2901030, 654, Disabled);
    StartTimeMeasurement(2901031, 692, Enabled);
    WaitFor(EventFlag(12901803));
    EndTimeMeasurement(2901030);
    EndTimeMeasurement(2901031);
S0:
    EndTimeMeasurement(2900000);
    EndEvent();
});

// Boss defeat process
$Event(12901686, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X20_4)
      && !(X20_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X20_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X20_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X20_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X12_4, true);
        DeleteMapSFX(X16_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeleteMapSFX(X12_4, true);
    DeleteMapSFX(X16_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X20_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(X20_4, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            InitializeEvent(boss_1_offset, 7800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            InitializeEvent(boss_2_offset, 7800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            InitializeEvent(boss_3_offset, 7800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            InitializeEvent(boss_4_offset, 7800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X20_4, ON);
});

// Boss defeat processing_no exit
$Event(12901690, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeleteMapSFX(X8_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.Every2Frames);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
L2:
        SetEventFlag(X12_4, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            InitializeEvent(boss_1_offset, 7800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            InitializeEvent(boss_2_offset, 7800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            InitializeEvent(boss_3_offset, 7800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            InitializeEvent(boss_4_offset, 7800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// Boss defeat processing_undercard
$Event(12901692, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X20_4)
      && !(X20_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X20_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X20_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X20_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X12_4, true);
        DeleteMapSFX(X16_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4) || HPRatio(X0_4) == 0);
    WaitFor(CharacterDead(X0_4) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeleteMapSFX(X12_4, true);
    DeleteMapSFX(X16_4, true);
    WaitFixedTimeSeconds(3);
    HandleMinibossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X20_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X20_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X20_4, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            InitializeEvent(boss_1_offset, 7800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            InitializeEvent(boss_2_offset, 7800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            InitializeEvent(boss_3_offset, 7800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            InitializeEvent(boss_4_offset, 7800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X20_4, ON);
});

// Boss reward_defeat item
$Event(12901693, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(92905385) && (EventFlag(12907212) || EventFlag(12907213))) {
            GotoIf(S0, EventFlag(12907213));
            AwardItemLot(X20_4);
            Goto(L1);
S0:
            AwardItemLot(X24_4);
        } else {
            GotoIf(L3, !EventFlag(92905385) && EventFlag(92905378) && (EventFlag(12907211) || EventFlag(12907212)));
            Goto(L1);
L3:
            if (!EventFlag(12907212)) {
                AwardItemLot(X20_4);
            } else {
                AwardItemLot(X24_4);
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
        AwardItemsIncludingClients(X4_4);
        Goto(L9);
S1:
        AwardItemsIncludingClients(X8_4);
    } else {
L4:
        if (!EventFlag(92905370)) {
            AwardItemsIncludingClients(X12_4);
        } else {
            AwardItemsIncludingClients(X16_4);
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
$Event(12901697, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X16_4));
    EndIf(EventFlag(X24_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
        !EventFlag(X16_4)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    if (X16_4 == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    }
    else if (X16_4 == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    }
    else if (X16_4 == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    }
    else if (X16_4 == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    RotateCharacter(X0_4, 10000, X12_4, false);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X24_4, ON);
});

// Boss room entry_host_first battle_SFX
$Event(12901701, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X20_4));
    WaitFor(
        !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    if (X8_4 == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    }
    else if (X8_4 == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    }
    else if (X8_4 == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    }
    else if (X8_4 == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Boss room entry_host_first match_anime_undercard
$Event(12901705, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X16_4));
    EndIf(EventFlag(X24_4));
    ForceAnimationPlayback(X0_4, X8_4, true, false, true);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
        !EventFlag(X16_4)
            && !ThisEventSlot()
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    RotateCharacter(X0_4, 10000, X12_4, false);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X24_4, ON);
});

// Boss room entry_host_first match_SFX_undercard
$Event(12901706, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X20_4));
    WaitFor(
        !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Boss room entry_host_first match_SFX_fat
$Event(12901707, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X16_4));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    WaitFor(ObjActEventFlag(X28_4));
    WaitFor(
    !EventFlag(X8_4)
            && !EventFlag(X16_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X4_4) || CharacterHasEventMessage(10000, 700)));
    if (X8_4 == 12901800 && !EventFlag(12901830)) {
        SetEventFlag(12901830, ON);
    }
    else if (X8_4 == 12901801 && !EventFlag(12901831)) {
        SetEventFlag(12901831, ON);
    }
    else if (X8_4 == 12901802 && !EventFlag(12901832)) {
        SetEventFlag(12901832, ON);
    }
    else if (X8_4 == 12901803 && !EventFlag(12901833)) {
        SetEventFlag(12901833, ON);
    }
    SetEventFlag(X12_4, ON);
    SetEventFlag(X16_4, ON);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, X20_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X20_4, Enabled);
    WaitFixedTimeFrames(15);
    SpawnOneshotSFX(TargetEntityType.Character, X24_4, 6, 929227);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X24_4, Enabled);
});

// Boss Reward_Defeat SAN Value
$Event(12901708, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L2, X4_4 == 127000);
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 304000);
    GotoIf(L2, X4_4 == 313000);
    GotoIf(L2, X4_4 == 750000);
    GotoIf(L2, X4_4 == 7200);
    GotoIf(L2, X4_4 == 7040);
    GotoIf(L2, X4_4 == 106000);
    GotoIf(L2, X4_4 == 218000);
    GotoIf(L2, X4_4 == 209000);
    GotoIf(L2, X4_4 == 257000);
    GotoIf(L2, X4_4 == 305000);
    GotoIf(L2, X4_4 == 305010);
    GotoIf(L2, X4_4 == 501000);
    GotoIf(L2, X4_4 == 504000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L3, X4_4 == 306000);
    GotoIf(L3, X4_4 == 508000);
    GotoIf(L3, X4_4 == 509000);
    GotoIf(L3, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
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
$Event(12901712, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 216000);
    GotoIf(L2, X4_4 == 304000);
    GotoIf(L2, X4_4 == 313000);
    GotoIf(L2, X4_4 == 750000);
    GotoIf(L2, X4_4 == 7200);
    GotoIf(L2, X4_4 == 209000);
    GotoIf(L2, X4_4 == 257000);
    GotoIf(L2, X4_4 == 305000);
    GotoIf(L2, X4_4 == 305010);
    GotoIf(L2, X4_4 == 501000);
    GotoIf(L2, X4_4 == 504000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L3, X4_4 == 306000);
    GotoIf(L3, X4_4 == 508000);
    GotoIf(L3, X4_4 == 509000);
    GotoIf(L3, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
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
$Event(12901713, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(0);
});

// Boss entrance door open_opening
$Event(12901717, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(0);
});

// Boss Reward_Encounter SAN Value
$Event(12901718, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L1, X4_4 == 216000);
    GotoIf(L1, X4_4 == 209000);
    GotoIf(L1, X4_4 == 305000);
    GotoIf(L1, X4_4 == 305010);
    GotoIf(L1, X4_4 == 501000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L1, X4_4 == 306000);
    GotoIf(L1, X4_4 == 508000);
    GotoIf(L1, X4_4 == 509000);
    GotoIf(L1, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
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
    SetEventFlag(X8_4, ON);
});

// boss reward_encounter SAN value_undercard
$Event(12901722, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X0_4));
    GotoIf(L1, X4_4 == 216000);
    GotoIf(L1, X4_4 == 209000);
    GotoIf(L1, X4_4 == 305000);
    GotoIf(L1, X4_4 == 305010);
    GotoIf(L1, X4_4 == 501000);
    GotoIf(L2, X4_4 == 510000);
    GotoIf(L3, X4_4 == 251000);
    GotoIf(L1, X4_4 == 306000);
    GotoIf(L1, X4_4 == 508000);
    GotoIf(L1, X4_4 == 509000);
    GotoIf(L1, X4_4 == 509010);
    GotoIf(L3, X4_4 == 512000);
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
    SetEventFlag(X8_4, ON);
});

// Boss Defeat Processing_2
$Event(12901723, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
L0:
    WaitFor((CharacterDead(X0_4) || HPRatio(X0_4) == 0) && (CharacterDead(X24_4) || HPRatio(X24_4) == 0));
    WaitFor((CharacterDead(X0_4) && CharacterDead(X24_4)) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X12_4, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            InitializeEvent(boss_1_offset, 7800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            InitializeEvent(boss_2_offset, 7800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            InitializeEvent(boss_3_offset, 7800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            InitializeEvent(boss_4_offset, 7800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// Boss Defeat Processing_Fat
$Event(12901725, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (ThisEventSlot()
      && !(X12_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
      && !(X12_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
      && !(X12_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
      && !(X12_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X24_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        ForceCharacterDeath(X0_4, false);
        ForceCharacterDeath(X24_4, false);
        ForceCharacterDeath(X28_4, false);
        DeactivateObject(X4_4, Disabled);
        DeactivateObject(X16_4, Disabled);
        DeleteMapSFX(X8_4, true);
        DeleteMapSFX(X20_4, true);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterDead(X0_4) || HPRatio(X0_4) == 0)
            && (CharacterDead(X24_4) || HPRatio(X24_4) == 0)
            && (CharacterDead(X28_4) || HPRatio(X28_4) == 0));
    WaitFor((CharacterDead(X0_4) && CharacterDead(X24_4) && CharacterDead(X28_4)) || ElapsedSeconds(15));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeleteMapSFX(X8_4, true);
    DeleteMapSFX(X20_4, true);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(X0_4);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        CreatePlaylog(262);
        if (X12_4 == 12901800) {
            EndTimeMeasurement(2900010);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 274, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 274, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901801) {
            EndTimeMeasurement(2900011);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 300, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 300, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901802) {
            EndTimeMeasurement(2900012);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 326, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 326, PlayLogMultiplayerType.HostOnly);
        }
        if (X12_4 == 12901803) {
            EndTimeMeasurement(2900013);
            ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Weapon, 352, PlayLogMultiplayerType.HostOnly);
            ParameterOutput(PlayerPlayLogParameter.Armor, 352, PlayLogMultiplayerType.HostOnly);
        }
        SetEventFlag(X12_4, ON);
        if (EventFlag(boss_1_defeat+1013)) {
            InitializeEvent(boss_1_offset, 7800, boss_1_lamp_id+1000);
        }
        if (EventFlag(boss_2_defeat+1023)) {
            InitializeEvent(boss_2_offset, 7800, boss_2_lamp_id+1000);
        }
        if (EventFlag(boss_3_defeat+1033)) {
            InitializeEvent(boss_3_offset, 7800, boss_3_lamp_id+1000);
        }
        if (EventFlag(boss_4_defeat+1043)) {
            InitializeEvent(boss_4_offset, 7800, boss_4_lamp_id+1000);
        }
        EndEvent();
    }
L1:
    WaitFixedTimeSeconds(0);
    SetEventFlag(X12_4, ON);
});

// Boss room exit open_opening
$Event(12901727, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X0_4));
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    DeactivateObject(X4_4, Disabled);
});

// Boss room exit open_after 3F
$Event(12901728, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        DeactivateObject(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(X0_4) && EventFlag(92905360) && !EventFlag(12907220));
    WaitFixedTimeSeconds(3);
L0:
    ForceAnimationPlayback(X4_4, 0, false, true, false);
    SetEventFlag(12907220, ON);
    DeactivateObject(X4_4, Disabled);
});

// Boss reward_defeat item_undercard
$Event(12901730, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (!EventFlag(92905370)) {
            AwardItemLot(X4_4);
            EndEvent();
        }
        AwardItemLot(X8_4);
        EndEvent();
    }
L0:
    if (!EventFlag(92905370)) {
        AwardItemLot(X12_4);
        EndEvent();
    }
    AwardItemLot(X16_4);
    EndEvent();
});

// Disable Zakobos
$Event(12901754, Default, function(X0_4) {
    WaitFor(!(EventFlag(boss_1_defeat+1013) || EventFlag(boss_2_defeat+1023) || EventFlag(boss_3_defeat+1033) || EventFlag(boss_4_defeat+1043)));
    if (ThisEventSlot()) {
        SetCharacterBackreadState(X0_4, true);
    }
L0:
    WaitFor(CharacterDead(X0_4));
    EndEvent();
});

// Star flower death animation
$Event(12904000, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(HPRatio(X0_4) <= 0 && CharacterHasEventMessage(X0_4, 10));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, 90);
    ChangeCharacterEnableState(X4_4, Enabled);
    ForceAnimationPlayback(X4_4, 2250, true, false, false);
    WaitFixedTimeFrames(5);
    ForceCharacterTreasure(X4_4);
    WaitFixedTimeFrames(135);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Forced change of star flower damage animation canceled
$Event(12904013, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5676));
    ClearSpEffect(X0_4, 5333);
});

// Bride alter ego initial setting
$Event(12904026, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    SetCharacterImmortality(X4_4, Enabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// Defeating the Bride and Accompanied by a Bride
$Event(12904027, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterHPValue(X0_4) == 0);
    ForceCharacterDeath(X4_4, false);
    ForceCharacterDeath(X8_4, false);
});

// Bride_heat up
$Event(12904028, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(HPRatio(X0_4) <= 0.4);
    RequestCharacterAICommand(X4_4, 100, 1);
    RequestCharacterAICommand(X8_4, 100, 1);
});

// Bride's Warp Destination Selection_Large Category
$Event(12904029, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X20_4));
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    IncrementEventValue(X4_4, 10, 9);
    flag = EventValue(X4_4, 10) == 1 || EventValue(X4_4, 10) == 3 || EventValue(X4_4, 10) == 7;
    flag2 = EventValue(X4_4, 10) == 2 || EventValue(X4_4, 10) == 5 || EventValue(X4_4, 10) == 9;
    flag3 = EventValue(X4_4, 10) == 4 || EventValue(X4_4, 10) == 6 || EventValue(X4_4, 10) == 8;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(X8_4, ON);
    Goto(L3);
L1:
    SetEventFlag(X12_4, ON);
    Goto(L3);
L2:
    SetEventFlag(X16_4, ON);
L3:
    if (EventValue(X4_4, 10) == 9) {
        ClearEventValue(X4_4, 10);
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
    RestartEvent();
});

// Bride's warp destination selection_small category
$Event(12904030, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(X24_4));
    WaitFor(EventFlag(X4_4));
    IncrementEventValue(X8_4, 10, 12);
    flag = EventValue(X8_4, 10) == 4 || EventValue(X8_4, 10) == 6 || EventValue(X8_4, 10) == 8 || EventValue(X8_4, 10) == 11;
    flag2 = EventValue(X8_4, 10) == 1 || EventValue(X8_4, 10) == 5 || EventValue(X8_4, 10) == 9 || EventValue(X8_4, 10) == 12;
    flag3 = EventValue(X8_4, 10) == 2 || EventValue(X8_4, 10) == 3 || EventValue(X8_4, 10) == 7 || EventValue(X8_4, 10) == 10;
    GotoIf(L0, flag);
    GotoIf(L1, flag2);
    GotoIf(L2, flag3);
L0:
    SetEventFlag(X12_4, ON);
    Goto(L3);
L1:
    SetEventFlag(X16_4, ON);
    Goto(L3);
L2:
    SetEventFlag(X20_4, ON);
L3:
    if (EventValue(X8_4, 10) == 12) {
        ClearEventValue(X8_4, 10);
    }
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    SetEventFlag(X12_4, OFF);
    SetEventFlag(X16_4, OFF);
    SetEventFlag(X20_4, OFF);
    RestartEvent();
});

// Bride performs warp
$Event(12904033, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    flagSp = EventFlag(X4_4) && !CharacterHasSpEffect(X0_4, 5516);
    flagSp2 = EventFlag(X8_4) && !CharacterHasSpEffect(X0_4, 5516);
    flagSp3 = EventFlag(X12_4) && !CharacterHasSpEffect(X0_4, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X24_4, -1);
L3:
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// Bride executes warp_third stage
$Event(12904036, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    flagSp = EventFlag(X4_4) && CharacterHasSpEffect(X0_4, 5516);
    flagSp2 = EventFlag(X8_4) && CharacterHasSpEffect(X0_4, 5516);
    flagSp3 = EventFlag(X12_4) && CharacterHasSpEffect(X0_4, 5516);
    WaitFor(flagSp || flagSp2 || flagSp3);
    WaitFixedTimeSeconds(2);
    GotoIf(L0, flagSp.Passed);
    GotoIf(L1, flagSp2.Passed);
    GotoIf(L2, flagSp3.Passed);
L0:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X16_4, -1);
    Goto(L3);
L1:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    Goto(L3);
L2:
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X24_4, -1);
L3:
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3022, false, false, false);
    WaitFixedTimeFrames(70);
    RestartEvent();
});

// Bride alter ego appears
$Event(12904039, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(CharacterHasEventMessage(X24_4, 90) && EventFlag(X16_4));
    SetSpEffect(X0_4, 5610, false);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ChangeCharacterEnableState(X20_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// Destroyed Bride alter ego
$Event(12904040, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X20_4));
    dmg = CharacterDamagedBy(X0_4, 10000);
    WaitFor(
        dmg
            || (CharacterHasEventMessage(X16_4, 80) && EventFlag(X8_4))
            || (CharacterHasSpEffect(X16_4, 5517) && EventFlag(X8_4)));
    if (dmg.Passed) {
        ForceAnimationPlayback(X0_4, 7010, false, true, false);
    } else {
L0:
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X4_4, ON);
    RestartEvent();
});

// Fetal dummy character connection_XX
$Event(12904041, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 6, X0_4);
    RestartEvent();
});

// State notification from bride to dummy character_XX
$Event(12904042, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    RequestCharacterAICommand(X4_4, 100, 0);
    WaitFor(CharacterHasEventMessage(X0_4, 90));
    RequestCharacterAICommand(X4_4, -1, 0);
    RestartEvent();
});

// falling enemy_XX
$Event(12904043, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    }
L0:
    CreatePlaylog(734);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 1500, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// blood licking_XX
$Event(12904070, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X4_4, Disabled);
    if (!EventFlag(X8_4)) {
        WaitFor(CharacterHasEventMessage(X0_4, 70));
        WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 230, X0_4);
    }
L0:
    WaitFor(CharacterDead(X0_4));
    WaitFor(!CharacterInsideDrawGroup(X4_4));
    CreatePlaylog(768);
    ChangeCharacterEnableState(X4_4, Enabled);
    RequestCharacterAIReplan(X4_4);
});

// Simultaneous Summon Warp_XX
$Event(12904156, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WarpCharacterAndCopyFloor(X0_4, TargetEntityType.Character, X4_4, X8_4, X4_4);
    WaitFor(!CharacterHasEventMessage(X0_4, 100));
    WaitFor(CharacterDead(X0_4));
    SetSpEffectAndUnknown200455(X0_4, 5751, false);
    RestartEvent();
});

// Simultaneous Summon Entourage Count_XX
$Event(12904183, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterDead(X0_4));
    IncrementEventValue(X4_4, 3, 6);
    WaitFor(!CharacterDead(X0_4));
    EventValueOperation(X4_4, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// Simultaneous Summon Action Request_XX
$Event(12904210, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!EventFlag(X12_4)) {
        WaitFor(EventFlag(X0_4));
        RequestCharacterAICommand(X4_4, 100, 0);
        RequestCharacterAIReplan(X4_4);
        SetEventFlag(X12_4, ON);
        WaitFor(ElapsedSeconds(2));
        RequestCharacterAICommand(X4_4, -1, 0);
    }
L0:
    WaitFor(EventFlag(X0_4) && EventValue(X8_4, 3) >= 3);
    RequestCharacterAICommand(X4_4, 100, 0);
    RequestCharacterAIReplan(X4_4);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(X4_4, -1, 0);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// Simultaneous Summon Generator Switch_XX
$Event(12904216, Restart, function(X0_4, X4_4, X8_4) {
    DeactivateGenerator(X8_4, Disabled);
    WaitFor(EventFlag(X0_4) && CharacterHasEventMessage(X4_4, 10));
    DeactivateGenerator(X8_4, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(X0_4) || !CharacterHasEventMessage(X4_4, 10));
    RestartEvent();
});

// Simultaneous summon possible flag_XX
$Event(12904222, Restart, function(X0_4, X4_4) {
    WaitFor(
        (CharacterAIState(X4_4, AIStateType.Recognition) || CharacterAIState(X4_4, AIStateType.Combat))
            && !CharacterDead(X4_4)
            && CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, ON);
    WaitFor(CharacterAIState(X4_4, AIStateType.Normal) || CharacterDead(X4_4) || !CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Special generated entourage count_XX
$Event(12904228, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    IncrementEventValue(X4_4, 3, 6);
    WaitFor(CharacterDead(X0_4));
    EventValueOperation(X4_4, 3, 1, 0, 1, CalculationType.Sub);
    RestartEvent();
});

// Special generated action request_XX
$Event(12904274, Restart, function(X0_4, X4_4, X8_4) {
L0:
    WaitFor(EventFlag(X0_4) && EventValue(X8_4, 3) <= 2);
    ForceAnimationPlayback(X4_4, 3011, false, false, false);
    RequestCharacterAICommand(X4_4, 10, 2);
    RequestCharacterAIReplan(X4_4);
    WaitFor(ElapsedSeconds(2));
    RequestCharacterAICommand(X4_4, -1, 2);
    WaitFor(ElapsedSeconds(3));
    RestartEvent();
});

// special generation generator switch_XX
$Event(12904285, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DeactivateGenerator(X8_4, Disabled);
    DeactivateGenerator(X12_4, Disabled);
    DeactivateGenerator(X16_4, Disabled);
    WaitFor(EventFlag(X0_4) && CharacterHasEventMessage(X4_4, 20));
    DeactivateGenerator(X8_4, Enabled);
    DeactivateGenerator(X12_4, Enabled);
    DeactivateGenerator(X16_4, Enabled);
    WaitFixedTimeSeconds(3);
    WaitFor(!EventFlag(X0_4) || !CharacterHasEventMessage(X4_4, 20));
    RestartEvent();
});

// special generation possible flag _XX
$Event(12904326, Restart, function(X0_4, X4_4) {
    WaitFor(
        (CharacterAIState(X4_4, AIStateType.Recognition) || CharacterAIState(X4_4, AIStateType.Combat))
            && !CharacterDead(X4_4)
            && CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, ON);
    WaitFor(CharacterAIState(X4_4, AIStateType.Normal) || CharacterDead(X4_4) || !CharacterBackreadStatus(X4_4));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// Trap Enemy _XX
$Event(12904337, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterBackreadStatus(X0_4));
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5401, false);
    SetCharacterAIState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(ObjActEventFlag(X4_4));
    CreatePlaylog(806);
    WaitFixedTimeSeconds(3);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
    SetCharacterAIState(X0_4, Enabled);
});

// Black Treasure Chest_XX
$Event(12904338, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    SpawnOneshotSFX(TargetEntityType.Object, X0_4, -1, 0);
    WaitFor(CharacterBackreadStatus(X8_4));
    SetCharacterAIState(X8_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    obj = ObjActEventFlag(X4_4);
    obj2 = ObjectDestroyed(X0_4);
    WaitFor(obj || obj2);
    SetEventFlag(X12_4, ON);
    CreatePlaylog(806);
    if (!obj2.Passed) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X8_4, Enabled);
    WaitFixedTimeFrames(2);
    ForceAnimationPlayback(X8_4, 3020, false, false, false);
    WaitFor(ElapsedFrames(40) || HasDamageType(X8_4, 10000, DamageType.Unspecified));
    SetCharacterAIState(X8_4, Enabled);
});

// rock rumbling
$Event(12904342, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
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
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(8.5);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X16_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X8_4, 10, false, false, false);
    WaitFixedTimeFrames(1);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    RestartEvent();
});

// progenitor beast bug winner
$Event(12904343, Default, function(X0_4) {
    ChangeCharacterHitmask(X0_4, 0, ON);
});

// Kin of Death and Darkness_Fear Torch_XX
$Event(12904345, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, X0_4, 9));
    ForceAnimationPlayback(X0_4, 7007, false, false, false);
    RequestCharacterAICommand(X0_4, 10, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 404) || ElapsedSeconds(10));
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
});

// scorpion child_XX
$Event(12904361, Default, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterDispmask(X0_4, 0, OFF);
        ChangeCharacterEnableState(X4_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 10, NPCPartType.Part1, 30, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 10, 59, 59);
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(NPCPartHP(X0_4, 10) <= 0 || HPRatio(X0_4) <= 0);
    SetCharacterAIId(X0_4, 121001);
    SetCharacterGravity(X4_4, Disabled);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 40, X0_4);
    ChangeCharacterEnableState(X4_4, Enabled);
    ChangeCharacterDispmask(X0_4, 0, OFF);
    ForceAnimationPlayback(X4_4, 8100, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// Hanging Treasure Corpse_XX
$Event(12904369, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X8_4)) {
        ReproduceObjectDestruction(X0_4, 1);
        ForceAnimationPlayback(X4_4, X12_4, false, false, false);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
L0:
    CreateObjectfollowingSFX(X4_4, 90, 900201);
    ForceAnimationPlayback(X4_4, X16_4, false, false, false);
    WaitFor(ObjectDestroyed(X0_4));
    ForceAnimationPlayback(X4_4, X20_4, false, true, false);
    DeleteObjectfollowingSFX(X4_4, true);
    SetObjectTreasureState(X4_4, Enabled);
    SetEventFlag(X8_4, ON);
});

// Storm Beast_Obstacle Jumping Attack_XX
$Event(12904373, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(InArea(X0_4, X4_4));
    area = !EntityInRadiusOfEntity(X0_4, 10000, X8_4) && EntityInRadiusOfEntity(X0_4, 10000, X12_4);
    area2 = EntityInRadiusOfEntity(X0_4, 10000, X8_4) || !EntityInRadiusOfEntity(X0_4, 10000, X12_4);
    area3 = area || area2;
    area4 = area2;
    WaitFor(area3);
    if (!area4.Passed) {
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterMaphits(X0_4, true);
        ForceAnimationPlayback(X0_4, X16_4, false, true, false);
        SetCharacterGravity(X0_4, Enabled);
        SetCharacterMaphits(X0_4, false);
        WaitFor(CharacterHasEventMessage(X0_4, 10));
    }
    RestartEvent();
});

// cannon fire_XX
$Event(12904374, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeSeconds(2.3);
    IssueShortWarpRequest(X4_4, TargetEntityType.Object, X8_4, 200);
    SetSpEffect(X4_4, 5580, false);
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    WaitFixedTimeSeconds(1);
    ClearSpEffect(X4_4, 5580);
    WaitFixedTimeFrames(30);
    SetObjactState(X8_4, 9800, Enabled);
    RestartEvent();
});

// Request the enemy to activate the cannon ObjAct_XX
$Event(12904382, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    chrArea = ((CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat))
        && EntityInRadiusOfEntity(X0_4, X4_4, X8_4))
        && ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    chrArea2 = !chrArea;
    WaitFor(chrArea || chrArea2);
    if (!chrArea2.Passed) {
        RequestObjactActivation(X4_4, 9800, -1, X0_4);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Guillotine_animation control
$Event(12904390, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    WaitFor(InArea(10000, X8_4) || InArea(10000, X12_4));
    CreatePlaylog(844);
    PlaySE(X16_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X16_4, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, X16_4, 101, 150005);
    PlaySE(X20_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X20_4, 0, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Object, X20_4, 101, 150005);
    WaitFixedTimeSeconds(0.1);
    SetEventFlag(X24_4, ON);
    ForceAnimationPlayback(X4_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 1, false, true, false);
    ForceAnimationPlayback(X4_4, 10, false, false, false);
    ForceAnimationPlayback(X0_4, 10, false, true, false);
    SetEventFlag(X24_4, OFF);
    WaitFixedTimeSeconds(0.1);
    ForceAnimationPlayback(X4_4, 11, false, false, false);
    ForceAnimationPlayback(X0_4, 11, false, true, false);
    WaitFor(!InArea(10000, X8_4));
    PlaySE(X16_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X16_4, 1, false, false, false);
    PlaySE(X20_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X20_4, 1, false, false, false);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Guillotine_Damage control
$Event(12904398, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X4_4);
    if (EventFlag(92905100)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6250, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6250, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905101)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6251, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6251, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905102)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6252, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6252, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905103)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6253, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6253, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905104)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6254, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6254, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905105)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6255, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6255, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905106)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6256, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6256, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (EventFlag(92905107)) {
        CreateDamagingObject(X8_4, X0_4, 100, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 6257, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 6257, DamageTargetType.Character, 0.8, 1, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X8_4, X0_4, 100, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X12_4, X0_4, 101, 5041, DamageTargetType.Character, 0.8, 1, 0);
        CreateDamagingObject(X16_4, X0_4, 102, 5041, DamageTargetType.Character, 0.8, 1, 0);
    }
    WaitForEventFlag(OFF, TargetEventFlagType.EventFlag, X4_4);
    RestartEvent();
});

// spawn spider control
$Event(12904406, Restart, function(X0_4, X4_4, X8_4) {
    EndEvent();
    WaitFor(EntityInRadiusOfEntity(X0_4, 10000, 35));
    SetCharacterAIId(X0_4, X4_4);
    WaitFor(!EntityInRadiusOfEntity(X0_4, 10000, 55));
    SetCharacterAIId(X0_4, X8_4);
    RestartEvent();
});

// spider ceiling wait
$Event(12904410, Restart, function(X0_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (CharacterAIState(X0_4, AIStateType.Alert) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(880);
        WaitFixedTimeSeconds(0.3);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 9060, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// Spider ceiling standby_Use area (for upper room system)
$Event(12904426, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 7000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 7001, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// Spider Ceiling Wait_Area Use
$Event(12904466, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, 9000, true, false, false);
        SetCharacterMaphits(X0_4, true);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            (InArea(10000, X4_4) || CharacterDamagedBy(X0_4, 10000))
                && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
        CreatePlaylog(920);
    }
L0:
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    ForceAnimationPlayback(X0_4, 9060, false, true, false);
    RequestCharacterAIReplan(X0_4);
});

// Enable companion character
$Event(12904477, Restart, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ChangeCharacterEnableState(X4_4, Enabled);
});

// Disable attached characters
$Event(12904487, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(HPRatio(X0_4) <= 0);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(X4_4, 2200, false, true, false);
    ChangeCharacterEnableState(X4_4, Disabled);
});

// Larvae Flying Fox_Statue Waiting
$Event(12904501, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat) || CharacterAIState(X0_4, AIStateType.Alert));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// Fresh Golem Part Damage_XX
$Event(12904506, Default, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X12_2, X4_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X12_2, X4_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X28_4);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, X16_4, true);
    SetSpEffect(X0_4, X28_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Fresh golem blood bean part destruction_XX
$Event(12904540, Default, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_1, X25_1) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X12_2, X4_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X20_4, false, false, false);
    ChangeCharacterHitmask(X0_4, X24_1, ON);
    ChangeCharacterDispmask(X0_4, X25_1, OFF);
    SetSpEffect(X0_4, 5667, true);
    RequestCharacterAIReplan(X0_4);
});

// Fresh Golem Unnecessary Blood Bead Ragdoll Mask_XX
$Event(12904544, Default, function(X0_4, X4_1) {
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFixedTimeSeconds(3);
    ChangeCharacterHitmask(X0_4, X4_1, ON);
});

// Enemies popping out of coffins_XX
$Event(12904568, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = EntityInRadiusOfEntity(X0_4, 10000, 4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, 3024, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// popping enemy_XX
$Event(12904579, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = EntityInRadiusOfEntity(X0_4, 10000, X16_4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(970);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, X12_4, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// Enemies popping out in the area_XX
$Event(12904584, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    area = InArea(10000, X16_4);
    WaitFor(
        (area || ObjectDestroyed(X4_4))
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    if (area) {
        CreatePlaylog(1008);
    }
    RequestObjectDestruction(X4_4, 1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, -1, 900257);
    PlaySE(X4_4, SoundType.aEnvironmentalSound, 124005001);
    PlaySE(X4_4, SoundType.oObject, 43000000);
    ChangeCharacterEnableState(X0_4, Enabled);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X8_4, 101);
    WaitFor(ElapsedFrames(3));
    RotateCharacter(X0_4, 10000, X12_4, false);
    WaitFor(ElapsedFrames(1));
    SetCharacterAIState(X0_4, Enabled);
});

// Enemy starts moving to designated point_XX
$Event(12904594, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4));
    }
L0:
    SetCharacterHome(X0_4, X8_4);
    RequestCharacterAICommand(X0_4, X12_4, 0);
    RequestCharacterAIReplan(X0_4);
});

// Enemy has moved to designated point_XX
$Event(12904595, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            InArea(X0_4, X4_4)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, X0_4, 3))
                || HasDamageType(X0_4, -1, DamageType.Unspecified));
    }
L0:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Enemy stops moving to designated point_XX
$Event(12904596, Restart, function(X0_4, X4_4, X8_4) {
    GotoIf(L0, EventFlag(X8_4));
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    flag = EventFlag(X8_4);
    WaitFor(chr || flag);
    EndIf(flag.Passed);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    chr2 = CharacterAIState(X0_4, AIStateType.Normal);
    flag2 = EventFlag(X8_4);
    WaitFor(chr2 || flag2);
    EndIf(flag2.Passed);
    RequestCharacterAICommand(X0_4, X4_4, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Monster Room_XX
$Event(12904597, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    flagChrArea |= ThisEventSlot() || CharacterDead(X0_4);
    if (flagChrArea) {
        ChangeCharacterEnableState(X0_4, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    flagChrArea |= InArea(10000, X4_4);
    WaitFor(flagChrArea);
    CreatePlaylog(1052);
    PlaySE(X8_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, -1, 929200);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, X12_4);
});

// Summon NPC_Invasion_XX
$Event(12904634, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterDefaultBackreadState(X0_4, Disabled);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndEvent();
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(IsOnline());
    Goto(S0);
    EndIf(EventFlag(X12_4));
S0:
    EndIf(EventFlag(X8_4));
    if (EventFlag(X4_4)) {
        EndEvent();
    }
L0:
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetSpEffect(X0_4, 9025, false);
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    WaitFor(CharacterHasSpEffect(10000, 9020) && EventFlag(X16_4));
    WaitFixedTimeSeconds(X20_4);
    SummonNPC(SingleplayerSummonSignType.ScriptedInvasion, X0_4, 0, X4_4, X8_4);
    WaitFixedTimeSeconds(X24_4);
});

// The dog barks to let others know _XX
$Event(12904643, Restart, function(X0_4) {
    chr = CharacterAIState(X0_4, AIStateType.Recognition);
    chr2 = CharacterAIState(X0_4, AIStateType.Combat);
    area = EntityInRadiusOfEntity(X0_4, 10000, 8.8);
    hp = HPRatio(X0_4) == 1;
    chr3 = chr || chr2;
    WaitFor(chr3 && area && hp);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5.8)) {
        ForceAnimationPlayback(X0_4, 3010, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, X0_4, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X0_4, 205, 6051, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
    }
    ShootBullet(2900000, X0_4, 205, 6053, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Enhanced Possession_XX
$Event(12904677, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasSpEffect(X4_4, 5622));
    WaitFixedTimeFrames(5);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false);
    WaitFixedTimeFrames(2);
    ChangeCharacterEnableState(X0_4, Disabled);
    CreatePlaylog(1096);
});

// HP half curse
$Event(12904733, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    WaitFor(InArea(10000, X0_4));
    SetSpEffect(10000, 71, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 7, 850);
    WaitFor(ObjectDestroyed(X4_4));
    ClearSpEffect(10000, 71);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 200, 851);
});

// Surprise enemy activation
$Event(12904736, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    area = InArea(10000, X4_4);
    WaitFor(
        (area || EntityInRadiusOfEntity(10000, X0_4, X8_4) || CharacterDamagedBy(10000, X0_4))
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    if (area.Passed) {
        ForceAnimationPlayback(X0_4, 3007, false, false, false);
        WaitFixedTimeFrames(50);
        RotateCharacter(X0_4, 10000, 3006, false);
        SetCharacterAIState(X0_4, Enabled);
        RequestCharacterAIReplan(X0_4);
        EndEvent();
    }
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// ring the bell
$Event(12904737, Restart, function(X0_4) {
    SetObjectInvulnerability(X0_4, Enabled);
    WaitFor(ActionButtonInArea(2400900, X0_4) || ObjectHitBy(X0_4, 10000));
    CreatePlaylog(1132);
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 24011006);
    ShootBullet(2900000, X0_4, 101, 6063, 270, 0, 0);
    WaitFixedTimeFrames(10);
    ShootBullet(2900000, X0_4, 101, 6055, 270, 0, 0);
    WaitFixedTimeFrames(90);
    ShootBullet(2900000, X0_4, 101, 6059, 270, 0, 0);
    WaitFixedTimeFrames(80);
    ShootBullet(2900000, X0_4, 101, 6062, 270, 0, 0);
    RestartEvent();
});

// pause patrol_XX
$Event(12904754, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal) && InArea(X0_4, X12_4));
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    WaitFor(!InArea(X0_4, X12_4));
    RestartEvent();
});

// Monster Room_Return to Nest_XXX
$Event(12904755, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Enabled);
        EndEvent();
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1170);
    PlaySE(X8_4, SoundType.oObject, 990100001);
    ForceAnimationPlayback(X8_4, 0, false, true, false);
    SpawnOneshotSFX(TargetEntityType.Object, X8_4, -1, 929200);
    ChangeCharacterEnableState(X0_4, Enabled);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, X12_4);
    WaitFixedTimeSeconds(1);
    RequestCharacterAICommand(X0_4, 10, 0);
    SetCharacterHome(X0_4, X16_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, X16_4));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Ambusher fall_XXX
$Event(12904759, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(
        (InArea(10000, X4_4) || chr)
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    EndIf(chr.Passed);
    CreatePlaylog(1224);
    ForceAnimationPlayback(X0_4, 3024, false, true, false);
});

// Throw into gunpowder pot_XX
$Event(12904772, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, X0_4)
            && !ObjectDestroyed(X4_4)
            && (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)));
    SetCharacterEventTarget(X8_4, X12_4);
    RequestCharacterAICommand(X8_4, 100, 0);
    RequestCharacterAIReplan(X8_4);
    WaitFor(CharacterHasEventMessage(X8_4, 100));
    RequestCharacterAICommand(X8_4, -1, 0);
    RequestCharacterAIReplan(X8_4);
    EndEvent();
});

// Boss Rush_Host enters boss room
$Event(12904773, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(!EventFlag(X8_4) && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// Boss Rush_Host has entered the boss room
$Event(12904774, Default, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(X0_4) && InArea(10000, X4_4));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(X8_4, ON);
});

// Boss Rush_Client enters boss room
$Event(12904775, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        !EventFlag(X12_4)
            && EventFlag(X8_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// Boss Rush_Boss starts moving
$Event(12904776, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    StartTimeMeasurement(2900020, 1276, Enabled);
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, X24_4);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// Boss Rush_Boss BGM ON
$Event(12904777, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EnableBossMapSound(X12_4, Disabled);
    EnableBossMapSound(X16_4, Disabled);
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(X0_4) && EventFlag(X4_4) && InArea(10000, X8_4));
    EnableBossMapSound(X12_4, Enabled);
    WaitFor(CharacterHasEventMessage(X20_4, 500));
    EnableBossMapSound(X12_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X16_4, Enabled);
});

// Boss Rush_Boss Camera ON
$Event(12904778, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X4_4));
    SetNetworkSyncState(Disabled);
    cond &= HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, 5.5);
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 1);
    cond &= HPRatio(X0_4) > 0;
    WaitFor(!EntityInRadiusOfEntity(10000, X0_4, 6));
    WaitFor(cond);
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Rush_Boss BGM OFF
$Event(12904779, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Heteromorphic beast fears torches_XX
$Event(12904780, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 404) && EntityInRadiusOfEntity(10000, X0_4, 4));
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 404));
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Silver beast's relative parasite outbreak_XX
$Event(12904852, Default, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X4_4, Disabled);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WaitFixedTimeFrames(5);
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, 30, X0_4);
    ChangeCharacterEnableState(X4_4, Enabled);
    ForceAnimationPlayback(X4_4, 7000, false, false, false);
    RequestCharacterAIReplan(X8_4);
});

// Traplord porting_Boss darkness magic management
$Event(12904858, Restart, function(X0_4) {
    WaitFor(CharacterHasSpEffect(10000, 5630));
    SetSpEffect(X0_4, 5631, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    WaitFor(!CharacterHasSpEffect(10000, 5630));
    RequestCharacterAICommand(X0_4, 110, 0);
    RestartEvent();
});

// Traplord transplant_Boss random warp destination selection
$Event(12904859, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RandomlySetEventFlagInRange(X4_4, X8_4, ON);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Traplord Transplant_Boss Random Warp
$Event(12904860, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X4_4));
    if (!InArea(X0_4, X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X8_4, -1, 0);
    } else {
        ChangeCharacterEnableState(X0_4, Disabled);
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X12_4, -1, 0);
    }
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestAnimationPlayback(X0_4, 7000, false, true);
    RestartEvent();
});

// Traplord transplant_Second boss appears secretly
$Event(12904861, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasSpEffect(10000, 5630));
    ChangeCharacterEnableState(X0_4, Enabled);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
});

// Traplord transplant_Death after the second one by defeating the boss
$Event(12904862, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(HPRatio(X0_4) <= 0);
    ForceCharacterDeath(X4_4, false);
    ForceCharacterDeath(X8_4, false);
});

// Traplord transplant_Boss starts moving
$Event(12904863, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterAIState(X8_4, Disabled);
    SetCharacterGravity(X8_4, Disabled);
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X4_4, Disabled);
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, X12_4));
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Disabled);
    CreateReferredDamagePair(X0_4, X8_4);
    CreateReferredDamagePair(X4_4, X8_4);
    DisplayBossHealthBar(Enabled, X8_4, 0, X24_4);
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    SetEventFlag(X16_4, ON);
});

// Traplord transplant_Boss starts moving 2
$Event(12904864, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X12_4, Disabled);
    WaitFor(EventFlag(X0_4));
    DeactivateObject(X4_4, Enabled);
    SpawnMapSFX(X8_4);
    SetEventFlag(X0_4, OFF);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X12_4, 205, X24_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X12_4, Enabled);
    ActivateMultiplayerdependantBuffs(X12_4);
    ActivateMultiplayerdependantBuffs(X16_4);
    ActivateMultiplayerdependantBuffs(X20_4);
    SetCharacterAIState(X12_4, Enabled);
    SetCharacterAIState(X16_4, Enabled);
    SetEventFlag(X28_4, ON);
});

// Idiot Spider_Spider Child Replenishment
$Event(12904865, Default, function(X0_4, X4_4, X8_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(CharacterHasEventMessage(X8_4, 20) && HPRatio(X8_4) <= X4_4);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Idiot Spider_Child Spider Forced Death
$Event(12904866, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X8_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    ForceCharacterDeath(X4_4, true);
});

// Idiot spider_baby spider starts to move
$Event(12904867, Default, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4));
    WaitFixedTimeFrames(45);
    SetCharacterAIState(X0_4, Enabled);
});

// Idiot Spider_Heat Up
$Event(12904868, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(HPRatio(X0_4) <= 0.75);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) <= 0.5);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 111, 0);
    RequestCharacterAIReplan(X0_4);
});

// Idiot Spider_Left body injury
$Event(12904869, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 2, 59, 59);
    hp = NPCPartHP(X0_4, 2) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7000, false, false, false);
        SetNPCPartHP(X0_4, 2, 100, true);
        hp3 = NPCPartHP(X0_4, 2) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7001, false, false, false);
            SetNPCPartHP(X0_4, 2, 50, true);
            hp5 = NPCPartHP(X0_4, 2) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7002, false, false, false);
                CreateNPCPart(X0_4, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(X0_4, 2, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(CharacterHasEventMessage(X0_4, 20));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 2, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot Spider_Right side injury
$Event(12904870, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 3, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 3, 59, 59);
    hp = NPCPartHP(X0_4, 3) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7005, false, false, false);
        SetNPCPartHP(X0_4, 3, 100, true);
        hp3 = NPCPartHP(X0_4, 3) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7006, false, false, false);
            SetNPCPartHP(X0_4, 3, 50, true);
            hp5 = NPCPartHP(X0_4, 3) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7007, false, false, false);
                CreateNPCPart(X0_4, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(X0_4, 3, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(CharacterHasEventMessage(X0_4, 20));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 3, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot spider_head part setting
$Event(12904871, Default, function(X0_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(X0_4, 1, 61, 61);
});

// Idiot Spider_Initial child spider activation
$Event(12904872, Default, function(X0_4, X4_4, X8_4, X12_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X4_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X8_4));
    WaitFixedTimeSeconds(2.6);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, X12_4);
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(X0_4, Enabled);
});

// 3 bosses start moving (for fat)
$Event(12904877, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X12_4, Disabled);
    SetCharacterAIState(X28_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    DeleteMapSFX(X8_4, true);
    if (EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        ChangeCharacterEnableState(X28_4, Disabled);
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
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
L4:
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, 304001);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterAIState(X12_4, Enabled);
    DisplayBossHealthBar(Enabled, X12_4, 1, 304002);
    SetCharacterHPBarDisplay(X12_4, Disabled);
    SetCharacterAIState(X28_4, Enabled);
    DisplayBossHealthBar(Enabled, X28_4, 2, 304003);
    SetCharacterHPBarDisplay(X28_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// Host enters boss room
$Event(12904878, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, X12_4);
    WaitFor(!EventFlag(X8_4) && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// The host has entered the boss room
$Event(12904879, Default, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(!EventFlag(X0_4) && InArea(10000, X4_4));
    }
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(X8_4, ON);
});

// Client enters boss room
$Event(12904880, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(
        !EventFlag(X12_4)
            && EventFlag(X8_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    RestartEvent();
});

// Boss starts moving
$Event(12904881, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetCharacterAIState(X0_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    DeleteMapSFX(X8_4, true);
    if (EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    if (EventFlag(X20_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7020, true, false, true);
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, 7020, true, false, true);
    WaitFor(InArea(10000, X4_4));
    CreatePlaylog(1260);
    if (X20_4 == 12901800) {
        StartTimeMeasurement(2900010, 1316, Enabled);
    }
    if (X20_4 == 12901801) {
        StartTimeMeasurement(2900011, 1352, Enabled);
    }
    if (X20_4 == 12901802) {
        StartTimeMeasurement(2900012, 1388, Enabled);
    }
    if (X20_4 == 12901803) {
        StartTimeMeasurement(2900013, 1424, Enabled);
    }
    if (!EventFlag(X16_4)) {
        DeactivateObject(X24_4, Enabled);
        SpawnMapSFX(X8_4);
    }
    RotateCharacter(X0_4, 10000, 7021, false);
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
L4:
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetEventFlag(X16_4, ON);
});

// Boss BGM ON
$Event(12904882, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EnableBossMapSound(X12_4, Disabled);
    EnableBossMapSound(X16_4, Disabled);
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(!EventFlag(X0_4) && EventFlag(X4_4) && InArea(10000, X8_4));
    EnableBossMapSound(X12_4, Enabled);
    WaitFor(CharacterHasEventMessage(X20_4, 500));
    EnableBossMapSound(X12_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X16_4, Enabled);
});

// Boss camera ON
$Event(12904883, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, 5.5));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, 6));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss BGM OFF
$Event(12904886, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Multiple bosses appear_XX
$Event(12904887, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(EventFlag(X8_4) && HPRatio(X4_4) <= X20_4);
    IssueShortWarpRequest(X0_4, TargetEntityType.Character, X4_4, -1);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X0_4, Enabled);
    DisplayBossHealthBar(Enabled, X0_4, 1, X16_4);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 203, 929203);
});

// Boss Roar
$Event(12904888, Restart, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 1, 1);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    RequestCharacterAICommand(X0_4, -1, 1);
});

// [Circular Boss Room only] Boss begins to move
$Event(12904890, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X28_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFor(X24_4 == X24_4);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    ForceAnimationPlayback(X0_4, 7010, false, true, false);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// [Only for circular boss room] Boss Rush_Boss begins to move
$Event(12904891, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X28_4, Disabled);
    DeleteMapSFX(X8_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    if (EventFlag(X20_4)) {
        EndEvent();
    }
    WaitFor(InArea(10000, X4_4));
    DeactivateObject(X28_4, Enabled);
    SpawnMapSFX(X8_4);
    WaitFixedTimeSeconds(2.5);
    SpawnOneshotSFX(TargetEntityType.Character, X0_4, 205, 929227);
    WaitFor(X24_4 == X24_4);
    WaitFixedTimeFrames(10);
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    ChangeCharacterEnableState(X0_4, Enabled);
    ActivateMultiplayerdependantBuffs(X0_4);
    ForceAnimationPlayback(X0_4, 7010, false, true, false);
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    DisplayBossHealthBar(Enabled, X0_4, 0, X12_4);
    SetEventFlag(X16_4, ON);
});

// Boss map sound registration
$Event(12904892, Default, function(X0_4, X4_4) {
    SetMapSoundState(X0_4, Disabled);
    SetMapSoundState(X4_4, Disabled);
});

// Boss part regeneration explosion first time
$Event(12904893, Default, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 1, 1);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    RequestCharacterAICommand(X0_4, -1, 1);
});

// Toggle boss part destruction prohibition
$Event(12904894, Default, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetEventFlag(X4_4, ON);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Passage in front of the boss SFX
$Event(12904895, Default, function(X0_4, X4_4, X8_4, X12_4) {
    DeleteMapSFX(X0_4, false);
    DeleteMapSFX(X4_4, false);
    DeleteMapSFX(X8_4, false);
    WaitFor(InArea(10000, X12_4));
    SpawnMapSFX(X0_4);
    SpawnMapSFX(X4_4);
    SpawnMapSFX(X8_4);
});

// Silver beast_Boss part destruction damage_Right body
$Event(12904896, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4, X20_2, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(EventFlag(X24_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X20_2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    hpSp = NPCPartHP(X0_4, X8_4) <= 0 && CharacterHasSpEffect(X0_4, 5021);
    hpSp2 = NPCPartHP(X0_4, X8_4) <= 0 && !CharacterHasSpEffect(X0_4, 5021);
    flag = EventFlag(X28_4);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(X0_4, X4_2, X20_2, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(X0_4, X4_2, X20_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    SetSpEffect(X0_4, 5021, true);
    SetSpEffect(X0_4, X12_4, true);
    ClearSpEffect(X0_4, X16_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 7003, false, false, false);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetSpEffect(X0_4, 5911, true);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    ClearSpEffect(X0_4, 5021);
    SetSpEffect(X0_4, X16_4, false);
    ClearSpEffect(X0_4, X12_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Silver beast_Boss part destruction damage_Left body
$Event(12904897, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4, X20_2, X24_4, X28_4) {
    EndIf(EventFlag(X28_4));
    WaitFor(EventFlag(X24_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X20_2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    hpSp = NPCPartHP(X0_4, X8_4) <= 0 && CharacterHasSpEffect(X0_4, 5021);
    hpSp2 = NPCPartHP(X0_4, X8_4) <= 0 && !CharacterHasSpEffect(X0_4, 5021);
    flag = EventFlag(X28_4);
    WaitFor(hpSp || hpSp2 || flag);
    if (!hpSp2.Passed) {
        EndIf(flag.Passed);
        CreateNPCPart(X0_4, X4_2, X20_2, 50, 1, 1, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
        RestartEvent();
    }
L0:
    CreateNPCPart(X0_4, X4_2, X20_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 66, 66);
    SetSpEffect(X0_4, 5021, true);
    SetSpEffect(X0_4, X12_4, true);
    ClearSpEffect(X0_4, X16_4);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    SetSpEffect(X0_4, 5911, true);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    ClearSpEffect(X0_4, 5021);
    SetSpEffect(X0_4, X16_4, false);
    ClearSpEffect(X0_4, X12_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 1
$Event(12904898, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 1
$Event(12904899, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 130, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 130, true);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 1
$Event(12904900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 2
$Event(12904901, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 2
$Event(12904902, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 2
$Event(12904903, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 3
$Event(12904904, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 3
$Event(12904905, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 3
$Event(12904906, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 4
$Event(12904907, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 4
$Event(12904908, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 4
$Event(12904909, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// boss part damage_part 5
$Event(12904910, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Beast (Bone)_Boss Part Damage_Part 5
$Event(12904913, Default, function(X0_4, X4_2, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X12_4));
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Flame Beast_Boss Part Damage_Part 5
$Event(12904911, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 64, 64);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 65, 65);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Bloodthirsty Beast_Boss Bleed
$Event(12904912, Restart, function(X0_4) {
    WaitFor(HPRatio(X0_4) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Boss part damage effect_XX
$Event(12904914, Default, function(X0_4, X4_4, X8_1, X9_1, X10_1, X12_4) {
    WaitFor(CharacterHasSpEffect(X12_4, X0_4) && !CharacterHasSpEffect(X12_4, X4_4));
    ChangeCharacterDispmask(X12_4, X8_1, ON);
    ChangeCharacterDispmask(X12_4, X9_1, OFF);
    ChangeCharacterDispmask(X12_4, X10_1, OFF);
    WaitFor(!CharacterHasSpEffect(X12_4, X0_4) && CharacterHasSpEffect(X12_4, X4_4));
    ChangeCharacterDispmask(X12_4, X9_1, ON);
    ChangeCharacterDispmask(X12_4, X8_1, OFF);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Part damage effect _ Cross gentle
$Event(12904915, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 482));
    ChangeCharactersCloth(X0_4, 15, 2);
});

// normal oily_forced cancellation
$Event(12904916, Default, function(X0_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 420));
    WaitFixedTimeFrames(10);
    ClearSpEffect(X0_4, 420);
    RestartEvent();
});

// Part covered with oil _XX
$Event(12904917, Default, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4) {
    WaitFor(EventFlag(X16_4) && CharacterBackreadStatus(X20_4));
    CreateNPCPart(X20_4, X0_2, X8_2, 1, 1, 1, false, false);
    hp = HPRatio(X20_4) <= 0;
    WaitFor(hp || NPCPartHP(X20_4, X4_4) <= 0);
    EndIf(hp.Passed);
    if (CharacterHasSpEffect(X20_4, 420)) {
        SetSpEffect(X20_4, X12_4, true);
    }
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Parts covered with oil_Fire Daruma_XX
$Event(12904918, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
    }
    spHp = CharacterHasSpEffect(X16_4, X0_4) && CharacterHasSpEffect(X16_4, 421) && NPCPartHP(X16_4, X8_4) <= 0;
    spHp2 = CharacterHasSpEffect(X16_4, X0_4) && CharacterHasSpEffect(X16_4, 421) && NPCPartHP(X16_4, X8_4) > 0;
    WaitFor(spHp || spHp2);
    if (!spHp2.Passed) {
        ForceAnimationPlayback(X16_4, X4_4, false, true, false);
    } else {
        SetSpEffect(X16_4, X0_4, true);
    }
    RestartEvent();
});

// Sub Feature_Special Enemy_1 Arrangement_Special Enemy_XX
$Event(12904919, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905320) || EventFlag(92905324) || EventFlag(92905325) || EventFlag(92905326));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_NPC Enemy_XX
$Event(12904979, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905321) || EventFlag(92905327) || EventFlag(92905328));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_Strengthening Enemies_XX
$Event(12905000, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905322) || EventFlag(92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_1 Placement_Immortal Enemy_XX
$Event(12905013, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905323));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special enemy_1 placement_no feature_XX
$Event(12905026, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Arrangement_Special Enemy_XX
$Event(12905042, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905320));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Placement_NPC Enemy_XX
$Event(12905097, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905321) || EventFlag(92905324));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Arrangement_Strengthen Surrounding Enemy_XX
$Event(12905108, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905322) || EventFlag(92905325) || EventFlag(92905327));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub Feature_Special Enemy_2 Placement_Immortal Enemy_XX
$Event(12905119, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905323) || EventFlag(92905326) || EventFlag(92905328) || EventFlag(92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special enemy_2 placement_no feature_XX
$Event(12905130, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!AnyBatchEventFlags(92905320, 92905329));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    ChangeCharacterEnableState(X24_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    SetCharacterBackreadState(X24_4, true);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Immortal Enemy Death_XX
$Event(12905147, Restart, function(X0_4, X4_4) {
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterImmortality(X0_4, Enabled);
    SetSpEffect(X0_4, 5626, false);
    WaitFor(EventFlag(X4_4));
    WaitRandomTimeFrames(0, 50);
    SetCharacterImmortality(X0_4, Disabled);
    ForceCharacterDeath(X0_4, true);
    EndEvent();
});

// Immortal enemy initial setting_XX
$Event(12905178, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(
        CharacterBackreadStatus(X0_4)
            || CharacterBackreadStatus(X4_4)
            || CharacterBackreadStatus(X8_4)
            || CharacterBackreadStatus(X12_4)
            || CharacterBackreadStatus(X16_4)
            || CharacterBackreadStatus(X20_4)
            || CharacterBackreadStatus(X24_4));
    SetSpEffect(X0_4, 5913, false);
    SetSpEffect(X4_4, 5913, false);
    SetSpEffect(X8_4, 5913, false);
    SetSpEffect(X12_4, 5913, false);
    SetSpEffect(X16_4, 5913, false);
    SetSpEffect(X20_4, 5913, false);
    SetSpEffect(X24_4, 5913, false);
    RestartIf(
        !(EntityInRadiusOfEntity(10000, X0_4, 7)
            || EntityInRadiusOfEntity(10000, X4_4, 7)
            || EntityInRadiusOfEntity(10000, X8_4, 7)
            || EntityInRadiusOfEntity(10000, X12_4, 7)
            || EntityInRadiusOfEntity(10000, X16_4, 7)
            || EntityInRadiusOfEntity(10000, X20_4, 7)
            || EntityInRadiusOfEntity(10000, X24_4, 7)));
    ClearSpEffect(X0_4, 5913);
    ClearSpEffect(X4_4, 5913);
    ClearSpEffect(X8_4, 5913);
    ClearSpEffect(X12_4, 5913);
    ClearSpEffect(X16_4, 5913);
    ClearSpEffect(X20_4, 5913);
    ClearSpEffect(X24_4, 5913);
    SetSpEffect(X0_4, 5625, false);
    SetSpEffect(X4_4, 5625, false);
    SetSpEffect(X8_4, 5625, false);
    SetSpEffect(X12_4, 5625, false);
    SetSpEffect(X16_4, 5625, false);
    SetSpEffect(X20_4, 5625, false);
    SetSpEffect(X24_4, 5625, false);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetCharacterHPBarDisplay(X4_4, Enabled);
    SetCharacterHPBarDisplay(X8_4, Enabled);
    SetCharacterHPBarDisplay(X12_4, Enabled);
    SetCharacterHPBarDisplay(X16_4, Enabled);
    SetCharacterHPBarDisplay(X20_4, Enabled);
    SetCharacterHPBarDisplay(X24_4, Enabled);
    WaitFixedTimeSeconds(1);
    spCmp = CharacterHasSpEffect(X0_4, 5913) || X0_4 == 0;
    spCmp2 = CharacterHasSpEffect(X4_4, 5913) || X4_4 == 0;
    spCmp3 = CharacterHasSpEffect(X8_4, 5913) || X8_4 == 0;
    spCmp4 = CharacterHasSpEffect(X12_4, 5913) || X12_4 == 0;
    spCmp5 = CharacterHasSpEffect(X16_4, 5913) || X16_4 == 0;
    spCmp6 = CharacterHasSpEffect(X20_4, 5913) || X20_4 == 0 || CharacterHasSpEffect(X24_4, 5913) || X24_4 == 0;
    WaitFor(spCmp && spCmp2 && spCmp3 && spCmp4 && spCmp5 && spCmp6 && cond);
    SetEventFlag(X28_4, ON);
    EndEvent();
});

// Sub-feature_special character_with shop_shop_XX
$Event(12905188, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!(EventFlag(92905330)
        || EventFlag(92905332)
        || EventFlag(92905333)
        || EventFlag(92905334)
        || AnyBatchEventFlags(92905385, 92905389))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        ChangeCharacterEnableState(X8_4, Disabled);
        ChangeCharacterEnableState(X12_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X4_4, true);
        SetCharacterBackreadState(X8_4, true);
        SetCharacterBackreadState(X12_4, true);
        DeactivateObject(X16_4, Disabled);
        SetObjactState(X16_4, -1, Disabled);
        SetObjectTreasureState(X16_4, Disabled);
        DeactivateObject(X20_4, Disabled);
        SetObjactState(X20_4, -1, Disabled);
        SetObjectTreasureState(X20_4, Disabled);
        DeactivateObject(X24_4, Disabled);
        SetObjactState(X24_4, -1, Disabled);
        SetObjectTreasureState(X24_4, Disabled);
        DeactivateObject(X28_4, Disabled);
        SetObjactState(X28_4, -1, Disabled);
        SetObjectTreasureState(X28_4, Disabled);
        EndEvent();
    }
L0:
    if (!((EventFlag(92905332) || EventFlag(92905334)) && (EventFlag(1423) || EventFlag(1432)))) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X4_4, true);
        DeactivateObject(X16_4, Disabled);
        SetObjactState(X16_4, -1, Disabled);
        SetObjectTreasureState(X16_4, Disabled);
        DeactivateObject(X20_4, Disabled);
        SetObjactState(X20_4, -1, Disabled);
        SetObjectTreasureState(X20_4, Disabled);
        EndEvent();
    }
L1:
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special character_shop available_fighting each other_XX
$Event(12905190, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905331));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special character_with shop_no feature_XX
$Event(12905192, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!AnyBatchEventFlags(92905385, 92905389)) {
        EndIf(!AnyBatchEventFlags(92905330, 92905334));
    }
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special character_no shop_shop_XX
$Event(12905195, Restart, function() {
    EndEvent();
});

// Sub-feature_special character_no shop_fighting each other_XX
$Event(12905198, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905331) || EventFlag(92905333) || EventFlag(92905334));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_special character_no shop_no feature_XX
$Event(12905201, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905331) && !EventFlag(92905333) && !EventFlag(92905334));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    DeactivateObject(X16_4, Disabled);
    SetObjactState(X16_4, -1, Disabled);
    SetObjectTreasureState(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    SetObjactState(X20_4, -1, Disabled);
    SetObjectTreasureState(X20_4, Disabled);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong_strong_XX
$Event(12905209, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong_weak_weak_XX
$Event(12905210, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strength_no feature_XX
$Event(12905211, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong only_strong_XX
$Event(12905212, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(92905340) && IsOnline());
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Sub-feature_multi-summon enemy_strong only_weak_XX
$Event(12905221, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// sub-feature_multi-summon enemy_strong only_no feature_XX
$Event(12905226, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!EventFlag(92905340));
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Disabled);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Disabled);
    ChangeCharacterEnableState(X16_4, Disabled);
    ChangeCharacterEnableState(X20_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, true);
    SetCharacterBackreadState(X8_4, true);
    SetCharacterBackreadState(X12_4, true);
    SetCharacterBackreadState(X16_4, true);
    SetCharacterBackreadState(X20_4, true);
    DeactivateObject(X24_4, Disabled);
    SetObjactState(X24_4, -1, Disabled);
    SetObjectTreasureState(X24_4, Disabled);
    DeactivateObject(X28_4, Disabled);
    SetObjactState(X28_4, -1, Disabled);
    SetObjectTreasureState(X28_4, Disabled);
    EndEvent();
});

// Disable placement character_by sub-feature
$Event(12905232, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(!AnyBatchEventFlags(X0_4, X4_4));
    ChangeCharacterEnableState(X8_4, Disabled);
});

// Initialize trading messenger
$Event(12905233, Restart, function(X0_4, X4_4) {
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterAnimationState(X4_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    SetCharacterMaphits(X4_4, true);
});

// Buy and Sell Messenger Anime
$Event(12905235, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, 7001, true, false, false);
    ForceAnimationPlayback(X4_4, 7002, true, false, false);
    WaitFor(EventFlag(12907224));
    ForceAnimationPlayback(X0_4, 7005, false, false, false);
    ForceAnimationPlayback(X4_4, 7006, false, false, false);
    WaitFixedTimeFrames(29);
    ForceAnimationPlayback(X0_4, 7003, true, false, false);
    ForceAnimationPlayback(X4_4, 7004, true, false, false);
    WaitFor(!EventFlag(12907224));
    ForceAnimationPlayback(X0_4, 7007, false, false, false);
    ForceAnimationPlayback(X4_4, 7008, false, false, false);
    WaitFixedTimeFrames(28);
    RestartEvent();
});

// buy and sell messenger display mask
$Event(12905237, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(12);
    if (!PlayerHasItem(ItemType.Goods, 4111)) {
        ChangeCharacterDispmask(X0_4, 1, OFF);
        ChangeCharacterDispmask(X0_4, 10, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4112)) {
        ChangeCharacterDispmask(X0_4, 2, OFF);
        ChangeCharacterDispmask(X0_4, 13, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4113)) {
        ChangeCharacterDispmask(X0_4, 3, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4114)) {
        ChangeCharacterDispmask(X4_4, 0, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4115)) {
        ChangeCharacterDispmask(X4_4, 1, OFF);
        ChangeCharacterDispmask(X4_4, 12, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4116)) {
        ChangeCharacterDispmask(X4_4, 2, OFF);
        ChangeCharacterDispmask(X4_4, 11, OFF);
    }
    if (!PlayerHasItem(ItemType.Goods, 4117)) {
        ChangeCharacterDispmask(X4_4, 3, OFF);
    }
});

// Disable placement characters_other than sub-features
$Event(12905239, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(AnyBatchEventFlags(X0_4, X4_4));
    ChangeCharacterEnableState(X8_4, Disabled);
});

// disabling placement objects_per sub-feature
$Event(12905243, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(!AnyBatchEventFlags(X0_4, X4_4));
    DeactivateObject(X8_4, Disabled);
    SetObjectTreasureState(X8_4, Disabled);
});

// Disable placement object_other than sub-features
$Event(12905244, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(AnyBatchEventFlags(X0_4, X4_4));
    DeactivateObject(X8_4, Disabled);
    SetObjectTreasureState(X8_4, Disabled);
});

// map switch_XX
$Event(12905245, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        ActivateMapPart(X0_4, Disabled);
    } else {
        ActivateMapPart(X8_4, Disabled);
    }
    EndEvent();
});

// hit switch_XX
$Event(12905271, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(X4_4)) {
        ActivateHit(X0_4, Disabled);
    } else {
        ActivateHit(X8_4, Disabled);
    }
    EndEvent();
});

// disable bridge hit_XX
$Event(12905302, Default, function(X0_4) {
    ActivateHit(X0_4, Disabled);
    Goto(S0);
S0:
    NoOp();
});

// Shake the bridge_XX
$Event(12905303, Default, function(X0_4, X4_4) {
    WaitFor(PlayerMovingOnHit(X4_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    RestartEvent();
});

// patrol enemy forced loading
$Event(12905314, Restart, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndEvent();
    WaitFor(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) == 1);
    WaitFixedTimeFrames(1);
    EndEvent();
});

// Demon_Bullet dummy character connection_XX
$Event(12905337, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterAIState(X4_4, Disabled);
        ForceAnimationPlayback(X4_4, 3002, false, true, false);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 6, X0_4);
    RestartEvent();
});

// Status communication from demon_body to dummy character_XX
$Event(12905347, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5401));
    RequestCharacterAICommand(X4_4, 100, 0);
    WaitFor(CharacterHasSpEffect(X0_4, 5400));
    RequestCharacterAICommand(X4_4, -1, 0);
    RestartEvent();
});

// Unlock Grave Digger Pickaxe Work Animation_XX
$Event(12905357, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    SetCharacterAIId(X0_4, X16_4);
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(
        CharacterDamagedBy(X0_4, 10000)
            || HPRatio(X0_4) != 1
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    SetCharacterAIId(X0_4, X20_4);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5)) {
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    }
});

// Indifferent special standby release_XX
$Event(12905369, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(CharacterDamagedBy(X0_4, 10000) || HPRatio(X0_4) != 1 || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
});

// Brain Eater Special Standby_XX
$Event(12905387, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    WaitFor(
        HasDamageType(X0_4, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(X0_4, 10000, 2)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    RequestCharacterAIReplan(X0_4);
});

// Special standby for silver beast follower_XX
$Event(12905396, Restart, function(X0_4) {
    if (ThisEventSlot()) {
        EndEvent();
    }
    ForceAnimationPlayback(X0_4, 7000, true, false, false);
    SetCharacterAIId(X0_4, 218085);
    SetSpEffect(X0_4, 5629, false);
    WaitFor(
        HasDamageType(X0_4, -1, DamageType.Unspecified)
            || EntityInRadiusOfEntity(X0_4, 10000, 2)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    ForceAnimationPlayback(X0_4, 7001, false, false, false);
    SetCharacterAIId(X0_4, 218080);
    ClearSpEffect(X0_4, 5629);
    RequestCharacterAIReplan(X0_4);
});

// Flag ON_XX triggered by opening the door
$Event(12905401, Restart, function(X0_4, X4_4) {
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(45);
    SetEventFlag(X4_4, ON);
});

// flag ON_XX to wake up when the bell rings
$Event(12905402, Restart, function(X0_4, X4_4) {
    WaitFor(ObjectHitBy(X0_4, 10000));
    WaitFixedTimeFrames(45);
    SetEventFlag(X4_4, ON);
});

// flag ON_XX to force wake up on alert action
$Event(12905403, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeSeconds(8);
    SetEventFlag(X4_4, ON);
});

// Enemies wake up when opening treasure chests
$Event(12905404, Default, function(X0_4, X4_4) {
    WaitFor(ObjActEventFlag(X0_4));
    CreatePlaylog(0);
    WaitFixedTimeFrames(100);
    SetEventFlag(X4_4, ON);
});

// Appearance of crazy evil spirit with SAN value_dungeon_XX
$Event(12905406, Default, function(X0_4, X4_4) {
    ChangeCharacterEnableState(X0_4, Disabled);
    EndEvent();
    WaitFor(
        PlayerInsightAmount() >= 10 && CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, X0_4, 10));
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
    SetEventFlag(X4_4, ON);
});

// Crazy demon disappearance with SAN value_dungeon_XX
$Event(12905407, Default, function(X0_4, X4_4) {
    EndEvent();
    WaitFor(EventFlag(X4_4) && PlayerInsightAmount() <= 8);
L0:
    ForceCharacterDeath(X0_4, false);
});

// Gunpowder Barrel Explosion
$Event(12906400, Restart, function(X0_4) {
    dmg = HasDamageType(X0_4, -1, DamageType.Fire);
    dmg2 = HasDamageType(X0_4, -1, DamageType.None);
    cond = dmg || dmg2;
    WaitFor(dmg || dmg2 || ObjectHP(X0_4) < 999);
    if (!cond.Passed) {
        RequestObjectDestruction(X0_4, 1);
        PlaySE(X0_4, SoundType.oObject, 299961000);
        WaitFixedTimeFrames(10);
        ShootBullet(2900000, X0_4, 200, 6051, 270, 0, 0);
        WaitFixedTimeFrames(45);
        ShootBullet(2900000, X0_4, 200, 6053, 270, 0, 0);
        EndEvent();
    }
    CreatePlaylog(1462);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        ShootBullet(2900000, X0_4, 200, 6150, 0, 90, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        ShootBullet(2900000, X0_4, 200, 6151, 0, 90, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        ShootBullet(2900000, X0_4, 200, 6152, 0, 90, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        ShootBullet(2900000, X0_4, 200, 6153, 0, 90, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        ShootBullet(2900000, X0_4, 200, 6154, 0, 90, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        ShootBullet(2900000, X0_4, 200, 6155, 0, 90, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        ShootBullet(2900000, X0_4, 200, 6156, 0, 90, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        ShootBullet(2900000, X0_4, 200, 6157, 0, 90, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        ShootBullet(2900000, X0_4, 200, 6000, 0, 90, 0);
    }
    ShootBullet(2900000, X0_4, 200, 6055, 270, 0, 0);
    RequestObjectDestruction(X0_4, 1);
    PlaySE(X0_4, SoundType.oObject, 299961000);
});

// immortality settings
$Event(12906500, Restart, function(X0_4, X4_4) {
    SetCharacterImmortality(X0_4, Enabled);
    WaitFor(CharacterDead(X4_4));
    SetCharacterImmortality(X0_4, Disabled);
    ForceCharacterDeath(X0_4, true);
});

// Iron Ball Rumbling_XX
$Event(12906534, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 5.6, 0);
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
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 5.6, 0);
    }
    WaitFixedTimeSeconds(5.6);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    RestartEvent();
});

// iron ball rumbling long _XX
$Event(12906537, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 6, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 6, 0);
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
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 6, 0);
    }
    WaitFixedTimeSeconds(6);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    RestartEvent();
});

// Single shot iron ball rumbling 16 squares_XX
$Event(12906540, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    WaitFor(InArea(10000, X28_4));
    ForceAnimationPlayback(X0_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X4_4, X0_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X4_4, X0_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X4_4, X0_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X4_4, X0_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X4_4, X0_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X4_4, X0_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X4_4, X0_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X4_4, X0_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X4_4, X0_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeFrames(45);
    DeleteObjectEvent(X4_4);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X8_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X8_4, 0, false, false, false);
    WaitFixedTimeFrames(10);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X12_4, X8_4, 101, 6140, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X12_4, X8_4, 101, 6141, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X12_4, X8_4, 101, 6142, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X12_4, X8_4, 101, 6143, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X12_4, X8_4, 101, 6144, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X12_4, X8_4, 101, 6145, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X12_4, X8_4, 101, 6146, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X12_4, X8_4, 101, 6147, DamageTargetType.Character, 2.1, 4.3, 0);
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
        CreateDamagingObject(X12_4, X8_4, 101, 5110, DamageTargetType.Character, 2.1, 4.3, 0);
    }
    WaitFixedTimeSeconds(12);
    DeleteObjectEvent(X12_4);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X16_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000004);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000005);
    ForceAnimationPlayback(X16_4, 10, false, false, false);
    WaitFixedTimeFrames(5);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X20_4, X16_4, 101, 6140, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X20_4, X16_4, 101, 6141, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X20_4, X16_4, 101, 6142, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X20_4, X16_4, 101, 6143, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X20_4, X16_4, 101, 6144, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X20_4, X16_4, 101, 6145, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X20_4, X16_4, 101, 6146, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X20_4, X16_4, 101, 6147, DamageTargetType.Character, 2.1, 2.5, 0);
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
        CreateDamagingObject(X20_4, X16_4, 101, 5110, DamageTargetType.Character, 2.1, 2.5, 0);
    }
    WaitFixedTimeSeconds(2.5);
    DeleteObjectEvent(X20_4);
    DeactivateObject(X16_4, Disabled);
    EndEvent();
});

// Spiral staircase upper, middle and lower_iron ball rumble_XX
$Event(12906541, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 20, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 14.8, 0);
    }
    WaitFixedTimeFrames(370);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// Middle and bottom of spiral staircase_Iron ball rolling_XX
$Event(12906543, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 30, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 13.7, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// Spiral staircase upper middle_Iron ball rolling_XX
$Event(12906545, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X8_4, Disabled);
    DeactivateObject(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 100, true, false, false);
    WaitFor(InArea(10000, X12_4) || InArea(10000, X16_4) || CharacterDead(X20_4));
    ForceAnimationPlayback(X20_4, 3000, false, true, false);
    DeactivateObject(X0_4, Disabled);
    DeactivateObject(X4_4, Enabled);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000002);
    PlaySE(X24_4, SoundType.aEnvironmentalSound, 290000003);
    ForceAnimationPlayback(X4_4, 40, false, false, false);
    CreateObjectfollowingSFX(X4_4, 100, 900260);
    WaitFixedTimeFrames(30);
    if (EventFlag(92905100)) {
        WaitFor(EventFlag(92905100));
        CreateDamagingObject(X28_4, X4_4, 100, 6140, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905101)) {
        WaitFor(EventFlag(92905101));
        CreateDamagingObject(X28_4, X4_4, 100, 6141, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905102)) {
        WaitFor(EventFlag(92905102));
        CreateDamagingObject(X28_4, X4_4, 100, 6142, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905103)) {
        WaitFor(EventFlag(92905103));
        CreateDamagingObject(X28_4, X4_4, 100, 6143, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905104)) {
        WaitFor(EventFlag(92905104));
        CreateDamagingObject(X28_4, X4_4, 100, 6144, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905105)) {
        WaitFor(EventFlag(92905105));
        CreateDamagingObject(X28_4, X4_4, 100, 6145, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905106)) {
        WaitFor(EventFlag(92905106));
        CreateDamagingObject(X28_4, X4_4, 100, 6146, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (EventFlag(92905107)) {
        WaitFor(EventFlag(92905107));
        CreateDamagingObject(X28_4, X4_4, 100, 6147, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    if (!(EventFlag(92905100)
        || EventFlag(92905101)
        || EventFlag(92905102)
        || EventFlag(92905103)
        || EventFlag(92905104)
        || EventFlag(92905105)
        || EventFlag(92905106)
        || EventFlag(92905107))) {
        CreateDamagingObject(X28_4, X4_4, 100, 5110, DamageTargetType.Character, 2.1, 12.8, 0);
    }
    WaitFixedTimeFrames(270);
    DeleteObjectEvent(X28_4);
    DeleteObjectfollowingSFX(X4_4, true);
    DeactivateObject(X8_4, Enabled);
    ForceAnimationPlayback(X8_4, 100, false, false, false);
    RequestObjectDestruction(X8_4, 1);
    DeactivateObject(X4_4, Disabled);
});

// Infection_Strengthening Surroundings_XX
$Event(12906548, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 10) && EntityInRadiusOfEntity(X0_4, X4_4, 25) && !CharacterDead(X4_4));
    RequestCharacterAICommand(X4_4, 200, 1);
    WaitFor(CharacterHasEventMessage(X4_4, 20));
    SetSpEffect(X4_4, 5645, false);
    RequestCharacterAICommand(X4_4, -1, 1);
    RestartEvent();
});

// Infection_enhanced surroundings_enhanced poisoning_XX
$Event(12906567, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterHasSpEffect(X0_4, 5645));
    SetSpEffect(X0_4, X4_4, false);
    WaitFor(!CharacterHasSpEffect(X0_4, 5645));
    ClearSpEffect(X0_4, X4_4);
    RestartEvent();
});

// sleeper wakes up_XX
$Event(12906586, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    SetCharacterAIId(X0_4, X12_4);
    chr = CharacterAIState(X0_4, AIStateType.Alert);
    chr2 = CharacterAIState(X0_4, AIStateType.Recognition);
    chr3 = CharacterAIState(X0_4, AIStateType.Combat);
    sp = CharacterHasSpEffect(X0_4, 4740);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    chrSpDmg = chr || chr2 || chr3 || sp || dmg;
    chrSp = chr2 || chr3 || sp;
    WaitFor(chrSpDmg);
    if (!dmg.Passed) {
        GotoIf(L0, sp.Passed);
        GotoIf(L0, chrSp.Passed);
        SetCharacterAIId(X0_4, X16_4);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        chr4 = CharacterAIState(X0_4, AIStateType.Normal);
        chr5 = CharacterAIState(X0_4, AIStateType.Recognition);
        chr6 = CharacterAIState(X0_4, AIStateType.Combat);
        sp2 = CharacterHasSpEffect(X0_4, 4740);
        dmg2 = HasDamageType(X0_4, 10000, DamageType.Unspecified);
        chrSpDmg2 = chr4 || chr5 || chr6 || sp2 || dmg2;
        chrSp2 = chr5 || chr6 || sp2;
        WaitFor(chrSpDmg2);
        GotoIf(L1, dmg2.Passed);
        GotoIf(L0, chrSp2.Passed);
        WaitFixedTimeSeconds(3);
        RestartEvent();
L0:
        ForceAnimationPlayback(X0_4, X24_4, false, false, false);
    }
L1:
    SetCharacterAIId(X0_4, X20_4);
});

// Snake ball (small) _ Crawl out of the ground
$Event(12906648, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterBackreadStatus(X4_4));
    SetCharacterAIState(X4_4, Disabled);
    SetCharacterGravity(X4_4, Disabled);
    WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
    WaitRandomTimeFrames(0, 60);
    IssueShortWarpRequest(X4_4, TargetEntityType.Area, X12_4, -1);
    ForceAnimationPlayback(X4_4, X8_4, false, true, false);
    SetCharacterGravity(X4_4, Enabled);
    SetCharacterAIState(X4_4, Enabled);
    RequestCharacterAIReplan(X4_4);
});

// Alert enemy returning to nest XX
$Event(12906654, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(3);
    ShootBullet(2900000, X0_4, 32, 210200599, 0, 0, 0);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 225000000);
    WaitFor(InArea(X0_4, X4_4));
    ForceAnimationPlayback(X0_4, 3010, false, true, false);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 225000000);
    ShootBullet(2900000, X0_4, 32, 210200599, 0, 0, 0);
    ForceAnimationPlayback(X0_4, 7004, false, true, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Play animation with PC discovery_XX
$Event(12906655, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Alert enemy XX shouting on the spot
$Event(12906656, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(
        (CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat))
            && HPRatio(X0_4) == 1);
    if (!EntityInRadiusOfEntity(X0_4, 10000, 5)) {
        WarpCharacterAndCopyFloor(X8_4, TargetEntityType.Character, 10000, 236, 10000);
        PlaySE(X0_4, SoundType.cCharacterMotion, X4_4);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(40);
        ShootBullet(2900000, X8_4, 101, 6064, 270, 0, 0);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6051, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6054, 270, 0, 0);
        WaitFixedTimeFrames(90);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
        ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
        WaitFixedTimeFrames(60);
        GotoIf(S0, HPRatio(X0_4) != 1);
    }
    ShootBullet(2900000, X8_4, 101, 6056, 270, 0, 0);
S0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Incense Burner_XX
$Event(12906660, Default, function(X0_4) {
    EndIf(ObjectDestroyed(X0_4));
    if (!EventFlag(92905310)) {
        GotoIf(L0, EventFlag(92905301));
        CreateObjectfollowingSFX(X0_4, 600, 929302);
        WaitFor(ObjectHitBy(X0_4, -1));
        Goto(L3);
L0:
        if (!ThisEventSlot()) {
            CreateObjectfollowingSFX(X0_4, 600, 929305);
        }
        ShootBullet(2900000, X0_4, 100, 6090, 0, 0, 0);
        Goto(L2);
    }
L1:
    if (!ThisEventSlot()) {
        CreateObjectfollowingSFX(X0_4, 600, 929304);
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
    ShootBullet(2900000, X0_4, 100, 6120, 0, 0, 0);
    Goto(L2);
S0:
    ShootBullet(2900000, X0_4, 100, 6121, 0, 0, 0);
    Goto(L2);
S1:
    ShootBullet(2900000, X0_4, 100, 6122, 0, 0, 0);
    Goto(L2);
S2:
    ShootBullet(2900000, X0_4, 100, 6123, 0, 0, 0);
    Goto(L2);
S3:
    ShootBullet(2900000, X0_4, 100, 6124, 0, 0, 0);
    Goto(L2);
S4:
    ShootBullet(2900000, X0_4, 100, 6125, 0, 0, 0);
    Goto(L2);
S5:
    ShootBullet(2900000, X0_4, 100, 6126, 0, 0, 0);
    Goto(L2);
S6:
    ShootBullet(2900000, X0_4, 100, 6127, 0, 0, 0);
L2:
    cond = ElapsedSeconds(0.5);
    obj = ObjectHP(X0_4) < 999;
    WaitFor(cond || obj);
    RestartIf(!obj.Passed);
L3:
    DeleteObjectfollowingSFX(X0_4, true);
    WaitFor(ElapsedFrames(1));
    RequestObjectDestruction(X0_4, 1);
});

// Moans from the coffin_XX
$Event(12906726, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    WaitFor(CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom));
    PlaySE(X0_4, SoundType.cCharacterMotion, X4_4);
    chrArea = CharacterDead(X0_4) || EntityInRadiusOfEntity(X0_4, 10000, X8_4);
    WaitFor(ElapsedFrames(120) || chrArea);
    EndIf(chrArea.Passed);
    RestartEvent();
});

// spider man patch_dead
$Event(12906738, Restart, function(X0_4) {
    if (EventFlag(1431)) {
        EndEvent();
    }
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1431, ON);
});

// Spider man patch_hostile_hostile flag ON
$Event(12906740, Restart, function(X0_4, X4_4) {
    EndIf(AnyBatchEventFlags(1431, 1432));
    WaitFor((HPRatio(X0_4) < 0.9 && CharacterDamagedBy(X0_4, 10000)) || EventFlag(X4_4));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1432, ON);
});

// Spider Man Patch_Hostile_Team Type Switch
$Event(12906742, Restart, function(X0_4) {
    SetCharacterTeamType(X0_4, TeamType.FriendlyNPC);
    WaitFor(EventFlag(1432));
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
});

// Spider man patch_hostile_attack count
$Event(12906744, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
});

// Spider man patch_Fall when you talk to him
$Event(12906746, Default, function(X0_4) {
    ForceAnimationPlayback(X0_4, 7015, true, true, true);
    SetEventFlag(72900001, OFF);
    WaitFor(EventFlag(72900001) || EventFlag(1432));
    SetSpEffect(X0_4, 151, true);
});

// Spider Man Patch_Fall when damaged
$Event(12906748, Default, function(X0_4) {
    WaitFor(CharacterDamagedBy(X0_4, 10000) && CharacterHasSpEffect(X0_4, 5543) && HPRatio(X0_4) > 0);
    ForceAnimationPlayback(X0_4, 7021, false, true, false);
});

// Emissary tentacle warp from the moon
$Event(12906750, Restart, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(X0_4) && CharacterBackreadStatus(X0_4));
    IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, X8_4);
    RestartEvent();
});

// Part Damage_Head_Moon Spawn
$Event(12906764, Restart, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X12_2, X16_4, 1, 2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X28_4, false, false, false);
    SetSpEffect(X0_4, X20_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    SetNPCPartHP(X0_4, X8_4, -1, true);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X20_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Parts Damage_Other than Head_Moon Spawn
$Event(12906765, Restart, function(X0_4, X4_2, X8_4, X12_2, X16_4, X20_4, X24_4, X28_4) {
    WaitFor(CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X4_2, X12_2, X16_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X28_4, false, false, false);
    SetSpEffect(X0_4, X20_4, true);
    ClearSpEffect(X0_4, X24_4);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    SetNPCPartHP(X0_4, X8_4, -1, true);
    SetSpEffect(X0_4, X24_4, true);
    ClearSpEffect(X0_4, X20_4);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss Heat Up_1st_Evil God
$Event(12906766, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.7);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X8_4, ON);
});

// Boss Heat Up_2nd_Evil God
$Event(12906767, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X4_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.3 && EventFlag(X8_4));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Evil God_Strengthening Boss Parts_XX
$Event(12906768, Restart, function(X0_4, X4_4, X8_2, X12_4, X16_2, X18_1, X19_1) {
    EndIf(EventFlag(X4_4));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, X19_1, ON);
    }
L0:
    WaitFor(CharacterHasSpEffect(X0_4, 5402));
    ChangeCharacterHitmask(X0_4, X18_1, ON);
    ChangeCharacterHitmask(X0_4, X19_1, OFF);
    CreateNPCPart(X0_4, X8_2, X16_2, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(X0_4, X12_4, 74, 74);
});

// Progenitor Beast_Boss Part Damage_Part 1
$Event(12906769, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 2
$Event(12906770, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 3
$Event(12906771, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 4
$Event(12906772, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Progenitor Beast_Boss Part Damage_Part 5
$Event(12906773, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 1
$Event(12906774, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Lunar Spawn_Boss Part Damage_Part 2
$Event(12906775, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 3
$Event(12906776, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Lunar Spawn_Boss Part Damage_Part 4
$Event(12906777, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Moon Spawn_Boss Part Damage_Part 5
$Event(12906778, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 1
$Event(12906779, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 2
$Event(12906780, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 3
$Event(12906781, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 4
$Event(12906782, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Evil God_Boss Part Damage_Part 5
$Event(12906783, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 1
$Event(12906784, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 2
$Event(12906785, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 3
$Event(12906786, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 4
$Event(12906787, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Storm Bone Beast_Boss Part Damage_Part 5
$Event(12906788, Default, function(X0_4, X4_4, X8_4, X12_4, X16_2, X20_4, X24_2, X28_4) {
    WaitFor(EventFlag(X12_4) && CharacterBackreadStatus(X0_4));
    CreateNPCPart(X0_4, X24_2, X16_2, X28_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 72, 72);
    hp = NPCPartHP(X0_4, X20_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X24_2, X16_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X20_4, 73, 73);
    EventValueOperation(X4_4, 10, 3, 0, 1, CalculationType.Add);
    SetEventFlag(X8_4, ON);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X20_4, X28_4, true);
    EventValueOperation(X4_4, 10, 2, 0, 1, CalculationType.Sub);
    SetEventFlag(X8_4, ON);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Flesh Golem_Part Damage_XX
$Event(12906827, Default, function(X0_4, X4_2, X6_2, X8_4, X12_4, X16_4) {
    CreateNPCPart(X0_4, X6_2, X4_2, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X6_2, X4_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    SetSpEffect(X0_4, X16_4, false);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(30);
    ClearSpEffect(X0_4, X16_4);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Fresh Golem_Blood Bean Part Destruction_XX
$Event(12906828, Default, function(X0_4, X4_2, X6_2, X8_4, X12_4, X16_1, X17_1) {
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, 1, ON);
        ChangeCharacterHitmask(X0_4, 2, ON);
        ChangeCharacterHitmask(X0_4, 3, ON);
        ChangeCharacterHitmask(X0_4, 4, ON);
        ChangeCharacterDispmask(X0_4, 9, OFF);
        ChangeCharacterDispmask(X0_4, 10, OFF);
        ChangeCharacterDispmask(X0_4, 11, OFF);
        ChangeCharacterDispmask(X0_4, 12, OFF);
        ChangeCharacterHitmask(X0_4, X16_1, OFF);
        ChangeCharacterDispmask(X0_4, X17_1, ON);
        CreateNPCPart(X0_4, X6_2, X4_2, 100, 1, 1.5, false, false);
        SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
        hp = NPCPartHP(X0_4, X8_4) <= 0;
        hp2 = HPRatio(X0_4) <= 0;
        WaitFor(hp || hp2);
        EndIf(hp2.Passed);
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
        SetSpEffect(X0_4, 5667, true);
        RequestCharacterAIReplan(X0_4);
    }
L0:
    ChangeCharacterHitmask(X0_4, X16_1, ON);
    ChangeCharacterDispmask(X0_4, X17_1, OFF);
});

// Boss room entry_host_rematch_undercard
$Event(12906789, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X20_4));
    if (!EventFlag(X24_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X12_4, false);
        }
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X16_4, false);
        WaitFor(!EventFlag(X20_4) && EventFlag(X24_4));
        DeactivateObject(X4_4, Enabled);
        DeactivateObject(X8_4, Enabled);
        SpawnMapSFX(X12_4);
        SpawnMapSFX(X16_4);
    }
L0:
    flagChrAct = !EventFlag(X20_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X20_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(X28_4, ON);
    }
L1:
    RestartEvent();
});

// Boss room entrance_guest_undercard
$Event(12906790, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    WaitFor(
        !EventFlag(X8_4)
            && EventFlag(X12_4)
            && EventFlag(X16_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(X20_4, ON);
    }
L0:
    RestartEvent();
});

// Boss battle start_undercard
$Event(12906791, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
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
            || (X8_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))
        );
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
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
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
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

// Boss BGM_Activation_Undercard
$Event(12906792, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        chrFlagArea &= CharacterHasEventMessage(X0_4, 500);
    }
L0:
    chrFlagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(X24_4);
    }
    chrFlagArea &= InArea(10000, X4_4);
    WaitFor(chrFlagArea);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// Boss camera switching_opening
$Event(12906794, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, X12_4));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss battle start_Deb
$Event(12906795, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterAIState(X20_4, Disabled);
    SetCharacterAIState(X24_4, Disabled);
    SetCharacterHPBarDisplay(X0_4, Disabled);
    SetCharacterHPBarDisplay(X20_4, Disabled);
    SetCharacterHPBarDisplay(X24_4, Disabled);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterInvincibility(X20_4, Enabled);
    SetCharacterInvincibility(X24_4, Enabled);
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X12_4) 
            || (X8_4 == boss_1_defeat && EventFlag(boss_1_defeat+1013))
            || (X8_4 == boss_2_defeat && EventFlag(boss_2_defeat+1023))
            || (X8_4 == boss_3_defeat && EventFlag(boss_3_defeat+1033))
            || (X8_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))
        );
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(X20_4, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(X24_4, AuthorityLevel.Forced);
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
    SetSpEffect(X20_4, 7500, true);
    SetSpEffect(X24_4, 7500, true);
    Goto(L4);
L3:
    SetSpEffect(X0_4, 7501, true);
    SetSpEffect(X20_4, 7501, true);
    SetSpEffect(X24_4, 7501, true);
    Goto(L4);
L4:
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAIState(X20_4, Enabled);
    SetCharacterAIState(X24_4, Enabled);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterInvincibility(X20_4, Disabled);
    SetCharacterInvincibility(X24_4, Disabled);
    DisplayBossHealthBar(Enabled, X0_4, 0, X4_4);
    DisplayBossHealthBar(Enabled, X20_4, 1, 304002);
    DisplayBossHealthBar(Enabled, X24_4, 2, 304003);
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

// Enter boss room_host_rematch
$Event(12906796, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X20_4));
    if (!EventFlag(X24_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X12_4, false);
        }
        DeactivateObject(X8_4, Disabled);
        DeleteMapSFX(X16_4, false);
        WaitFor(!EventFlag(X20_4) && EventFlag(X24_4));
        DeactivateObject(X4_4, Enabled);
        DeactivateObject(X8_4, Enabled);
        SpawnMapSFX(X12_4);
        SpawnMapSFX(X16_4);
    }
L0:
    flagChrAct = !EventFlag(X20_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X20_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(X28_4, ON);
    }
L1:
    RestartEvent();
});

// Enter boss room_host_rematch_no exit
$Event(12906800, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(X12_4));
    if (!EventFlag(X16_4)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(X4_4, Disabled);
            DeleteMapSFX(X8_4, false);
        }
        WaitFor(!EventFlag(X12_4) && EventFlag(X16_4));
        DeactivateObject(X4_4, Enabled);
        SpawnMapSFX(X8_4);
    }
L0:
    flagChrAct = !EventFlag(X12_4) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(2900010, X4_4);
    flag = EventFlag(X12_4);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && (InArea(10000, X0_4) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.Alive);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(X20_4, ON);
    }
L1:
    RestartEvent();
});

// Enter boss room_guest
$Event(12906802, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    WaitFor(
        !EventFlag(X8_4)
            && EventFlag(X12_4)
            && EventFlag(X16_4)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2900010, X4_4));
    RotateCharacter(10000, X0_4, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, 2412801) || CharacterHasEventMessage(10000, 700));
    chr = ElapsedSeconds(4) && CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(X20_4, ON);
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
            || (X8_4 == boss_4_defeat && EventFlag(boss_4_defeat+1043))
        );
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
    if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
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
$Event(12906810, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        chrFlagArea &= CharacterHasEventMessage(X0_4, 500);
    }
L0:
    chrFlagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(X24_4);
    }
    chrFlagArea &= InArea(10000, X4_4);
    WaitFor(chrFlagArea);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// Boss BGM_Activation_2
$Event(12906978, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(X8_4, Disabled);
    SetMapSoundState(X12_4, Disabled);
    EndIf(EventFlag(X16_4));
    if (!ThisEventSlot()) {
        flagArea &= !EventFlag(X16_4) && EventFlag(X20_4);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(X24_4);
        }
        flagArea &= InArea(10000, X4_4);
        WaitFor(flagArea);
        EnableBossMapSound(X8_4, Enabled);
        flagArea2 &= EventFlag(X0_4);
    }
L0:
    flagArea2 &= !EventFlag(X16_4) && EventFlag(X20_4);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(X24_4);
    }
    flagArea2 &= InArea(10000, X4_4);
    WaitFor(flagArea2);
    EnableBossMapSound(X8_4, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(X12_4, Enabled);
});

// Switch boss camera
$Event(12906818, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(HPRatio(X0_4) > 0 && !EntityInRadiusOfEntity(10000, X0_4, X12_4));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Camera Switch_Fat
$Event(12906822, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(
        (HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4))
            || (HPRatio(X16_4) > 0 && EntityInRadiusOfEntity(10000, X16_4, X8_4))
            || (HPRatio(X20_4) > 0 && EntityInRadiusOfEntity(10000, X20_4, X8_4)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X12_4))
            || (HPRatio(X16_4) > 0 && EntityInRadiusOfEntity(10000, X16_4, X12_4))
            || (HPRatio(X20_4) > 0 && EntityInRadiusOfEntity(10000, X20_4, X12_4))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Boss Camera Switch_2
$Event(12906823, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X4_4));
    WaitFor(
        (HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X8_4))
            || (HPRatio(X16_4) > 0 && EventFlag(X20_4) && EntityInRadiusOfEntity(10000, X16_4, X8_4)));
    SetLockcamSlotNumber(29, 0, 1);
    WaitFor(
        !((HPRatio(X0_4) > 0 && EntityInRadiusOfEntity(10000, X0_4, X12_4))
            || (HPRatio(X16_4) > 0 && EventFlag(X20_4) && EntityInRadiusOfEntity(10000, X16_4, X12_4))));
    SetLockcamSlotNumber(29, 0, 0);
    RestartEvent();
});

// Dedicated flag ON when boss is defeated
$Event(12906824, Default, function(X0_4, X4_4) {
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X4_4, ON);
});

// Boss Appearance_2
$Event(12906825, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (EventFlag(X28_4)) {
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    if (!EventFlag(X24_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        WaitFor(EventFlag(X8_4) && HPRatio(X4_4) <= X20_4);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
        if (EventFlag(boss_1_defeat+1013) || EventFlag(boss_1_defeat+1023) || EventFlag(boss_1_defeat+1033) || EventFlag(boss_1_defeat+1043)) {
            WaitFixedTimeSeconds(2);
        }
        ChangeCharacterEnableState(X0_4, Enabled);
        SpawnOneshotSFX(TargetEntityType.Character, X0_4, 6, 929203);
    }
L1:
    DisplayBossHealthBar(Enabled, X0_4, 1, X16_4);
    SetEventFlag(X24_4, ON);
});

// Flame Beast_Part Damage_Part 1
$Event(12906841, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 400, 1, 0.75, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 2
$Event(12906843, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 3
$Event(12906845, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 80, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 4
$Event(12906847, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_Part Damage_Part 5
$Event(12906849, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 280, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 64, 64);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 65, 65);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Flame Beast_SFX setup
$Event(12906851, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(!EventFlag(X4_4));
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, 7020, true, false, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 7021, false, false, false);
});

// Progenitor Beast_part damage_part 1
$Event(12906853, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 100, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_part damage_part 2
$Event(12906855, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_part damage_part 3
$Event(12906857, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 150, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_Part damage_Part 4
$Event(12906859, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Progenitor Beast_Part damage_Part 5
$Event(12906861, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 72, 72);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.15, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 73, 73);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 1
$Event(12906831, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 2
$Event(12906833, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 3
$Event(12906835, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 4
$Event(12906837, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast_Part Damage_Part 5
$Event(12906839, Default, function(X0_4, X4_2, X8_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 59, 59);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 60, 60);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Boss BGM_Disable_Undercard
$Event(12906793, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss BGM_Disable
$Event(12906814, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    EnableBossMapSound(X4_4, Disabled);
    EnableBossMapSound(X8_4, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Evil God_Heat Up_1st time
$Event(12906869, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.7 && HPRatio(X0_4) != 0);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X4_4, ON);
});

// Evil God_Heat Up_2nd time
$Event(12906870, Default, function(X0_4, X4_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    EndIf(ThisEventSlot());
    WaitFor(HPRatio(X0_4) < 0.33 && HPRatio(X0_4) != 0 && EventFlag(X4_4));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Evil god_pull out arm
$Event(12906865, Restart, function(X0_4, X4_2, X8_4, X12_2, X14_1, X15_1) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    if (!ThisEventSlot()) {
        ChangeCharacterHitmask(X0_4, X15_1, ON);
        WaitFor(CharacterHasSpEffect(X0_4, 5402));
    }
L0:
    ChangeCharacterHitmask(X0_4, X14_1, ON);
    ChangeCharacterHitmask(X0_4, X15_1, OFF);
    CreateNPCPart(X0_4, X4_2, X12_2, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
});

// Evil God_part damage_part 1
$Event(12906871, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 300, 1, 1.4, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 2.1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 3
$Event(12906879, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 400, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 4
$Event(12906872, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 485, true);
    ClearSpEffect(X0_4, 495);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 495, true);
    ClearSpEffect(X0_4, 485);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_part damage_part 5
$Event(12906875, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 230, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 6
$Event(12906873, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part6, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part6, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 486, true);
    ClearSpEffect(X0_4, 496);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 496, true);
    ClearSpEffect(X0_4, 486);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 7
$Event(12906876, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part7, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part7, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 8
$Event(12906874, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part8, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part8, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 487, true);
    ClearSpEffect(X0_4, 497);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 497, true);
    ClearSpEffect(X0_4, 487);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 9
$Event(12906877, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part9, 170, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part9, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 10
$Event(12906878, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part10, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part10, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 11
$Event(12906880, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part11, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part11, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Evil God_Part Damage_Part 12
$Event(12906881, Default, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part12, 150, 1, 0.2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part12, 9999999, 1, 0.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 488, true);
    ClearSpEffect(X0_4, 498);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 100, 1);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetSpEffect(X0_4, 498, true);
    ClearSpEffect(X0_4, 488);
    RequestCharacterAICommand(X0_4, -1, 1);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Storm Beast (Bone)_Heat Up
$Event(12904889, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    RequestCharacterAICommand(X0_4, 2, 1);
    WaitFor(HPRatio(X0_4) < 0.67 && CharacterHasSpEffect(X0_4, 5402));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, 100, 2);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 2);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAICommand(X0_4, 3, 1);
});

// Storm Beast (Bone)_Part Damage_Part 1
$Event(12904723, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 180, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, false, false);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 130, true);
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 2
$Event(12904724, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, false, false);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 3
$Event(12904725, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 200, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, false, false);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 150, true);
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 4
$Event(12904726, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, false, false);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Storm Beast (Bone)_Part Damage_Part 5
$Event(12904727, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    ChangeCharactersCloth(X0_4, 10, 2);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 1.3, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 77, 77);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, false, false);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(10);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 300));
    SetNPCPartHP(X0_4, X8_4, 200, true);
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    ChangeCharactersCloth(X0_4, 10, 1);
    RestartEvent();
});

// Idiot Spider_Spider Child Replenishment_XX
$Event(12906882, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetSpEffect(X0_4, 5401, false);
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X4_4));
    WaitFor(
        EventFlag(X8_4)
            && (RandomElapsedSeconds(0, 1) || (ElapsedSeconds(1) && CharacterType(10000, TargetType.WhitePhantom))));
    SetCharacterGravity(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    WaitFixedTimeFrames(64);
    SetCharacterAIState(X0_4, Enabled);
});

// Idiot Spider_Heat Up_XX
$Event(12906863, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) <= 0.75 && HPRatio(X0_4) != 0);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10) && HPRatio(X0_4) != 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    WaitFor(HPRatio(X0_4) <= 0.5 && HPRatio(X0_4) != 0);
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10) && HPRatio(X0_4) != 0);
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFixedTimeSeconds(2);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X8_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 3021, false, false, false);
    RequestCharacterAICommand(X0_4, 111, 0);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X16_4, ON);
});

// Idiot Spider_Child Spider Forced Death_XX
$Event(12906912, Default, function(X0_4, X4_4, X8_4) {
    WaitFixedTimeFrames(1);
    chrFlag &= CharacterDead(X0_4);
    if (chrFlag) {
        ChangeCharacterEnableState(X4_4, Disabled);
        ForceCharacterDeath(X4_4, false);
        EndEvent();
    }
L0:
    chrFlag &= CharacterDead(X0_4) && EventFlag(X8_4);
    WaitFor(chrFlag);
    ForceCharacterDeath(X4_4, false);
});

// Idiot Spider_Left Body Injury_XX
$Event(12906864, Default, function(X0_4) {
    CreateNPCPart(X0_4, 2, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 2, 59, 59);
    hp = NPCPartHP(X0_4, 2) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7000, false, false, false);
        SetNPCPartHP(X0_4, 2, 100, true);
        hp3 = NPCPartHP(X0_4, 2) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7001, false, false, false);
            SetNPCPartHP(X0_4, 2, 50, true);
            hp5 = NPCPartHP(X0_4, 2) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7002, false, false, false);
                CreateNPCPart(X0_4, 2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
                SetNPCPartSEAndSFX(X0_4, 2, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 2, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Idiot Spider_Right Body Injury_XX
$Event(12906867, Default, function(X0_4) {
    CreateNPCPart(X0_4, 3, NPCPartType.Part3, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, 3, 59, 59);
    hp = NPCPartHP(X0_4, 3) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    chr = CharacterHasEventMessage(X0_4, 20);
    WaitFor(hp || hp2 || chr);
    EndIf(hp2.Passed);
    if (!chr.Passed) {
        RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
        ForceAnimationPlayback(X0_4, 7005, false, false, false);
        SetNPCPartHP(X0_4, 3, 100, true);
        hp3 = NPCPartHP(X0_4, 3) <= 0;
        hp4 = HPRatio(X0_4) <= 0;
        chr2 = CharacterHasEventMessage(X0_4, 20);
        WaitFor(hp3 || hp4 || chr2);
        EndIf(hp4.Passed);
        if (!chr2.Passed) {
            RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
            ForceAnimationPlayback(X0_4, 7006, false, false, false);
            SetNPCPartHP(X0_4, 3, 50, true);
            hp5 = NPCPartHP(X0_4, 3) <= 0;
            hp6 = HPRatio(X0_4) <= 0;
            chr3 = CharacterHasEventMessage(X0_4, 20);
            WaitFor(hp5 || hp6 || chr3);
            EndIf(hp6.Passed);
            if (!chr3.Passed) {
                RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
                ForceAnimationPlayback(X0_4, 7007, false, false, false);
                CreateNPCPart(X0_4, 3, NPCPartType.Part3, 9999999, 1, 1.3, false, false);
                SetNPCPartSEAndSFX(X0_4, 3, 60, 60);
                RequestCharacterAIReplan(X0_4);
                WaitFor(ElapsedSeconds(30));
            }
        }
    }
L0:
    SetNPCPartHP(X0_4, 3, -1, true);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(10);
    RestartEvent();
    RestartEvent();
});

// Idiot spider_head part setting_XX
$Event(12906868, Default, function(X0_4) {
    EndIf(EventFlag(13201800));
    CreateNPCPart(X0_4, 1, NPCPartType.Part1, 9999999, 0.5, 0.5, false, false);
    SetNPCPartSEAndSFX(X0_4, 1, 61, 61);
    hp = NPCPartHP(X0_4, 1) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    RestartEvent();
});

// Messenger from the Moon (Large)_Tentacle Warp
$Event(12906829, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X12_4));
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        SetCharacterGravity(X4_4, Disabled);
    }
L0:
    WarpCharacterAndCopyFloor(X4_4, TargetEntityType.Character, X0_4, X8_4, X0_4);
    RestartEvent();
});

// Emissary from the Moon (Large)_Disable Tentacles_XX
$Event(12904873, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        WaitFor(CharacterDead(X0_4));
    }
L0:
    ChangeCharacterEnableState(X4_4, Disabled);
});

// Envoy from the Moon (Large) Tentacle Stretch Control_XX
$Event(12904875, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(HPRatio(X0_4) <= 0.5);
    ForceAnimationPlayback(X4_4, 3000, false, false, false);
});

// Bloodthirsty Beast_Heat Up
$Event(12904884, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) < 0.67);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 10));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(HPRatio(X0_4) < 0.33);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    RequestCharacterAICommand(X0_4, 101, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 20));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Moon Spawn_Kojima Particles
$Event(12904734, Restart, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterHasSpEffect(X0_4, 5650) && CharacterHPValue(X0_4) < 0);
    ShootBullet(2900000, X0_4, 6, 225100310, 0, 0, 0);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// Moon Spawn_Heat Up
$Event(12904735, Default, function(X0_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(HPRatio(X0_4) < 0.5);
    RequestCharacterAICommand(X0_4, 100, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// Moon Spawn_Part Damage_Part 5
$Event(12904728, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 400, 1, 2, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part5, 9999999, 1, 2.5, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 480, true);
    ClearSpEffect(X0_4, 490);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8040, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 490, true);
    ClearSpEffect(X0_4, 480);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Moon Spawn_part damage_part 1
$Event(12904729, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part1, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 481, true);
    ClearSpEffect(X0_4, 491);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8010, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 491, true);
    ClearSpEffect(X0_4, 481);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 2
$Event(12904730, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 250, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part2, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 482, true);
    ClearSpEffect(X0_4, 492);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8000, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 492, true);
    ClearSpEffect(X0_4, 482);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 3
$Event(12904731, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part3, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 483, true);
    ClearSpEffect(X0_4, 493);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8030, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 493, true);
    ClearSpEffect(X0_4, 483);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Lunar Spawn_Part Damage_Part 4
$Event(12904732, Restart, function(X0_4, X4_2, X8_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X0_4));
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 300, 1, 1, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 74, 74);
    hp = NPCPartHP(X0_4, X8_4) <= 0;
    hp2 = HPRatio(X0_4) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(X0_4, X4_2, NPCPartType.Part4, 9999999, 1, 1.25, false, false);
    SetNPCPartSEAndSFX(X0_4, X8_4, 75, 75);
    SetSpEffect(X0_4, 484, true);
    ClearSpEffect(X0_4, 494);
    RequestCharacterAIReplan(X0_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, 8020, false, true, false);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(X0_4, 1, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(CharacterHasEventMessage(X0_4, 500));
    SetSpEffect(X0_4, 494, true);
    ClearSpEffect(X0_4, 484);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetNPCPartHP(X0_4, X8_4, -1, false);
    WaitFixedTimeFrames(15);
    RestartEvent();
});

// Bride double appears
$Event(12906942, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X20_4));
    WaitFor(CharacterHasEventMessage(X20_4, 90) && EventFlag(X16_4));
    SetSpEffect(X0_4, 5610, false);
    IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
    ChangeCharacterEnableState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X12_4, ON);
    WaitFor(EventFlag(X8_4));
    RestartEvent();
});

// Bride double disappears
$Event(12906960, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFixedTimeFrames(1);
    EndIf(CharacterDead(X12_4));
    dmg = CharacterDamagedBy(X0_4, 10000)
        || CharacterDamagedBy(X0_4, 2900248)
        || CharacterDamagedBy(X0_4, 2900249)
        || CharacterDamagedBy(X0_4, 2900250);
    WaitFor(dmg || (CharacterHasEventMessage(X12_4, 80) && EventFlag(X8_4)));
    if (dmg.Passed) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    } else {
L0:
        ForceAnimationPlayback(X0_4, 3020, false, false, false);
        WaitFixedTimeFrames(65);
    }
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetEventFlag(X8_4, OFF);
    SetEventFlag(X4_4, ON);
    RestartEvent();
});

// Warp OBJ_Registration_XX
$Event(12907000, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterBackreadStatus(X0_4));
    if (!EventFlag(X8_4)) {
        ChangeCharacterEnableState(X0_4, Disabled);
        DeactivateObject(X4_4, Disabled);
        WaitFor(EventFlag(X8_4) && !EventFlag(X16_4));
        DeactivateObject(X4_4, Enabled);
        ChangeCharacterEnableState(X0_4, Enabled);
        SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100330);
    }
L0:
    RegisterHealingFountain(X12_4, X4_4, 0, 0, 0, 0);
});

// Warp OBJ_start_XX
$Event(12907010, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    RotateCharacter(10000, X4_4, 101170, false);
    WaitFixedTimeFrames(32);
    InitializeWarpObject(X4_4);
});

// Warp OBJ_Warp to Base_XX
$Event(12907020, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    
    if (!EventFlag(12100761)) {
        RotateCharacter(10000, X4_4, 101160, false);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(3);
    }
    else {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
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
$Event(12907030, Default, function(X0_4, X4_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X0_4));
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Object, X4_4, 100, 100321);
    InitializeWarpObject(X4_4);
    SetEventFlag(X0_4, OFF);
});

// Key acquisition monitoring process_XX
$Event(12907300, Default, function(X0_4, X4_4) {
    WaitFor(PlayerHasItem(ItemType.Goods, X0_4));
    SetEventFlag(X4_4, ON);
});

// Multi-intrusion management
$Event(12907400, Default, function() {
    WaitFor(
        (EventFlag(12907230) && EventFlag(12907231) && NumberOfClientsOfType(ClientType.Invader) < 2)
            || (NumberOfClientsOfType(ClientType.Invader) < 1 && (EventFlag(12907230) || EventFlag(12907231))));
    WaitFor(ElapsedSeconds(10) && CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 9020, false);
    DisplayMessage(100002, 0);
    WaitFor(
        (!EventFlag(12907230) && !EventFlag(12907231))
            || (EventFlag(12907230) && !EventFlag(12907231) && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (!EventFlag(12907230) && EventFlag(12907231) && NumberOfClientsOfType(ClientType.Invader) >= 1)
            || (EventFlag(12907230) && EventFlag(12907231) && NumberOfClientsOfType(ClientType.Invader) >= 2));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    RestartEvent();
});

// Widow_Appearance_Placement Widow_XX
$Event(12907401, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(92905340)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(X16_4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025)) && !EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X20_4);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (EventFlag(X16_4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
    SetEventFlag(12907230, ON);
});

// widow_appearance_appearance widow_XX
$Event(12907405, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L1:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineChrSpFlag &= IsOnline();
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    flag = !EventFlag(X16_4) && EventFlag(X24_4);
    if (!flag) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineChrSpFlag &= (chrOnline || CharacterHasSpEffect(10000, 9025)) && !EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X20_4);
    WaitFor(onlineChrSpFlag);
    WaitFor(ElapsedSeconds(10));
    if (!flag.Passed) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFor(ElapsedFrames(59));
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
    SetEventFlag(12907231, ON);
});

// Widow_Disappeared_Placement Widow_XX
$Event(12907409, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    hp = HPRatio(X0_4) == 0;
    WaitFor(EventFlag(X4_4) && (hp || EventFlag(X12_4)));
    SetEventFlag(X8_4, ON);
    SetEventFlag(12907230, OFF);
    if (hp.Passed) {
        SetEventFlag(X16_4, ON);
        EndIf(EventFlag(12907231));
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// Widow_Disappearing_Appearing Widow_XX
$Event(12907413, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4));
    hp = HPRatio(X0_4) == 0;
    WaitFor(EventFlag(X4_4) && (hp || EventFlag(X12_4)));
    SetEventFlag(X8_4, ON);
    SetEventFlag(12907231, OFF);
    if (hp.Passed) {
        SetEventFlag(X16_4, ON);
        EndIf(EventFlag(12907230));
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// widow_bell_control_XX
$Event(12907440, Default, function(X0_4, X4_4, X8_4) {
    WaitFor(EventFlag(X4_4) && !EventFlag(X8_4));
    WaitFor(CharacterHasSpEffect(10000, 9020));
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!CharacterHasSpEffect(10000, 9020) || EventFlag(X8_4));
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Added PCHP reduction special effect
$Event(12907420, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(!EventFlag(X4_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetSpEffect(10000, X0_4, false);
        EndEvent();
    }
    if (!(CharacterHasSpEffect(10000, 6142) && CharacterType(10000, TargetType.WhitePhantom))) {
        SetSpEffect(10000, X8_4, false);
        EndEvent();
    }
    SetSpEffect(10000, X12_4, false);
});

// Hierarchical stay flag processing_XX
$Event(12907430, Default, function(X0_4, X4_4) {
    SetEventFlag(X4_4, OFF);
    WaitFor(InArea(10000, X0_4) && HasMultiplayerState(MultiplayerState.Host));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
    WaitFor(!InArea(10000, X0_4) && HasMultiplayerState(MultiplayerState.Host));
    RestartEvent();
});

// Multi Confinement Wall_XX
$Event(12907600, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    DeactivateObject(X0_4, Disabled);
    DeleteMapSFX(X4_4, true);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    DeactivateObject(X0_4, Enabled);
    SpawnMapSFX(X4_4);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer)));
    RestartEvent();
});

// Dungeon_New NPC Summoning_Summoning Judgment_General Purpose
$Event(12906962, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(X20_4))
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
                && (!((EventFlag(12906992) && !EventFlag(12906988))
                    || (EventFlag(12906993) && !EventFlag(12906989))
                    || (EventFlag(12906994) && !EventFlag(12906990))
                    || (EventFlag(12906995) && !EventFlag(12906991)))
                    || !EventFlag(X20_4))));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// Dungeon_New NPC Summon_Participation_XX
$Event(12906966, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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
            && EventFlagState(ON, TargetEventFlagType.EventIDAndSlotNumber, 14)
            && !EventFlag(X24_4)
            && ActionButtonInArea(X20_4, X4_4));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(X0_4, X4_4, X8_4, X12_4, X16_4);
    SetEventFlag(X28_4, ON);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★Dungeon_New NPC summons_Aim for the boss room_XX
$Event(12906970, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// Dungeon_New NPC summons_Enter boss room_XX
$Event(12906974, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    WaitFor(EventFlag(X20_4) && InArea(X0_4, X4_4));
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
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

// Dungeon_New NPC summons_Disabled throw during boss battle_XX
$Event(12907610, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(HasMultiplayerState(MultiplayerState.Host) && EventFlag(X4_4) && !EventFlag(X8_4) && EventFlag(X12_4));
    SetSpEffectAndUnknown200455(X0_4, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// Coping process for staggered entry guests_XX
$Event(12907620, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
});

// Coping process for staggered entry guests_with enemy appearance_XX
$Event(12907625, Restart, function(X0_4, X4_4, X8_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X0_4));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X8_4, Enabled);
});

// Coping process for staggered entry guests_with 3 enemies appearing_XX
$Event(12907630, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && (EventFlag(X0_4)));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(X0_4, ON);
    SetEventFlag(X4_4, ON);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X8_4, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X12_4, Enabled);
    WaitFixedTimeFrames(15);
    WaitFixedTimeFrames(15);
    ChangeCharacterEnableState(X16_4, Enabled);
});
