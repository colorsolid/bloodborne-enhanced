// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    ""
// @linked    []
// @version    3.6.3
// ==/EMEVD==

// boss_defeat-2:  rematch death occured
// boss_defeat-1:  auto restart rematch
// boss_defeat+2:  player has encountered boss
// boss_defeat+11: trigger rematch and reload
// boss_defeat+12: activate rematch on load
// boss_defeat+13: rematch active / cleanup next load
// boss_defeat+14: trigger distorted rematch and reload
// boss_defeat+15: activate distorted rematch on load

// constructor
$Event(0, Default, function() {
    $InitializeEvent(0, 8890); // test
    
    $InitializeEvent(0, 12308030); // respec init - calc echoes and insight
    $InitializeEvent(0, 12308031); // change character - restore keys
    $InitializeEvent(0, 12308032); // reimburse echoes
    $InitializeEvent(0, 12308084); // reimburse insight
    SetEventFlag(12414590, ON); // ?
    
    SetEventFlag(12102065, OFF); // dark fog - change trigger
    $InitializeEvent(0, 12102037); // dark fog - random time timer
    
    $InitializeEvent(0, 8618); // map change check
    $InitializeEvent(0, 8619); // double tap init
    $InitializeEvent(0, 8620, 2111); // portable lamp
    $InitializeEvent(1, 8620, 2108); // summons menu
    $InitializeEvent(0, 8603); // portable lamp warping
    $InitializeEvent(0, 8604); // portable lamp warping to chalice
    $InitializeEvent(0, 8615); // portable lamp reawaken
    $InitializeEvent(0, 8616); // traverse
    
    $InitializeEvent(0, 8640); // death test
    
    $InitializeEvent(0, 12102069);
    
    //RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
    
    $InitializeEvent(0, 8410); // rite of kindling failsafe
    $InitializeEvent(0, 8411); // remove right on deactivate
    
    SetEventFlag(1509, OFF); // restock disable flag - enabled after short delay
    SetEventFlag(1510, OFF); // chalice menu while resting check
    SetEventFlag(12100761, OFF); // re-enable rest in the menu
    
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
    
    // boss defeated broken lamp menu flags
    $InitializeEvent(0, 12102040);
    $InitializeEvent(0, 12102041);
    $InitializeEvent(0, 12102043);
    
    // increase cycle
    $InitializeEvent(0, 12102020);
    $InitializeEvent(0, 12102021);
    
    // dark fog
    //SetEventFlag(12102031, ON);
    $InitializeEvent(0, 12102032);
    
    // unlock all lamps
    $InitializeEvent(0, 12102200);
    
    // unlock all shortcuts
    $InitializeEvent(0, 12102210);
    
    // spEffect test
    //InitializeEvent(0, 13100000, 0);
    
    // check if in Hunter's Dream for shop to update with badges
    $InitializeEvent(0, 12100001);
    $InitializeEvent(0, 12100003);
    
    $InitializeEvent(0, 12100005);
    
    // bulk acquisitions
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
    
    // lesser hunter's mark
    $InitializeEvent(0, 12100768);
    
    $InitializeEvent(0, 12101010);
    
    $InitializeEvent(0, 8700); // disable item refill after time limit
    
    // Settings initializers
    $InitializeEvent(0, 8400); // lamp
    
    if (EventFlag(12100850)) { // auto rematch enabled, rematch initiated from dream, and death respawn location is dream
        SetEventFlag(12100850, OFF);
        SetEventFlag(12100650, ON);
    }
    
    SetEventFlag(12100750, OFF);
    if (EventFlag(12100650)) { // initiated from the dream
        SetEventFlag(12100650, OFF);
        SetEventFlag(12100750, ON);
        GotoIf(S0, !EventFlag(12100963)); // victory respawn location is set to dream
    }
    // DisplayBanner(TextBannerType.Dead);
    // SetPlayerRespawnPoint(2102969); // return to broken lamp
    
    // remove insight on auto rematch
S0:
    GotoIf(S1, !EventFlag(8950));
    SetEventFlag(8950, OFF);
    SetSpEffect(10000, 4682, false);
    
S1:
    $InitializeEvent(0, 12105060);
    $InitializeEvent(0, 12105064);
    $InitializeEvent(0, 12105070, 72100141, 6011, 20);
    $InitializeEvent(1, 12105070, 72100142, 6012, 21);
    $InitializeEvent(2, 12105070, 72100143, 6013, 22);
    $InitializeEvent(3, 12105070, 72100144, 6014, 23);
    $InitializeEvent(4, 12105070, 72100145, 6015, 24);
    $InitializeEvent(5, 12105070, 72100146, 6016, 25);
    $InitializeEvent(6, 12105070, 72100147, 6017, 26);
    $InitializeEvent(7, 12105070, 72100148, 6018, 27);
    $InitializeEvent(8, 12105070, 72100149, 6019, 28);
    $InitializeEvent(9, 12105070, 72100150, 6020, 0);
    $InitializeEvent(10, 12105070, 72100151, 6021, 0);
    $InitializeEvent(11, 12105070, 72100152, 6022, 0);
    $InitializeEvent(12, 12105070, 72100153, 6023, 0);
    $InitializeEvent(13, 12105070, 72100154, 6024, 0);
    $InitializeEvent(14, 12105070, 72100155, 6025, 0);
    
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
    
    $InitializeEvent(0, 12100020, 4900, 6071, 1);
    $InitializeEvent(1, 12100020, 4901, 6072, 1);
    $InitializeEvent(2, 12100020, 4902, 6073, 1);
    $InitializeEvent(3, 12100020, 4903, 6074, 0);
    $InitializeEvent(4, 12100020, 4904, 6075, 0);
    $InitializeEvent(5, 12100020, 4905, 6076, 0);
    $InitializeEvent(6, 12100020, 4906, 6077, 0);
    $InitializeEvent(7, 12100020, 4907, 6078, 0);
    $InitializeEvent(8, 12100020, 4908, 6079, 0);
    $InitializeEvent(9, 12100020, 4909, 6080, 0);
    $InitializeEvent(10, 12100020, 4910, 6081, 0);
    $InitializeEvent(11, 12100020, 4911, 6082, 0);
    $InitializeEvent(12, 12100020, 4912, 6083, 0);
    $InitializeEvent(13, 12100020, 4913, 6084, 0);
    $InitializeEvent(14, 12100020, 4914, 6085, 0);
    
    SetEventFlag(7501, OFF);
    $InitializeEvent(0, 9190);
    $InitializeEvent(0, 9191);
    $InitializeEvent(0, 9192);
    $InitializeEvent(0, 9193);
    $InitializeEvent(0, 9198);
    $InitializeEvent(0, 6788);
    $InitializeEvent(0, 6789);
    $InitializeEvent(0, 6809);
    $InitializeEvent(0, 6815);
    $InitializeEvent(0, 6816);
    $InitializeEvent(0, 9181);
    $InitializeEvent(0, 9182);
    $InitializeEvent(0, 9183);
    $InitializeEvent(0, 9186);
    $InitializeEvent(0, 6680);
    $InitializeEvent(0, 6681);
    $InitializeEvent(0, 6682);
    $InitializeEvent(0, 6683);
    $InitializeEvent(0, 6684);
    $InitializeEvent(0, 6685);
    $InitializeEvent(0, 6686);
    $InitializeEvent(0, 6687);
    $InitializeEvent(0, 6688);
    $InitializeEvent(0, 6689);
    $InitializeEvent(0, 6690);
    $InitializeEvent(0, 6691);
    $InitializeEvent(0, 6692);
    $InitializeEvent(0, 6693);
    $InitializeEvent(0, 6694);
    $InitializeEvent(0, 6695);
    $InitializeEvent(0, 6696);
    $InitializeEvent(0, 6697);
    $InitializeEvent(0, 5500, 23010000);
    $InitializeEvent(1, 5500, 23020000);
    $InitializeEvent(2, 5500, 24010000);
    $InitializeEvent(3, 5500, 24020000);
    $InitializeEvent(4, 5500, 30010000);
    $InitializeEvent(5, 5500, 30020000);
    $InitializeEvent(6, 5500, 32010000);
    $InitializeEvent(7, 5500, 32020000);
    $InitializeEvent(8, 5500, 26010000);
    $InitializeEvent(9, 5500, 26020000);
    $InitializeEvent(10, 5500, 27010000);
    $InitializeEvent(11, 5500, 27020000);
    $InitializeEvent(12, 5500, 31010000);
    $InitializeEvent(13, 5500, 31020000);
    $InitializeEvent(14, 5500, 28010000);
    $InitializeEvent(15, 5500, 28020000);
    $InitializeEvent(16, 5500, 29010000);
    $InitializeEvent(17, 5500, 29020000);
    $InitializeEvent(18, 5500, 25010000);
    $InitializeEvent(19, 5500, 25020000);
    $InitializeEvent(20, 5500, 38010000);
    $InitializeEvent(21, 5500, 38020000);
    $InitializeEvent(0, 9500, 3400, 100000);
    $InitializeEvent(1, 9500, 3401, 100010);
    $InitializeEvent(2, 9500, 3402, 100020);
    $InitializeEvent(3, 9500, 3403, 100030);
    $InitializeEvent(4, 9500, 3404, 100040);
    $InitializeEvent(5, 9500, 3405, 100050);
    $InitializeEvent(6, 9500, 3406, 100060);
    $InitializeEvent(7, 9500, 3407, 100070);
    $InitializeEvent(8, 9500, 3408, 100080);
    $InitializeEvent(9, 9500, 3409, 100090);
    $InitializeEvent(10, 9500, 3410, 100100);
    $InitializeEvent(11, 9500, 3411, 100110);
    $InitializeEvent(12, 9500, 3412, 100120);
    $InitializeEvent(13, 9500, 3390, 100500);
    $InitializeEvent(14, 9500, 3391, 100510);
    $InitializeEvent(15, 9500, 3392, 100520);
    $InitializeEvent(16, 9500, 3450, 101000);
    $InitializeEvent(17, 9500, 3451, 101010);
    $InitializeEvent(18, 9500, 3452, 101020);
    $InitializeEvent(19, 9500, 3453, 101030);
    $InitializeEvent(20, 9500, 3454, 101040);
    $InitializeEvent(21, 9500, 3455, 101050);
    $InitializeEvent(22, 9500, 3456, 101060);
    $InitializeEvent(23, 9500, 3457, 101070);
    $InitializeEvent(24, 9500, 3458, 101080);
    $InitializeEvent(25, 9500, 3459, 101090);
    $InitializeEvent(26, 9500, 3460, 101100);
    $InitializeEvent(27, 9500, 3461, 101110);
    $InitializeEvent(28, 9500, 3462, 101120);
    $InitializeEvent(29, 9500, 3463, 101130);
    $InitializeEvent(30, 9500, 3464, 101140);
    $InitializeEvent(31, 9500, 3465, 101150);
    $InitializeEvent(32, 9500, 3466, 101160);
    $InitializeEvent(33, 9500, 3467, 101170);
    $InitializeEvent(34, 9500, 3468, 101180);
    $InitializeEvent(35, 9500, 3469, 101190);
    $InitializeEvent(36, 9500, 3470, 101200);
    $InitializeEvent(37, 9500, 3471, 101210);
    $InitializeEvent(38, 9500, 3472, 101220);
    $InitializeEvent(39, 9500, 3473, 101230);
    $InitializeEvent(40, 9500, 3474, 101240);
    $InitializeEvent(41, 9500, 3475, 101250);
    $InitializeEvent(42, 9500, 3476, 101260);
    $InitializeEvent(43, 9500, 3477, 101270);
    $InitializeEvent(44, 9500, 3478, 101280);
    $InitializeEvent(45, 9500, 3479, 101290);
    $InitializeEvent(46, 9500, 3480, 101300);
    $InitializeEvent(47, 9500, 3481, 101310);
    $InitializeEvent(48, 9500, 3482, 101320);
    $InitializeEvent(49, 9500, 3483, 101330);
    $InitializeEvent(50, 9500, 3484, 101340);
    
    $InitializeEvent(51, 9500, 3413, 110750);
    $InitializeEvent(52, 9500, 3444, 110390);
    $InitializeEvent(53, 9500, 3445, 110400);
    $InitializeEvent(54, 9500, 3446, 110120);
    $InitializeEvent(55, 9500, 3438, 110580);
    $InitializeEvent(56, 9500, 3439, 110200);
    $InitializeEvent(57, 9500, 3432, 110330);
    $InitializeEvent(58, 9500, 3433, 110050);
    $InitializeEvent(59, 9500, 3416, 110290);
    $InitializeEvent(60, 9500, 3417, 110030);
    $InitializeEvent(61, 9500, 3430, 110310);
    $InitializeEvent(62, 9500, 3431, 110040);
    $InitializeEvent(63, 9500, 3447, 110490);
    $InitializeEvent(64, 9500, 3448, 110500);
    $InitializeEvent(65, 9500, 3449, 110160);
    $InitializeEvent(66, 9500, 3418, 110600);
    $InitializeEvent(67, 9500, 3419, 110610);
    $InitializeEvent(68, 9500, 3420, 110620);
    $InitializeEvent(69, 9500, 3421, 110210);
    $InitializeEvent(70, 9500, 3499, 110720);
    $InitializeEvent(71, 9500, 3414, 110270);
    $InitializeEvent(72, 9500, 3415, 110020);
    $InitializeEvent(73, 9500, 3485, 110530);
    $InitializeEvent(74, 9500, 3486, 110540);
    $InitializeEvent(75, 9500, 3487, 110180);
    $InitializeEvent(76, 9500, 3488, 110430);
    $InitializeEvent(77, 9500, 3489, 110440);
    $InitializeEvent(78, 9500, 3490, 110130);
    $InitializeEvent(79, 9500, 3442, 110250);
    $InitializeEvent(80, 9500, 3443, 110010);
    $InitializeEvent(81, 9500, 3491, 110410);
    $InitializeEvent(82, 9500, 3492, 110420);
    $InitializeEvent(83, 9500, 3493, 110110);
    $InitializeEvent(84, 9500, 3422, 110640);
    $InitializeEvent(85, 9500, 3423, 110650);
    $InitializeEvent(86, 9500, 3424, 110660);
    $InitializeEvent(87, 9500, 3425, 110670);
    $InitializeEvent(88, 9500, 3428, 110560);
    $InitializeEvent(89, 9500, 3429, 110190);
    $InitializeEvent(90, 9500, 3426, 110480);
    $InitializeEvent(91, 9500, 3427, 110150);
    $InitializeEvent(92, 9500, 3494, 110680);
    $InitializeEvent(93, 9500, 3495, 110690);
    $InitializeEvent(94, 9500, 3496, 110700);
    $InitializeEvent(95, 9500, 3436, 110380);
    $InitializeEvent(96, 9500, 3437, 110060);
    $InitializeEvent(97, 9500, 3497, 110730);
    $InitializeEvent(98, 9500, 3498, 110740);
    $InitializeEvent(99, 9500, 3500, 110450);
    $InitializeEvent(100, 9500, 3501, 110460);
    $InitializeEvent(101, 9500, 3502, 110140);
    $InitializeEvent(102, 9500, 3506, 110100);
    $InitializeEvent(103, 9500, 3504, 110080);
    $InitializeEvent(104, 9500, 3503, 110070);
    $InitializeEvent(105, 9500, 3505, 110090);
    $InitializeEvent(106, 9500, 3507, 110760);
    $InitializeEvent(107, 9500, 3440, 110230);
    $InitializeEvent(108, 9500, 3441, 110000);
    $InitializeEvent(109, 9500, 3434, 110350);
    $InitializeEvent(110, 9500, 3435, 110360);
    $InitializeEvent(111, 9500, 3508, 110710);
    $InitializeEvent(112, 9500, 3509, 110510);
    $InitializeEvent(113, 9500, 3531, 110520);
    $InitializeEvent(114, 9500, 3532, 110170);
    $InitializeEvent(115, 9500, 3533, 110770);
    $InitializeEvent(0, 9440, 9440, 10500);
    $InitializeEvent(1, 9440, 9441, 11500);
    $InitializeEvent(2, 9440, 9442, 12500);
    $InitializeEvent(0, 9215);
    $InitializeEvent(0, 9421);
    $InitializeEvent(0, 9422);
    $InitializeEvent(0, 9400);
    $InitializeEvent(0, 9404);
    $InitializeEvent(2, 9040, 9042, 17000);
    $InitializeEvent(5, 9040, 9045, 22000);
    $InitializeEvent(6, 9040, 9046, 23000);
    $InitializeEvent(7, 9040, 9047, 24000);
    $InitializeEvent(8, 9040, 9048, 24010);
    $InitializeEvent(9, 9040, 9049, 24020);
    $InitializeEvent(10, 9040, 9050, 24030);
    $InitializeEvent(11, 9040, 9051, 24040);
    $InitializeEvent(12, 9040, 9052, 24050);
    $InitializeEvent(14, 9040, 9054, 26000);
    $InitializeEvent(15, 9040, 9055, 26010);
    $InitializeEvent(16, 9040, 9056, 26020);
    $InitializeEvent(17, 9040, 9057, 26030);
    $InitializeEvent(18, 9040, 9058, 27000);
    $InitializeEvent(19, 9040, 9059, 27010);
    $InitializeEvent(20, 9040, 9060, 27020);
    $InitializeEvent(21, 9040, 9061, 27030);
    $InitializeEvent(22, 9040, 9062, 27040);
    $InitializeEvent(23, 9040, 9063, 27050);
    $InitializeEvent(24, 9040, 9064, 27060);
    $InitializeEvent(26, 9040, 9066, 29000);
    $InitializeEvent(27, 9040, 9067, 30000);
    $InitializeEvent(29, 9040, 9069, 32000);
    $InitializeEvent(31, 9040, 9071, 33000);
    $InitializeEvent(32, 9040, 9072, 34000);
    $InitializeEvent(33, 9040, 9073, 34010);
    $InitializeEvent(34, 9040, 9074, 35000);
    $InitializeEvent(35, 9040, 9075, 35010);
    $InitializeEvent(36, 9040, 9076, 39000);
    $InitializeEvent(37, 9040, 9077, 39010);
    $InitializeEvent(0, 9100, 72410359, 24060);
    $InitializeEvent(1, 9100, 72410310, 23000);
    $InitializeEvent(2, 9100, 72400398, 32020);
    $InitializeEvent(3, 9100, 72400489, 28000);
    $InitializeEvent(4, 9100, 9043, 17010);
    $InitializeEvent(0, 9910);
    $InitializeEvent(0, 9909);
    $InitializeEvent(0, 9905, 4685);
    $InitializeEvent(1, 9905, 4686);
    $InitializeEvent(2, 9905, 4687);
    $InitializeEvent(3, 9905, 4688);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        SetSpEffect(10000, 9110, false);
    }
    $InitializeEvent(0, 9030, 6100, 180010);
    $InitializeEvent(1, 9030, 6110, 180000);
    $InitializeEvent(2, 9030, 6120, 180020);
    $InitializeEvent(0, 9035, 6142, 180040);
    if (PlayerHasItem(ItemType.Goods, 6302)) {
        SetEventFlag(70009200, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6312)) {
        SetEventFlag(70009210, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6502)) {
        SetEventFlag(70009220, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6522)) {
        SetEventFlag(70009230, ON);
    }
    if (PlayerHasItem(ItemType.Goods, 6532)) {
        SetEventFlag(70009240, ON);
    }
});

