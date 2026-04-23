// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_邪神\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000ギミック_エレベーター起動\u0000PC情報_故郷到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000"
// @linked    [162]
// @version    3.6.3
// ==/EMEVD==

const area_id = 33;
const block_id = 0;

const frontier_lamp_offset = 50;
const frontier_lamp_id = 3301950;
const frontier_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const amygdala_lamp_offset = 51;
const amygdala_offset = 9;
const amygdala_defeat = 13301800;
const amygdala_return = 3301899;
const amygdala_lamp_id = 3301951;
const amygdala_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;
const amygdala_region = 3302802;
const amygdala_id = 3300800;

// +1000: boss lamp spawn point
// +2000: spawn checker
// +3000: item drop - hunt
// +4000: lamp spawn region
// +5000: boss rematch start
// +6000: item drop - standard

// slab
// elevator

// constructor
$Event(0, Default, function() {
    SetEventFlag(8900+amygdala_offset, OFF);
    
    $InitializeEvent(0, 7900, 10000000+amygdala_return, amygdala_return, area_id, block_id);
    
    $InitializeEvent(frontier_lamp_offset, 8500, 8500+frontier_lamp_offset, frontier_lamp_id, 72112828);
    $InitializeEvent(amygdala_lamp_offset, 8500, 8500+amygdala_lamp_offset, amygdala_lamp_id, 72112929);
    
    $InitializeEvent(frontier_lamp_offset, 8100, 8100+frontier_lamp_offset, frontier_lamp_kindle);
    $InitializeEvent(amygdala_lamp_offset, 8100, 8100+amygdala_lamp_offset, amygdala_lamp_kindle);
    
    $InitializeEvent(frontier_lamp_offset, 8300, frontier_lamp_id+2000, -1, frontier_lamp_kindle, frontier_lamp_id+6000, frontier_lamp_id+3000);
    
    if (EventFlag(amygdala_defeat+13) && !EventFlag(amygdala_defeat-1)) {
        if (EventFlag(amygdala_defeat-2)) {
            SetEventFlag(amygdala_defeat-2, OFF);
            $InitializeEvent(amygdala_offset, 7500, amygdala_region, amygdala_lamp_id+4000);
        }
        SetEventFlag(amygdala_defeat+13, OFF);
        SetEventFlag(amygdala_defeat, ON);
        if (EventFlag(12111120)) {
            SetEventFlag(12111120, OFF);
            $InitializeEvent(amygdala_lamp_offset, 8300, amygdala_lamp_id+2000, -1, amygdala_lamp_kindle, amygdala_lamp_id+6000, amygdala_lamp_id+3000);
        }
        else {
            $InitializeEvent(amygdala_lamp_offset, 8300, amygdala_lamp_id+2000, 999, amygdala_lamp_kindle, amygdala_lamp_id+6000, amygdala_lamp_id+3000);
            DummyPlayCutsceneAndWarpPlayer(amygdala_lamp_id+4000, area_id, block_id);
        }
    } else if (EventFlag(amygdala_defeat+12) || EventFlag(amygdala_defeat-1)) {
        if (EventFlag(amygdala_defeat-2)) {
            SetEventFlag(amygdala_defeat-2, OFF);
            $InitializeEvent(amygdala_offset, 7500, amygdala_region, amygdala_lamp_id+5000);
        }
        SetEventFlag(amygdala_defeat, OFF);
        SetEventFlag(amygdala_defeat+2, OFF);
        SetEventFlag(amygdala_defeat+12, OFF);
        SetEventFlag(amygdala_defeat+13, ON);
        SetEventFlag(amygdala_defeat-1, OFF);
        SetEventFlag(8900+amygdala_offset, ON);
        $InitializeEvent(amygdala_lamp_offset, 8300, amygdala_lamp_id+2000, -1, amygdala_lamp_kindle, amygdala_lamp_id+6000, amygdala_lamp_id+3000);
    } else {
        $InitializeEvent(amygdala_lamp_offset, 8300, amygdala_lamp_id+2000, -1, amygdala_lamp_kindle, amygdala_lamp_id+6000, amygdala_lamp_id+3000);
    }
    
    $InitializeEvent(amygdala_offset, 12102070, amygdala_defeat+13, 0, 7446, amygdala_id, -1, -1, -1, -1);
    
    $InitializeEvent(amygdala_offset, 8900, amygdala_defeat-1, amygdala_lamp_id+1000, amygdala_defeat-2, 0, 0, amygdala_lamp_id+5000, area_id, block_id);
    $InitializeEvent(amygdala_offset, 7700, amygdala_defeat+11, amygdala_defeat+12, amygdala_lamp_id+1000, 833000);
    
    $InitializeEvent(2800, 12107000, 72112800, 3301950, 2412950);
    $InitializeEvent(2801, 12107000, 72112801, 3301950, 2412951);
    $InitializeEvent(2802, 12107000, 72112802, 3301950, 2412952);
    $InitializeEvent(2803, 12107000, 72112803, 3301950, 2412953);
    $InitializeEvent(2804, 12107000, 72112804, 3301950, 2402950);
    $InitializeEvent(2805, 12107000, 72112805, 3301950, 2402951);
    $InitializeEvent(2806, 12107000, 72112806, 3301950, 2422950);
    $InitializeEvent(2807, 12107000, 72112807, 3301950, 2422952);
    $InitializeEvent(2808, 12107000, 72112808, 3301950, 2422951);
    $InitializeEvent(2809, 12107000, 72112809, 3301950, 2302950);
    $InitializeEvent(2810, 12107000, 72112810, 3301950, 2302951);
    $InitializeEvent(2811, 12107000, 72112811, 3301950, 2302952);
    $InitializeEvent(2812, 12107000, 72112812, 3301950, 2202950);
    $InitializeEvent(2813, 12107000, 72112813, 3301950, 2202951);
    $InitializeEvent(2814, 12107000, 72112814, 3301950, 2702950);
    $InitializeEvent(2815, 12107000, 72112815, 3301950, 2702951);
    $InitializeEvent(2816, 12107000, 72112816, 3301950, 3202950);
    $InitializeEvent(2817, 12107000, 72112817, 3301950, 3202952);
    $InitializeEvent(2818, 12107000, 72112818, 3301950, 2802950);
    $InitializeEvent(2819, 12107000, 72112819, 3301950, 2802953);
    $InitializeEvent(2820, 12107000, 72112820, 3301950, 2802951);
    $InitializeEvent(2821, 12107000, 72112821, 3301950, 2802952);
    $InitializeEvent(2822, 12107000, 72112822, 3301950, 2502950);
    $InitializeEvent(2823, 12107000, 72112823, 3301950, 2502952);
    $InitializeEvent(2824, 12107000, 72112824, 3301950, 2502951);
    $InitializeEvent(2825, 12107000, 72112825, 3301950, 2112950);
    $InitializeEvent(2826, 12107000, 72112826, 3301950, 3202951);
    $InitializeEvent(2827, 12107000, 72112827, 3301950, 3202953);
    $InitializeEvent(2828, 12107000, 72112828, 3301950, 3302950);
    $InitializeEvent(2829, 12107000, 72112829, 3301950, 3302951);
    $InitializeEvent(2830, 12107000, 72112830, 3301950, 2602950);
    $InitializeEvent(2831, 12107000, 72112831, 3301950, 2602953);
    $InitializeEvent(2832, 12107000, 72112832, 3301950, 2602952);
    $InitializeEvent(2833, 12107000, 72112833, 3301950, 2602951);
    $InitializeEvent(2834, 12107000, 72112834, 3301950, 3402950);
    $InitializeEvent(2835, 12107000, 72112835, 3301950, 3402951);
    $InitializeEvent(2836, 12107000, 72112836, 3301950, 3402953);
    $InitializeEvent(2837, 12107000, 72112837, 3301950, 3402952);
    $InitializeEvent(2838, 12107000, 72112838, 3301950, 3502950);
    $InitializeEvent(2839, 12107000, 72112839, 3301950, 3502951);
    $InitializeEvent(2840, 12107000, 72112840, 3301950, 3502952);
    $InitializeEvent(2841, 12107000, 72112841, 3301950, 3602950);
    $InitializeEvent(2842, 12107000, 72112842, 3301950, 3602951);
    $InitializeEvent(2843, 12107000, 72112843, 3301950, 3602952);
    $InitializeEvent(2844, 12107000, 72112844, 3301950, 2902950);
    $InitializeEvent(2845, 12107000, 72112845, 3301950, 2902951);
    $InitializeEvent(2846, 12107000, 72112846, 3301950, 2902952);
    $InitializeEvent(2847, 12107000, 72112847, 3301950, 2902953);
    $InitializeEvent(2848, 12107000, 72112848, 3301950, 2902954);
    $InitializeEvent(2849, 12107000, 72112849, 3301950, 2902955);
    $InitializeEvent(2850, 12107000, 72112850, 3301950, 2902956);
    $InitializeEvent(2851, 12107000, 72112851, 3301950, 2902957);
    $InitializeEvent(2852, 12107000, 72112852, 3301950, 2902958);
    $InitializeEvent(2853, 12107000, 72112853, 3301950, 2902959);
    
    $InitializeEvent(2900, 12107000, 72112900, 3301951, 2412950);
    $InitializeEvent(2901, 12107000, 72112901, 3301951, 2412951);
    $InitializeEvent(2902, 12107000, 72112902, 3301951, 2412952);
    $InitializeEvent(2903, 12107000, 72112903, 3301951, 2412953);
    $InitializeEvent(2904, 12107000, 72112904, 3301951, 2402950);
    $InitializeEvent(2905, 12107000, 72112905, 3301951, 2402951);
    $InitializeEvent(2906, 12107000, 72112906, 3301951, 2422950);
    $InitializeEvent(2907, 12107000, 72112907, 3301951, 2422952);
    $InitializeEvent(2908, 12107000, 72112908, 3301951, 2422951);
    $InitializeEvent(2909, 12107000, 72112909, 3301951, 2302950);
    $InitializeEvent(2910, 12107000, 72112910, 3301951, 2302951);
    $InitializeEvent(2911, 12107000, 72112911, 3301951, 2302952);
    $InitializeEvent(2912, 12107000, 72112912, 3301951, 2202950);
    $InitializeEvent(2913, 12107000, 72112913, 3301951, 2202951);
    $InitializeEvent(2914, 12107000, 72112914, 3301951, 2702950);
    $InitializeEvent(2915, 12107000, 72112915, 3301951, 2702951);
    $InitializeEvent(2916, 12107000, 72112916, 3301951, 3202950);
    $InitializeEvent(2917, 12107000, 72112917, 3301951, 3202952);
    $InitializeEvent(2918, 12107000, 72112918, 3301951, 2802950);
    $InitializeEvent(2919, 12107000, 72112919, 3301951, 2802953);
    $InitializeEvent(2920, 12107000, 72112920, 3301951, 2802951);
    $InitializeEvent(2921, 12107000, 72112921, 3301951, 2802952);
    $InitializeEvent(2922, 12107000, 72112922, 3301951, 2502950);
    $InitializeEvent(2923, 12107000, 72112923, 3301951, 2502952);
    $InitializeEvent(2924, 12107000, 72112924, 3301951, 2502951);
    $InitializeEvent(2925, 12107000, 72112925, 3301951, 2112950);
    $InitializeEvent(2926, 12107000, 72112926, 3301951, 3202951);
    $InitializeEvent(2927, 12107000, 72112927, 3301951, 3202953);
    $InitializeEvent(2928, 12107000, 72112928, 3301951, 3302950);
    $InitializeEvent(2929, 12107000, 72112929, 3301951, 3302951);
    $InitializeEvent(2930, 12107000, 72112930, 3301951, 2602950);
    $InitializeEvent(2931, 12107000, 72112931, 3301951, 2602953);
    $InitializeEvent(2932, 12107000, 72112932, 3301951, 2602952);
    $InitializeEvent(2933, 12107000, 72112933, 3301951, 2602951);
    $InitializeEvent(2934, 12107000, 72112934, 3301951, 3402950);
    $InitializeEvent(2935, 12107000, 72112935, 3301951, 3402951);
    $InitializeEvent(2936, 12107000, 72112936, 3301951, 3402953);
    $InitializeEvent(2937, 12107000, 72112937, 3301951, 3402952);
    $InitializeEvent(2938, 12107000, 72112938, 3301951, 3502950);
    $InitializeEvent(2939, 12107000, 72112939, 3301951, 3502951);
    $InitializeEvent(2940, 12107000, 72112940, 3301951, 3502952);
    $InitializeEvent(2941, 12107000, 72112941, 3301951, 3602950);
    $InitializeEvent(2942, 12107000, 72112942, 3301951, 3602951);
    $InitializeEvent(2943, 12107000, 72112943, 3301951, 3602952);
    $InitializeEvent(2944, 12107000, 72112944, 3301951, 2902950);
    $InitializeEvent(2945, 12107000, 72112945, 3301951, 2902951);
    $InitializeEvent(2946, 12107000, 72112946, 3301951, 2902952);
    $InitializeEvent(2947, 12107000, 72112947, 3301951, 2902953);
    $InitializeEvent(2948, 12107000, 72112948, 3301951, 2902954);
    $InitializeEvent(2949, 12107000, 72112949, 3301951, 2902955);
    $InitializeEvent(2950, 12107000, 72112950, 3301951, 2902956);
    $InitializeEvent(2951, 12107000, 72112951, 3301951, 2902957);
    $InitializeEvent(2952, 12107000, 72112952, 3301951, 2902958);
    $InitializeEvent(2953, 12107000, 72112953, 3301951, 2902959);
    
    SetEventFlag(72110028, OFF);
    SetEventFlag(72110128, OFF);
    SetEventFlag(72110228, OFF);
    SetEventFlag(72110328, OFF);
    SetEventFlag(72110428, OFF);
    SetEventFlag(72110528, OFF);
    SetEventFlag(72110628, OFF);
    SetEventFlag(72110728, OFF);
    SetEventFlag(72110828, OFF);
    SetEventFlag(72110928, OFF);
    SetEventFlag(72111028, OFF);
    SetEventFlag(72111128, OFF);
    SetEventFlag(72111228, OFF);
    SetEventFlag(72111328, OFF);
    SetEventFlag(72111428, OFF);
    SetEventFlag(72111528, OFF);
    SetEventFlag(72111628, OFF);
    SetEventFlag(72111728, OFF);
    SetEventFlag(72111828, OFF);
    SetEventFlag(72111928, OFF);
    SetEventFlag(72112028, OFF);
    SetEventFlag(72112128, OFF);
    SetEventFlag(72112228, OFF);
    SetEventFlag(72112328, OFF);
    SetEventFlag(72112428, OFF);
    SetEventFlag(72112528, OFF);
    SetEventFlag(72112628, OFF);
    SetEventFlag(72112728, OFF);
    SetEventFlag(72112828, OFF);
    SetEventFlag(72112928, OFF);
    SetEventFlag(72113028, OFF);
    SetEventFlag(72113128, OFF);
    SetEventFlag(72113228, OFF);
    SetEventFlag(72113328, OFF);
    SetEventFlag(72113428, OFF);
    SetEventFlag(72113528, OFF);
    SetEventFlag(72113628, OFF);
    SetEventFlag(72113728, OFF);
    SetEventFlag(72113828, OFF);
    SetEventFlag(72113928, OFF);
    SetEventFlag(72114028, OFF);
    SetEventFlag(72114128, OFF);
    SetEventFlag(72114228, OFF);
    SetEventFlag(72114328, OFF);
    SetEventFlag(72114428, OFF);
    SetEventFlag(72114528, OFF);
    SetEventFlag(72114628, OFF);
    SetEventFlag(72114728, OFF);
    SetEventFlag(72114828, OFF);
    SetEventFlag(72114928, OFF);
    SetEventFlag(72115028, OFF);
    SetEventFlag(72115128, OFF);
    SetEventFlag(72115228, OFF);
    SetEventFlag(72115328, OFF);
    
    SetEventFlag(72110029, OFF);
    SetEventFlag(72110129, OFF);
    SetEventFlag(72110229, OFF);
    SetEventFlag(72110329, OFF);
    SetEventFlag(72110429, OFF);
    SetEventFlag(72110529, OFF);
    SetEventFlag(72110629, OFF);
    SetEventFlag(72110729, OFF);
    SetEventFlag(72110829, OFF);
    SetEventFlag(72110929, OFF);
    SetEventFlag(72111029, OFF);
    SetEventFlag(72111129, OFF);
    SetEventFlag(72111229, OFF);
    SetEventFlag(72111329, OFF);
    SetEventFlag(72111429, OFF);
    SetEventFlag(72111529, OFF);
    SetEventFlag(72111629, OFF);
    SetEventFlag(72111729, OFF);
    SetEventFlag(72111829, OFF);
    SetEventFlag(72111929, OFF);
    SetEventFlag(72112029, OFF);
    SetEventFlag(72112129, OFF);
    SetEventFlag(72112229, OFF);
    SetEventFlag(72112329, OFF);
    SetEventFlag(72112429, OFF);
    SetEventFlag(72112529, OFF);
    SetEventFlag(72112629, OFF);
    SetEventFlag(72112729, OFF);
    SetEventFlag(72112829, OFF);
    SetEventFlag(72112929, OFF);
    SetEventFlag(72113029, OFF);
    SetEventFlag(72113129, OFF);
    SetEventFlag(72113229, OFF);
    SetEventFlag(72113329, OFF);
    SetEventFlag(72113429, OFF);
    SetEventFlag(72113529, OFF);
    SetEventFlag(72113629, OFF);
    SetEventFlag(72113729, OFF);
    SetEventFlag(72113829, OFF);
    SetEventFlag(72113929, OFF);
    SetEventFlag(72114029, OFF);
    SetEventFlag(72114129, OFF);
    SetEventFlag(72114229, OFF);
    SetEventFlag(72114329, OFF);
    SetEventFlag(72114429, OFF);
    SetEventFlag(72114529, OFF);
    SetEventFlag(72114629, OFF);
    SetEventFlag(72114729, OFF);
    SetEventFlag(72114829, OFF);
    SetEventFlag(72114929, OFF);
    SetEventFlag(72115029, OFF);
    SetEventFlag(72115129, OFF);
    SetEventFlag(72115229, OFF);
    SetEventFlag(72115329, OFF);
    
    $InitializeEvent(0, 12107100, 72100421, 3301950, 9021);
    $InitializeEvent(1, 12107100, 72100422, 3301950, 9022);
    $InitializeEvent(2, 12107100, 72100423, 3301950, 9023);
    $InitializeEvent(3, 12107100, 72100424, 3301950, 9024);
    $InitializeEvent(4, 12107100, 72100425, 3301950, 9025);
    $InitializeEvent(5, 12107100, 72100426, 3301950, 9026);
    
    $InitializeEvent(6, 12107100, 72100427, 3301951, 9021);
    $InitializeEvent(7, 12107100, 72100428, 3301951, 9022);
    $InitializeEvent(8, 12107100, 72100429, 3301951, 9023);
    $InitializeEvent(9, 12107100, 72100430, 3301951, 9024);
    $InitializeEvent(10, 12107100, 72100431, 3301951, 9025);
    $InitializeEvent(11, 12107100, 72100432, 3301951, 9026);
    
    $InitializeEvent(0, 12107200, 72100300, 2902950, 9001);
    $InitializeEvent(1, 12107200, 72100301, 2902951, 9002);
    $InitializeEvent(2, 12107200, 72100302, 2902952, 9003);
    $InitializeEvent(3, 12107200, 72100303, 2902953, 9004);
    $InitializeEvent(4, 12107200, 72100304, 2902954, 9005);
    $InitializeEvent(5, 12107200, 72100305, 2902955, 9006);
    $InitializeEvent(6, 12107200, 72100306, 2902956, 9007);
    $InitializeEvent(7, 12107200, 72100307, 2902957, 9008);
    $InitializeEvent(8, 12107200, 72100308, 2902958, 9009);
    $InitializeEvent(9, 12107200, 72100309, 2902959, 9010);
    
    $InitializeEvent(10, 12107200, 72100310, 2902950, 9001);
    $InitializeEvent(11, 12107200, 72100311, 2902951, 9002);
    $InitializeEvent(12, 12107200, 72100312, 2902952, 9003);
    $InitializeEvent(13, 12107200, 72100313, 2902953, 9004);
    $InitializeEvent(14, 12107200, 72100314, 2902954, 9005);
    $InitializeEvent(15, 12107200, 72100315, 2902955, 9006);
    $InitializeEvent(16, 12107200, 72100316, 2902956, 9007);
    $InitializeEvent(17, 12107200, 72100317, 2902957, 9008);
    $InitializeEvent(18, 12107200, 72100318, 2902958, 9009);
    $InitializeEvent(19, 12107200, 72100319, 2902959, 9010);
    
    $InitializeEvent(50, 7000, 3300950, 3301950, 999, 13307800, -1);
    
    $InitializeEvent(51, 7000, 3300951, 3301951, 13301800, 13307820, amygdala_defeat+13);
    $InitializeEvent(amygdala_offset, 8800, amygdala_defeat+13, amygdala_lamp_id-1000, amygdala_lamp_id, amygdala_lamp_id+3000);
    
    $InitializeEvent(50, 7100, 73300200, 3301950);
    $InitializeEvent(51, 7100, 73300201, 3301951);
    $InitializeEvent(50, 7200, 73300100, 3301950, 2102953);
    $InitializeEvent(51, 7200, 73300101, 3301951, 2102953);
    $InitializeEvent(50, 7300, 72103300, 3301950);
    $InitializeEvent(51, 7300, 72103301, 3301951);
    $InitializeEvent(10, 9200, 3303900);
    SetMapSoundState(3304000, Disabled);
    SetMapSoundState(3304001, Disabled);
    StartTimeMeasurement(3300000, 0, Disabled);
    StartTimeMeasurement(3300001, 18, Enabled);
    $InitializeEvent(0, 13300990);
    CreateObjectfollowingSFX(3301020, 100, 8028);
    CreateObjectfollowingSFX(3301022, 100, 8028);
    CreateObjectfollowingSFX(3301023, 100, 8028);
    CreateObjectfollowingSFX(3301024, 100, 8028);
    CreateObjectfollowingSFX(3301025, 100, 8028);
    ForceAnimationPlayback(3301020, 200, true, false, false);
    ForceAnimationPlayback(3301022, 200, true, false, false);
    ForceAnimationPlayback(3301023, 200, true, false, false);
    ForceAnimationPlayback(3301024, 200, true, false, false);
    ForceAnimationPlayback(3301025, 200, true, false, false);
    $InitializeEvent(0, 13304872);
    $InitializeEvent(0, 13304873);
    $InitializeEvent(0, 13301800);
    $InitializeEvent(0, 13301801);
    $InitializeEvent(0, 13301802);
    $InitializeEvent(0, 13304870);
    $InitializeEvent(0, 13304871);
    $InitializeEvent(0, 13304802);
    $InitializeEvent(1, 13304803);
    $InitializeEvent(0, 13304804);
    $InitializeEvent(0, 13304805);
    $InitializeEvent(0, 13304807);
    $InitializeEvent(0, 13304808);
    $InitializeEvent(0, 13301803);
    $InitializeEvent(0, 13304820, 3311, 3311, NPCPartType.Part13, 9, 13);
    $InitializeEvent(1, 13304820, 3322, 3322, NPCPartType.Part14, 8, 14);
    $InitializeEvent(0, 13304830, 3301, 3301, NPCPartType.Part4, 482, 200, 8020, 1, 1.5);
    $InitializeEvent(1, 13304830, 3302, 3302, NPCPartType.Part6, 482, 180, 8020, 1, 1.5);
    $InitializeEvent(2, 13304830, 3303, 3303, NPCPartType.Part8, 482, 150, 8020, 1, 1.5);
    $InitializeEvent(3, 13304830, 3304, 3304, NPCPartType.Part5, 481, 200, 8010, 1, 1.5);
    $InitializeEvent(4, 13304830, 3305, 3305, NPCPartType.Part7, 481, 150, 8010, 1, 1.5);
    $InitializeEvent(5, 13304830, 3306, 3306, NPCPartType.Part9, 481, 120, 8010, 1, 1.5);
    $InitializeEvent(6, 13304830, 3307, 3307, NPCPartType.Part10, 481, 120, 8010, 1, 1.5);
    $InitializeEvent(7, 13304830, 3308, 3308, NPCPartType.Part3, 483, 200, 8030, 0.2, 0.3);
    $InitializeEvent(8, 13304830, 3309, 3309, NPCPartType.Part11, 484, 100, 8040, 0.2, 0.3);
    $InitializeEvent(9, 13304830, 3310, 3310, NPCPartType.Part12, 483, 100, 8030, 0.2, 0.3);
    $InitializeEvent(0, 13304840);
    $InitializeEvent(0, 13300100);
    $InitializeEvent(0, 13300110);
    $InitializeEvent(0, 13300111);
    $InitializeEvent(0, 13300112);
    $InitializeEvent(0, 13300113);
    $InitializeEvent(0, 13300120);
    $InitializeEvent(0, 13300130, 3300551, 53300990);
    $InitializeEvent(1, 13300130, 3300590, 53300980);
    $InitializeEvent(2, 13300130, 3300591, 53300970);
    $InitializeEvent(3, 13300130, 3300555, 53300960);
    $InitializeEvent(4, 13300130, 3300558, 53300940);
    $InitializeEvent(5, 13300130, 3300560, 53300930);
    $InitializeEvent(6, 13300130, 3300561, 53300920);
    $InitializeEvent(7, 13300130, 3300562, 53300910);
    $InitializeEvent(8, 13300130, 3300565, 53300890);
    $InitializeEvent(9, 13300130, 3300569, 53300870);
    $InitializeEvent(10, 13300130, 3300573, 53300850);
    $InitializeEvent(11, 13300130, 3300575, 53300830);
    $InitializeEvent(12, 13300130, 3300576, 53300820);
    $InitializeEvent(13, 13300130, 3300578, 53300800);
    $InitializeEvent(14, 13300130, 3300581, 53300790);
    $InitializeEvent(15, 13300130, 3300582, 53300780);
    $InitializeEvent(16, 13300130, 3300583, 53300770);
    $InitializeEvent(17, 13300130, 3300587, 53300750);
    $InitializeEvent(18, 13300130, 3300588, 53300740);
    $InitializeEvent(19, 13300130, 3300589, 53300730);
    $InitializeEvent(20, 13300130, 3300593, 53300700);
    $InitializeEvent(21, 13300130, 3300250, 53300690);
    $InitializeEvent(22, 13300130, 3300251, 53300680);
    $InitializeEvent(23, 13300130, 3300252, 53300670);
    $InitializeEvent(24, 13300130, 3300253, 53300660);
    $InitializeEvent(25, 13300130, 3300254, 53300650);
    $InitializeEvent(26, 13300130, 3300257, 53300640);
    $InitializeEvent(27, 13300130, 3300258, 53300630);
    $InitializeEvent(28, 13300130, 3300259, 53300620);
    $InitializeEvent(29, 13300130, 3300261, 53300610);
    $InitializeEvent(30, 13300130, 3300262, 53300600);
    $InitializeEvent(0, 13300200);
    $InitializeEvent(0, 13300210);
    $InitializeEvent(0, 13300220, 3300721);
    $InitializeEvent(1, 13300220, 3300722);
    $InitializeEvent(0, 13305150, 3300411, 3302205, 5, 0);
    $InitializeEvent(1, 13305150, 3300412, 3302205, 5, 0);
    $InitializeEvent(2, 13305150, 3300452, 3302205, 5, 0);
    $InitializeEvent(3, 13305150, 3300459, 3302205, 5, 0);
    $InitializeEvent(4, 13305150, 3300500, 3302206, 15, 0);
    $InitializeEvent(5, 13305150, 3300502, 3302207, 2, 450);
    $InitializeEvent(6, 13305150, 3300413, 3302210, 5, 0);
    $InitializeEvent(7, 13305150, 3300460, 3302210, 5, 0);
    $InitializeEvent(8, 13305150, 3300413, 3302211, 5, 0);
    $InitializeEvent(9, 13305150, 3300460, 3302211, 5, 0);
    $InitializeEvent(0, 13305210, 3300102, 2, 7000, 7001, 0, 218300);
    $InitializeEvent(1, 13305210, 3300103, 2, 7000, 7001, 0, 218300);
    $InitializeEvent(2, 13305210, 3300104, 2, 7000, 7001, 0, 218300);
    $InitializeEvent(0, 13305220);
    $InitializeEvent(0, 13305230);
    $InitializeEvent(1, 13305200, 3300459, 3302301, 3300461, 5, 3306001);
    $InitializeEvent(2, 13305200, 3300452, 3302302, 3300460, 5, 3306002);
    $InitializeEvent(0, 13305250, 3300584, 3302410, 13305255);
    $InitializeEvent(1, 13305250, 3300593, 3302411, 13305256);
    $InitializeEvent(0, 13305255, 3300584, 3302410);
    $InitializeEvent(1, 13305255, 3300593, 3302411);
    $InitializeEvent(0, 13305030, 3300500, 3300520);
    $InitializeEvent(1, 13305030, 3300501, 3300521);
    $InitializeEvent(2, 13305030, 3300502, 3300522);
    $InitializeEvent(0, 13305040);
    $InitializeEvent(0, 13305041);
    $InitializeEvent(0, 13300700);
    $InitializeEvent(0, 13304700, 3300700, 13304701, 13304711, 3300, 13301700);
    $InitializeEvent(0, 13304710, 3300700, 13304701, 13304711, 13304721);
    $InitializeEvent(0, 13304720, 3300700, 13304701, 13304711, 13304721);
    $InitializeEvent(0, 13304730, 3300700, 13304701, 13304711, 3300, 13304800, 13301700);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6327)) {
            SetEventFlag(13301999, ON);
        }
    }
    if (!EventFlag(13301999)) {
        DeactivateObject(3301500, Enabled);
        DeactivateObject(3301501, Disabled);
        SetObjectTreasureState(3301500, Enabled);
        SetObjectTreasureState(3301501, Disabled);
    } else {
        DeactivateObject(3301500, Disabled);
        DeactivateObject(3301501, Enabled);
        SetObjectTreasureState(3301500, Disabled);
        SetObjectTreasureState(3301501, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6328)) {
            SetEventFlag(13301998, ON);
        }
    }
    if (!EventFlag(13301998)) {
        DeactivateObject(3301502, Enabled);
        DeactivateObject(3301503, Disabled);
        SetObjectTreasureState(3301502, Enabled);
        SetObjectTreasureState(3301503, Disabled);
    } else {
        DeactivateObject(3301502, Disabled);
        DeactivateObject(3301503, Enabled);
        SetObjectTreasureState(3301502, Disabled);
        SetObjectTreasureState(3301503, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6329)) {
            SetEventFlag(13301997, ON);
        }
    }
    if (!EventFlag(13301997)) {
        DeactivateObject(3301504, Enabled);
        DeactivateObject(3301505, Disabled);
        SetObjectTreasureState(3301504, Enabled);
        SetObjectTreasureState(3301505, Disabled);
    } else {
        DeactivateObject(3301504, Disabled);
        DeactivateObject(3301505, Enabled);
        SetObjectTreasureState(3301504, Disabled);
        SetObjectTreasureState(3301505, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6330)) {
            SetEventFlag(13301996, ON);
        }
    }
    if (!EventFlag(13301996)) {
        DeactivateObject(3301506, Enabled);
        DeactivateObject(3301507, Disabled);
        SetObjectTreasureState(3301506, Enabled);
        SetObjectTreasureState(3301507, Disabled);
    } else {
        DeactivateObject(3301506, Disabled);
        DeactivateObject(3301507, Enabled);
        SetObjectTreasureState(3301506, Disabled);
        SetObjectTreasureState(3301507, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6331)) {
            SetEventFlag(13301995, ON);
        }
    }
    if (!EventFlag(13301995)) {
        DeactivateObject(3301508, Enabled);
        DeactivateObject(3301509, Disabled);
        SetObjectTreasureState(3301508, Enabled);
        SetObjectTreasureState(3301509, Disabled);
    } else {
        DeactivateObject(3301508, Disabled);
        DeactivateObject(3301509, Enabled);
        SetObjectTreasureState(3301508, Disabled);
        SetObjectTreasureState(3301509, Enabled);
    }
});

