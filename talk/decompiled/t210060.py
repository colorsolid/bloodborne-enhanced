# -*- coding: utf-8 -*-
def t210060_0():
    """State 0,1"""
    t210060_x3(flag1=72100421, flag2=1, actionbutton1=6116, action1=10011120, action2=10011130)
    Quit()

def t210060_x0():
    """State 0,1"""
    assert t210060_x1(z2=99999, z3=99999, z4=99999, z5=99999)
    """State 2"""
    return 0

def t210060_x1(z2=99999, z3=99999, z4=99999, z5=99999):
    """State 0,1"""
    DebugEvent('会話判定')
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    DebugEvent('汎用ダイアログ判定')
    if IsGenericDialogOpen() == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    DebugEvent('メニュー判定')
    if (CheckSpecificPersonMenuIsOpen(z2, 0) == 1 or CheckSpecificPersonMenuIsOpen(z3, 0) == 1 or CheckSpecificPersonMenuIsOpen(z4,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z5, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210060_x2(actionbutton1=6116, flag3=6000, flag4=6001, flag5=6001, flag6=6001, flag7=6001, flag8=6001,
               flag9=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag3) == 1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) ==
                1 or GetEventStatus(flag6) == 1 or GetEventStatus(flag7) == 1 or GetEventStatus(flag8)
                == 1 or GetEventStatus(flag9) == 1)
        """State 2"""
        if (not GetEventStatus(flag3) and not GetEventStatus(flag4) and not GetEventStatus(flag5) and
            not GetEventStatus(flag6) and not GetEventStatus(flag7) and not GetEventStatus(flag8) and
            not GetEventStatus(flag9)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    SetTalkTime(0.5)
    return 0

def t210060_x3(flag1=72100421, flag2=1, actionbutton1=6116, action1=10011120, action2=10011130):
    """State 0"""
    while True:
        """State 2"""
        call = t210060_x5(flag1=flag1, flag2=flag2, actionbutton1=actionbutton1, action1=action1, action2=action2)
        assert IsMultiplayerInProgress() == 1
        """State 1"""
        call = t210060_x4()
        assert not IsMultiplayerInProgress()
    """Unused"""
    """State 3"""
    return 0

def t210060_x4():
    """State 0,1"""
    ForceCloseMenu()
    ForceEndTalk(0)
    ForceCloseGenericDialog()
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210060_x5(flag1=72100421, flag2=1, actionbutton1=6116, action1=10011120, action2=10011130):
    """State 0"""
    while True:
        """State 1"""
        Label('L0')
        DebugEvent('待機')
        """State 10"""
        def ExitPause():
            c1_73(1)
        assert (t210060_x2(actionbutton1=actionbutton1, flag3=6000, flag4=6001, flag5=6001, flag6=6001,
                flag7=6001, flag8=6001, flag9=6001))
        """State 2"""
        ClearPlayerDamageInfo()
        c1_73(1)
        """State 3"""
        c1_72(flag2)
        c1_73(1)
        """State 8"""
        call = t210060_x6(flag1=flag1, action1=action1, action2=action2, flag2=flag2)
        def WhilePaused():
            c1_73(1)
        if call.Done():
            pass
        elif HasPlayerBeenAttacked() == 1 or GetDistanceToPlayer() > 3:
            """State 9"""
            assert t210060_x0()
    """Unused"""
    """State 4"""
    DebugEvent('起動中の椅子が存在しない')
    c1_73(1)
    """State 5"""
    c1_79()
    assert not CheckSpecificPersonMenuIsOpen(320, 0)
    Goto('L0')
    """State 6"""
    DebugEvent('起動中の椅子が存在しない')
    """State 7"""
    OpenGenericDialog(1, 10010714, 1, 0, 1)
    assert not IsGenericDialogOpen()
    Goto('L0')
    """State 11"""
    return 0

def t210060_x6(flag1=72100421, action1=10011120, action2=10011130, flag2=1):
    """State 0,19"""
    DebugEvent('unknow')
    if (ComparePlayerInventoryNumber(3, 6100, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6109,
        0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6200, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6209, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6210, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6219, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6300, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6302, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6309, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
        6310, 0, 0, 0) == 1):
        """State 20"""
        DebugEvent('所持していない')
        if (ComparePlayerInventoryNumber(3, 6312, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6319,
            0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6401, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6409, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6420, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6429, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6500, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6502, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6509, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
            6520, 0, 0, 0) == 1):
            """State 38"""
            DebugEvent('所持していない')
            if (ComparePlayerInventoryNumber(3, 6522, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
                6529, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6530, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3,
                6532, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 6539, 0, 0, 0) == 1 and ComparePlayerInventoryNumber(3, 
                6540, 0, 0, 0) == 1):
                """State 18"""
                OpenGenericDialog(7, action1, 1, 0, 1)
                def WhilePaused():
                    SetTalkTime(0.33)
                assert not IsGenericDialogOpen()
            else:
                """State 21"""
                Label('L0')
                DebugEvent('所持している')
                """State 22"""
                DebugEvent('初回起動判定')
                if GetEventStatus(6708) == 1:
                    """State 23"""
                    DebugEvent('初回起動でない')
                else:
                    """State 24"""
                    DebugEvent('初回起動')
                    """State 16"""
                    OpenGenericDialog(1, action2, 1, 0, 1)
                    def WhilePaused():
                        SetTalkTime(0.33)
                    """State 17"""
                    SetEventState(6708, 1)
                    assert not IsGenericDialogOpen()
                """State 1"""
                ClearTalkListData()
                SetEventState(70000230, 0)
                SetEventState(70000220 + flag2, 0)
                """State 2"""
                AddTalkListData(1, 70002900, -1)
                AddTalkListData(2, 70002901, 12907830)
                AddTalkListData(3, 70002902, 12907850)
                AddTalkListData(4, 70002903, 12907870)
                AddTalkListData(5, 70002904, 12907890)
                AddTalkListData(6, 70002905, 12907910)
                AddTalkListData(7, 70002906, 12907930)
                AddTalkListData(8, 70002907, 12907950)
                AddTalkListData(9, 70002908, 12907970)
                AddTalkListData(10, 70002909, 12907990)
                if GetEventStatus(94005001 + flag2 * 100000) == 1:
                    """State 33"""
                    SetEventState(70000231, 1)
                else:
                    """State 34"""
                    SetEventState(70000231, 0)
                """State 36"""
                c1_79()
                while True:
                    """State 3"""
                    def WhilePaused():
                        SetTalkTime(0.33)
                    if GetTalkListEntryResult() == 1:
                        """State 6"""
                        DebugEvent('ダンジョン_1F')
                        """State 39"""
                        assert t210060_x7(flag1=flag1, z1=72100300)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 2:
                        """State 10"""
                        DebugEvent('ダンジョン_2F')
                        """State 40"""
                        assert t210060_x7(flag1=flag1, z1=72100301)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 3:
                        """State 4"""
                        DebugEvent('ダンジョン_3F')
                        """State 41"""
                        assert t210060_x7(flag1=flag1, z1=72100302)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 4:
                        """State 7"""
                        DebugEvent('ダンジョン_4F')
                        """State 42"""
                        assert t210060_x7(flag1=flag1, z1=72100303)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 5:
                        """State 11"""
                        DebugEvent('ダンジョン_5F')
                        """State 43"""
                        assert t210060_x7(flag1=flag1, z1=72100304)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 6:
                        """State 8"""
                        DebugEvent('ダンジョン_6F')
                        """State 44"""
                        assert t210060_x7(flag1=flag1, z1=72100305)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 7:
                        """State 9"""
                        DebugEvent('ダンジョン_7F')
                        """State 45"""
                        assert t210060_x7(flag1=flag1, z1=72100306)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 8:
                        """State 12"""
                        DebugEvent('ダンジョン_8F')
                        """State 46"""
                        assert t210060_x7(flag1=flag1, z1=72100307)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 9:
                        """State 13"""
                        DebugEvent('ダンジョン_9F')
                        """State 47"""
                        assert t210060_x7(flag1=flag1, z1=72100308)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 10:
                        """State 14"""
                        DebugEvent('ダンジョン_10F')
                        """State 48"""
                        assert t210060_x7(flag1=flag1, z1=72100309)
                        Goto('L1')
                    elif GetTalkListEntryResult() == 11:
                        """State 15"""
                        DebugEvent('稼働中のワープ椅子へ')
                        """State 49"""
                        assert t210060_x8(flag1=flag1)
                        Goto('L1')
                    elif (GetTalkListEntryResult() == 50 or not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(320,
                          0)):
                        break
                    elif GetEventStatus(70000231) == 1 and not GetEventStatus(94005001 + flag2 * 100000):
                        """State 35"""
                        DebugEvent('聖杯が外された')
                        """State 37"""
                        SetEventState(70000231, 0)
                """State 5"""
                DebugEvent('立ち去る')
                """State 30"""
                DebugEvent('参加方法判定')
                if GetEventStatus(94005001 + flag2 * 100000) == 1 and not GetEventStatus(70000231):
                    """State 31"""
                    DebugEvent('設置した')
                    """State 25"""
                    DebugEvent('参加方法判定')
                    if GetEventStatus(70000230) == 1:
                        """State 26"""
                        DebugEvent('検索から参加')
                        assert GetEventStatus(70000220 + flag2 * 1) == 1
                        """State 29"""
                        OpenGenericDialog(1, 10011302, 1, 0, 1)
                        def WhilePaused():
                            SetTalkTime(0.33)
                        assert not IsGenericDialogOpen()
                    else:
                        """State 27"""
                        DebugEvent('作成して参加')
                        assert GetEventStatus(70000220 + flag2 * 1) == 1
                        """State 28"""
                        OpenGenericDialog(1, 10011301, 1, 0, 1)
                        def WhilePaused():
                            SetTalkTime(0.33)
                        assert not IsGenericDialogOpen()
                else:
                    """State 32"""
                    DebugEvent('設置していない')
        else:
            Goto('L0')
    else:
        Goto('L0')
    """State 50"""
    Label('L1')
    return 0

def t210060_x7(flag1=72100421, z1=_):
    """State 0,1"""
    SetEventState(flag1, 1)
    assert not GetEventStatus(flag1)
    """State 2"""
    SetEventState(z1, 1)
    """State 3"""
    return 0

def t210060_x8(flag1=72100421):
    """State 0,1"""
    DebugEvent('ワープ椅子の稼動状態による分岐')
    if GetEventStatus(12907991) == 1:
        """State 11"""
        DebugEvent('ワープ椅子09')
        """State 21"""
        assert t210060_x7(flag1=flag1, z1=72100309)
    elif GetEventStatus(12907971) == 1:
        """State 10"""
        DebugEvent('ワープ椅子08')
        """State 20"""
        assert t210060_x7(flag1=flag1, z1=72100308)
    elif GetEventStatus(12907951) == 1:
        """State 9"""
        DebugEvent('ワープ椅子07')
        """State 19"""
        assert t210060_x7(flag1=flag1, z1=72100307)
    elif GetEventStatus(12907911) == 1:
        """State 5"""
        DebugEvent('ワープ椅子05')
        """State 17"""
        assert t210060_x7(flag1=flag1, z1=72100305)
    elif GetEventStatus(12907931) == 1:
        """State 6"""
        DebugEvent('ワープ椅子06')
        """State 18"""
        assert t210060_x7(flag1=flag1, z1=72100306)
    elif GetEventStatus(12907831) == 1:
        """State 7"""
        DebugEvent('ワープ椅子01')
        """State 13"""
        assert t210060_x7(flag1=flag1, z1=72100301)
    elif GetEventStatus(12907891) == 1:
        """State 8"""
        DebugEvent('ワープ椅子04')
        """State 16"""
        assert t210060_x7(flag1=flag1, z1=72100304)
    elif GetEventStatus(12907871) == 1:
        """State 4"""
        DebugEvent('ワープ椅子03')
        """State 15"""
        assert t210060_x7(flag1=flag1, z1=72100303)
    elif GetEventStatus(12907851) == 1:
        """State 2"""
        DebugEvent('ワープ椅子02')
        """State 14"""
        assert t210060_x7(flag1=flag1, z1=72100302)
    else:
        """State 3"""
        DebugEvent('ワープ椅子00')
        """State 12"""
        assert t210060_x7(flag1=flag1, z1=72100300)
    """State 22"""
    return 0