// pre-constructor
$Event(50, Default, function() {
    $InitializeEvent(0, 6002);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        if (EventFlag(12101800)) {
            SetEventFlag(9450, ON);
            SetEventFlag(3210, OFF);
        }
        if (EventFlag(12101850)) {
            SetEventFlag(9451, ON);
            SetEventFlag(3211, OFF);
        }
        if (EventFlag(12201800)) {
            SetEventFlag(9452, ON);
            SetEventFlag(5911, ON);
            SetEventFlag(3220, OFF);
        }
        if (EventFlag(12301800)) {
            SetEventFlag(9453, ON);
            SetEventFlag(3230, OFF);
        }
        if (EventFlag(12301700)) {
            SetEventFlag(9454, ON);
            SetEventFlag(3231, OFF);
        }
        if (EventFlag(12401800)) {
            SetEventFlag(9455, ON);
            SetEventFlag(3240, OFF);
        }
        if (EventFlag(12411700)) {
            SetEventFlag(9456, ON);
            SetEventFlag(3241, OFF);
        }
        if (EventFlag(12411800)) {
            SetEventFlag(9457, ON);
            SetEventFlag(5910, ON);
            SetEventFlag(3242, OFF);
        }
        if (EventFlag(12421700)) {
            SetEventFlag(9458, ON);
            SetEventFlag(3243, OFF);
        }
        if (EventFlag(12421800)) {
            SetEventFlag(9459, ON);
            SetEventFlag(3244, OFF);
        }
        if (EventFlag(12501800)) {
            SetEventFlag(9460, ON);
            SetEventFlag(3250, OFF);
        }
        if (EventFlag(12601850)) {
            SetEventFlag(9461, ON);
            SetEventFlag(3260, OFF);
            if (EventFlag(12607850)) {
                SetEventFlag(12601854, ON);
            }
        }
        if (EventFlag(12601800)) {
            SetEventFlag(9462, ON);
            SetEventFlag(3261, OFF);
        }
        if (EventFlag(12701800)) {
            SetEventFlag(9463, ON);
            SetEventFlag(3270, OFF);
        }
        if (EventFlag(12801800)) {
            SetEventFlag(9464, ON);
            SetEventFlag(3280, OFF);
        }
        if (EventFlag(13201800)) {
            SetEventFlag(9465, ON);
            SetEventFlag(3320, OFF);
        }
        if (EventFlag(13301800)) {
            SetEventFlag(9466, ON);
            SetEventFlag(3330, OFF);
        }
        if (EventFlag(12410810)) {
            SetEventFlag(5912, ON);
        }
        if (EventFlag(12300704)) {
            SetEventFlag(5914, ON);
        }
        if (EventFlag(12600029)) {
            SetEventFlag(5913, ON);
        }
        if (EventFlag(12700710)) {
            SetEventFlag(9467, ON);
        }
        if (EventFlag(12410322)) {
            SetEventFlag(12410330, ON);
        }
    }
L2:
    SetEventFlag(9180, OFF);
    $InitializeEvent(19, 9360, 1324, 1324, 1324, 6001);
    $InitializeEvent(20, 9360, 1342, 1346, 1350, 6001);
    $InitializeEvent(22, 9360, 1368, 1368, 1368, 1376);
    $InitializeEvent(25, 9360, 12300210, 12300210, 12300210, 6001);
    $InitializeEvent(26, 9360, 12800700, 12800700, 12800700, 6001);
    $InitializeEvent(27, 9360, 12800701, 12800701, 12800701, 6001);
    $InitializeEvent(28, 9360, 12800702, 12800702, 12800702, 6001);
    $InitializeEvent(30, 9360, 12410810, 12410810, 12410810, 6001);
    $InitializeEvent(31, 9360, 12400654, 12400654, 12400654, 6001);
    $InitializeEvent(32, 9360, 13300220, 13300220, 13300220, 6001);
    $InitializeEvent(33, 9360, 13300221, 13300221, 13300221, 6001);
    $InitializeEvent(34, 9360, 12400865, 12400865, 12400865, 6001);
    $InitializeEvent(35, 9360, 12400866, 12400866, 12400866, 6001);
    $InitializeEvent(36, 9360, 12600500, 12600500, 12600500, 6001);
    $InitializeEvent(37, 9360, 13200500, 13200500, 13200500, 6001);
    $InitializeEvent(0, 9480, 1710, 1711, 1712, 1713, 73600521);
    $InitializeEvent(1, 9480, 1730, 1730, 1730, 1730, 6001);
    $InitializeEvent(2, 9480, 1790, 1790, 1790, 1790, 6001);
    $InitializeEvent(3, 9480, 13501900, 13501900, 13501900, 13501900, 6001);
    $InitializeEvent(4, 9480, 12700909, 12700909, 12700909, 12700909, 6001);
    $InitializeEvent(5, 9480, 13400970, 13400970, 13400970, 13400970, 6001);
    $InitializeEvent(6, 9480, 13400971, 13400971, 13400971, 13400971, 6001);
    $InitializeEvent(7, 9480, 13501901, 13501901, 13501901, 13501901, 6001);
    $InitializeEvent(8, 9480, 13501902, 13501902, 13501902, 13501902, 6001);
    $InitializeEvent(9, 9480, 13501903, 13501903, 13501903, 13501903, 6001);
    $InitializeEvent(10, 9480, 13501904, 13501904, 13501904, 13501904, 6001);
    if (!EventFlag(999)) {
        if (!AnyBatchEventFlags(1000, 1019)) {
            SetEventFlag(1000, ON);
        }
        if (!AnyBatchEventFlags(1020, 1039)) {
            SetEventFlag(1020, ON);
        }
        if (!AnyBatchEventFlags(1040, 1059)) {
            SetEventFlag(1040, ON);
        }
        if (!AnyBatchEventFlags(1060, 1079)) {
            SetEventFlag(1060, ON);
        }
        if (!AnyBatchEventFlags(1080, 1099)) {
            SetEventFlag(1080, ON);
        }
        if (!AnyBatchEventFlags(1100, 1119)) {
            SetEventFlag(1100, ON);
        }
        if (!AnyBatchEventFlags(1120, 1139)) {
            SetEventFlag(1120, ON);
        }
        if (!AnyBatchEventFlags(1140, 1159)) {
            SetEventFlag(1140, ON);
        }
        if (!AnyBatchEventFlags(1160, 1179)) {
            SetEventFlag(1160, ON);
        }
        if (!AnyBatchEventFlags(1180, 1199)) {
            SetEventFlag(1180, ON);
        }
        if (!AnyBatchEventFlags(1200, 1219)) {
            SetEventFlag(1200, ON);
        }
        if (!AnyBatchEventFlags(1220, 1239)) {
            SetEventFlag(1220, ON);
        }
        if (!AnyBatchEventFlags(1240, 1259)) {
            SetEventFlag(1240, ON);
        }
        if (!AnyBatchEventFlags(1260, 1279)) {
            SetEventFlag(1260, ON);
        }
        if (!AnyBatchEventFlags(1280, 1289)) {
            SetEventFlag(1280, ON);
        }
        if (!AnyBatchEventFlags(1290, 1299)) {
            SetEventFlag(1290, ON);
        }
        if (!AnyBatchEventFlags(1300, 1319)) {
            SetEventFlag(1300, ON);
        }
        if (!AnyBatchEventFlags(1320, 1339)) {
            SetEventFlag(1320, ON);
        }
        if (!AnyBatchEventFlags(1340, 1359)) {
            SetEventFlag(1340, ON);
        }
        if (!AnyBatchEventFlags(1360, 1379)) {
            SetEventFlag(1360, ON);
        }
        if (!AnyBatchEventFlags(1380, 1399)) {
            SetEventFlag(1380, ON);
        }
        if (!AnyBatchEventFlags(1400, 1419)) {
            SetEventFlag(1400, ON);
        }
        if (!AnyBatchEventFlags(1420, 1439)) {
            SetEventFlag(1420, ON);
        }
        if (!AnyBatchEventFlags(1440, 1459)) {
            SetEventFlag(1440, ON);
        }
        SetEventFlag(999, ON);
    }
L0:
    $InitializeEvent(0, 9700, 1020, 1039);
    $InitializeEvent(0, 9701, 1020, 1039);
    $InitializeEvent(0, 9702, 1020, 1039);
    $InitializeEvent(0, 9703, 1020, 1039);
    $InitializeEvent(0, 9710, 1000, 1019);
    $InitializeEvent(0, 9720);
    $InitializeEvent(0, 9721);
    $InitializeEvent(0, 9722);
    $InitializeEvent(0, 9723);
    $InitializeEvent(0, 9755);
    $InitializeEvent(0, 9756);
    $InitializeEvent(0, 9770);
    $InitializeEvent(0, 9780);
    $InitializeEvent(0, 9781);
    $InitializeEvent(0, 9782);
    $InitializeEvent(0, 3500, 4900, 6900, 6071, 6011);
    $InitializeEvent(1, 3500, 4901, 6901, 6072, 6012);
    $InitializeEvent(2, 3500, 4902, 6902, 6073, 6013);
    
    $InitializeEvent(0, 3503);
    if (EventFlag(6604)) {
        RemoveItemFromPlayer(ItemType.Goods, 4000, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4001, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4003, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4006, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4009, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4010, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4011, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4012, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4013, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4300, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4305, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4308, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4310, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4320, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4321, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4322, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4323, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4900, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4901, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4902, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4903, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4904, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4905, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4906, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4907, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4908, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4014, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4015, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4021, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4017, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4018, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4019, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4020, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4311, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4340, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4341, 1);
        RemoveItemFromPlayer(ItemType.Goods, 4342, 1);
        RemoveItemFromPlayer(ItemType.Goods, 700, 99);
        SetEventFlag(6604, OFF);
    }
L1:
    NoOp();
});