// preconstructor
$Event(50, Default, function() {
    SetCharacterAnimationState(3303950, Disabled);
    SetCharacterGravity(3303950, Disabled);
    SetCharacterMaphits(3303950, true);
    SetCharacterAnimationState(3303951, Disabled);
    SetCharacterGravity(3303951, Disabled);
    SetCharacterMaphits(3303951, true);
});

// Appearance Widow_Appearance_Homeland
$Event(13304700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    onlineFlagChrSp &= IsOnline() && !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(eventFlagId4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(eventFlagId4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(chrEntityId, 7011, false, true, false);
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// Appearing widow_ringing the bell_hometown
$Event(13304710, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId2)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, ON);
    DisplayMessage(100002, 0);
    WaitFor(EventFlag(eventFlagId2) || NumberOfClientsOfType(ClientType.Invader) >= 1);
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    RestartEvent();
});

// Appearance Widow_Stop the bell_Hometown
$Event(13304720, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && (EventFlag(eventFlagId2) || NumberOfClientsOfType(ClientType.Invader) >= 1));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// Appearance Widow_Disappearance_Homeland
$Event(13304730, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    hp = HPRatio(chrEntityId) == 0;
    flag = EventFlag(eventFlagId4);
    WaitFor(EventFlag(eventFlagId) && (hp || flag));
    SetEventFlag(eventFlagId2, ON);
    if (!flag.Passed) {
        SetEventFlag(eventFlagId5, ON);
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

// Boss defeat_evil god
$Event(13301800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(3303802, Disabled);
        SetMapSoundState(3303803, Disabled);
        ChangeCharacterEnableState(3300800, Disabled);
        ForceCharacterDeath(3300800, true);
        DeactivateObject(3301800, Disabled);
        DeactivateObject(3301801, Disabled);
        DeleteMapSFX(3303800, true);
        DeleteMapSFX(3303801, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3300800));
    DisplayBanner(TextBannerType.DemonKilled); // amygdala defeated
    DeactivateObject(3301800, Disabled);
    DeactivateObject(3301801, Disabled);
    DeleteMapSFX(3303800, true);
    DeleteMapSFX(3303801, true);
    SetLockcamSlotNumber(33, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3300800);
    SetNetworkSyncState(Disabled);
    GotoIf(L1, HasMultiplayerState(MultiplayerState.Client));
    WaitFor(CharacterType(10000, TargetType.Alive));
    $InitializeEvent(0, 9350, 3);
    AwardAchievement(25);
    AwardItemLot(80000200);
    SetEventFlag(3300, ON);
    SetEventFlag(9466, ON);
    EndTimeMeasurement(3300000);
    EndTimeMeasurement(3300001);
    EndTimeMeasurement(3300010);
    CreatePlaylog(40);
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
    if (EventFlag(amygdala_defeat+13)) {
        AwardItemLot(17020);
        $InitializeEvent(amygdala_offset, 7800, amygdala_lamp_id+1000, 833000);
    }
});

