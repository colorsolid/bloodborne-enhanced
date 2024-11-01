# -*- coding: utf-8 -*-
def t210305_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210305_x8(z1=1000, z2=1001, z3=1009, z4=1003)
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210305_x7()
        assert not IsClientPlayer()

def t210305_x0(z7=99999, z8=99999, z9=99999, z10=99999):
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
    if (CheckSpecificPersonMenuIsOpen(z7, 0) == 1 or CheckSpecificPersonMenuIsOpen(z8, 0) == 1 or CheckSpecificPersonMenuIsOpen(z9,
        0) == 1 or CheckSpecificPersonMenuIsOpen(z10, 0) == 1):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t210305_x1(text5=_, text6=_, z6=_):
    """State 0,2"""
    SetEventState(z6, 1)
    """State 5"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text5, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 0) == 1:
        """State 4"""
        TalkToPlayer(text6, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 3"""
    ReportConversationEndToHavokBehavior()
    """State 6"""
    return 0

def t210305_x2(text3=_, text4=_, z5=_):
    """State 0,5"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text4, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text3, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 4"""
    SetEventState(z5, 1)
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 6"""
    return 0

def t210305_x3(text1=1501800, text2=1501850):
    """State 0,4"""
    DebugEvent('性別判定')
    if ComparePlayerStatus(12, 0, 0) == 1:
        """State 3"""
        TalkToPlayer(text2, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    elif ComparePlayerStatus(12, 0, 1) == 1:
        """State 1"""
        TalkToPlayer(text1, -1, -1)
        assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 2"""
    ReportConversationEndToHavokBehavior()
    """State 5"""
    return 0

def t210305_x4():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

def t210305_x5():
    """State 0,1"""
    DebugEvent('話しかけられた')
    if (GetEventStatus(1020) == 1 or GetEventStatus(1022) == 1 or GetEventStatus(1024) == 1 or GetEventStatus(1026)
        == 1 or GetEventStatus(1027) == 1):
        """State 4"""
        DebugEvent('居眠り')
        if GetEventStatus(1027) == 1:
            """State 9"""
            TalkToPlayer(1501400, -1, -1)
            assert CheckSpecificPersonTalkHasEnded(0) == 1
            """State 12"""
            SetEventState(72100129, 1)
            """State 10"""
            DebugEvent('会話終了通知_寝言3')
            ReportConversationEndToHavokBehavior()
        elif GetEventStatus(1026) == 1:
            """State 6"""
            TalkToPlayer(1500500, -1, -1)
            assert CheckSpecificPersonTalkHasEnded(0) == 1
            """State 11"""
            SetEventState(72100128, 1)
            """State 8"""
            DebugEvent('会話終了通知_寝言2')
            ReportConversationEndToHavokBehavior()
        else:
            """State 3"""
            TalkToPlayer(1500400, -1, -1)
            assert CheckSpecificPersonTalkHasEnded(0) == 1
            """State 5"""
            SetEventState(72100127, 1)
            """State 7"""
            DebugEvent('会話終了通知_寝言1')
            ReportConversationEndToHavokBehavior()
        """State 13"""
        SetEventState(72100134, 0)
    else:
        """State 2"""
        DebugEvent('通常状態')
        if GetEventStatus(1025) == 1 and GetEventStatus(72100125) == 1:
            """State 20,27"""
            assert t210305_x2(text3=1501300, text4=1501300, z5=72100126)
        elif GetEventStatus(1025) == 1:
            """State 19,26"""
            assert t210305_x2(text3=1501200, text4=1501200, z5=72100125)
        elif GetEventStatus(1023) == 1 and GetEventStatus(72100123) == 1:
            """State 18,25"""
            assert t210305_x2(text3=1501100, text4=1501150, z5=72100124)
        elif GetEventStatus(1023) == 1 and GetEventStatus(72100122) == 1:
            """State 17,24"""
            assert t210305_x2(text3=1501000, text4=1501050, z5=72100123)
        elif GetEventStatus(1023) == 1:
            """State 16,23"""
            assert t210305_x2(text3=1500200, text4=1500200, z5=72100122)
        elif GetEventStatus(72100120) == 1:
            """State 14,22"""
            assert t210305_x2(text3=1500100, text4=1500100, z5=72100121)
        else:
            """State 15,21"""
            assert t210305_x2(text3=1500000, text4=1500050, z5=72100120)
    """State 28"""
    return 0

def t210305_x6():
    """State 0,1"""
    assert t210305_x0(z7=99999, z8=99999, z9=99999, z10=99999)
    """State 2"""
    return 0