// initialize enhanced settings
$Event(8400, Default, function() {
    // --------------------------------------------------- \\
    // -------------------- L A M P S -------------------- //
    // --------------------------------------------------- \\
    
    // prevent lamp deactivation
    // on: 12100868, off: 12100968
    if (!EventFlag(12100968)) {
        if (!EventFlag(12100868)) {
            SetEventFlag(12100968, ON);
        }
    }
    
    // auto refill vials & bullets
    // on: 12100862, off: 12100962
    if (!EventFlag(12100962)) {
        if (!EventFlag(12100862)) {
            SetEventFlag(12100862, ON);
        }
    }
    
    // kindling
    // on: 12100851, off: 12100951
    if (!EventFlag(12100951)) {
        if (!EventFlag(12100851)) {
            SetEventFlag(12100851, ON);
        }
    }
    
    // rest
    // on: 12100861, off: 12100961
    if (!EventFlag(12100961)) {
        if (!EventFlag(12100861)) {
            SetEventFlag(12100961, ON);
        }
    }
    
    // auto rest
    // on: 12100858, off: 12100958
    if (!EventFlag(12100958)) {
        if (!EventFlag(12100858)) {
            SetEventFlag(12100958, ON);
        }
    }
    
    // lamp menu
    // on: 12100872, off: 12100972
    if (!EventFlag(12100972)) {
        if (!EventFlag(12100872)) {
            SetEventFlag(12100872, ON);
        }
    }
    
    // warp
    // on: 12100880, off: 12100980
    if (!EventFlag(12100980)) {
        if (!EventFlag(12100880)) {
            SetEventFlag(12100880, ON);
        }
    }
    
    // level up
    // on: 12100879, off: 12100979
    if (!EventFlag(12100979)) {
        if (!EventFlag(12100879)) {
            SetEventFlag(12100879, ON);
        }
    }
    
    // workshop
    // on: 12100878, off: 12100978
    if (!EventFlag(12100978)) {
        if (!EventFlag(12100878)) {
            SetEventFlag(12100878, ON);
        }
    }
    
    // memory alter
    // on: 12100877, off: 12100977
    if (!EventFlag(12100977)) {
        if (!EventFlag(12100877)) {
            SetEventFlag(12100877, ON);
        }
    }
    
    // storage
    // on: 12100876, off: 12100976
    if (!EventFlag(12100976)) {
        if (!EventFlag(12100876)) {
            SetEventFlag(12100876, ON);
        }
    }
    
    // messengers
    // on: 12100875, off: 12100975
    if (!EventFlag(12100975)) {
        if (!EventFlag(12100875)) {
            SetEventFlag(12100875, ON);
        }
    }
    
    // change appearance
    // on: 12100874, off: 12100974
    if (!EventFlag(12100974)) {
        if (!EventFlag(12100874)) {
            SetEventFlag(12100874, ON);
        }
    }
    
    // boss rematches
    // on: 12100867, off: 12100967
    if (!EventFlag(12100967)) {
        if (!EventFlag(12100867)) {
            SetEventFlag(12100867, ON);
        }
    }
    
    // quick warp to boss
    // on: 12100857, off: 12100957
    if (!EventFlag(12100957)) {
        if (!EventFlag(12100857)) {
            SetEventFlag(12100857, ON);
        }
    }
    
    // enable Iosefka lamp from start
    // on: 12100853, off: 12100953
    if (!EventFlag(12100953)) {
        if (!EventFlag(12100853)) {
            SetEventFlag(12100853, ON);
        }
    }
    
    // --------------------------------------------------- //
    // -------------- B R O K E N _ L A M P -------------- \\
    // --------------------------------------------------- //
    
    // broken lamp
    // on: 12100865, off: 12100965
    if (!EventFlag(12100965)) {
        if (!EventFlag(12100865)) {
            SetEventFlag(12100865, ON);
        }
    }
    
    // broken lamp respawn location on victory and hunter's mark - dream or lamp, 
    // boss lamp: 12100863, dream: 12100963
    if (!EventFlag(12100963)) {
        if (!EventFlag(12100863)) {
            SetEventFlag(12100963, ON);
        }
    }
    
    // broken lamp respawn location on death - dream or lamp
    // boss lamp: 12100859, dream: 12100959
    if (!EventFlag(12100959)) {
        if (!EventFlag(12100859)) {
            SetEventFlag(12100959, ON);
        }
    }
    
    // --------------------------------------------------- \\
    // ------ P R I M E _ H U N T E R ' S _ M A R K ------ //
    // --------------------------------------------------- \\
    
    // warp menu
    // on: 12100881, off: 12100981
    if (!EventFlag(12100881)) {
        if (!EventFlag(12100981)) {
            SetEventFlag(12100881, ON);
        }
    }
    
    // level up
    // on: 12100882, off: 12100982
    if (!EventFlag(12100882)) {
        if (!EventFlag(12100982)) {
            SetEventFlag(12100882, ON);
        }
    }
    
    // workshop
    // on: 12100883, off: 12100983
    if (!EventFlag(12100883)) {
        if (!EventFlag(12100983)) {
            SetEventFlag(12100883, ON);
        }
    }
    
    // memory alter
    // on: 12100884, off: 12100984
    if (!EventFlag(12100884)) {
        if (!EventFlag(12100984)) {
            SetEventFlag(12100884, ON);
        }
    }
    
    // storage
    // on: 12100885, off: 12100985
    if (!EventFlag(12100885)) {
        if (!EventFlag(12100985)) {
            SetEventFlag(12100885, ON);
        }
    }
    
    // messengers
    // on: 12100886, off: 12100986
    if (!EventFlag(12100886)) {
        if (!EventFlag(12100986)) {
            SetEventFlag(12100886, ON);
        }
    }
    
    // change appearance
    // on: 12100887, off: 12100987
    if (!EventFlag(12100887)) {
        if (!EventFlag(12100987)) {
            SetEventFlag(12100887, ON);
        }
    }
    
    // enhanced features
    // on: 12100888, off: 12100988
    if (!EventFlag(12100888)) {
        if (!EventFlag(12100988)) {
                SetEventFlag(12100888, ON);
        }
    }
        
    // double tap action
    if (!AnyBatchEventFlags(12102100, 12102103)) {
        SetEventFlag(12102100, OFF); // warp menu
        SetEventFlag(12102101, ON);  // hunter's dream
        SetEventFlag(12102102, OFF); // reawaken
        SetEventFlag(12102103, OFF); // nothing
    }
    
    BatchSetEventFlags(12102100, 12102103, OFF);
    SetEventFlag(12102100, ON); // warp menu
    
    // --------------------------------------------------- //
    // ---------------- S U M M O N I N G ---------------- \\
    // --------------------------------------------------- //
    
    // g-r bell double tap action
    if (!AnyBatchEventFlags(12102110, 12102111)) {
        SetEventFlag(12102110, ON);  // gather
        SetEventFlag(12102111, OFF); // nothing
    }
    
    // always show npc summon signs
    // on: 12100889, off: 12100989
    if (!EventFlag(12100989)) {
        if (!EventFlag(12100889)) {
            SetEventFlag(12100889, ON);
        }
    }
    
    // --------------------------------------------------- \\
    // --------------- D I F F I C U L T Y --------------- //
    // --------------------------------------------------- \\
    
    // rematch scaling
    // on: 12100852, off: 12100952
    if (!EventFlag(12100952)) {
        if (!EventFlag(12100852)) {
            SetEventFlag(12100952, ON);
        }
    }
    
    // increase cycle
    if (!AnyBatchEventFlags(12102022, 12102028)) {
        SetEventFlag(12102022, ON);  // ng
        SetEventFlag(12102023, OFF); // ng+1
        SetEventFlag(12102024, OFF); // ng+2
        SetEventFlag(12102025, OFF); // ng+3
        SetEventFlag(12102026, OFF); // ng+4
        SetEventFlag(12102027, OFF); // ng+5
        SetEventFlag(12102028, OFF); // ng+6
    }
    
    // game effect / dark fog
    if (!AnyBatchEventFlags(12102033, 12102036)) {
        SetEventFlag(12102033, OFF); // random spawn
        SetEventFlag(12102034, ON);  // disabled
        SetEventFlag(12102035, OFF); // always on
        SetEventFlag(12102036, OFF); // random time
    }
    
    // --------------------------------------------------- //
    // -------------------- O T H E R -------------------- \\
    // --------------------------------------------------- //

    // prevent auto ng+
    // on: 12100873, off: 12100973
    if (!EventFlag(12100973)) {
        if (!EventFlag(12100873)) {
            SetEventFlag(12100873, ON);
        }
    }
    
    // stocked shop
    // on: 12100871, off: 12100971
    if (!EventFlag(12100971)) {
        if (!EventFlag(12100871)) {
            SetEventFlag(12100871, ON);
        }
    }
    
    // shops+
    // on 12100848, off: 12100948
    if (!EventFlag(12100948)) {
        if (!EventFlag(12100848)) {
            SetEventFlag(12100948, ON);
        }
    }
    
    // rematch death - end rematch or restart
    // restart: 12100864, end: 12100964
    if (!EventFlag(12100964)) {
        if (!EventFlag(12100864)) {
            SetEventFlag(12100864, ON);
        }
    }
    
    // rematch cutscenes
    // on: 12100866, off: 12100966
    if (!EventFlag(12100966)) {
        if (!EventFlag(12100866)) {
            SetEventFlag(12100966, ON);
        }
    }
    
    // auto unlock chalice doors
    // on: 12100860, off: 12100960
    if (!EventFlag(12100960)) {
        if (!EventFlag(12100860)) {
            SetEventFlag(12100860, ON);
        }
    }
    
    // random time
    // on: 12100856, off: 12100956
    if (!EventFlag(12100956)) {
        if (!EventFlag(12100856)) {
            SetEventFlag(12100856, ON);
        }
    }
    
    // doll gesture
    // on: 12100854, off: 12100954
    if (!EventFlag(12100954)) {
        if (!EventFlag(12100854)) {
            SetEventFlag(12100954, ON);
        }
    }
    
    // bridge door
    // on: 12100849, off: 12100949
    if (!EventFlag(12100949)) {
        if (!EventFlag(12100849)) {
            SetEventFlag(12100949, ON);
        }
    }
    
    // unlock lamps
    SetEventFlag(12102301, OFF);
    
    // unlock shortcuts
    SetEventFlag(12102311, OFF);
    
    // infinite durability
    // on: 12100855, off: 12100955
    if (!EventFlag(12100955)) {
        if (!EventFlag(12100855)) {
            SetEventFlag(12100855, ON);
        }
    }
});

const maxInsight = 99;
const maxLevel = 544;
// respec - calculate echoes and insight
$Event(12308030, Default, function() {
    SetEventFlag(12308030, OFF);
    WaitFor(ThisEvent());
    WaitFixedTimeFrames(1);
    if (EventFlag(12308048)) {
        EventValueOperation(12308000, 30, 5431, 0, 0, CalculationType.Assign);
    } else {
        EventValueOperation(12308000, 30, 829, 0, 0, CalculationType.Assign);
    }
    EventValueOperation(12308190, 8, 0, 0, 0, CalculationType.Assign);
    for (let i = 0; i <= maxInsight; i++) {
        insightCond &= PlayerInsightAmount() == i;
        GotoIf(S0, !insightCond);
        Goto(L0);
S0:
        EventValueOperation(12308190, 8, 1, 0, 0, CalculationType.Add);
        WaitFor(ElapsedSeconds(0)); // dummy statement to clear condition variable
    }
L0:
    for (let i = 12; i <= maxLevel; i++) {
        const amount = 0.02 * i**3 + 3.06 * i**2 + 105.6 * i - 895;
        EventValueOperation(12308000, 30, amount, 0, 0, CalculationType.Add);
        levelCond &= PlayersSoulLevel() == i;
        GotoIf(S1, !levelCond);
        Goto(L1);
S1:
        WaitFor(ElapsedSeconds(0)); // dummy statement to clear condition variable
    }
    EventValueOperation(12308000, 30, 0, 0, 0, CalculationType.Assign);
L1:
    SetEventFlag(12308031, ON);
    RestartEvent();
});

// 4000 oedon tomb key
// 4002 rite of kindling
// 4003 cainhurst summons
// 4006 orphanage key
// 4009 iron door key
// 4010 upper cathedral ward key
// 4011 hunter chief emblem
// 4012 lecture theatre key
// 4013 lunarium key
// 4014 laurence's skull
// 4015 underground cell inner key
// 4017 eye pendant
// 4018 underground cell key
// 4019 balcony key
// 4020 astral clocktower key
// 4021 celestial dial
// 4102 haze extractor
// 4103 blood gem workshop
// 4104 rune workshop tool
// 4105 short ritual root chalice
// 4110 saw hunter badge
// 4111 crow hunter badge
// 4112 powder key hunter badge
// 4113 old hunter badge
// 4114 sword hunter badge
// 4115 radiant sword hunter badge
// 4116 wheel hunter badge
// 4117 cainhurst badge
// 4118 spark hunter badge
// 4119 cosmic eye watcher badge
// 4120 firing hammer badge
// 4300 small hair ornament
// 4304 ring of betrothal
// 4305 queenly flesh
// 4308 unopened summons
// 4310 tonsil stone
// 4311 eye of blood drunk hunter
// 4312 old hunter bell
// 4320-4323 umbilical cords
// 4330 yharnam stone
// 4340-4342 brain fluids

// change character
$Event(12308031, Default, function() {
    SetEventFlag(12308031, OFF);
    const itemIds = [
        4000, 4002, 4003, 4006, 4009, 4010, 4011, 4012,
        4013, 4014, 4015, 4017, 4018, 4019, 4020, 4021,
        4102, 4103, 4104, 4105, 4110, 4111, 4112, 4113, 
        4114, 4115, 4116, 4117, 4118, 4119, 4120, 4300, 
        4304, 4305, 4308, 4310, 4311, 4312, 4320, 4321, 
        4322, 4323, 4330, 4340, 4341, 4342
    ]
    const itemRestoreCount = itemIds.length;
    const baseFlag = 12308050;
    WaitFor(EventFlag(12308031));
    for (let i = 0; i < itemRestoreCount; i++) {
        itemCond &= PlayerHasItem(ItemType.Goods, itemIds[i]);
        if (itemCond) {
            SetEventFlag(baseFlag + i, ON);
        }
        WaitFor(ElapsedSeconds(0)); // dummy statement to clear condition variable
    }
    WaitFor(
        EventFlag(12308040)
            || EventFlag(12308041)
            || EventFlag(12308042)
            || EventFlag(12308043)
            || EventFlag(12308044)
            || EventFlag(12308045)
            || EventFlag(12308046)
            || EventFlag(12308047)
            || EventFlag(12308048));
    if (EventFlag(12308040)) {
        ChangeCharacter(2000);
    } else if (EventFlag(12308041)) {
        ChangeCharacter(2001);
    } else if (EventFlag(12308042)) {
        ChangeCharacter(2002);
    } else if (EventFlag(12308043)) {
        ChangeCharacter(2003);
    } else if (EventFlag(12308044)) {
        ChangeCharacter(2004);
    } else if (EventFlag(12308045)) {
        ChangeCharacter(2005);
    } else if (EventFlag(12308046)) {
        ChangeCharacter(2006);
    } else if (EventFlag(12308047)) {
        ChangeCharacter(2007);
    } else if (EventFlag(12308048)) {
        ChangeCharacter(2008);
    }
    EventValueOperation(12308049, 1, 1, 0, 0, CalculationType.Assign);
    for (let i = 0; i < itemRestoreCount; i++) {
        if (EventFlag(baseFlag + i)) {
            DirectlyGivePlayerItem(ItemType.Goods, itemIds[i], 12308049, 1);
        }
    }
    BatchSetEventFlags(12308040, baseFlag+itemRestoreCount, OFF);
    SetEventFlag(12308034, ON);
    RestartEvent();
});