// Boss defeat SE regeneration_evil god
$Event(13301801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    flag = EventFlag(13301800);
    WaitFor(flag || (!CharacterBackreadStatus(3300800) && HPRatio(3300800) <= 0));
    EndIf(flag.Passed);
    PlaySE(3302800, SoundType.cCharacterMotion, 0);
});

// Host enters boss room_first_evil god
$Event(13301802, Restart, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    SetCharacterMaphits(3300800, true);
    SetCharacterGravity(3300800, Disabled);
    SetCharacterInvincibility(3300800, Enabled);
    ForceAnimationPlayback(3300800, 7003, true, false, false);
    WaitFor(
        !EventFlag(13301800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 3302805));
    SetEventFlag(13304800, ON);
    ForceAnimationPlayback(3300800, 7006, false, false, false);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(3300800, 7002, false, false, false);
    WaitFixedTimeFrames(160);
    SetCharacterGravity(3300800, Enabled);
    SetCharacterInvincibility(3300800, Disabled);
    SetCharacterMaphits(3300800, false);
    EndIf(EventFlag(9302));
    $InitializeEvent(0, 9350, 3);
    SetEventFlag(9302, ON);
});

// Evil God_Treatment process for guests entering at different times
$Event(13301803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13304800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(13304800, ON);
    SetEventFlag(13301802, ON);
});