def t210305_x7():
    """State 0,1"""
    DebugEvent('クライアント待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

def t210305_x8(z1=1000, z2=1001, z3=1009, z4=1003):
    """State 0"""
    if GetEventStatus(1028) == 1 or (GetEventStatus(1029) == 1 and not GetEventStatus(1030)):
        """State 2"""
        t210305_x10()
        Quit()
    elif not GetEventStatus(1030):
        """State 1"""
        t210305_x9()
        Quit()
    """Unused"""
    """State 3"""
    return 0

def t210305_x9():
    """State 0"""
    Label('L0')
    if not GetEventStatus(12100163):
        while True:
            """State 3"""
            call = t210305_x13()
            if call.Done():
                """State 2"""
                DebugEvent('サブステート：通常会話')
                call = t210305_x5()
                if call.Done():
                    pass
                elif GetDistanceToPlayer() > 5:
                    """State 1"""
                    Label('L1')
                    DebugEvent('サブステート：会話範囲外')
                    call = t210305_x6()
                    if call.Done() and GetDistanceToPlayer() < 4.9:
                        pass
                    elif IsAttackedBySomeone() == 1 or GetEventStatus(12100163) == 1:
                        Goto('L3')
                elif IsAttackedBySomeone() == 1 or GetEventStatus(12100163) == 1:
                    Goto('L3')
            elif IsAttackedBySomeone() == 1 or GetEventStatus(12100163) == 1:
                Goto('L3')
            elif GetEventStatus(72100133) == 1 and not GetEventStatus(72100135):
                break
        """State 5"""
        Label('L2')
        call = t210305_x15()
        if call.Done():
            Goto('L0')
        elif IsAttackedBySomeone() == 1 or GetEventStatus(12100163) == 1:
            pass
        elif GetDistanceToPlayer() > 10:
            Goto('L1')
    elif GetEventStatus(72100133) == 1 and not GetEventStatus(72100135) and GetEventStatus(12100163) == 1:
        Goto('L2')
    """State 4"""
    Label('L3')
    call = t210305_x14()
    assert GetDistanceToPlayer() > 5
    Goto('L1')
    """Unused"""
    """State 6"""
    return 0

def t210305_x10():
    """State 0"""
    while True:
        """State 3"""
        call = t210305_x13()
        if call.Done():
            """State 2"""
            DebugEvent('サブステート：通常会話')
            call = t210305_x11()
            if call.Done():
                continue
            elif GetDistanceToPlayer() > 5:
                """State 1"""
                DebugEvent('サブステート：会話範囲外')
                assert t210305_x6()
                continue
            elif IsAttackedBySomeone() == 1:
                pass
        elif IsPlayerAttacking() == 1:
            pass
        """State 4"""
        t210305_x12()
        Quit()
    """Unused"""
    """State 5"""
    return 0

def t210305_x11():
    """State 0,1"""
    DebugEvent('話しかけられた')
    """State 2"""
    DebugEvent('ラストイベント')
    """State 13"""
    assert t210305_x1(text5=1501700, text6=1501750, z6=72100136)
    """State 10"""
    ClearTalkListData()
    """State 9"""
    AddTalkListData(1, 14000250, -1)
    AddTalkListData(2, 14000251, -1)
    """State 5"""
    OpenConversationChoicesMenu()
    def WhilePaused():
        SetTalkTime(0.33)
    if GetTalkListEntryResult() == 1:
        """State 4"""
        DebugEvent('はい')
        """State 14"""
        assert t210305_x3(text1=1501800, text2=1501850)
        """State 8"""
        SetEventState(72100130, 1)
    elif GetTalkListEntryResult() == 2:
        """State 3"""
        DebugEvent('挨拶_汎用')
        """State 7"""
        SetEventState(72100131, 1)
    elif not GetTalkListEntryResult() or not CheckSpecificPersonMenuIsOpen(310, 0):
        """State 11"""
        DebugEvent('挨拶_汎用')
        """State 15"""
        return 0
    """State 12"""
    Quit()
    """Unused"""
    """State 6"""
    TalkToPlayer(1501900, -1, -1)
    Quit()

def t210305_x12():
    """State 0,6"""
    assert t210305_x0(z7=99999, z8=99999, z9=99999, z10=99999)
    """State 1"""
    def ExitPause():
        RemoveMyAggro()
    """State 2"""
    DebugEvent('PC以外に攻撃された')
    """State 5"""
    SetEventState(72100136, 1)
    """State 4"""
    SetEventState(72100131, 1)
    """State 7"""
    return 0
    """Unused"""
    """State 3"""
    TalkToPlayer(1501900, -1, -1)
    Quit()

def t210305_x13():
    """State 0,1"""
    DebugEvent('待機_会話可能判定')
    assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer() and
            not IsPlayerDead() and not IsCharacterDisabled())
    """State 2"""
    assert not GetEventStatus(1029) and not GetEventStatus(1030)
    """State 3"""
    DebugEvent('アクションボタン判定待ち')
    def ExitPause():
        SetTalkTime(0.33)
    assert CheckActionButtonArea(6003)
    """State 4"""
    return 0

def t210305_x14():
    """State 0,1"""
    def ExitPause():
        RemoveMyAggro()
    """State 2"""
    assert t210305_x0(z7=99999, z8=99999, z9=99999, z10=99999)
    """State 3"""
    return 0

def t210305_x15():
    """State 0"""
    assert GetDistanceToPlayer() < 5
    """State 3"""
    assert t210305_x4()
    """State 2"""
    SetEventState(72100134, 1)
    SetEventState(72100135, 1)
    """State 1"""
    if GetEventStatus(1027) == 1:
        """State 6"""
        assert t210305_x1(text5=1501400, text6=1501400, z6=72100129)
    elif GetEventStatus(1026) == 1:
        """State 5"""
        assert t210305_x1(text5=1500500, text6=1500500, z6=72100128)
    else:
        """State 4"""
        assert t210305_x1(text5=1500400, text6=1500400, z6=72100127)
    """State 7"""
    return 0