// reimburse echoes
$Event(12308032, Default, function() {
    WaitFor(EventFlag(12308034));
    GotoIf(S0, EventValue(12308000, 30) < 268435456);
    EventValueOperation(12308000, 30, 268435456, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 127, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 127);
    RestartEvent();
    Goto(S7);
S0:
    GotoIf(S1, EventValue(12308000, 30) < 16777216);
    EventValueOperation(12308000, 30, 16777216, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 126, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 126);
    RestartEvent();
    Goto(S7);
S1:
    GotoIf(S2, EventValue(12308000, 30) < 1048576);
    EventValueOperation(12308000, 30, 1048576, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 125, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 125);
    RestartEvent();
    Goto(S7);
S2:
    GotoIf(S3, EventValue(12308000, 30) < 65536);
    EventValueOperation(12308000, 30, 65536, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 124, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 124);
    RestartEvent();
    Goto(S7);
S3:
    GotoIf(S4, EventValue(12308000, 30) < 4096);
    EventValueOperation(12308000, 30, 4096, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 123, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 123);
    RestartEvent();
    Goto(S7);
S4:
    GotoIf(S5, EventValue(12308000, 30) < 256);
    EventValueOperation(12308000, 30, 256, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 122, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 122);
    RestartEvent();
    Goto(S7);
S5:
    GotoIf(S6, EventValue(12308000, 30) < 16);
    EventValueOperation(12308000, 30, 16, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 121, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 121);
    RestartEvent();
    Goto(S7);
S6:
    GotoIf(S7, EventValue(12308000, 30) < 1);
    EventValueOperation(12308000, 30, 1, 0, 0, CalculationType.Sub);
    SetSpEffect(10000, 120, false);
    WaitFixedTimeFrames(1);
    ClearSpEffect(10000, 120);
    RestartEvent();
S7:
    SetEventFlag(12308034, OFF);
    SetEventFlag(12308085, ON);
    RestartEvent();
});

// reimburse insight
$Event(12308084, Default, function() {
    WaitFor(EventFlag(12308085));
    if (EventValue(12308190, 8) > 0) {
        SetSpEffect(10000, 4680, false);
        EventValueOperation(12308190, 8, 1, 0, 0, CalculationType.Sub);
        RestartEvent();
    }
    SetEventFlag(12308085, OFF);
    RestartEvent();
});

// Lantern lights up when passing area_XX
$Event(12101602, Default, function(areaEntityId, objEntityId) {
    CreateObjectfollowingSFX(objEntityId, 200, 8020);
    ForceAnimationPlayback(objEntityId, 200, true, true, false);
    if (!ThisEventSlot()) {
        WaitFor(InArea(10000, areaEntityId));
    }
    ForceAnimationPlayback(objEntityId, 1000000, false, true, false);
    CreateObjectfollowingSFX(objEntityId, 100, 8023);
    ForceAnimationPlayback(objEntityId, 1000100, true, true, false);
});

// activate all lamps
$Event(12102200, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12102202, ON);
    WaitFor(EventFlag(12102201) || EventFlag(12102301));
    if (!EventFlag(12102301)) {
        DisplayBanner(TextBannerType.StadiumWin); // activated all lamps
    }
    SetEventFlag(12117810, ON); // show lamp in menus
    SetEventFlag(72110200, ON); // light lamp - somehow triggers warp when activated at start
    SetEventFlag(12207810, ON);
    SetEventFlag(72200200, ON);
    SetEventFlag(12207830, ON);
    SetEventFlag(72200201, ON);
    SetEventFlag(12307810, ON);
    SetEventFlag(72300200, ON);
    SetEventFlag(12307830, ON);
    SetEventFlag(72300201, ON);
    SetEventFlag(12307850, ON);
    SetEventFlag(72300202, ON);
    SetEventFlag(12407810, ON);
    SetEventFlag(72400200, ON);
    SetEventFlag(12407830, ON);
    SetEventFlag(72400201, ON);
    SetEventFlag(12417810, ON);
    SetEventFlag(72410200, ON);
    SetEventFlag(12417830, ON);
    SetEventFlag(72410201, ON);
    SetEventFlag(12417850, ON);
    SetEventFlag(72410202, ON);
    SetEventFlag(12417870, ON);
    SetEventFlag(72410203, ON);
    SetEventFlag(12427810, ON);
    SetEventFlag(72420200, ON);
    SetEventFlag(12427830, ON);
    SetEventFlag(72420201, ON);
    SetEventFlag(12427850, ON);
    SetEventFlag(72420202, ON);
    SetEventFlag(12507810, ON);
    SetEventFlag(72500200, ON);
    SetEventFlag(12507830, ON);
    SetEventFlag(72500201, ON);
    SetEventFlag(12507850, ON);
    SetEventFlag(72500202, ON);
    SetEventFlag(12607810, ON);
    SetEventFlag(72600200, ON);
    SetEventFlag(12607830, ON);
    SetEventFlag(72600201, ON);
    SetEventFlag(12607850, ON);
    SetEventFlag(72600202, ON);
    SetEventFlag(12607870, ON);
    SetEventFlag(72600203, ON);
    SetEventFlag(12707810, ON);
    SetEventFlag(72700200, ON);
    SetEventFlag(12707830, ON);
    SetEventFlag(72700201, ON);
    SetEventFlag(12807810, ON);
    SetEventFlag(72800200, ON);
    SetEventFlag(12807830, ON);
    SetEventFlag(72800201, ON);
    SetEventFlag(12807850, ON);
    SetEventFlag(72800202, ON);
    SetEventFlag(12807870, ON);
    SetEventFlag(72800203, ON);
    SetEventFlag(13207810, ON);
    SetEventFlag(73200200, ON);
    SetEventFlag(13207830, ON);
    SetEventFlag(73200201, ON);
    SetEventFlag(13207850, ON);
    SetEventFlag(73200202, ON);
    SetEventFlag(13207870, ON);
    SetEventFlag(73200203, ON);    
    SetEventFlag(13307810, ON);
    SetEventFlag(73300200, ON);
    SetEventFlag(13307830, ON);
    SetEventFlag(73300201, ON);
    SetEventFlag(13407810, ON);
    SetEventFlag(73400200, ON);
    SetEventFlag(13407830, ON);
    SetEventFlag(73400201, ON);
    SetEventFlag(13407850, ON);
    SetEventFlag(73400202, ON);
    SetEventFlag(13407870, ON);
    SetEventFlag(73400203, ON);
    SetEventFlag(13507810, ON);
    SetEventFlag(73500200, ON);
    SetEventFlag(13507830, ON);
    SetEventFlag(73500201, ON);
    SetEventFlag(13507850, ON);
    SetEventFlag(73500202, ON);
    SetEventFlag(13607810, ON);
    SetEventFlag(73600200, ON);
    SetEventFlag(13607830, ON);
    SetEventFlag(73600201, ON);
    SetEventFlag(13607850, ON);
    SetEventFlag(73600202, ON);
    
    if (!PlayerHasItem(ItemType.Goods, 1402)) {
        AwardItemLot(37010);
    }
    
    SetEventFlag(12102202, OFF);
});

// unlock all shortcuts
$Event(12102210, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12102212, ON);
    WaitFor(EventFlag(12102211) || EventFlag(12102311));
    if (!EventFlag(12102311)) {
        DisplayBanner(TextBannerType.StadiumWin); // unlocked all shortcuts
    }
    
    SetEventFlag(12102211, OFF);
    SetEventFlag(12102212, OFF);
    
    SetEventFlag(12200100, ON);  // hemwick entrance door
    SetEventFlag(12200110, ON);
    SetEventFlag(12200125, ON);
    
    SetEventFlag(12300120, ON);
    SetEventFlag(12300121, ON);
    
    SetEventFlag(12409453, ON);
    SetEventFlag(12400160, ON);
    SetEventFlag(12400157, ON);
    SetEventFlag(12400177, ON);
    SetEventFlag(12400130, ON);  // grand cathedral door
    
    SetEventFlag(12410200, ON);
    SetEventFlag(12410202, ON);
    SetEventFlag(12410203, ON);
    SetEventFlag(12410112, ON);
    SetEventFlag(12410117, ON);
    SetEventFlag(12415350, OFF);
    SetEventFlag(12410350, ON);
    SetEventFlag(12410330, ON);
    SetEventFlag(12420123, ON);
    SetEventFlag(62411303, ON);  // house door 1
    SetEventFlag(62411306, ON);  // house door 2
    SetEventFlag(12410285, ON);  // ladder at start
    
    SetEventFlag(12500074, ON);
    SetEventFlag(12500501, ON);
    
    SetEventFlag(12601251, OFF);
    SetEventFlag(12601253, OFF); // mensis first cage elevator
    SetEventFlag(12601254, OFF);
    SetEventFlag(12601334, ON);
    SetEventFlag(12605254, OFF); // mensis second cage elevator
    SetEventFlag(12601255, OFF);
    SetEventFlag(12601335, ON);
    SetEventFlag(12605256, OFF); // mensis bottom elevator
    SetEventFlag(12601256, ON);
    SetEventFlag(12601323, ON);
    SetEventFlag(12605251, OFF); // mensis top elevator
    SetEventFlag(12601251, OFF);
    SetEventFlag(12601331, ON);
    SetEventFlag(12601051, ON);  // micolash door
    
    SetEventFlag(12700134, OFF); // woods elevator 1
    SetEventFlag(12700135, OFF);
    SetEventFlag(12700137, ON);
    SetEventFlag(12700144, OFF); // woods elevator 2
    SetEventFlag(12700147, ON);
    SetEventFlag(12700110, ON);
    SetEventFlag(12700111, ON);
    SetEventFlag(12700112, ON);
    
    SetEventFlag(12800610, ON);  // yahar'gul elevator
    SetEventFlag(12800612, ON);
    SetEventFlag(12800630, ON);
    SetEventFlag(12809802, ON);  // yahar'gul big door
    SetEventFlag(12800480, ON);  // yahar'gul small doors
    SetEventFlag(12800481, ON);
    SetEventFlag(12800482, ON);
    SetEventFlag(12800483, ON);
    SetEventFlag(12800484, ON);
    
    SetEventFlag(13200040, ON);
    SetEventFlag(13200041, ON);
    SetEventFlag(13200043, ON);
    SetEventFlag(13200010, ON);
    
    SetEventFlag(13300100, ON);  // nightmare frontier slab
    SetEventFlag(13300115, OFF); // nightmare frontier elevator
    SetEventFlag(13300116, OFF);
    SetEventFlag(13300111, ON);
    
    SetEventFlag(13401211, ON);  // hunter's nightmare door
    SetEventFlag(13401220, ON);  // hunter's nightmare gate
    
    SetEventFlag(13501250, ON);
    SetEventFlag(13504110, OFF);
    SetEventFlag(13501118, ON);
    SetEventFlag(13501116, OFF);
    SetEventFlag(13504120, OFF);
    SetEventFlag(13501128, ON);
    SetEventFlag(13501126, OFF);
    
    SetEventFlag(13601312, ON);
    SetEventFlag(13601200, ON);
    SetEventFlag(13601201, ON);
    SetEventFlag(13604100, OFF);
    SetEventFlag(13601108, ON);
    SetEventFlag(13601106, ON);
});

// infinite durability
$Event(12102069, Default, function() {
    WaitFor(EventFlag(12100855));
    SetSpEffect(10000, 1330, false); // apply repair effect every 10 seconds
    WaitFixedTimeSeconds(10);
    RestartEvent();
});

// increase ng cycle - doll
$Event(12102020, Default, function() {
    SetEventFlag(12102010, ON);
    if (GameCycle() == 0) {
        SetEventFlag(12102003, ON);
    } else if (GameCycle() == 1) {
        SetEventFlag(12102003, OFF);
        SetEventFlag(12102004, ON);
    } else if (GameCycle() == 2) {
        SetEventFlag(12102004, OFF);
        SetEventFlag(12102005, ON);
    } else if (GameCycle() == 3) {
        SetEventFlag(12102005, OFF);
        SetEventFlag(12102006, ON);
    } else if (GameCycle() == 4) {
        SetEventFlag(12102006, OFF);
        SetEventFlag(12102007, ON);
    } else if (GameCycle() == 5) {
        SetEventFlag(12102007, OFF);
        SetEventFlag(12102008, ON);
    } else if (GameCycle() >= 6) {
        SetEventFlag(12102008, OFF);
        SetEventFlag(12102009, ON);
        SetEventFlag(12102010, OFF);
    }
    WaitFor(EventFlag(12102001));
    SetEventFlag(12102001, OFF);
    IncrementGameCycle(0);
    RestartEvent();
});

// increase ng cycle - settings tool
$Event(12102021, Default, function() {
    EndIf(EventFlag(12102021));
    WaitFor(EventFlag(8406));
    if (EventFlag(12102023)) {
        IncrementGameCycle(0);
    } else if (EventFlag(12102024)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    } else if (EventFlag(12102025)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    } else if (EventFlag(12102026)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    } else if (EventFlag(12102027)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    } else if (EventFlag(12102028)) {
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
        WaitFixedTimeFrames(1);
        IncrementGameCycle(0);
    }
});

// any boss defeated 1 - for broken lamp activation
$Event(12102040, Default, function() {
    EndIf(EventFlag(12102042));
    WaitFor(
        EventFlag(12102042)
            || EventFlag(12201800)
            || EventFlag(12301800)
            || EventFlag(12301700)
            || EventFlag(12401800)
            || EventFlag(12411700)
            || EventFlag(12411800)
            || EventFlag(12421700)
            || EventFlag(12421800)
            || EventFlag(12501800)
            || EventFlag(12601850)
            || EventFlag(12601800)
            || EventFlag(12701800)
            || EventFlag(12801800)
            || EventFlag(13201800));
    SetEventFlag(12102042, ON);
});

// any boss defeated 2
$Event(12102041, Default, function() {
    EndIf(EventFlag(12102042));
    WaitFor(
        EventFlag(12102042)
            || EventFlag(13301800)
            || EventFlag(13401800)
            || EventFlag(13401850)
            || EventFlag(13501850)
            || EventFlag(13501800)
            || EventFlag(13601800)
            || EventFlag(12101800)
            || EventFlag(12101850));
    SetEventFlag(12102042, ON);
});

// distorted bosses defeated
$Event(12102043, Default, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(12411800)
            || EventFlag(13401800)
            || EventFlag(13601800)
            || EventFlag(12101850)
            || EventFlag(12601800));
    SetEventFlag(12102043, ON);
});

// cleric beast = 7447
// gascoigne = 7448
// bsb = 7416
// amelia = 7417
// witches = 7418
// shadows = 7419
// paarl = 7449
// amygdala = 7446
// rom = 7456
// logarius = 7457
// one reborn = 7458
// emissary = 7459
// micolash = 7460
// wet nurse = 7424
// ludwig = 7491
// laurence = 7494
// failures = 7497
// maria = 7493
// orphan = 7496
// ebrietas = 7423
// gehrman = 7425
// moon presence = 7413