// Host enters boss room_Rematch_Evil God
$Event(13304870, Default, function() {
    EndIf(EventFlag(13301800));
    if (!EventFlag(13301802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3301800, Disabled);
            DeleteMapSFX(3303800, false);
        }
        DeactivateObject(3301801, Disabled);
        DeleteMapSFX(3303801, false);
        WaitFor(
            (!EventFlag(13301800) && EventFlag(13301802))
                || (!EventFlag(13301800) && EventFlag(13304800)));
        DeactivateObject(3301800, Enabled);
        DeactivateObject(3301801, Enabled);
        SpawnMapSFX(3303800);
        SpawnMapSFX(3303801);
    }
L0:
    chrActFlag = CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(3300800, 3301800)
        && !EventFlag(13301800);
    flag = EventFlag(13301800);
    WaitFor(chrActFlag || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3302801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13304800, ON);
    }
    RestartEvent();
});

// Guest enters boss room_evil god
$Event(13304871, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    WaitFor(
        !EventFlag(13301800)
            && EventFlag(13301802)
            && EventFlag(13304800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3300800, 3301800));
    RotateCharacter(10000, 3302800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3302801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13304801, ON);
    }
    RestartEvent();
});

// Ineffective against fog wall in other people's world_Evil God
$Event(13304872, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Invalidity per fog wall in other people's world 2_Evil God
$Event(13304873, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !EntityInRadiusOfEntity(10000, 3301800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// The boss begins to move_Evil God
$Event(13304802, Restart, function() {
    EndIf(EventFlag(13301800));
    SetCharacterAIState(3300800, Disabled);
    SetCharacterHPBarDisplay(3300800, Disabled);
    WaitFor(EventFlag(13304800) || EventFlag(amygdala_defeat+13));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
        SetNetworkUpdateAuthority(3300800, AuthorityLevel.Forced);
    }
L0:
    SetEventFlag(13304800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3300800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3300800);
    Goto(L4);
L3:
    SetSpEffect(3300800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3300800);
    Goto(L4);
L4:
    if (EventFlag(amygdala_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(3300800, Enabled);
    DisplayBossHealthBar(Enabled, 3300800, 0, 512000);
    CreatePlaylog(78);
    StartTimeMeasurement(3300010, 94, Enabled);
});

// Boss BGM ON_Evil God
$Event(13304803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    if (!ThisEvent()) {
        SetMapSoundState(3303802, Disabled);
        SetMapSoundState(3303803, Disabled);
        flagArea &= !EventFlag(13301800) && EventFlag(13304802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13304801);
        }
        flagArea &= InArea(10000, 3302802);
        WaitFor(flagArea);
        EnableBossMapSound(3303802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(3300800, 10);
    }
L0:
    chrFlagArea &= !EventFlag(13301800) && EventFlag(13304802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(13304801);
    }
    chrFlagArea &= InArea(10000, 3302802);
    WaitFor(chrFlagArea);
    EnableBossMapSound(3303802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3303803, Enabled);
});

// Boss Camera_Evil God
$Event(13304804, Default, function() {
    EndIf(EventFlag(13301800));
    SetNetworkSyncState(Disabled);
    cond &= HPRatio(3300800) > 0 && EntityInRadiusOfEntity(10000, 3300800, 14);
    WaitFor(cond);
    SetLockcamSlotNumber(33, 0, 1);
    cond &= HPRatio(3300800) > 0;
    WaitFor(!EntityInRadiusOfEntity(10000, 3300800, 17));
    WaitFor(cond);
    SetLockcamSlotNumber(33, 0, 0);
    RestartEvent();
});

// Boss BGM OFF_Evil God
$Event(13304805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13301800));
    WaitFor(EventFlag(13301800));
    EnableBossMapSound(3303802, Disabled);
    EnableBossMapSound(3303803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Boss Heat Up_1st_Evil God
$Event(13304807, Default, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(3300800) < 0.7);
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(3300800, Interpolation.Uninterpolated);
    RequestCharacterAICommand(3300800, 100, 0);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 10));
    RequestCharacterAICommand(3300800, -1, 0);
    RequestCharacterAIReplan(3300800);
});