// rematch scaling
// boss_rematch_flag, boss_rematch_flag2, speffect_id, boss_id
$Event(12102070, Default, function(bossRematchFlag, distortedRematchFlag, spEffectId, bossId1, bossId2, bossId3, bossId4, bossId5) {
    EndIf(EventFlag(12100952));
    WaitFor(
        EventFlag(bossRematchFlag) || (distortedRematchFlag > 0 && EventFlag(distortedRematchFlag)));
    WaitFor(CharacterBackreadStatus(bossId1));
    if (GameCycle() == 0) {
        SetSpEffect(bossId1, spEffectId, false);
        SetSpEffect(bossId2, spEffectId, false);
        SetSpEffect(bossId3, spEffectId, false);
        SetSpEffect(bossId4, spEffectId, false);
        SetSpEffect(bossId5, spEffectId, false);
    } else if (GameCycle() == 1) {
        SetSpEffect(bossId1, 7465, false);
        SetSpEffect(bossId2, 7465, false);
        SetSpEffect(bossId3, 7465, false);
        SetSpEffect(bossId4, 7465, false);
        SetSpEffect(bossId5, 7465, false);
    } else if (GameCycle() == 2) {
        SetSpEffect(bossId1, 7466, false);
        SetSpEffect(bossId2, 7466, false);
        SetSpEffect(bossId3, 7466, false);
        SetSpEffect(bossId4, 7466, false);
        SetSpEffect(bossId5, 7466, false);
    } else if (GameCycle() == 3) {
        SetSpEffect(bossId1, 7467, false);
        SetSpEffect(bossId2, 7467, false);
        SetSpEffect(bossId3, 7467, false);
        SetSpEffect(bossId4, 7467, false);
        SetSpEffect(bossId5, 7467, false);
    } else if (GameCycle() == 4) {
        SetSpEffect(bossId1, 7468, false);
        SetSpEffect(bossId2, 7468, false);
        SetSpEffect(bossId3, 7468, false);
        SetSpEffect(bossId4, 7468, false);
        SetSpEffect(bossId5, 7468, false);
    } else if (GameCycle() == 5) {
        SetSpEffect(bossId1, 7469, false);
        SetSpEffect(bossId2, 7469, false);
        SetSpEffect(bossId3, 7469, false);
        SetSpEffect(bossId4, 7469, false);
        SetSpEffect(bossId5, 7469, false);
    } else if (GameCycle() >= 6) {
        SetSpEffect(bossId1, 7470, false);
        SetSpEffect(bossId2, 7470, false);
        SetSpEffect(bossId3, 7470, false);
        SetSpEffect(bossId4, 7470, false);
        SetSpEffect(bossId5, 7470, false);
    }
});

$Event(13100000, Default, function() {
    WaitFixedTimeSeconds(5);
    // 429 stank cloud (limited)
    // 1600, 1610, 1620, 1630 acquire souls (+11379)
    // 5560 invisible
    // 5600 full body flame
    // 5601 smouldering
    // 5679 fire back
    // 5703 vial heal
    // 5718 red leg
    // SetSpEffect(10000, 421, false);
});

// Trading messenger_Lineup expansion_XX
$Event(12101000, Default, function(itemId, chrEntityId, bitNumber, bitNumber2) {
    EndIf(ThisEventSlot());
    WaitFixedTimeSeconds(0.1);
    WaitFor(CharacterBackreadStatus(chrEntityId) || EventFlag(12100004));
    if (!EventFlag(12100004)) {
        ChangeCharacterDispmask(chrEntityId, bitNumber, OFF);
        ChangeCharacterDispmask(chrEntityId, bitNumber2, OFF);
    }
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    if (!EventFlag(12100004)) {
        ChangeCharacterDispmask(chrEntityId, bitNumber, ON);
        ChangeCharacterDispmask(chrEntityId, bitNumber2, ON);
    }
});

// shop lineup badge fix
$Event(12100001, Default, function() {
    SetEventFlag(12100004, OFF);
});

$Event(12100003, Default, function() {
    WaitFixedTimeSeconds(1);
    if (EventFlag(12100001)) {
        SetEventFlag(12100004, ON);
    }
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

// rite of kindling failsafe
$Event(8410, Default, function() {
    SetEventFlag(8413, OFF);
    WaitFor(
        EventFlag(12100851)
            && EventFlag(12701800)
            && EventFlag(8413)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 4002));
    AwardItemLot(2700970);
    RestartEvent();
});

// remove rite of kindling if disabled
$Event(8411, Default, function() {
    WaitFor(EventFlag(12100951) && PlayerHasItemIncludingBBox(ItemType.Goods, 4002));
    RemoveItemFromPlayer(ItemType.Goods, 4002, 1);
    RestartEvent();
});

// change effect
$Event(12102032, Default, function() {
    //EndEvent();
    EndIf(EventFlag(12601815)); // Wet Nurse distorted
    ClearSpEffect(10000, 5680);
    WaitFixedTimeSeconds(0.5);
    if (EventFlag(12102033)) {
        // random - spawn
        BatchSetEventFlags(12102050, 12102057, OFF);
        RandomlySetEventFlagInRange(12102050, 12102052, ON);
        if (EventFlag(12102050)) {
            SetSpEffect(10000, 5680, false);
        }
    } else {
        GotoIf(S0, !EventFlag(12102034));
        Goto(S1);
        // default
S0:
        if (EventFlag(12102035)) {
            // dark fog
            SetSpEffect(10000, 5680, false);
        }
    }
S1:
    WaitFor(EventFlag(12102031));
    SetEventFlag(12102031, OFF);
    RestartEvent();
});

// dark fog - random time
$Event(12102037, Default, function() {
    WaitFor(EventFlag(12102036));
    WaitFixedTimeSeconds(1);
    BatchSetEventFlags(12102060, 12102062, OFF);
    SetEventFlag(12102065, OFF);
    RandomlySetEventFlagInRange(12102060, 12102062, ON);
    if (!EventFlag(12102060) || CharacterHasSpEffect(10000, 5680)) {
        ClearSpEffect(10000, 5680);
        WaitFor(RandomElapsedSeconds(300, 900));
        RestartEvent();
    }
    SetSpEffect(10000, 5680, false);
    WaitFor(RandomElapsedSeconds(120, 300));
    SetEventFlag(12102065, ON);
    WaitFixedTimeSeconds(3);
    SetEventFlag(12102065, OFF);
    WaitFor(RandomElapsedSeconds(120, 300));
    RestartEvent();
});

// return to dream / lesser hunter's mark
$Event(12100768, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 2102));
    SetPlayerRespawnPoint(2102962);
    WaitFixedTimeFrames(1);
    SetSpEffect(10000, 2101, false);
});

// acquire all runes
$Event(12100005, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12109000, ON);
    WaitFor(ThisEvent());
    AwardItemLot(110000);
    AwardItemLot(110010);
    AwardItemLot(110020);
    AwardItemLot(110030);
    AwardItemLot(110040);
    AwardItemLot(110050);
    AwardItemLot(110060);
    AwardItemLot(110070);
    AwardItemLot(110080);
    AwardItemLot(110090);
    AwardItemLot(110100);
    AwardItemLot(110110);
    AwardItemLot(110120);
    AwardItemLot(110130);
    AwardItemLot(110140);
    AwardItemLot(110150);
    AwardItemLot(110160);
    AwardItemLot(110170);
    AwardItemLot(110180);
    AwardItemLot(110190);
    AwardItemLot(110200);
    AwardItemLot(110210);
    AwardItemLot(110220);
    AwardItemLot(110230);
    AwardItemLot(110240);
    AwardItemLot(110250);
    AwardItemLot(110260);
    AwardItemLot(110270);
    AwardItemLot(110280);
    AwardItemLot(110290);
    AwardItemLot(110300);
    AwardItemLot(110310);
    AwardItemLot(110320);
    AwardItemLot(110330);
    AwardItemLot(110340);
    AwardItemLot(110350);
    AwardItemLot(110360);
    AwardItemLot(110370);
    AwardItemLot(110380);
    AwardItemLot(110390);
    AwardItemLot(110400);
    AwardItemLot(110410);
    AwardItemLot(110420);
    AwardItemLot(110430);
    AwardItemLot(110440);
    AwardItemLot(110450);
    AwardItemLot(110460);
    AwardItemLot(110470);
    AwardItemLot(110480);
    AwardItemLot(110490);
    AwardItemLot(110500);
    AwardItemLot(110510);
    AwardItemLot(110520);
    AwardItemLot(110530);
    AwardItemLot(110540);
    AwardItemLot(110550);
    AwardItemLot(110560);
    AwardItemLot(110570);
    AwardItemLot(110580);
    AwardItemLot(110590);
    AwardItemLot(110600);
    AwardItemLot(110610);
    AwardItemLot(110620);
    AwardItemLot(110630);
    AwardItemLot(110640);
    AwardItemLot(110650);
    AwardItemLot(110660);
    AwardItemLot(110670);
    AwardItemLot(110680);
    AwardItemLot(110690);
    AwardItemLot(110700);
    AwardItemLot(110710);
    AwardItemLot(110720);
    AwardItemLot(110730);
    AwardItemLot(110740);
    AwardItemLot(110750);
    AwardItemLot(110760);
    SetEventFlag(12109000, OFF);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 25000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 2000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31000000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32010000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38010000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 2020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 4020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 5120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 7120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 8120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 9020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 10120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 11020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 12020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 13020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 22020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 23020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 24020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 25020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 26020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 27020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 28020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 29020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 30020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 31020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 32020000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 38020000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Weapon, 15000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 35000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 34000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 33000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 36000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14200000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 18000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 20100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 19000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 6000000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Weapon, 14000000, 12104030, 1);
    SetEventFlag(12101410, OFF);
});

// acquire all hunter tools
$Event(12101320, Default, function() {
    EndIf(ThisEvent());
    SetEventFlag(12101420, ON);
    WaitFor(ThisEvent());
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 2010, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2130, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2020, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2120, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2050, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 1310, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2080, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2140, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2110, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2060, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 2070, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 180000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 110000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 230000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 20000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 120000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 60000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 40000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 390000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 330000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 100000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 250000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 220000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 430000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 130000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 200000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 150000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 30000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 10000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 340000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 50000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 70000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 270000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 80000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 210000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 370000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 260000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 190000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 350000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 360000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 380000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 320000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 140000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 280000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 290000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 400000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 90000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 241000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 391000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 111000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 331000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 41000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 101000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 11000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 121000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 381000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 181000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 361000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 221000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 151000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 231000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 131000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 201000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 31000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 341000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 51000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 281000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 71000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 401000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 81000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 211000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 371000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 311000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 351000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 191000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 301000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 321000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 141000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 291000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 21000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 61000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 91000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 242000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 392000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 42000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 332000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 102000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 12000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 122000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 182000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 222000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 152000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 132000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 32000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 342000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 52000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 72000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 82000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 212000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 372000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 402000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 352000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 232000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 112000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 142000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 22000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 62000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 382000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Armor, 313000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 243000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 113000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 393000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 43000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 333000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 103000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 13000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 123000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 383000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 183000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 363000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 223000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 153000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 233000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 133000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 203000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 33000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 343000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 53000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 73000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 83000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 213000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 373000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 353000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 193000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 143000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 403000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 293000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 23000, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Armor, 63000, 12104030, 1);
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
    EventValueOperation(12104030, 1, 1, 0, 1, CalculationType.Assign);
    DirectlyGivePlayerItem(ItemType.Goods, 6100, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6109, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6200, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6209, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6210, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6219, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6300, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6302, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6309, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6310, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6312, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6319, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6401, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6409, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6420, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6429, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6500, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6502, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6509, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6520, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6522, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6529, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6530, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6532, 12104030, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 6539, 12104030, 1);
    SetEventFlag(12101440, OFF);
});

// fill upgrade materials
$Event(12101360, Default, function() {
    SetEventFlag(12101360, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3000, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3000, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3010, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3010, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3020, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3020, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 3030, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 3030, 12104030, 8);
    
    RestartEvent();
});

// fill chalice materials
$Event(12101361, Default, function() {
    SetEventFlag(12101361, ON);
    WaitFor(!ThisEvent());
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7000, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7000, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7001, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7001, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7002, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7002, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7003, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7003, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7004, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7004, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7012, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7012, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7013, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7013, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7014, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7014, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7020, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7020, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7021, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7021, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7022, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7022, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7023, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7023, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7024, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7024, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7050, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7050, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7100, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7100, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7110, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7110, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7120, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7120, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7121, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7121, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7130, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7130, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7131, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7131, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7140, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7140, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7150, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7150, 12104030, 8);
    
    EventValueOperation(12104030, 8, 99, 0, 1, CalculationType.Assign);
    StoreItemAmountHeldInEventValue(ItemType.Goods, 7200, 12104020, 8);
    EventValueOperation(12104030, 8, 0, 12104020, 8, CalculationType.Sub);
    DirectlyGivePlayerItem(ItemType.Goods, 7200, 12104030, 8);
    
    RestartEvent();
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

// Item Possession Judgment_XX
$Event(12100020, Default, function(itemId, eventFlagId, value) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (value != 0) {
        SetEventFlag(eventFlagId, OFF);
    }
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    SetEventFlag(eventFlagId, ON);
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

// Dress-up Messenger_Determine if you have at least one item
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

// Headstone warp function (warp to a lamp)
$Event(12107000, Default, function(lampWarpFlag, lampObjectId, lampSpawnPoint) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(lampWarpFlag));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    } else {
        RotateCharacter(10000, lampObjectId, 101164, false);
        WaitFixedTimeSeconds(4);
    }
    // WarpPlayerToRespawnPoint(X8_4);
    SetPlayerRespawnPoint(lampSpawnPoint);
    SetSpEffect(10000, 2101, false);
});

// Warp OBJ_Warp to Dungeon_First Half_XX
$Event(12107100, Default, function(eventFlagId, entityId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (EventFlag(12100761)) {
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    } else {
        RotateCharacter(10000, entityId, 101164, false);
        WaitFixedTimeSeconds(4);
    }
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
$Event(12107200, Default, function(eventFlagId, entityId, eventFlagId2) {
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    WarpPlayerToRespawnPoint(entityId);
    SetEventFlag(eventFlagId2, ON);
});

// Remove DLC_XX
$Event(3500, Default, function(itemId, eventFlagId, eventFlagId2, eventFlagId3) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(eventFlagId));
    RemoveItemFromPlayer(ItemType.Goods, itemId, 99);
    SetEventFlag(eventFlagId2, OFF);
    SetEventFlag(eventFlagId3, OFF);
});

// Remove DLC_03
$Event(3503, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive) || EventFlag(12102200));
    WaitFor(!EventFlag(6899));
    RemoveItemFromPlayer(ItemType.Goods, 4311, 99);
    SetEventFlag(50000100, OFF);
    SetEventFlag(12101029, OFF);
    SetEventFlag(13407810, OFF);
    SetEventFlag(13407830, OFF);
    SetEventFlag(13407850, OFF);
    SetEventFlag(13407870, OFF);
    SetEventFlag(13507810, OFF);
    SetEventFlag(13507830, OFF);
    SetEventFlag(13507850, OFF);
    SetEventFlag(13607810, OFF);
    SetEventFlag(13607830, OFF);
    SetEventFlag(13607850, OFF);
    SetEventFlag(73400200, OFF);
    SetEventFlag(73400201, OFF);
    SetEventFlag(73400202, OFF);
    SetEventFlag(73400203, OFF);
    SetEventFlag(73500200, OFF);
    SetEventFlag(73500201, OFF);
    SetEventFlag(73500202, OFF);
    SetEventFlag(73600200, OFF);
    SetEventFlag(73600201, OFF);
    SetEventFlag(73600202, OFF);
    WaitFor(PlayerInMap(34, 0) || PlayerInMap(35, 0) || PlayerInMap(36, 0));
    WarpPlayerToRespawnPoint(2102961);
});

// always raised, never raised flag
$Event(6002, Restart, function() {
    SetEventFlag(6000, ON);
    SetEventFlag(6001, OFF);
});

// Trading messenger_reflect dungeon shop purchases in base shop sales_XX
$Event(5500, Restart, function(itemId) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEventSlot());
    WaitFor(PlayerHasItem(ItemType.Weapon, itemId));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Claw
$Event(6680, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6680));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 9000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 9001000));
        SetEventFlag(6680, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Cannon
$Event(6681, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6681));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 15000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 15001000));
        SetEventFlag(6681, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Hunting Torch
$Event(6682, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6682));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 20000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 20001000));
        SetEventFlag(6682, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Beast Hunting Curved Sword
$Event(6683, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6683));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 23000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 23001000));
        SetEventFlag(6683, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Expansion of line-up_Beast cut
$Event(6684, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6684));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 24000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 24001000));
        SetEventFlag(6684, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Church Stake
$Event(6685, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6685));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 30000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 30001000));
        SetEventFlag(6685, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Simon's bow sword
$Event(6686, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6686));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 32000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 32001000));
        SetEventFlag(6686, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Sacred sword of moonlight
$Event(6687, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6687));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 26000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 26001000));
        SetEventFlag(6687, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Expansion Lineup_Falling Leaves
$Event(6688, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6688));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 27000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 27001000));
        SetEventFlag(6688, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Rotating saw
$Event(6689, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6689));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 31000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 31001000));
        SetEventFlag(6689, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Explosive Hammer
$Event(6690, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6690));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 28000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 28001000));
        SetEventFlag(6690, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Bloodletting Hammer
$Event(6691, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6691));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 29000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 29001000));
        SetEventFlag(6691, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Small Amen arm
$Event(6692, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6692));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 25000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 25001000));
        SetEventFlag(6692, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Gose's Parasite
$Event(6693, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6693));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 38000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 38001000));
        SetEventFlag(6693, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Gatling gun
$Event(6694, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6694));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33001000));
        SetEventFlag(6694, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Trading messenger_Lineup expansion_Church cannon
$Event(6695, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6695));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 35000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 35001000));
        SetEventFlag(6695, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Garasha's Fist
$Event(6696, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6696));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34001000));
        SetEventFlag(6696, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Buy/Sell Messenger_Lineup Expansion_Lake Shield
$Event(6697, Default, function() {
    SetNetworkSyncState(Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        EndIf(EventFlag(6697));
        WaitFor(
            PlayerHasItemIncludingBBox(ItemType.Weapon, 19100000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100100)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100200)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100300)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100400)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100500)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100600)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100700)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100800)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19100900)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 19101000));
        SetEventFlag(6697, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Alliance_item use 1
$Event(6788, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 6141));
    StoreItemAmountHeldInEventValue(ItemType.Goods, 1700, 6780, 8);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Federation_item use 2
$Event(6789, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, 6143));
    StoreItemAmountHeldInEventValue(ItemType.Goods, 1700, 6790, 8);
    EventValueOperation(6780, 8, 0, 6790, 8, CalculationType.Sub);
    EventValueOperation(6800, 9, 0, 6780, 8, CalculationType.Add);
    if (EventValue(6800, 9) >= 255) {
        EventValueOperation(6800, 9, 255, 0, 1, CalculationType.Assign);
    }
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Alliance_item usage X or more
$Event(6809, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventValue(6800, 9) >= 1);
    SetEventFlag(6810, ON);
    WaitFor(EventValue(6800, 9) >= 2);
    SetEventFlag(6811, ON);
    WaitFor(EventValue(6800, 9) >= 5);
    SetEventFlag(6812, ON);
});

// special effect when becoming the federation_master
$Event(6815, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(6813) && CharacterHasSpEffect(10000, 6142));
    SetSpEffect(10000, 6150, false);
    WaitFor(!EventFlag(6813) || !CharacterHasSpEffect(10000, 6142));
    ClearSpEffect(10000, 6150);
    RestartEvent();
});

// Federation_special effect after obtaining a staff
$Event(6816, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(6814) && CharacterHasSpEffect(10000, 6142));
    SetSpEffect(10000, 6140, false);
    WaitFor(!EventFlag(6814) || !CharacterHasSpEffect(10000, 6142));
    ClearSpEffect(10000, 6140);
    RestartEvent();
});

// Warp OBJ_Registration_XX
$Event(7000, Default, function(chrEntityId, objEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
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
    if (EventFlag(12102200)) { // activate all lamps
        RegisterHealingFountain(999, objEntityId, 0, 0, 0, 0); // force activate
    } else {
        RegisterHealingFountain(eventFlagId2, objEntityId, 0, 0, 0, 0); // activate normally
    }
});

// Warp OBJ_Start_XX
$Event(7100, Default, function(eventFlagId, objEntityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    RotateCharacter(10000, objEntityId, 101170, false);
    WaitFixedTimeFrames(32);
    InitializeWarpObject(objEntityId);
    EndIf(EventFlag(6715));
    WaitFixedTimeFrames(58);
    SetEventFlag(70000030, ON);
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(6715, ON);
});

// Warp OBJ_Warp to Base_XX
$Event(7200, Default, function(eventFlagId, entityId, entityId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    if (!EventFlag(12100761)) {
        RotateCharacter(10000, entityId, 101160, false);
        WaitFixedTimeSeconds(1);
        SpawnOneshotSFX(TargetEntityType.Object, entityId, 100, 100320);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(3);
    } else {
        SpawnOneshotSFX(TargetEntityType.Object, entityId, 100, 100320);
        SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(9401)) {
        // WarpPlayerToRespawnPoint(X8_4);
        SetPlayerRespawnPoint(entityId2);
        SetSpEffect(10000, 2101, false);
        EndEvent();
    }
    WarpPlayerToRespawnPoint(2102962);
});

// Warp OBJ_Warp from Base_XX
$Event(7300, Default, function(eventFlagId, objEntityId) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeFrames(1);
    SpawnOneshotSFX(TargetEntityType.Object, objEntityId, 100, 100321);
    InitializeWarpObject(objEntityId);
    SetEventFlag(eventFlagId, OFF);
});

// move bloodstain for rematches
$Event(7500, Default, function(lampSpawnPoint, rematchSpawnPoint) {
    WaitFixedTimeSeconds(1);
    MoveBloodstainAndDroppedItems(lampSpawnPoint, rematchSpawnPoint);
});

// Multi Confinement Wall_XX
$Event(7600, Default, function(objEntityId, entityId) {
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

// rematch boss triggered
$Event(7700, Default, function(rematchTrigger, rematchActive, rematchSpawnPoint, fogSfx) {
    WaitFor(EventFlag(rematchTrigger));
    SetEventFlag(rematchTrigger, OFF);
    SetEventFlag(rematchActive, ON);
    SetSpEffect(10000, 4681, false);
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, fogSfx);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, fogSfx);
    WaitFixedTimeFrames(59);
    SetPlayerRespawnPoint(rematchSpawnPoint);
    SetSpEffect(10000, 2101, false);
});

// rematch victory
$Event(7800, Default, function(postRematchSpawnPoint, fogSfxId) {
    AwardItemLot(110770);
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    
    // 15: super fx
    // 240: centered, subtle
    // 236 or 243?: ground
    // PlaySE(10000, SoundType.sSFX, 7012);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, fogSfxId);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 240, fogSfxId);
    
    WaitFixedTimeFrames(59);
    
    if (EventFlag(12100750) && EventFlag(12100963)) { // rematch started from broken lamp and return to dream enabled
        WarpPlayerToRespawnPoint(2102969);
    } else {
        // WarpPlayerToRespawnPoint(X0_4);
        SetPlayerRespawnPoint(postRematchSpawnPoint);
        SetSpEffect(10000, 2101, false);
    }
});