// Boss Heat Up_2nd_Evil God
$Event(13304808, Default, function() {
    EndIf(EventFlag(13301800));
    EndIf(ThisEvent());
    WaitFor(HPRatio(3300800) < 0.3 && EventFlag(13304807));
    WaitFixedTimeSeconds(0.1);
    RequestCharacterAnimationReset(3300800, Interpolation.Uninterpolated);
    RequestCharacterAICommand(3300800, 110, 0);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 10));
    RequestCharacterAICommand(3300800, -1, 0);
    RequestCharacterAIReplan(3300800);
});

// Boss part reinforcement_XX
$Event(13304820, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, bitNumber, bitNumber2) {
    EndIf(EventFlag(13301800));
    if (!ThisEvent()) {
        ChangeCharacterHitmask(3300800, bitNumber2, ON);
    }
L0:
    WaitFor(CharacterHasSpEffect(3300800, 5402));
    ChangeCharacterHitmask(3300800, bitNumber, ON);
    ChangeCharacterHitmask(3300800, bitNumber2, OFF);
    CreateNPCPart(3300800, npcPartId, npcPartGroupIdx, 9999999, 0, 0, true, false);
    SetNPCPartSEAndSFX(3300800, npcPartId2, 59, 59);
});

// Boss_part damage_XX
$Event(13304830, Restart, function(npcPartId, npcPartId2, npcPartGroupIdx, spEffectId, npcPartHP, animationId, damageCorrection, bodyDamageCompensation) {
    EndIf(EventFlag(13301800));
    CreateNPCPart(3300800, npcPartId, npcPartGroupIdx, npcPartHP, damageCorrection, damageCorrection, false, false);
    SetNPCPartSEAndSFX(3300800, npcPartId2, 59, 59);
    hp = NPCPartHP(3300800, npcPartId2) <= 0;
    hp2 = HPRatio(3300800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(3300800, npcPartId, npcPartGroupIdx, 9999999, 1, bodyDamageCompensation, false, false);
    SetNPCPartSEAndSFX(3300800, npcPartId2, 60, 60);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(3300800, Interpolation.Interpolated);
    ForceAnimationPlayback(3300800, animationId, false, false, false);
    SetSpEffect(3300800, spEffectId, false);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(3300800, 100, 1);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 300));
    SetNPCPartHP(3300800, npcPartId2, -1, true);
    ClearSpEffect(3300800, spEffectId);
    RequestCharacterAICommand(3300800, -1, 1);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Boss_part damage_head
$Event(13304840, Restart, function() {
    EndIf(EventFlag(13301800));
    CreateNPCPart(3300800, 3300, NPCPartType.Part1, 300, 1.4, 1.4, false, false);
    SetNPCPartSEAndSFX(3300800, 3300, 60, 60);
    hp = NPCPartHP(3300800, 3300) <= 0;
    hp2 = HPRatio(3300800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(3300800, 3300, NPCPartType.Part1, 9999999, 1, 2.1, false, false);
    SetNPCPartSEAndSFX(3300800, 3300, 60, 60);
    WaitFixedTimeFrames(1);
    RequestCharacterAnimationReset(3300800, Interpolation.Interpolated);
    ForceAnimationPlayback(3300800, 8000, false, false, false);
    SetSpEffect(3300800, 480, false);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(3300800, 100, 1);
    RequestCharacterAIReplan(3300800);
    WaitFor(CharacterHasEventMessage(3300800, 300));
    SetNPCPartHP(3300800, 3300, -1, true);
    ClearSpEffect(3300800, 480);
    RequestCharacterAICommand(3300800, -1, 1);
    RequestCharacterAIReplan(3300800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// Gravestone OBJ falls down
$Event(13300100, Restart, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(3301100, 1);
        EndEvent();
    }
    ForceAnimationPlayback(3301100, 0, false, false, false);
    WaitFor(InArea(10000, 3302710));
    ForceAnimationPlayback(3301100, 1, false, false, false);
});

// Elevator initialization
$Event(13300110, Default, function() {
    flag = EventFlag(13300115);
    WaitFor(flag || !EventFlag(13300115));
    if (!flag.Passed) {
        ReproduceObjectAnimation(3301000, 6);
        SetObjactState(3301010, 3300000, Disabled);
        SetObjactState(3301011, 3300000, Enabled);
    } else {
        ReproduceObjectAnimation(3301000, 2);
        SetObjactState(3301010, 3300000, Enabled);
        SetObjactState(3301011, 3300000, Disabled);
    }
    if (!EventFlag(13300111)) {
        ReproduceObjectAnimation(3301000, 2);
        SetEventFlag(13300115, ON);
        SetObjactState(3301010, 3300000, Disabled);
        SetObjactState(3301011, 3300000, Disabled);
    }
});

// Elevator startup for the first time
$Event(13300111, Default, function() {
    EndIf(ThisEventSlot());
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Disabled);
    WaitFor(InArea(10000, 3302702));
    CreatePlaylog(112);
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Enabled);
});

// elevator_go down
$Event(13300112, Default, function() {
    if (!(!EventFlag(13300115) && EventFlag(13300116))) {
        WaitFor(EventFlag(13300111));
        WaitFor(
            (!EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302700))
                || (!EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302706)));
    }
L0:
    SetEventFlag(13300116, ON);
    ForceAnimationPlayback(3301011, 1, false, false, false);
    ForceAnimationPlayback(3301000, 1, false, false, false);
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(3301000, 2, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(3302706) && !AllPlayersInArea(3302701));
    ForceAnimationPlayback(3301011, 3, false, false, false);
    ForceAnimationPlayback(3301000, 3, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(13300115, ON);
    SetEventFlag(13300116, OFF);
    SetObjactState(3301010, 3300000, Enabled);
    SetObjactState(3301011, 3300000, Disabled);
    RestartEvent();
});

// elevator_go up
$Event(13300113, Default, function() {
    if (!(EventFlag(13300115) && EventFlag(13300116))) {
        WaitFor(EventFlag(13300111));
        WaitFor(
            (EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302701))
                || (EventFlag(13300115) && !EventFlag(13300116) && InArea(10000, 3302705)));
    }
L0:
    SetEventFlag(13300116, ON);
    ForceAnimationPlayback(3301010, 1, false, false, false);
    ForceAnimationPlayback(3301000, 5, false, false, false);
    WaitFixedTimeFrames(10);
    ForceAnimationPlayback(3301000, 6, false, false, false);
    WaitFixedTimeFrames(150);
    WaitFor(!AllPlayersInArea(3302705) && !AllPlayersInArea(3302700));
    ForceAnimationPlayback(3301010, 3, false, false, false);
    ForceAnimationPlayback(3301000, 7, false, false, false);
    WaitFixedTimeFrames(10);
    SetEventFlag(13300115, OFF);
    SetEventFlag(13300116, OFF);
    SetObjactState(3301010, 3300000, Disabled);
    SetObjactState(3301011, 3300000, Enabled);
    RestartEvent();
});

// Performance style playback
$Event(13300120, Default, function() {
    GotoIf(L0, ThisEvent());
    DeleteMapSFX(3303002, true);
    EndIf(ThisEventSlot());
    WaitFor(InArea(10000, 3303000));
    DeleteMapSFX(3303010, true);
    SpawnMapSFX(3303002);
    WaitFixedTimeSeconds(4);
    SpawnMapSFX(3303010);
});