// return/quick warp to boss
$Event(7900, Default, function(warpTrigger, bossEntrancePoint, areaId, blockId) {
    WaitFor(EventFlag(warpTrigger)); // 12801899
    SetEventFlag(warpTrigger, OFF);
    SetEventFlag(7999, ON);
    WaitFixedTimeFrames(1);
    if (AnyBatchEventFlags(8500, 8599)) { // resting
        BatchSetEventFlags(8500, 8599, OFF);
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
$Event(8100, Default, function(thisEventSlot, lampKindleFlag) {
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
        } else { // increased
            DisplayGenericDialog(200170, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 3);
        }
    }
    RestartEvent();
});

// reset statuses (poison, etc.) and restock bullets and vials
$Event(8300, Default, function(spawnCheckerRegion, bypassChecker, lampKindleFlag, hiddenRegion, tempRegion) {
    const kindling_enabled_flag = 12100851;
    const restock_enabled_flag = 12100862;
    restock_enabled = EventFlag(restock_enabled_flag);
    
    WaitFor(InArea(10000, spawnCheckerRegion) || EventFlag(1509) || EventFlag(bypassChecker)); // spawn checker timeout expired
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
$Event(8500, Default, function(thisEventSlot, lampId, lampWarpFlag) {
    SetEventFlag(thisEventSlot, OFF); // this event slot
    WaitFixedTimeFrames(1);
    if (EventFlag(1510)) { // a chalice menu has been opened, forces an animation that breaks the menu, reopen
        WaitFixedTimeSeconds(0.5);
        SetEventFlag(1510, OFF);
        SetEventFlag(thisEventSlot, ON);
    }
    WaitFor(ThisEventSlot()); // menu opened, trigger animation
    BatchSetEventFlags(8630, 8639, OFF); // dismiss summons or they'll tweak
    RotateCharacter(10000, lampId, 101280, false);
    //PlaySE(10000, SoundType.sSFX, 777777774);
    SpawnOneshotSFX(TargetEntityType.Character, 10000, 236, 140);
    SetCharacterAnimationState(10000, Disabled);
    SetCharacterTeamType(10000, TeamType.Baby);
    ActivateHit(10000, Disabled);
    WaitFor(!ThisEventSlot()); // wait for menu closed
    if (EventFlag(7999)) {
        SetEventFlag(7999, OFF);
        RestartEvent();
    }
    if (EventFlag(1510)) {
        RestartEvent();
    }
    $InitializeEvent(0, 8600);
    SetEventFlag(lampWarpFlag, ON);
    RestartEvent();
});

// fade
$Event(8600, Default, function() {
    WaitFixedTimeSeconds(1);
    DisplayBanner(TextBannerType.StadiumLoss); // fade out
});

// map change check
$Event(8618, Default, function() {
    SetEventFlag(8619, OFF);
    if (PlayerInMap(21, 1)) {
        WaitFor(PlayerInOutMap(false, 21, 1));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(22, 0)) {
        WaitFor(PlayerInOutMap(false, 22, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(23, 0)) {
        WaitFor(PlayerInOutMap(false, 23, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(24, 0)) {
        WaitFor(PlayerInOutMap(false, 24, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(24, 1)) {
        WaitFor(PlayerInOutMap(false, 24, 1));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(24, 2)) {
        WaitFor(PlayerInOutMap(false, 24, 2));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(26, 0)) {
        WaitFor(PlayerInOutMap(false, 26, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(27, 0)) {
        WaitFor(PlayerInOutMap(false, 27, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(28, 0)) {
        WaitFor(PlayerInOutMap(false, 28, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(32, 0)) {
        WaitFor(PlayerInOutMap(false, 32, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(34, 0)) {
        WaitFor(PlayerInOutMap(false, 34, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(35, 0)) {
        WaitFor(PlayerInOutMap(false, 35, 0));
        SetEventFlag(8619, ON);
    }
    else if (PlayerInMap(36, 0)) {
        WaitFor(PlayerInOutMap(false, 36, 0));
        SetEventFlag(8619, ON);
    }
    else {
        WaitFor(EventFlag(8619));
    }
    RestartEvent();
});

// double tap init
// item swapping via speffect has to be initialized each time the player enters a different map for some reason
// without this, double-tap never works the first time after a loading screen or map transition
$Event(8619, Default, function() {
    if (!EventFlag(8619)) {
        WaitFixedTimeSeconds(1);
    }
    else {
        WaitFixedTimeSeconds(0.1);
    }
    SetEventFlag(8619, OFF);
    SetSpEffect(10000, 2112, false);
    WaitFixedTimeFrames(1);
    SetSpEffect(10000, 2111, false);
    WaitFor(ThisEvent());
    RestartEvent();
});

// summon portable menu npc and trigger action
$Event(8620, Default, function(spEffectId) {
    BatchSetEventFlags(12421900, 12421904, OFF);
    WaitFor(CharacterHasSpEffect(10000, spEffectId));
    if ((PlayerInMap(23, 0) || PlayerInMap(27, 0)) 
            && CharacterBackreadStatus(2990002)) {
        IssueShortWarpRequest(2990002, TargetEntityType.Character, 10000, 236);
    }
    else if ((PlayerInMap(21, 1) || PlayerInMap(22, 0) || PlayerInMap(24, 1) || PlayerInMap(24, 2) || PlayerInMap(28, 0) || PlayerInMap(32, 0) || PlayerInMap(35, 0)) 
            && CharacterBackreadStatus(2990001)) {
        IssueShortWarpRequest(2990001, TargetEntityType.Character, 10000, 236);
    }
    else {
        IssueShortWarpRequest(2990000, TargetEntityType.Character, 10000, 236);
    }
    
    if (!CharacterHasSpEffect(10000, 2112))  { // not during double tap init
        if (spEffectId == 2111) {
            WaitFor(CharacterHasSpEffect(10000, 2103) || !CharacterHasSpEffect(10000, 2111));
            if (CharacterHasSpEffect(10000, 2103)) { // prime hunter's mark double tap
                if (EventFlag(12102100)) { // warp menu
                    SetEventFlag(12421902, ON);
                }
                else if (EventFlag(12102101)) { // hunter's dream
                    SetEventFlag(12421903, ON);
                }
                else if (EventFlag(12102102)) { // reawaken
                    SetEventFlag(12421904, ON);
                }
                else {
                    WaitFixedTimeSeconds(0.3);
                    SetEventFlag(12421900, ON); // lamp menu 
                }
            }
            else {
                SetEventFlag(12421900, ON); // lamp menu
            }
        }
        else if (spEffectId == 2108) {
            WaitFor(CharacterHasSpEffect(10000, 2109) || !CharacterHasSpEffect(10000, 2108));
            if (CharacterHasSpEffect(10000, 2109)) { // grand-resonance bell double tap
                if (EventFlag(12102110)) {
                    SetEventFlag(12106500, ON); // gather
                }
                else {
                    WaitFixedTimeSeconds(0.3);
                    SetEventFlag(12421901, ON); // summon menu
                }
            }
            else {
                SetEventFlag(12421901, ON); // summon menu
            }
        }
    }
    WaitFor(!CharacterHasSpEffect(10000, spEffectId));
    RestartEvent();
});

// 8604 - 32
// 8605 - 16
// 8606 - 8
// 8607 - 4
// 8608 - 2
// 8609 - 1

// portable lamp warping
$Event(8603, Default, function() {
    BatchSetEventFlags(8603, 8609, OFF);
    WaitFor(EventFlag(8603));
    SetEventFlag(12111120, ON); // prevent rematch cleanup short warp
    const spawnPoints = [
        2102959, 2412950, 2412951, 2412952, 2412953, 2402950, 2402951, 2422950, 
        2422952, 2422951, 2302950, 2302951, 2302952, 2202950, 2202951, 2702950, 
        2702951, 3202950, 3202952, 2802950, 2802953, 2802951, 2802952, 2502950, 
        2502952, 2502951, 2112950, 3202951, 3202953, 3302950, 3302951, 2602950, 
        2602953, 2602952, 2602951, 3402950, 3402951, 3402953, 3402952, 3502950, 
        3502951, 3502952, 3602950, 3602951, 3602952
    ];
    for (let i = 0; i < spawnPoints.length; i++) {
        spawnCond &= EventValue(8604, 6) == i;
        if (spawnCond) {
            RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
            ForceAnimationPlayback(10000, 101161, false, false, false);
            WaitFixedTimeFrames(59);
            SetPlayerRespawnPoint(spawnPoints[i]);
            SetSpEffect(10000, 2101, false);
        }
        WaitFor(ElapsedSeconds(0)); // dummy statement to clear condition variable
    }
}); 

// portable lamp warping to chalice
$Event(8604, Default, function() {
    BatchSetEventFlags(8610, 8614, OFF);
    WaitFor(EventFlag(8610));
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    if (EventValue(8611, 4) == 0) {
        SetEventFlag(72100300, ON);
    }
    else if (EventValue(8611, 4) == 1) {
        SetEventFlag(72100301, ON);
    }
    else if (EventValue(8611, 4) == 2) {
        SetEventFlag(72100302, ON);
    }
    else if (EventValue(8611, 4) == 3) {
        SetEventFlag(72100303, ON);
    }
    else if (EventValue(8611, 4) == 4) {
        SetEventFlag(72100304, ON);
    }
    else if (EventValue(8611, 4) == 5) {
        SetEventFlag(72100305, ON);
    }
    else if (EventValue(8611, 4) == 6) {
        SetEventFlag(72100306, ON);
    }
    else if (EventValue(8611, 4) == 7) {
        SetEventFlag(72100307, ON);
    }
    else if (EventValue(8611, 4) == 8) {
        SetEventFlag(72100308, ON);
    }
});

// portable lamp - reawaken
$Event(8615, Default, function() {
    SetEventFlag(8615, OFF);
    WaitFor(EventFlag(8615));
    RequestCharacterAnimationReset(10000, Interpolation.Interpolated);
    ForceAnimationPlayback(10000, 101161, false, false, false);
    WaitFixedTimeFrames(59);
    SetSpEffect(10000, 2101, false);
});

// traverse
$Event(8616, Default, function() {
    WaitFor(CharacterHasSpEffect(10000, 2104));
    ClearSpEffect(10000, 2104);
    ForceAnimationPlayback(10000, 101130, false, false, false);
    RestartEvent();
});

// death test
$Event(8640, Default, function() {
    //SetSpEffect(10000, 2113, false);
    WaitFor(HPRatio(10000) <= 0);
    DisplayMessage(14000, 0);
});

// test
$Event(8890, Default, function() {
    SetEventFlag(8890, OFF);
    WaitFor(EventFlag(8890));
    DisplayBanner(TextBannerType.Dead); // test
    RestartEvent();
});

// 163 - close front
// 233 - close behind
// 183 - far front

// gather summons
$Event(8617, Default, function(npcId, summonedFlag, startAnimId, endAnimId, dummyPolyId) {
    WaitFor(EventFlag(12106500));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    WaitFixedTimeSeconds(0.5);
    if (CountEventFlags(TargetEventFlagType.EventFlag, 8630, 8639) > 0) {    
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
$Event(8630, Default, function(entryTriggeredFlag, entryEnabledFlag, npcId, summonedFlag, sfxId, spawnMessage, spawnAnimId, leaveMessage, deadMessage) {
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
    SetSpEffect(npcId, 9006, false);
    WaitFixedTimeSeconds(1);
    WaitFor(!EventFlag(entryTriggeredFlag) || CharacterDead(npcId));
    if (CharacterDead(npcId)) {
        SetEventFlag(entryTriggeredFlag, OFF);
        DisplayMessage(deadMessage, 0);
    }
    else {
        if (!AnyBatchEventFlags(8500, 8599)) { // not triggered by resting
            ForceAnimationPlayback(10000, 101222, false, false, false); // snap animation
        }
        WaitFixedTimeSeconds(0.2);
        if (npcId == 2410158) { // gascoigne
            RotateCharacter(npcId, 10000, 7012, true);
        }
        else { // other hunters
            RotateCharacter(npcId, 10000, 101160, true);
        }
        SetCharacterBackreadState(npcId, true);
        DisplayMessage(leaveMessage, 0);
    }
    WaitFor(EventFlag(entryTriggeredFlag));
});

// summon npcs - old - uses internal summoning system
$Event(86300, Default, function(entryTriggered, entryEnabled, npcId, signType, areaId, summonedEventFlag, dismissedEventFlag, sfxId, multiDisabledFlag, multiDisabledFlag2) {
    SetEventFlag(entryTriggered, OFF);
    SetEventFlag(entryEnabled, ON);
    WaitFor(ThisEventSlot() || EventFlag(summonedEventFlag));
    if (EventFlag(entryTriggered)) {
        if (NumberOfCoopClients() > 1) {
            DisplayMessage(200239, 0);
            RestartEvent();
        }
    }
    SetSpEffect(10000, 2107, false);
    SetEventFlag(entryEnabled, OFF);
    SetEventFlag(multiDisabledFlag, OFF);
    SetEventFlag(multiDisabledFlag2, OFF);
    if (EventFlag(summonedEventFlag)) {
        EndEvent();
    }
    SetCharacterBackreadState(npcId, true);
    WaitFixedTimeFrames(1);
    WarpCharacterAndCopyFloor(npcId, TargetEntityType.Character, 10000, 233, 10000); // needed for summon to work
    WaitFixedTimeFrames(1);
    SummonNPC(signType, npcId, areaId, summonedEventFlag, dismissedEventFlag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(summonedEventFlag)) {
        DisplayMessage(200237, 0);
        WarpCharacterAndCopyFloor(npcId, TargetEntityType.Area, areaId, -1, areaId);
        RestartEvent();
    }
    DeleteMapSFX(sfxId, true);
    WaitFixedTimeSeconds(2);
    DisplayMessage(100051, 0);
    WaitFixedTimeSeconds(15);
    SetCharacterBackreadState(npcId, false);
    WaitFixedTimeSeconds(0.5);
    SetCharacterBackreadState(npcId, true);
    WarpCharacterAndCopyFloor(npcId, TargetEntityType.Character, 10000, 233, 10000);
});

// Disable restock after spawn
$Event(8700, Default, function() {
    WaitFixedTimeSeconds(1);
    SetEventFlag(1509, ON);
});

// hide lamp during rematch
$Event(8800, Default, function(rematchActive, lampNpc, lampObject, tempLocation) {
    WaitFor(EventFlag(rematchActive));
    ChangeCharacterEnableState(lampNpc, Disabled);
    DeactivateObject(lampObject, Disabled);
    WaitFixedTimeFrames(1);
    CharacterWarpRequest(lampNpc, TargetEntityType.Area, tempLocation, -1);
});

// Auto restart rematch if dead + move player to rematch point
$Event(8900, Default, function(autoRematchFlag, lampSpawnPoint, rematchDeathOccurred, distortedActive, distortedTrigger, rematchStartRegion, areaId, blockId) {
    EndIf(!ThisEventSlot()); // game's state is not in rematch mode
    SetSpEffect(10000, 1934, false);
    DummyPlayCutsceneAndWarpPlayer(rematchStartRegion, areaId, blockId);
    WaitFor(HPRatio(10000) <= 0);
    SetEventFlag(rematchDeathOccurred, ON); // used for moving bloodstain
    if (EventFlag(12100864)) { // auto rematch enabled
        if (distortedActive != 0 && EventFlag(distortedActive)) { // if distorted memory
            SetEventFlag(distortedTrigger, ON);
        }
        SetEventFlag(autoRematchFlag, ON);
        if (EventFlag(12100750) && EventFlag(12100963)) { // initiated from dream and death respawn location is dream
            SetEventFlag(12100850, ON); // flag to set respawn location back to dream
        }
        SetPlayerRespawnPoint(lampSpawnPoint);
        SetEventFlag(8950, ON);
    // auto rematch disabled
    } else if (EventFlag(12100859)) { // death respawn location is boss lamp
        SetPlayerRespawnPoint(lampSpawnPoint);
    } else if (EventFlag(12100750)) {
        SetPlayerRespawnPoint(2102969); // respawn at broken lamp
    }
});

// Covenant BJ Unique Effect_XX
$Event(9030, Default, function(spEffectId, spEffectId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, spEffectId));
    SetSpEffect(10000, spEffectId2, false);
    WaitFor(!CharacterHasSpEffect(10000, spEffectId));
    ClearSpEffect(10000, spEffectId2);
    RestartEvent();
});

// Pledge BJ Unique Effect_Cooperative Guests Only_XX
$Event(9035, Default, function(spEffectId, spEffectId2) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        CharacterHasSpEffect(10000, spEffectId) && CharacterType(10000, TargetType.WhitePhantom));
    SetSpEffect(10000, spEffectId2, false);
    WaitFor(
        !(CharacterHasSpEffect(10000, spEffectId) && CharacterType(10000, TargetType.WhitePhantom)));
    ClearSpEffect(10000, spEffectId2);
    RestartEvent();
});

// Get NPC item_XX
$Event(9040, Default, function(eventFlagId, itemLotId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    AwardItemLot(itemLotId);
});

// Obtain NPC item_any number of times_XX
$Event(9100, Default, function(eventFlagId, itemLotId) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlag(eventFlagId, OFF);
    AwardItemLot(itemLotId);
    RestartEvent();
});

// Get NPC item_Circulation change_XX
$Event(9110, Default, function(eventFlagId, itemLotId, itemLotId2, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        AwardItemLot(itemLotId);
    } else {
        AwardItemLot(itemLotId2);
    }
});

// Return Enlightenment 1
$Event(9181, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(NumberOfClientsOfType(ClientType.Coop) >= 1);
    SetEventFlag(9185, OFF);
    WaitFor(!CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// Return Enlightenment 2
$Event(9182, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(9184, OFF);
    WaitFor(
        HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            && !HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlag(9184, ON);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.ConnectingtoMultiplayer)
            || HasMultiplayerState(MultiplayerState.Multiplayer));
    RestartEvent();
});

// Return Enlightenment 3
$Event(9183, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!CharacterHasSpEffect(10000, 9000) && EventFlag(9185) && !EventFlag(9184));
    SetSpEffect(10000, 4680, false);
    SetEventFlag(9185, OFF);
    WaitFixedTimeSeconds(2.5);
    DisplayMessage(100300, 0);
    RestartEvent();
});

// Determine if NPC summoning can be executed
$Event(9186, Default, function() {
    SetNetworkSyncState(Disabled);
    SetEventFlag(9187, OFF);
    //EndIf(!chrFlag);
    //SetEventFlag(9187, ON);
    //chrFlag = CharacterType(10000, TargetType.Alive) && PlayerInsightAmount() >= 1 && !EventFlag(6009);
    //WaitFor(chrFlag);
    //SetEventFlag(9187, OFF);
    //WaitFor(!(PlayerInsightAmount() >= 1 && !EventFlag(6009)));
    //RestartEvent();
});

// Special effects during host play
$Event(9190, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            && HasMultiplayerState(MultiplayerState.Host));
    SetSpEffect(10000, 9001, false);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Multiplayer)
            && HasMultiplayerState(MultiplayerState.Host)));
    ClearSpEffect(10000, 9001);
    RestartEvent();
});

// Multi-time zone unlock flag control_host
$Event(9191, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!(PlayerInMap(29, 0) || PlayerInMap(26, 0) || PlayerInMap(33, 0))) {
        SetEventFlag(6500, ON);
        WaitFor(EventFlag(9800));
        SetEventFlag(6501, ON);
        WaitFor(EventFlag(9801));
        SetEventFlag(6502, ON);
        WaitFor(EventFlag(9802));
        SetEventFlag(6503, ON);
        EndEvent();
    }
L0:
    BatchSetEventFlags(6500, 6503, ON);
    EndEvent();
});

// Multi-time zone unlock flag control_guest
$Event(9192, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventFlag(6400, ON);
    WaitFor(EventFlag(9800));
    SetEventFlag(6401, ON);
    WaitFor(EventFlag(9801));
    SetEventFlag(6402, ON);
    WaitFor(EventFlag(9802));
    SetEventFlag(6403, ON);
});

// blood-drunk hunter
$Event(9193, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(6006));
    SetSpEffect(10000, 6130, false);
    WaitFor(!EventFlag(6006));
    ClearSpEffect(10000, 6130);
    RestartEvent();
});

// Use the hunter's bell Msg
$Event(9198, Default, function() {
    if (!EventFlag(9199)) {
        WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
        SetEventFlag(9185, ON);
        WaitFor(ElapsedSeconds(5));
        DisplayMessage(100001, 0);
        SetEventFlag(9199, ON);
    }
L0:
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    SetEventFlag(9199, OFF);
    RestartEvent();
});

// Auditory hallucinations with SAN values ​​_XX
$Event(9200, Default, function(entityId) {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(entityId, Disabled);
    WaitFor(
        (PlayerInsightAmount() >= 60 || EventFlag(9802))
            && !EventFlag(9180)
            && !EventFlag(9462)
            && !PlayerInMap(26, 0));
    SetMapSoundState(entityId, Enabled);
    WaitFor(
        !((PlayerInsightAmount() >= 60 || EventFlag(9802))
            && !EventFlag(9180)
            && !EventFlag(9462)
            && !PlayerInMap(26, 0)));
    RestartEvent();
});

// Hear the killer's bell at the fishing village or clock tower
$Event(9215, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(9468) && !EventFlag(1730) && (PlayerInMap(35, 0) || PlayerInMap(36, 0)));
    WaitRandomTimeSeconds(60, 120);
    PlaySE(10000, SoundType.sSFX, 10307);
    WaitRandomTimeSeconds(2, 4);
    PlaySE(10000, SoundType.sSFX, 10307);
    RestartEvent();
});

// Appearance Widow_Appearance_XX
$Event(9220, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, areaId, blockId) {
    if (EventFlag(eventFlagId2)) {
        SetCharacterAIState(chrEntityId, Disabled);
        ForceAnimationPlayback(chrEntityId, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(eventFlagId));
    SetCharacterAIState(chrEntityId, Disabled);
    ForceAnimationPlayback(chrEntityId, 7010, true, false, false);
    WaitFor(
        IsOnline()
            && !EventFlag(eventFlagId2)
            && !CharacterDead(chrEntityId)
            && !EventFlag(eventFlagId3)
            && PlayerInMap(areaId, blockId)
            && ((CharacterType(10000, TargetType.Alive)
                && PlayersSoulLevel() >= 30
                && NumberOfClientsOfType(ClientType.Coop) >= 1)
                || CharacterHasSpEffect(10000, 9025)));
    WaitFor(RandomElapsedSeconds(10, 10));
    DisplayMessage(109000, 0);
    ForceAnimationPlayback(chrEntityId, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(chrEntityId, Enabled);
    SetEventFlag(eventFlagId, ON);
});

// Appearance Widow_Ring Bell_XX
$Event(9240, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, areaId, blockId) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && !EventFlag(eventFlagId3)
            && !EventFlag(eventFlagId2)
            && PlayerInMap(areaId, blockId)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(chrEntityId, 9100, false);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Appearing Widow_Stop Bell_XX
$Event(9260, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, areaId, blockId) {
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        EventFlag(eventFlagId)
            && EventFlag(eventFlagId3)
            && (EventFlag(eventFlagId2)
                || NumberOfClientsOfType(ClientType.Invader) >= 1
                || !PlayerInMap(areaId, blockId)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(chrEntityId, 9100);
    RequestCharacterAIReplan(chrEntityId);
    SetEventFlag(eventFlagId3, OFF);
    RestartEvent();
});

// Appearing Widow_Disappearing_XX
$Event(9280, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, areaId, blockId) {
    EndIf(EventFlag(eventFlagId2) || EventFlag(eventFlagId3) || EventFlag(eventFlagId4));
    hp = HPRatio(chrEntityId) == 0;
    flag = EventFlag(eventFlagId4);
    WaitFor(EventFlag(eventFlagId) && PlayerInMap(areaId, blockId) && (hp || flag));
    SetEventFlag(eventFlagId2, ON);
    if (!flag.Passed) {
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

// get SAN value
$Event(9350, Default, function(value) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (value != 1) {
        if (value != 2) {
            if (value != 3) {
                if (value != 4) {
                    if (value != 5) {
                        if (value != 6) {
                            if (value != 7) {
                                if (value != 8) {
                                    if (value != 9) {
                                        EndEvent();
                                    }
L9:
                                    SetSpEffect(10000, 4680, false);
                                    WaitFixedTimeFrames(10);
                                }
L8:
                                SetSpEffect(10000, 4680, false);
                                WaitFixedTimeFrames(10);
                            }
L7:
                            SetSpEffect(10000, 4680, false);
                            WaitFixedTimeFrames(10);
                        }
L6:
                        SetSpEffect(10000, 4680, false);
                        WaitFixedTimeFrames(10);
                    }
L5:
                    SetSpEffect(10000, 4680, false);
                    WaitFixedTimeFrames(10);
                }
L4:
                SetSpEffect(10000, 4680, false);
                WaitFixedTimeFrames(10);
            }
L3:
            SetSpEffect(10000, 4680, false);
            WaitFixedTimeFrames(10);
        }
L2:
        SetSpEffect(10000, 4680, false);
        WaitFixedTimeFrames(10);
    }
L1:
    SetSpEffect(10000, 4680, false);
    WaitFixedTimeFrames(10);
});

// Kill NPC with bloodline BJ_XX
$Event(9360, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId3));
    flag = EventFlag(eventFlagId) || EventFlag(eventFlagId2) || EventFlag(eventFlagId3);
    flag2 = EventFlag(eventFlagId4);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    EndIf(
        !((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && CharacterHasSpEffect(10000, 6100)));
    AwardItemsIncludingClients(5520);
});

// First death to base
$Event(9400, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(12410999));
    EndIf(EventFlag(9401));
    if (!EventFlag(9402)) {
        WaitFor(PlayerInMap(24, 1));
    }
    SetEventFlag(9402, ON);
    WaitFor(CharacterDead(10000));
    SetPlayerRespawnPoint(2102962);
});