// Wandering Madness_XX
$Event(13300130, Restart, function(chrEntityId, eventFlagId) {
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

// Patch pushes down
$Event(13300200, Default, function() {
    EndIf(ThisEvent());
    EndIf(EventFlag(1431));
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 3302170));
    SetEventFlag(9180, ON);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        if (!PlayerGender(Gender.Female)) {
            PlayCutsceneAndWarpPlayer(33000000, CutscenePlayMode.Skippable, 3302171, 33, 0, 10000);
        } else {
            PlayCutsceneAndWarpPlayer(33001000, CutscenePlayMode.Skippable, 3302171, 33, 0, 10000);
        }
    } else {
L0:
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!PlayerGender(Gender.Female)) {
                PlayCutsceneAndWarpPlayer(33000000, CutscenePlayMode.Unskippable, 3302171, 33, 0, 10000);
            } else {
                PlayCutsceneAndWarpPlayer(33001000, CutscenePlayMode.Unskippable, 3302171, 33, 0, 10000);
            }
        } else {
L2:
            if (!PlayerGender(Gender.Female)) {
                PlayCutsceneToPlayer(33000000, CutscenePlayMode.Unskippable, 10000);
            } else {
                PlayCutsceneToPlayer(33001000, CutscenePlayMode.Unskippable, 10000);
            }
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
});

// Delete patch message
$Event(13300210, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(13300200));
    }
L0:
    SetVisibilityOfMessage(3304020, Disabled);
    DeleteMapSFX(3303020, true);
});

// NPC Death Watch
$Event(13300220, Restart, function(chrEntityId) {
    if (ThisEventSlot()) {
        ForceCharacterTreasure(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        ChangeCharacterEnableState(chrEntityId, Disabled);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    SetCharacterBackreadState(2300720, true);
});

// Enemy logic ON_XX
$Event(13305150, Restart, function(chrEntityId, areaEntityId, targetDistance, timeFrames) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(chrEntityId, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance);
    chrArea = chr && (area || InArea(10000, areaEntityId));
    dmg = HasDamageType(chrEntityId, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area.Passed) {
        if (!dmg.Passed) {
            WaitFixedTimeFrames(timeFrames);
        }
    }
L0:
    SetCharacterAIState(chrEntityId, Enabled);
    RequestCharacterAIReplan(chrEntityId);
});

// Hoozuki_Bullet dummy character connection_XX
$Event(13305030, Restart, function(hitEntityId, chrEntityId) {
    SetCharacterGravity(chrEntityId, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(hitEntityId));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(hitEntityId) <= 0) {
        SetCharacterBackreadState(chrEntityId, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(chrEntityId, TargetEntityType.Character, hitEntityId, 100, hitEntityId);
    RestartEvent();
});

// Evil eye_effect body 1
$Event(13305040, Restart, function() {
    SetNetworkSyncState(Disabled);
    if (!CharacterHasSpEffect(10000, 4691)) {
        WaitFor(CharacterHasSpEffect(10000, 4690));
        WaitFixedTimeSeconds(2);
        sp = CharacterHasSpEffect(10000, 4690);
        sp2 = !CharacterHasSpEffect(10000, 4690);
        WaitFor(sp || sp2);
        RestartIf(sp2.Passed);
    }
L0:
    SetSpEffectAndUnknown200455(10000, 4691, false);
    RestartEvent();
});

// Evil eye_effect body 2
$Event(13305041, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterHasSpEffect(10000, 4690) && CharacterHasSpEffect(10000, 4691));
    ClearSpEffect(10000, 4691);
    RestartEvent();
});

// Patrol information switching_XX
$Event(13305200, Restart, function(entityId, areaEntityId, chrEntityId, targetDistance, patrolInformationEntityId) {
    if (!ThisEventSlot()) {
        WaitFor(
            InArea(entityId, areaEntityId)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance)));
    }
L0:
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// Special standby release_XX
$Event(13305210, Restart, function(chrEntityId, targetDistance, animationId, animationId2, timeSeconds, aiId) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        SetCharacterAIId(chrEntityId, 218390);
        WaitFor(
            ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance))
                || HasDamageType(chrEntityId, -1, DamageType.Unspecified)
                || CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Alert)
                || CharacterAIState(chrEntityId, AIStateType.Combat));
        WaitFixedTimeSeconds(timeSeconds);
        ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    }
L0:
    SetCharacterAIId(chrEntityId, aiId);
    RequestCharacterAIReplan(chrEntityId);
});

// Silver beast followers attack
$Event(13305220, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 3302150)
                && !EventFlag(13305212));
        ForceAnimationPlayback(3300104, 7001, false, false, false);
    }
L0:
    SetCharacterAIId(3300104, 218311);
    SetEventState(13305210, 2, EventEndType.End);
});

// Silver beast kin runs towards the PC
$Event(13305230, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(13305220));
    SetCharacterEventTarget(3300104, 10000);
    RequestCharacterAICommand(3300104, 50, 0);
    WaitFor(EntityInRadiusOfEntity(3300104, 10000, 5) || ElapsedSeconds(10));
    RequestCharacterAICommand(3300104, -1, 0);
});

// Wandering madness moves_XX
$Event(13305250, Restart, function(chrEntityId, areaEntityId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        WaitFor(
            CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Combat));
    }
L0:
    SetCharacterHome(chrEntityId, areaEntityId);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Wandering madness moves_Movement complete_XX
$Event(13305255, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(InArea(chrEntityId, areaEntityId));
    ForceAnimationPlayback(chrEntityId, 3000, false, false, false);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
});

// Waiting for patch
$Event(13300700, Restart, function() {
    if (ThisEvent()) {
        ForceCharacterTreasure(3300710);
        EndEvent();
    }
L0:
    SetCharacterAIState(3300710, Disabled);
    SetCharacterGravity(3300710, Disabled);
    SetCharacterHPBarDisplay(3300710, Disabled);
    SetCharacterImmortality(3300710, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(3300710, 9002, true, false, false);
    WaitFor(HasDamageType(3300710, -1, DamageType.Unspecified));
    ForceAnimationPlayback(3300710, 7006, false, false, false);
    WaitFixedTimeFrames(45);
    WarpCharacterAndCopyFloor(3300710, TargetEntityType.Area, 3302160, -1, 0);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(3300710);
});

// Map first entry_play log
$Event(13300990, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(3303500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 140, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 140, PlayLogMultiplayerType.HostOnly);
    $InitializeEvent(0, 9350, 2);
});