// First death with a SAN value of 1 or higher
$Event(9404, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(ThisEvent());
    WaitFor(EventFlag(9401) && PlayerInsightAmount() >= 1 && CharacterDead(10000));
    SetPlayerRespawnPoint(2102961);
});

// Sacrifice warp_item when clearing university
$Event(9410, Default, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(13201803) && CharacterType(10000, TargetType.Alive) && InArea(10000, 2802010));
    WaitFixedTimeSeconds(0);
    AwardItemLot(3200800);
});

// First Sacrifice_00
$Event(9421, Default, function() {
    EndIf(EventFlag(9423));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(9420));
    SetPlayerRespawnPoint(2802959);
    SetEventFlag(9420, OFF);
});

// First Sacrifice_01
$Event(9422, Default, function() {
    EndIf(EventFlag(9423));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(!(EventFlag(9421) && PlayerInMap(28, 0)));
    SetEventFlag(9180, ON);
    PlayCutsceneToPlayer(28000010, CutscenePlayMode.SkippableWithFadeOut, 10000);
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetEventFlag(9423, ON);
    SetSpEffect(10000, 4680, false);
});

// Get Covenant Body Gem_XX
$Event(9440, Default, function(eventFlagId, itemLotId) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(eventFlagId));
    AwardItemLot(itemLotId);
});

// Kill NPC with bloodline BJ 2_XX
$Event(9480, Default, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId3));
    flag = EventFlag(eventFlagId)
        || EventFlag(eventFlagId2)
        || EventFlag(eventFlagId3)
        || EventFlag(eventFlagId4);
    flag2 = EventFlag(eventFlagId5);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    EndIf(
        !((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && CharacterHasSpEffect(10000, 6100)));
    AwardItemsIncludingClients(5520);
});

// Magic stone used_XX
$Event(9500, Default, function(spEffectId, itemLotId) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, spEffectId));
    AwardItemsIncludingClients(itemLotId);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// base old man_random doze 2
$Event(9700, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1021) && EventFlag(72100121) && !PlayerInMap(21, 0));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1022, ON);
});

// base old man_random doze 3
$Event(9701, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1023) && EventFlag(72100123) && !PlayerInMap(21, 0));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1024, ON);
});

// base old man_random doze 4
$Event(9702, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1025) && EventFlag(72100125) && !PlayerInMap(21, 0));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1026, ON);
});

// base old man_random doze 5
$Event(9703, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1026) && EventFlag(9802) && EventFlag(72100128) && !PlayerInMap(21, 0));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1027, ON);
});

// doll heroine_welcome home
$Event(9710, Default, function(eventFlagId, eventFlagId2) {
    WaitFor(EventFlag(1000) && EventFlag(72100110) && !PlayerInMap(21, 0));
    BatchSetEventFlags(eventFlagId, eventFlagId2, OFF);
    SetEventFlag(1001, ON);
});

// Avenger_Warp OBJ usage limit_Gascoin room
$Event(9720, Default, function() {
    if (!ThisEvent()) {
        if (!EventFlag(12410810)) {
            if (!EventFlag(9467)) {
                flagMap = EventFlag(1362) && EventFlag(72400520) && PlayerInMap(21, 0);
                flag = EventFlag(1363);
                flag2 = (EventFlag(1701) || EventFlag(1702)) && (EventFlag(1368) || EventFlag(1369));
                flag3 = EventFlag(12410810) || EventFlag(9467);
                WaitFor(flagMap || flag || flag2 || flag3);
                if (!flag3.Passed) {
                    SetEventFlag(70002413, ON);
                    WaitFor(EventFlag(12410810) || EventFlag(9467));
                }
            }
        }
    }
L0:
    SetEventFlag(70002413, OFF);
});

// Revenge_Warp OBJ usage restriction_Saint Beast room
$Event(9721, Default, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(1371) || (EventFlag(1705) && CharacterDead(2400902)));
    }
L0:
    SetEventFlag(70002401, OFF);
});

// Avenger_Energy
$Event(9722, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1373) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1370, ON);
    SetEventFlag(70002401, ON);
});

// Avenger_Darkness
$Event(9723, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1374) && EventFlag(9802));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1372, ON);
    SetEventFlag(70002401, ON);
});

// Infected beggar_other NPC killing count_ground
$Event(9755, Default, function() {
    WaitFor(
        (EventFlag(1205) || EventFlag(1207))
            && EventFlag(72400360)
            && (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12201800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12301800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12301700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12401800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12411800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12411700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12421800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12421700)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12501800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12601800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12601850)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12701800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12801800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13201800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13301800)));
    IncrementEventValue(70000200, 3, 7);
    RestartEvent();
});

// Infected Beggar_Other NPC Killing Count_Dungeon
$Event(9756, Default, function() {
    WaitFor(
        (EventFlag(1205) || EventFlag(1207))
            && EventFlag(72400360)
            && PlayerInMap(29, 0)
            && (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901800)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901801)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901802)
                || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 12901803)));
    IncrementEventValue(70000200, 3, 7);
    RestartEvent();
});

// Bloodline Hunting_Moved outside the old castle
$Event(9770, Default, function() {
    WaitFor(EventFlag(1351) && !PlayerInMap(25, 0));
    SetEventFlag(72500359, ON);
});

// Spider-man patch_in the dungeon
$Event(9780, Default, function() {
    WaitFor(EventFlag(1422) && !PlayerInMap(32, 0) && EventFlag(73200326));
    BatchSetEventFlags(1420, 1437, OFF);
    SetEventFlag(1423, ON);
});

// Spider-Man Patch_Take over the inhabitants as they reached the forest
$Event(9781, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && PlayerInMap(27, 0));
    EndIf(EventFlag(1438));
    SetEventFlag(1439, ON);
    SetEventFlag(72410382, ON);
});

// Spider-Man_(listening to story & went to base or died) or Spider-Man died so hijacking ended
$Event(9782, Default, function() {
    WaitFor(
        (PlayerHasItem(ItemType.Goods, 4310) && (PlayerInMap(21, 0) || CharacterDead(10000)))
            || EventFlag(1431));
    SetEventFlag(1438, ON);
    SetEventFlag(1439, OFF);
});

// C end branch_decision
$Event(9909, Default, function() {
    EndIf(EventFlag(9900));
    WaitFor(EventValue(9901, 4) >= 3);
    SetEventFlag(9900, ON);
});

// C end branch_3rd umbilical cord usage count_XX
$Event(9905, Default, function(spEffectId) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterHasSpEffect(10000, spEffectId));
    IncrementEventValue(9901, 4, 4);
});

// Crunchy flag control
$Event(9910, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    if (!EventFlag(6300)) {
        SetEventFlag(50000400, OFF);
        SetEventFlag(50000405, ON);
    } else {
        SetEventFlag(50000400, ON);
        SetEventFlag(50000405, OFF);
    }
    if (!EventFlag(6301)) {
        SetEventFlag(50000600, OFF);
        SetEventFlag(50000605, ON);
    } else {
        SetEventFlag(50000600, ON);
        SetEventFlag(50000605, OFF);
    }
    if (!EventFlag(6302)) {
        SetEventFlag(50000800, OFF);
        SetEventFlag(50000801, ON);
    } else {
        SetEventFlag(50000800, ON);
        SetEventFlag(50000801, OFF);
    }
    if (!EventFlag(6303)) {
        SetEventFlag(50001100, OFF);
        SetEventFlag(50001105, ON);
    } else {
        SetEventFlag(50001100, ON);
        SetEventFlag(50001105, OFF);
    }
    if (!EventFlag(6304)) {
        SetEventFlag(50001300, OFF);
        SetEventFlag(50001301, ON);
    } else {
        SetEventFlag(50001300, ON);
        SetEventFlag(50001301, OFF);
    }
    if (!EventFlag(6305)) {
        SetEventFlag(50001610, OFF);
        SetEventFlag(50001611, ON);
    } else {
        SetEventFlag(50001610, ON);
        SetEventFlag(50001611, OFF);
    }
    if (!EventFlag(6306)) {
        SetEventFlag(50002110, OFF);
        SetEventFlag(50002115, ON);
    } else {
        SetEventFlag(50002110, ON);
        SetEventFlag(50002115, OFF);
    }
    if (!EventFlag(6307)) {
        SetEventFlag(50003400, OFF);
        SetEventFlag(50003405, ON);
    } else {
        SetEventFlag(50003400, ON);
        SetEventFlag(50003405, OFF);
    }
    if (!EventFlag(6308)) {
        SetEventFlag(50003500, OFF);
        SetEventFlag(50003505, ON);
    } else {
        SetEventFlag(50003500, ON);
        SetEventFlag(50003505, OFF);
    }
    if (!EventFlag(6340)) {
        SetEventFlag(50000200, OFF);
        SetEventFlag(50000205, OFF);
        SetEventFlag(50000210, ON);
    } else {
        SetEventFlag(50000200, ON);
        SetEventFlag(50000205, ON);
        SetEventFlag(50000210, OFF);
    }
    if (!EventFlag(6341)) {
        SetEventFlag(50001820, OFF);
        SetEventFlag(50001825, ON);
    } else {
        SetEventFlag(50001820, ON);
        SetEventFlag(50001825, OFF);
    }
    if (!EventFlag(6342)) {
        SetEventFlag(50001910, OFF);
        SetEventFlag(50001915, ON);
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    } else {
        SetEventFlag(50001910, ON);
        SetEventFlag(50001915, OFF);
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    }
    if (!EventFlag(6334)) {
        SetEventFlag(50003100, OFF);
        SetEventFlag(50003105, ON);
    } else {
        SetEventFlag(50003100, ON);
        SetEventFlag(50003105, OFF);
    }
    if (!EventFlag(6335)) {
        SetEventFlag(50001500, OFF);
        SetEventFlag(50001505, ON);
    } else {
        SetEventFlag(50001500, ON);
        SetEventFlag(50001505, OFF);
    }
    if (!EventFlag(6641)) {
        SetEventFlag(50001700, OFF);
        SetEventFlag(50001701, ON);
    } else {
        SetEventFlag(50001700, ON);
        SetEventFlag(50001701, OFF);
    }
    if (!EventFlag(6643)) {
        SetEventFlag(50001900, OFF);
        SetEventFlag(50001905, ON);
    } else {
        SetEventFlag(50001900, ON);
        SetEventFlag(50001905, OFF);
    }
    if (!EventFlag(6647)) {
        SetEventFlag(50001810, OFF);
        SetEventFlag(50001805, ON);
    } else {
        SetEventFlag(50001810, ON);
        SetEventFlag(50001805, OFF);
    }
    if (!EventFlag(6649)) {
        SetEventFlag(50000205, OFF);
        SetEventFlag(50000210, ON);
    } else {
        SetEventFlag(50000205, ON);
        SetEventFlag(50000210, OFF);
    }
    if (!EventFlag(6677)) {
        SetEventFlag(50002260, OFF);
        SetEventFlag(50002261, ON);
    } else {
        SetEventFlag(50002260, ON);
        SetEventFlag(50002261, OFF);
    }
});
